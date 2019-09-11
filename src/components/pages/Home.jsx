import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

// components
import Team from '../common/Team';
import TimeLines from '../common/TimeLines';
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';


class Home extends Component {
    render(){
        return(
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />

                <Services/>
                <Portfolio/>
                <Team/>
                <TimeLines />
            </div>
        )
    }
}

export default Home;