import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '../../../components/atoms/Buttons';
import {loginUserAPI} from '../../../config/redux/action';

class Login extends Component{

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

    handleLoginSubmit = () => {
        const {email, password} = this.state;
         this.props.loginAPI({email, password});
        
        this.setState({
            email: '',
            password: ''
        })
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Login Page</p>
                    <input className="input" value={this.state.email} name="email" id="email" placeholder="email" type="text" onChange={this.handleChangeText}/>
                    <input className="input" value={this.state.password} name="password" id="password" placeholder="password" type="password" onChange={this.handleChangeText}/>
                    <Button onClick={this.handleLoginSubmit} title="Register" loading={this.props.isLoading}/>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Login);