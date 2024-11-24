import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from '../../../models/user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
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

  async login(){
    await this.showLoading();
    try{
      await this.authService.register(this.userRegister);

      this.navCrtl.navigateRoot("main");
    } catch(error: any){
      error.message = "Erro ao Entrar";
      let errormessage = error.message || error.getLocalizedMessage();
      this.showToast(errormessage)
      
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
      this.router.navigate(['/login']);
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

  formValidation(){
    if(!this.userLogin.email){
      this.showToast('Digite um Email');
      return false;
    }

    if(!this.userLogin.password){
      this.showToast('Digite uma Senha');
      return false;
    }
    return false;
  }
}
