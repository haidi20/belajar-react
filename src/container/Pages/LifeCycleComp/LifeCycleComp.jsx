import React, {Component, Fragment} from 'react';
import './LifeCycleComp.css';

class LifeCycleComp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor');
    }
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFormProps');

        return null;
    }
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(() => {
            this.setState({
                count: 2
            })
        }, 3000)
        
    }
    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate');
        // console.log('next props', nextProps);
        console.log('next state', nextState);
        console.log('this. state', this.state);
        console.groupEnd();
        if(nextState.count >= 4){
            return false;
        }
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');

        return true;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    
    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        console.log('render');
        return(
            <Fragment>
                <p>Halaman LifeCycle</p>
                <hr/>
                <button className="btn" onClick={this.changeCount}>Component button {this.state.count}</button>
            </Fragment>
        )
    }
}

export default LifeCycleComp;