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

export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component {
    state = {
        totalOrder: 5
    }

    dispatch = (action) => {
       if(action.type === 'PLUS_ORDER'){
           return this.setState({
               totalOrder: this.state.totalOrder + 1
           })
       }
       if(action.type === 'MINUS_ORDER'){
            return this.setState({
                totalOrder: this.state.totalOrder - 1
            })
       } 
    }

    render(){
        return (
            <Router>
                <Provider value={
                    {
                        state: this.state,
                        dispatch: this.dispatch
                    }
                    }>
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
                </Provider>
            </Router>
        )
    }
}

export default Home;