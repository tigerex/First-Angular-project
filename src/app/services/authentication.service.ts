import { Injectable } from '@angular/core';
import { Auth,GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user : any
  // loggedIn : boolean = false;
  isAdmin : boolean = false;
   
  constructor(public auth:Auth) {
    onAuthStateChanged(this.auth, (user)=>{
      this.user = user;
    })
  }

  googleAuthProvider = new GoogleAuthProvider();



  login(){
    signInWithPopup(this.auth, this.googleAuthProvider);
    console.log(this.user);
    // this.loggedIn = true;
  }

  logout(){
    signOut(this.auth)
    console.log(this.user);
    // this.loggedIn = false;
  }


}
