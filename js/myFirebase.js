// Initialize Firebase
var config = {
    apiKey: "AIzaSyCwSoVs3MRzGuevvD7ETQAN6nZ3643OKPQ",
    authDomain: "classics-franchise-web.firebaseapp.com",
    databaseURL: "https://classics-franchise-web.firebaseio.com",
    projectId: "classics-franchise-web",
    storageBucket: "classics-franchise-web.appspot.com",
    messagingSenderId: "880589943801"
};
firebase.initializeApp(config);

firebase.auth().signInAnonymously().catch(function (error) {
    console.error(error);
});






