import { ADD_NEW, GET_NOTES, DELETE_NOTE, CHANGE_EDIT_STATUS, GET_EDIT_OBJECT, UPDATE_EDIT_OBJECT } from './types';
import axios from 'axios';

export const getNotes = (data) => {
    return {
        type: GET_NOTES,
        payload: {
            notes: data
        }
    }
}

export const getAllNotes = () => {
    return (dispatch) => {
        axios.post('/api/getnotes').then((res) => dispatch(getNotes(res.data)));
    }
}

export const addNewSuccess = (data) => {
    return {
        type: ADD_NEW,
        payload: {
            newNote: data
        }
    }
}
export const addNew = (data) => {
    return (dispatch) => {
        axios.post('/api/addnew', {
            title: data.title,
            content: data.content
        }).then((res) => dispatch(addNewSuccess(res.data)));
    }
}

export const deleteNoteSuccess = (id) => {
    return {
        type: DELETE_NOTE,
        payload: {
            id
        }
    }
}

export const deleteNote = (id) => {
    return (dispatch) => {
        axios.post('/api/deletenote', {
            _id: id
        });
        dispatch(deleteNoteSuccess(id));
    }
}

export const changeEditStatus = () => {
    return {
        type: CHANGE_EDIT_STATUS
    }
}

export const updateNotesSuccess = (note) => {
    return {
        type: UPDATE_EDIT_OBJECT,
        payload: {
            noteIsEdited: note
        }
    }
}

export const updateNotes = (note) => {
    return (dispatch) => {
        axios.put('/api/updatenote', note);
        dispatch(updateNotesSuccess(note));
    }
}

export const getEditObject = (note) => {
    return {
        type: GET_EDIT_OBJECT,
        payload: {
            editObject: note
        }
    }
}
