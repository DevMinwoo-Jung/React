import firebase from 'firebase'

class AuthService {
  login(providerName) {
    const authProvide = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;