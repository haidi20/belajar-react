import React from 'react';

const post = (props) => {
    return (
        <div className="post">
            <div className="img-tumb">
                <img src="https://placeimg.com/200/150/tech" alt="dummy" />
            </div>
            <div className="content">
                <p className="title">{props.title}</p>
                <div className="desc">{props.desc}</div>
            </div>
        </div>
    )
}

export default post;