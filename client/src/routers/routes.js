import React, { Component } from 'react';
import Home from '../components/Home';
import { BrowserRouter as  Route } from 'react-router-dom';
class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
            </div>
        );
    }
}
export default Routes;
