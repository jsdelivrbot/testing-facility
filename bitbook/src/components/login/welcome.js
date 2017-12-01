import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import { IPSUM } from '../../constants';
import Login from './login';
import Register from './register';

export default class Welcome extends Component {

    render() {
        return (
            <div className="col s6">
                <h1> Welcome to BitBook </h1>
                <p> {IPSUM} </p>
            </div>
            <div className='col s6'>
                <div class="row">
                    <div class="col s12">
                        <ul class="tabs">
                            <li className="tab col s3"><Link to='/login' className='active'>Login</Link></li>
                            <li className="tab col s3"><Link to='/register' >Register</Link></li>
                        </ul>
                    </div>
                    <div className="col s12">
                        <Switch>
                            <Redirect exact from='/' to='/login' />
                            <Route path='/login' component={Login} />
                            <Route path='/register' component={Register} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
};