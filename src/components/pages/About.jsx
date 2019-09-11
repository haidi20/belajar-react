import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/about.jpg';
import TimeLines from '../common/TimeLines';

class About extends Component {
    render(){
        return(
            <div>
                <Header
                    title="About Us"
                    subtitle="It's really a great story"
                    buttonText="Tell me more"
                    showButton={false}
                    image={image}
                />
                
                <TimeLines />
            </div>
        )
    }
}

export default About;