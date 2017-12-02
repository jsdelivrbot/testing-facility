import React from 'react';

const WelcomeForm = ({ onSubmit, confirmation }) => {
    return (
        <div className='form-body'>
            <div className='row'>
                <div className='col s12'>
                    <ul className='tabs'>
                        <li className='tab col s6'><a className='' href='#login'>Login</a></li>
                        <li className='tab col s6'><a className='active' href='#register'>Register</a></li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <form id='login' className='col s12' onSubmit={e => {
                    e.preventDefault();
                    onSubmit({
                        id: e.target.id,
                        username: username.value,
                        password: password.value
                    })
                }}>
                    <div className='row'>
                        <h4 className='center col s12'>Welcome Back</h4>
                        <div className='input-field col s12'>
                            <input id='username' type='text' className='validate' />
                            <label htmlFor='username'>Username</label>
                        </div>
                        <div className='input-field col s12'>
                            <input id='password' type='text' className='validate' />
                            <label htmlFor='password'>Password</label>
                        </div>
                        <button className='btn waves-effect waves-light btn-flat' type='submit' name='action'>Submit
                            <i className='material-icons right'>send</i>
                        </button>
                    </div>
                </form>
            </div>
            <div className='row'>
                <form id='register' className='col s12'>
                    <div className='row'>
                        <h4 className='center col s12'>Register For Free</h4>
                        <div className='input-field col s6'>
                            <input id='first-name' type='text' className='validate' />
                            <label htmlFor='first-name'>First Name</label>
                        </div>
                        <div className='input-field col s6'>
                            <input id='last-name' type='text' className='validate' />
                            <label htmlFor='last-name'>Last Name</label>
                        </div>
                        <div className='input-field col s6'>
                            <input id='username-register' type='text' className='validate' />
                            <label htmlFor='username-register'>Username</label>
                        </div>
                        <div className='input-field col s6'>
                            <input id='email' type='text' className='validate' />
                            <label htmlFor='email'>Email</label>
                        </div>
                        <div className='input-field col s12'>
                            <input id='password-register' type='text' className='validate' />
                            <label htmlFor='password-register'>Password</label>
                        </div>
                        <div className='input-field col s12'>
                            <input id='confirm-password' type='text' className='validate' />
                            <label htmlFor='confirm-password'>Confirm Password</label>
                        </div>
                        <button className='btn waves-effect waves-light btn-flat' type='submit' name='action'>Submit
                            <i className='material-icons right'>send</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default WelcomeForm;