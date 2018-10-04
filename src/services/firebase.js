import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

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
const storage=firebase.storage()


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
export function list(collection){
	return database.ref(collection)
}
export function remove(collection, objID){
	return database.ref(collection).child(objID).remove()
}
export function upload(folder, file){
	let filename=new Date()
	return storage.ref().child(folder+"/"+filename).put(file)
}
