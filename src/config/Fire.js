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

const fire = firebase.initializeApp(firebaseConfig);

export default fire;