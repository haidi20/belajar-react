import React, {Component} from 'react';
import './Register.scss';

class Register extends Component{
    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" placeholder="email" type="text" />
                    <input className="input" placeholder="password" type="password" />
                    <button className="btn">register</button>
                    {/* <button>Go to dashboard</button> */}
                </div>
            </div>
        )
    }
}

export default Register;