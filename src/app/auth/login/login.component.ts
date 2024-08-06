import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  user = { username: '', password: '' };

  onLogin() {
    this.authService.login(this.user.username, this.user.password).subscribe((res) => {
        this.router.navigate(['/company-record']);
      },
      (err) => {
        console.log(err);
      });

  }

}
