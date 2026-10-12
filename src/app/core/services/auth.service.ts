import { Injectable, inject } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  Auth
} from 'firebase/auth';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth;

  constructor() {
    const app = initializeApp(environment.firebaseConfig);
    this.auth = getAuth(app);
  }

  // Login / Cadastro com Google Popup
  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' }); // Força a janela com as contas do PC
    return await signInWithPopup(this.auth, provider);
  }

  // Login Manual (E-mail e Senha)
  async loginWithEmail(email: string, pass: string) {
    return await signInWithEmailAndPassword(this.auth, email, pass);
  }

  // Cadastro Manual (E-mail e Senha)
  async registerWithEmail(email: string, pass: string) {
    return await createUserWithEmailAndPassword(this.auth, email, pass);
  }

  // Logout
  async logout() {
    return await signOut(this.auth);
  }
}