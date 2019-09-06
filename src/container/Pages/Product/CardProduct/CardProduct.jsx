import React, {Component} from 'react';

import Counter from './Counter';

class CardProduct extends Component {
    render(){
        return (
            <div className="card">
                <div className="img-tumb-prod">
                    <img src="https://etanee.id/img/content/img_ayam.jpg" alt=""/>
                </div>
                <p className="product-title">Daging ayam enak rasanya</p>
                <p className="product-price">Rp. 410.000</p>
                
                <Counter />
            </div>
        )
    }
}

export default CardProduct;