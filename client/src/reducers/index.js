import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
const redux = require('redux');
var mInitialState = {
    editStatus: false,
    notes: [],
    editObject: {}
}
const mReducer = (state = mInitialState, action) => {
    switch (action.type) {
        case "GET_NOTES":
            return { ...state, notes: action.payload.notes }
        case "ADD_NEW":
            return { ...state, notes: [...state.notes, action.payload.newNote ]};
        case "DELETE_NOTE":
            let updateNotes = [];
            state.notes.map((value, key) => {
                if (value._id !== action.payload.id){
                    return updateNotes.push(value);
                }
                return 0;
            });
            return {...state, notes: updateNotes};
        case "CHANGE_EDIT_STATUS":
            return { ...state, editStatus: !state.editStatus }
        case 'GET_EDIT_OBJECT':
            return { ...state, editObject: action.payload.editObject }
        case 'UPDATE_EDIT_OBJECT':
            var newNotes = [];
            state.notes.map((value, key) => {
                if (value._id === action.payload.noteIsEdited._id) {
                    return newNotes.push(action.payload.noteIsEdited);
                } else {
                    return newNotes.push(value);
                }
            })
            return { ...state, editObject: {}, notes: newNotes }
        default:
            return state;
    }
}
let mStore = redux.createStore(mReducer, applyMiddleware(thunk));
// mStore.subscribe(() => {
//     console.log(mStore.getState());
// });
export default mStore;