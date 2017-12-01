import React from 'react';

const WelcomeForm = ({ onSubmit }) => {
    return (
        <div>
            <p>Login Form</p>
            <form id='login' onSubmit={e => {
                e.preventDefault();
                onSubmit({
                    id: e.target.id,
                    username: username.value,
                    password: password.value
                })
            }}>
                username: <input type='text' id='username' ref={node => { const username = node }} />
                password <input type='text' id='password' ref={node => { const password = node }} />
                <input type='submit' value='submit' />
            </form>
        </div>
    );
}

export default WelcomeForm;