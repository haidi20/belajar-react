import axios from 'axios';
import {OnlineRoot, RootPath} from './Config';

const Post = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${root ? OnlineRoot : RootPath}/${path}`, data).then((res) => {
            // console.log(res);
            resolve(res);
        }, (err) => {
            reject(err);
        });
    })

    return promise
}

export default Post;