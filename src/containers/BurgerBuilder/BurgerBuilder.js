import React, {Component} from 'react';
import Auxt from '../../hoc/Auxt';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    render(){
        return(
            <div>
                <Auxt>
                    <Burger />
                    <div>Build Controls</div>
                </Auxt>
            </div>
        )
    }
}

export default BurgerBuilder;