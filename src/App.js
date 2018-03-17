import React, { Component } from 'react';
import { BrowserRouter as Router , Route }from 'react-router-dom'
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

class App extends Component {

    render() {
        return (
            <Router>
                <div className={"container-fluid"}>
                    <Route exact={true} path={'/'} component={Landing}/>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/signup'} component={SignUp}/>
                </div>
            </Router>
        );
    }
}

export default App;
