import React, {Component} from 'react';
import './Register.scss';
import firebase from '../../../config/firebase';

class Register extends Component{
    state = {
        email: '',
        password: '',
    }

    handleChangeText = (e) => {
        // console.log(e.target.name)
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleRegisterSubmit = () => {
        console.log(this.state.email);
        console.log(this.state.password);

        const {email, password} = this.state;
        console.log('data sebelum di kirim', email, password); 

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            console.log(res);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            console.log(errorCode, errorMessage);

        });          
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" name="email" id="email" placeholder="email" type="text" onChange={this.handleChangeText}/>
                    <input className="input" name="password" id="password" placeholder="password" type="password" onChange={this.handleChangeText}/>
                    <button className="btn" onClick={this.handleRegisterSubmit} >register</button>
                    {/* <button>Go to dashboard</button> */}
                </div>
            </div>
        )
    }
}

export default Register;