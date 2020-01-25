import React, {Component} from 'react'

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        console.log('ini error'+error)
        console.log('ini info'+JSON.stringify(info))
        this.setState({hasError: true, errorMessage: error})
    }
    
    render(){
        if(this.state.hasError){
            return <h1>ada kesalahan cuy </h1>
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;