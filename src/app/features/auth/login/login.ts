import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  async onLogin() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Preencha todos os campos.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    try {
      await this.authService.loginWithEmail(this.email, this.password);
      this.router.navigate(['/']); // Redireciona para a Home após sucesso
    } catch (error: any) {
      this.errorMessage = 'E-mail ou senha incorretos.';
    } finally {
      this.isLoading = false;
    }
  }

  async onGoogleLogin() {
    this.isLoading = true;
    this.errorMessage = '';

    try {
      await this.authService.loginWithGoogle();
      this.router.navigate(['/']);
    } catch (error: any) {
      this.errorMessage = 'Erro ao autenticar com o Google.';
    } finally {
      this.isLoading = false;
    }
  }
}