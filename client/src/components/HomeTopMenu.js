import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeTopMenu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light mb-4" style={{ backgroundColor: '#e3f2fd' }}>
                    <a className="navbar-brand" href="/">My Notes</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => this.props.changeEditStatus()} className="nav-link" >Add New Note</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({type: 'CHANGE_EDIT_STATUS'});
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeTopMenu);