import React, {Component} from 'react';
import {connect} from 'react-redux';
import actionType from '../../../../redux/reducer/globalActionType';

class Counter extends Component {
    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue)
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     });

        
    // }
    
    // handleMinus = () => {
    //     if(this.state.order > 0){
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order);
    //         });
    //     }
    // }

    render(){
        // console.log(this.props);
        return(
            <div className="counter">
                <button className="minus" onClick={this.props.handleMinus}>-</button>
                <input type="text" value={this.props.order}/>
                <button className="plus" onClick={this.props.handlePlus}>+</button>
            </div>
        )
    }
}

// menggunakan REDUX
// state
const mapStateToProps = (state) => {
    return {
        order: state.totalOrder,
    }
}

// dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: actionType.PLUS_ORDER}),
        handleMinus: () => dispatch({type: actionType.MINUS_ORDER})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);