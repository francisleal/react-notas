import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBCMrdo2mbFgDzLno9QYshUDB9HZqcI5lI",
    authDomain: "reactnotasapi.firebaseapp.com",
    databaseURL: "https://reactnotasapi.firebaseio.com",
    projectId: "reactnotasapi",
    storageBucket: "",
    messagingSenderId: "906437896176",
    appId: "1:906437896176:web:b0f9c32b7964af99"
};

export const fire = firebase.initializeApp(firebaseConfig);

export const loginFirebase = (email, senha) => {
    console.log(`logar - email ${email} - senha ${senha}`);
    firebase.auth().signInWithEmailAndPassword(email, senha).catch((error) => {
        console.log(error);
    });
}

export const criarNovaContaFirebase = (email, senha) => {
    console.log(`criar nova conta - email ${email} - senha ${senha}`);

    firebase.auth().createUserWithEmailAndPassword(email, senha).catch(function (error) {
        console.log(error.code);
        console.log(error.message);
    });
}

// export default fire;