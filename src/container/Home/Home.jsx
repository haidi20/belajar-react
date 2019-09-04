import React, {Component, Fragment} from 'react';

// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Pages/Product/Product';
import LifeCycleComp from '../Pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../Pages/BlogPost/BlogPost';

import './Home.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
    render(){
        return (
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp}/>
                </Fragment>
            </Router>
        )
    }
}

export default Home;