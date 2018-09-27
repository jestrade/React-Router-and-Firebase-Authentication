import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	databaseURL: process.env.REACT_APP_databaseURL,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId:process.env.REACT_APP_messagingSenderId
}
firebase.initializeApp(config)
const authentication=firebase.auth()
const database=firebase.database()


export function signout(){
	return authentication.signOut()
}
export function signin(user){
	return authentication.signInWithEmailAndPassword(user.email,user.password)
}
export function signup(user){
	return authentication.createUserWithEmailAndPassword(user.email,user.password)
}
export function passwordRecovery(user){
	return authentication.sendPasswordResetEmail(user.email)
}
export let isAuth = new Promise((resolve,reject)=>{
	authentication.onAuthStateChanged(user=>{
		if(user!=null)
			resolve(user)
		else
			reject("User not authenticated")
	})
})


export function create(collection,obj){
	return database.ref(collection).push(obj)
}
