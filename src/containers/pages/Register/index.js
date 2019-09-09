import React, {Component} from 'react';
import './Register.scss';
import Button from '../../../components/atoms/Buttons';
import {connect} from 'react-redux';
import { registerUserAPI } from '../../../config/redux/action';

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
        const {email, password} = this.state;
        this.props.registerAPI({email, password}); 
        
        this.setState({
            email: '',
            password: ''
        })
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" value={this.state.email} name="email" id="email" placeholder="email" type="text" onChange={this.handleChangeText}/>
                    <input className="input" value={this.state.password} name="password" id="password" placeholder="password" type="password" onChange={this.handleChangeText}/>
                    <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading}/>
                    {/* <button>Go to dashboard</button> */}
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register);