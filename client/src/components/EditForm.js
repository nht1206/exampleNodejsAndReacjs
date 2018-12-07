import React, { Component } from 'react';
import {connect} from 'react-redux';
//import axios from 'axios';


class EditForm extends Component {
    constructor(props){
        super(props)
        this.state = this.props.editObject;
    }
    isChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    isClick = () => {
        if (this.state._id){
            this.props.editNote(this.state);
        } else {
            this.props.addNote(this.state);
        }
    }
    render() {
        const { editObject } = this.props;
        return (
            <div className="col-4">
                <h3>Sữa nội dung note</h3>
                <form>
                <div className="form-group">
                    <label htmlFor="title">Tiêu đề note</label>
                    <input defaultValue={editObject.title} type="text" onChange={(e) => this.isChange(e)} className="form-control" name="title" id="title" aria-describedby="noteTitle" placeholder="Tiêu đề note" />
                    <small id="noteTitle" className="form-text text-muted">Nhập tiêu đề vào đây</small>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Nội dung note</label>
                    <textarea defaultValue={editObject.content} type="text" onChange={(e) => this.isChange(e)} className="form-control" name="content" id="content" aria-describedby="noteContent" placeholder="Nội dung note"/>
                    <small id="noteContent" className="form-text text-muted">Nhập nội dung vào đây</small>
                </div>
                <input type="reset" onClick={() => this.isClick()} className="btn btn-primary btn-block" value="Save" />
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        notes: state.notes,
        editObject: state.editObject
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNote: (note) => {
            dispatch({type: "ADD_NEW", newNote: note})
        },
        editNote: (note) => {
            dispatch({type: "UPDATE_EDIT_OBJECT", noteEdited: note})
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);