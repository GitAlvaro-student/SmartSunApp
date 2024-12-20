import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from '../../../models/user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  constructor(
    private toastCtrl:ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCrtl: NavController,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

  // async login(){
  //   await this.showLoading();
  //   this.router.navigate(['/main']);
  //   try{
  //     await this.authService.register(this.userLogin);
  //   } catch(error: any){
  //     error.message = "Erro ao Entrar";
  //     let errormessage = error.message || error.getLocalizedMessage();
  //     this.showToast(errormessage)
      
  //   } finally {
      
  //     this.loading.dismiss();
  //   }
  // }

  async login() {
    await this.showLoading();
    
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(
        this.userLogin.email || '', // Use um valor vazio caso o email seja undefined
        this.userLogin.password || '' // Use um valor vazio caso a senha seja undefined
      );
  
      if (userCredential.user) {
        // Redireciona o usuário para a tela principal
        this.router.navigate(['/main']);
        console.log(this.userLogin.email, this.userLogin.password);
        this.showToast('Login realizado com sucesso!');
      }
    } catch (error: any) {
      const errorMessage = error.message || 'Erro ao realizar login.';
      this.showToast(errorMessage);
    } finally {
      this.loading.dismiss();
    }
  }
  

  async register(){
    await this.showLoading();
    
    try{
      await this.authService.register(this.userRegister);
    } catch(e: any){
      e.message = "Erro ao Cadastrar";
      let errormessage = e.message || e.getLocalizedMessage();
      this.showToast(errormessage)
    } finally {
      this.router.navigate(['/main']);
      this.loading.dismiss();
    }
    
    
    this.loading.dismiss();
  }

  async showToast(message: string){
    const toast = await this.toastCtrl.create({ message, duration: 3000 });
    toast.present();
  }
  
  async showLoading() {
     this.loading = await this.loadingCtrl.create({
      message: "Aguarde, por favor...",

    });
    return this.loading.present();
  }
}
