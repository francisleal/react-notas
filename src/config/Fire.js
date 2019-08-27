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

export const database = firebase.database();

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

export const salvar = (id, titulo, url) => {

    const userId = firebase.auth().currentUser.uid;

    firebase.database().ref(`${userId}/${id}`).set({
        titulo: titulo,
        url: url
    }, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('saved successfully!');
        }
    });
}

export const getLinks = () => {

    var userId = firebase.auth().currentUser.uid;

    firebase.database().ref(userId).once('value', (data) => {
        console.log(data.toJSON())
    })
}


// export default fire;