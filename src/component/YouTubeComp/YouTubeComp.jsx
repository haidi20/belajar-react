import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                {/* <img src="https://www.youtube.com/watch?v=CZKcmzNs5Jw&list=PLU4DS8KR-LJ03qEsHn9zV4qdhcWtusBqb&index=6" alt=""/> */}
                <img src="https://img.youtube.com/vi/CZKcmzNs5Jw/default.jpg" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time: "0.00",
    title: 'title null',
    desc: 'tidak ada penjelasan'
}

export default YouTubeComp;