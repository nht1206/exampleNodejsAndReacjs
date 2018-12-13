import React, { Component } from 'react';
import './App.css';
import HomeTopMenu from './components/HomeTopMenu';
import Home from './components/Home';
import {connect} from 'react-redux';
import Routes from './routers/routes';
import { BrowserRouter as Router } from 'react-router-dom';
//import mStore from './store';
import { getAllNotes } from './actions';
class App extends Component {
  componentWillMount() {
    this.props.getNotes();
  }
  render() {
    return (
        <Router>
            <div className="App">
                <Routes/>
                <HomeTopMenu />
                <Home />
            </div>
        </Router>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNotes: () => {
      dispatch(getAllNotes());
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
  }
}
export default connect(mapStateToProps ,mapDispatchToProps)(App);