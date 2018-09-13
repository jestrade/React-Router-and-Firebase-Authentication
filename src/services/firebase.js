import firebase from 'firebase'

const config = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: ""
}
firebase.initializeApp(config)


export function create(message){
	return firebase.database().ref('/messages').push(message)
}