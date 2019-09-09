import firebase from '../../firebase';

export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({type: 'CHANGE_USER', value: 'haidi'});
    }, 2000);
}

export const registerUserAPI = (data) => (dispatch) => {
    return(
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then(res => {
            console.log(res);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            console.log(errorCode, errorMessage);

        }) 
    )
}

export const loginUserAPI = (data) => (dispatch) => {
    new Promise((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING', value: true});
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(res => {
            console.log(res);
            dispatch({type: 'CHANGE_LOADING', value: false});
            dispatch({type: 'CHANGE_ISLOGIN', value: true});

            const dataUser = {
                email: res.user.email,
                uid: res.user.uid,
                emailVerified: res.user.verified
            }

            dispatch({type: 'CHANGE_USER', value: dataUser});
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            console.log(errorCode, errorMessage);
            dispatch({type: 'CHANGE_LOADING', value: false});
            dispatch({type: 'CHANGE_ISLOGIN', value: false});

        }) 
    })
    
}