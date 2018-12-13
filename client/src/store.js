//xu ly voi server tai day
const redux = require('redux');
const axios = require('axios');
var mInitialState = {
    editStatus: false,
    notes: [],
    editObject: {}
}
var addNew = (note) => {
    let test = {};
    axios.post('/api/addnew', {
        title: note.title,
        content: note.content
    }).then((res) => {
        test = res.data;
    });
}

var updateNote = async (note) => {
    return axios.put('/api/updatenote', note);
}

var deleteNote = async (id) => {
    return axios.post('/api/deletenote', {
        _id: id
    });
}

const mReducer = (state = mInitialState, action) => {
    switch (action.type) {
        case "GET_NOTES":
            return { ...state, notes: action.notes }
        case "ADD_NEW":
            addNew(action.newNote);
            return { ...state, notes: [...state.notes, action.newNote ]};
        case "DELETE_NOTE":
            deleteNote(action.noteID);
            let updateNotes = [];
            state.notes.map((value, key) => {
                if (value._id !== action.noteID){
                    return updateNotes.push(value);
                }
                return 0;
            });
            return {...state, notes: updateNotes};
        case "CHANGE_EDIT_STATUS":
            return { ...state, editStatus: !state.editStatus }
        case 'GET_EDIT_OBJECT':
            return { ...state, editObject: action.editObject }
        case 'UPDATE_EDIT_OBJECT':
            updateNote(action.noteEdited);
            var newNotes = [];
            state.notes.map((value, key) => {
                if (value._id === action.noteEdited._id) {
                    return newNotes.push(action.noteEdited);
                } else {
                    return newNotes.push(value);
                }
            })
            return { ...state, editObject: {}, notes: newNotes }
        default:
            return state;
    }
}

let mStore = redux.createStore(mReducer);
mStore.subscribe(() => {
    console.log(mStore.getState());
});
export default mStore;