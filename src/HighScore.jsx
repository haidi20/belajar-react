import React, {Component} from 'react';

class HighScore extends Component{
    render(){
        if(this.props.overten){
            return(
                <h3>Beat hight score of 10!

                    <button onClick={this.props.onReset}>Reset</button>
                </h3>
            )
        }else{
            return null
        }
        
    }
}

export default HighScore;