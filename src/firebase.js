import { initializeApp} from 'firebase'

const app = initializeApp({
   
    apiKey: "AIzaSyCPu_KjeMD13qNHRhiAgnD3i_GJ6vl6Zcc",
    authDomain: "vue-firebase-crud.firebaseapp.com",
    databaseURL: "https://vue-firebase-crud.firebaseio.com",
    projectId: "vue-firebase-crud",
    storageBucket: "",
    messagingSenderId: "336793322087"
  
})

export const db = app.database()
export const namesRef = db.ref('names')
