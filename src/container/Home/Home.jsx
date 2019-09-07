// libraries
import React, {Component, Fragment, createContext} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// pages
import Product from '../Pages/Product/Product';
import LifeCycleComp from '../Pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../Pages/BlogPost/BlogPost';
import YoutubeCompPage from '../Pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../Pages/BlogPost/DetailPost/DetailPost';

// styles
import './Home.css';
import GlobalProvider from '../../context/context';

class Home extends Component {
    render(){
        return (
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                        <Link to="/youtube">YouTube</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:id" component={DetailPost}/>
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp}/>
                    <Route path="/youtube" component={YoutubeCompPage}/>
                </Fragment>
            </Router>
        )
    }
}

export default GlobalProvider(Home);