import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: any;
  productForm: FormGroup;

  constructor(private usuarioService: UsuarioService,
    private toastController: ToastController,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.productForm = this.formBuilder.group({
        email: ['', Validators.required], // Campo de correo electrónico
        contrasena: ['', Validators.required] // Campo de contraseña
      });
   }

  ngOnInit() {
  }

  async iniciarSesion(loginForm:FormGroup){
    this.user = this.usuarioService.getUserByEmail(loginForm.value.email);
    if (loginForm.valid) {
      if(this.user.password === loginForm.value.contrasena){
        this.router.navigate(['/tabs/tab1']);
      }else{
        const toast = await this.toastController.create({
          message: 'Credenciales no validas',
          duration: 2000,
          position: 'top'
        });
        toast.present();
        this.router.navigate(['/login']);
      }
    }
    
  }

}
