import React, {Component, useState, useEffect} from 'react';

// class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     // menjalankan perama kali
//     componentDidMount(){
//         document.title = `title Change: ${this.state.count}`
//     }

//     // berjalan ketika ada perubahan
//     componentDidUpdate(){
//         document.title = `title Change: ${this.state.count}`
//     }

//     // ketika component ini tidak di panggil, maka akan berubah
//     componentWillUnmount(){
//         document.title = `Reactjs Hello World`
//     }

//     render(){
//         return (
//             <div>
//                 <p>Nilai saya saat ini adalah : {this.state.count}</p>
//                 <button onClick={this.onUpdate}>update nilai</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `title Change: ${count}`;
        return () => {
            document.title = `Reactjs Hello World`;
        }
    });

    return (
        <div>
            <p>Nilai saya saat ini adalah : {count}</p>
            <button onClick={() => setCount(count + 1)}>update nilai</button>
        </div>
    )
}

export default Hooks;