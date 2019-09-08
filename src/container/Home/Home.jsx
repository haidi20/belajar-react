// libraries
import React, {Component, Fragment, createContext} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// pages
import Hooks from '../Pages/Hooks/Hooks';
import Product from '../Pages/Product/Product';
import BlogPost from '../Pages/BlogPost/BlogPost';
import DetailPost from '../Pages/BlogPost/DetailPost/DetailPost';
import LifeCycleComp from '../Pages/LifeCycleComp/LifeCycleComp';
import YoutubeCompPage from '../Pages/YoutubeCompPage/YoutubeCompPage';

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
                        <Link to="/hooks">Hooks</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:id" component={DetailPost}/>
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp}/>
                    <Route path="/youtube" component={YoutubeCompPage}/>
                    <Route path="/hooks" component={Hooks}/>
                </Fragment>
            </Router>
        )
    }
}

export default GlobalProvider(Home);