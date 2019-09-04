import React, {Component, Fragment} from 'react';
import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp';

class YoutubeCompPage extends Component{
    render(){
        return(
            <Fragment>
                <p>YouTube Component</p>
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
                <YouTubeComp /> 
            </Fragment>
        )
    }
}

export default YoutubeCompPage;