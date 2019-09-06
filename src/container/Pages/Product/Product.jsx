import React, {Component, Fragment} from 'react';
import './Product.css';
import CardProduct from './CardProduct/CardProduct';
import {connect} from 'react-redux';
import {RootContext} from '../../Home/Home';

class Product extends Component {
    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     });
    // }

    render(){
        return (
            <RootContext.Consumer>
                {
                    value => {
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
                                        <div className="count">{value.state.totalOrder}</div>
                                    </div>
                                </div>
                                <CardProduct />
                            </Fragment>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default Product;