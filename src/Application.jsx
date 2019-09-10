import React, {Component} from 'react';
import HighScore from './HighScore';
import './css/styles.css'

class Application extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            overten: false
        }
    }

    handleClick = () => {
        console.log('click');
        this.setState({count: this.state.count + 1})
    }

    resetCount = () => {
        this.setState({
            count: 0,
            overten: false
        })
    }

    componentDidUpdate(props, state){
        console.log('update from', props, state);

        if(this.state.count > 10 && this.state.count != state.count && !this.state.overten){
            this.setState({
                overten: true
            })
        }
    }

    render() {
        let {count} = this.state
        return (
            <div>
                <h1>You clicked the button {count} times</h1>
                <HighScore 
                    overten={this.state.overten}
                    onReset={this.resetCount}
                />
                
                <span>
                    <button onClick={this.handleClick}>Click Me</button>
                </span>
            </div>
        );
    }
}

export default Application;