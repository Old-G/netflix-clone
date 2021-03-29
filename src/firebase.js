import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAi3jB8y3KPsWPbLm-MJvTJdVuuSRc3Kls',
  authDomain: 'netflix-clone-2e036.firebaseapp.com',
  projectId: 'netflix-clone-2e036',
  storageBucket: 'netflix-clone-2e036.appspot.com',
  messagingSenderId: '920294508830',
  appId: '1:920294508830:web:50d2e3e636992d8e74210f',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export { auth }
export default db
