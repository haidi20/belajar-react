import React, {Component} from 'react';
import Auxt from '../../hoc/Auxt';

class BurgerBuilder extends Component{
    render(){
        return(
            <div>
                <Auxt>
                    <div>Burger</div>
                    <div>Build Controls</div>
                </Auxt>
            </div>
        )
    }
}

export default BurgerBuilder;