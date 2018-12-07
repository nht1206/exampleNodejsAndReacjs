import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';

class Note extends Component {
    isEditClick = () => {
        const { changeEditStatus, getEditObject } = this.props;
        const { editObject } = this.props;
        changeEditStatus();
        getEditObject(editObject);
    }
    isDeleteClick = () => {
        const id = this.props._id;
        const { deleteNote } = this.props;
        deleteNote(id);
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header" role="tab" id={"note" + this.props.id}>
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#noteList" href={"#note"+ this.props.id+"content"} aria-expanded="true" aria-controls={"note" + this.props.id}>
                                {this.props.title}
                            </a>
                        </h5>
                        <i onClick={() => this.isDeleteClick()} className="fas fa-trash-alt"></i>
                        <i onClick={() => this.isEditClick()} className="fas fa-edit"></i>
                    </div>
                    <div id={"note"+ this.props.id+"content"} className="collapse in" role="tabpanel" aria-labelledby={"note" + this.props.id}>
                        <div className="card-body">
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({type: 'CHANGE_EDIT_STATUS'});
        },
        getEditObject: (editObject) => {
            dispatch({type: 'GET_EDIT_OBJECT', editObject});
        },
        deleteNote: (noteID) => {
            dispatch({type: 'DELETE_NOTE', noteID});
        }
    }
}
export default connect(mapStateToProps ,mapDispatchToProps)(Note);
