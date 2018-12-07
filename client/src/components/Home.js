import React, { Component } from 'react';
import Note from './Note';
import EditForm from './EditForm';
//import mStore from '../store';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props){
        super(props)
        this.renderEditForm = this.renderEditForm.bind(this);
    }
    renderEditForm = () => {
        const { editStatus } = this.props;
        if (editStatus){
            return <EditForm></EditForm>
        }
    }     
    render() {
        var { notes } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div id="noteList" role="tablist" aria-multiselectable="true">
                            {
                                notes.map((value, key) => {
                                    return <Note key={key} editObject={value} id={key} _id={value._id} title={value.title} content={value.content}></Note>;
                                })
                            }
                            </div>    
                        </div>
                        {
                            this.renderEditForm()
                        }
                    </div>
                </div>
            </div >
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        notes: state.notes,
        editStatus: state.editStatus
    }
}
export default connect(mapStateToProps)(Home);