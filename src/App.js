import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom'

import Login from './pages/login'
const HomePage = lazy(() => import('./pages/home'));
// import HomePage from './pages/home'

const BasicRoute = () => {
   return ( <Router>
        {/* <div>
            <Link to="/home"></Link>
            <Link to="/login"></Link>
            <Link to="/person"></Link>
            <Link to="/detail"></Link>
        </div> */}
        <div>
            {/* <Route exact path="/" render={() => <Redirect to="/login" />} /> */}
            <Route path="/login" component={Login} />
            <Route path="/home" component={HomePage} />
        </div>

    </Router>
   )
}

export default BasicRoute