import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import { config } from './config'

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore()
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.auth.signOut()
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
      displayName: name
    })
  }

  addQuote(quote) {
    if (!this.auth.currentUser) {
      return alert('Not authorized')
    }

    return this.db
      .doc(`react-hooks-firebase/${this.auth.currentUser.uid}`)
      .set({
        quote
      })
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName
  }

  async getCurrentUserQuote() {
    const quote = await this.db
      .doc(`react-hooks-firebase/${this.auth.currentUser.uid}`)
      .get()
    return quote.get('quote')
  }
}

export default new Firebase()
