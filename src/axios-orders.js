import axios from 'axios';
// import app from 'firebase/app';

// const config = {
//     apiKey: "AIzaSyBe1nejHCjT2DlLtd7_097pDw1Y_VqJmr4",
//     authDomain: "react-my-burger-c5452.firebaseapp.com",
//     databaseURL: "https://react-my-burger-c5452.firebaseio.com",
//     projectId: "react-my-burger-c5452",
//     storageBucket: "react-my-burger-c5452.appspot.com",
//     messagingSenderId: "246655524277",
//     appId: "1:246655524277:web:ff98958a5cdaf4cc110dfc"
// };

// const appp = app.initializeApp(config);
// const user = appp.auth();

// const databaseSecret = 'fmIVcHJpjnI62oEUuIlPlsK5on2LUbeHfQ3Mn1ut';

const instance = axios.create({
    baseURL: 'http://react-my-burger-c5452.firebaseio.com/',
    responseType: 'json',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'test',
		'X-Test': 'testing'
	}
});

export default instance;