import React, {Component} from 'react';
import Auxt from '../../hoc/Auxt';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{
    state = {
        ingredient: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    }

    render(){
        return(
            <div>
                <Auxt>
                    <Burger 
                        ingredients={this.state.ingredient}
                    />
                    <BuildControls />
                </Auxt>
            </div>
        )
    }
}

export default BurgerBuilder;