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

export const firebaseDatabase = firebase.database();

export const firebaseUsuario = firebase.auth();

export const loginFirebase = (email, senha) => {

    firebaseUsuario
        .signInWithEmailAndPassword(email, senha)
        .catch((error) => {
            console.log(error);
        });
}

export const criarNovaContaFirebase = (email, senha) => {

    firebaseUsuario
        .createUserWithEmailAndPassword(email, senha)
        .catch(function (error) {
            console.log(error.code);
            console.log(error.message);
        });
}

export const salvarLinksFirebase = (id, titulo, url, icon) => {

    firebaseDatabase
        .ref(`${firebaseUsuario.currentUser.uid}/${id}`)
        .set({ id, titulo, url, icon }
            , error => {
                if (error) {
                    console.log('error', error);
                } else {
                    console.log('saved successfully!');
                }
            }
        );
}

export const removerLinkFirebase = (id) => {
    firebaseDatabase
        .ref(`${firebaseUsuario.currentUser.uid}/${id}`)
        .remove()
}

// export const getLinks = () => {
//     firebaseDatabase.ref(firebaseUsuario.currentUser.uid).on('value', (data) => {
//         console.log(data.toJSON());
//     });
// }