import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user = {
    username: '',
    password: '',
  }

  constructor(private snack: MatSnackBar,
    private loginService: LoginService) { }

  ngOnInit(): void {

  }

  formSubmit() {
    if (this.user.username.trim() == '' || this.user.username.trim() == null) {
      this.snack.open('Username required', 'Accept', {
        duration: 3000,
      })
      return;
    }

    if (this.user.password.trim() == '' || this.user.password.trim() == null) {
      this.snack.open('Password required', 'Accept', {
        duration: 3000,
      })
      return;
    }

    this.loginService.generateToken(this.user).subscribe((response: any) => {
      this.loginService.loginUser(response?.token);
      this.loginService.getCurrentUser().subscribe((response) => {
        console.log(response);
      })
    }, (error) => {
      console.log(error);
    })
  }
}
