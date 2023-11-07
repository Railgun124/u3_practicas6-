import { Injectable } from '@angular/core';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private user: user[]=[];

  constructor() {
    this.user.push({
      name: "Urabe Mikoto",
      email: "urabe@gmail.com",
      password: "1234"
    });
    this.user.push({
      name: "Urabe",
      email: "urabe@gmail.com",
      password: "Railgun124"
    });
    this.user.push({
      name: "Juan Graxiola",
      email: "tonyg@gmail.com",
      password: "Railgun124"
    });
    this.user.push({
      name: "Nakano",
      email: "Nakano@gmail.com",
      password: "Quintidiosas"
    });
   }

   getUser(){
    return this.user;
   }

   getUserByEmail(email: string){
    return this.user.find((user) => user.email === email);
   }

   addUser(user: user){
    this.user.push(user);
   }

   updateUser(user: user){
    const index = this.user.findIndex((u) => u.email === user.email);
    this.user[index] = user;
   }

   deleteUser(email: string){
    const index = this.user.findIndex((u) => u.email === email);
    this.user.splice(index, 1);
   }

   
}
