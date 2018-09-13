import firebase from 'firebase'

const config = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	databaseURL: process.env.REACT_APP_databaseURL,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId:process.env.REACT_APP_messagingSenderId
}
firebase.initializeApp(config)

export function signup(user){
	return firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
}

export function create(message){
	return firebase.database().ref('/messages').push(message)
}