import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    name: '',
    lastName: '',
    email: '',
    phone: ''
  }

  constructor(private userService: UserService,
    private snack: MatSnackBar) { }

  ngOnInit(): void {

  }

  formSubmit() {
    if (this.user.username === '' || this.user.username === null) {
      alert('Username is required')
      return;
    }

    this.userService.addUser(this.user).subscribe((data) => {
      console.log(data);
      Swal.fire(
        'Saved User',
        'user successfully registered in the system',
        'success'
      )
    }, (error) => {
      console.log(error);
      this.snack.open("A system error has occurred !!", "Accept", {
        duration: 3000,
      });
    })
  }
}
