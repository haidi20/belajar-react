import React from 'react';

const styleTitle = {
//     cursor: 'pointer',
};

const post = (props) => {
    return (
        <div className="post">
            <div className="img-tumb">
                <img src="https://placeimg.com/200/150/nature" alt="dummy" />
            </div>
            <div className="content">
                <p className="title" style={styleTitle} onClick={ () => props.goDetail(props.data.id)}>{props.data.title}</p>
                <div className="desc">{props.data.body}</div>
                <button className="update" onClick={() => props.update(props.data)}>update</button>
                <button className="remove" onClick={() => props.remove(props.data.id)}>remove</button>
            </div>
        </div>
    )
}

export default post;