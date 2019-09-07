import React, {Component, Fragment} from 'react';
import './Product.css';
import CardProduct from './CardProduct/CardProduct';
import {connect} from 'react-redux';
import { GlobalConsumer } from '../../../context/context';

class Product extends Component {

    render(){
        return (
            <Fragment>
                <p>Halaman Product</p>
                <hr/>
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://www.iconsdb.com/icons/preview/green/shopping-cart-xxl.png" alt=""/>
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                <CardProduct />
            </Fragment>
        )
    }
}

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);