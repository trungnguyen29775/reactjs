import React from 'react';
import './style/sign.screen.css';

function SignScreen()
{
    return(
        <div className="sign-base">
            <div className='sign-container'>
                <div className='login-container'>
                    <div className='login-header'>Login</div>
                    <div className='login-form'>
                        <input className='login-form__username' type='text' placeholder='User name'> </input>
                        <input className='login-form__password' type='password' placeholder='Password'> </input>
                        <a href=" " className="login-form__forgot-password">Forgot password?</a>
                        <button className="login-form__button">Login</button>
                    </div>
                </div>
                <div className='register-container'>
                    <div className='register-header'>Register</div>
                    <div className='register-form'>
                        <input className='register-form__username' type='text' placeholder='User name'> </input>
                        <input className='register-form__password' type='password' placeholder='User password'> </input>
                        <input className='register-form__re-password' type='password'
                               placeholder='Re type password'> </input>
                    </div>
                    <div className='register-footer'>
                        Sign up
                    </div>
                </div>
            </div>
        </div>

    );
}
export default SignScreen;