import React, {Component, Fragment} from 'react';

// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
    state = {
        showComponent: true
    }
    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 5000)
       
    }
    render(){
        return (
            <Router>
                <div>
                    {/* <p>YouTube Component</p>
                    <hr/>
                    <YouTubeComp 
                        time="7.12" 
                        title="react pertama"
                        desc="masih mudah"/>
                    <YouTubeComp 
                        time="8.02" 
                        title="react tengah"
                        desc="lumayan susah"/>
                    <YouTubeComp 
                        time="5.04" 
                        title="react hampir selesai"
                        desc="susah sekali"/>
                    <YouTubeComp 
                        time="4.12" 
                        title="react selesai"
                        desc="akhirnya bisa"/>
                    <YouTubeComp /> */}

                    {/* <p>Counter</p>
                    <hr/>
                    <Product/> */}

                    {/* <p>LifeCycle Component</p>
                    <hr/>
                    {
                        this.state.showComponent ? <LifeCycleComp /> : null
                    } */}

                    {/* <p>Blog Post</p>
                    <hr/>

                    <BlogPost /> */}
                </div>
                <Fragment>
                    <div>
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