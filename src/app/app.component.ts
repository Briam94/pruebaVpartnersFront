import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonModel } from './models/person.model';
import { UserModel } from './models/user.model';
import { PersonService } from './services/person/person.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test1';

  formLogin: FormGroup;
  formRegister: FormGroup;
  regist: boolean = false;

  constructor(
    private userService: UserService,
    private personService: PersonService
  ) {
    this.formLogin = new FormGroup({
      user: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    });
    this.formRegister = new FormGroup({
      user: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
      names: new FormControl('', Validators.required),
      lastNames: new FormControl('', Validators.required),
      idNumber: new FormControl('', Validators.required),
      idType: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  login() {
    const user: UserModel = {
      user: this.formLogin.controls['user'].value,
      password: this.formLogin.controls['pass'].value
    };
    this.userService.login(user).subscribe(data => {
      if(data) {
        window.alert(data);
      }
    });
  }

  register() {
    const person: PersonModel = {
      lastNames: this.formRegister.controls['lastNames'].value,
      names: this.formRegister.controls['names'].value,
      email: this.formRegister.controls['email'].value,
      idNumber: this.formRegister.controls['idNumber'].value,
      idTipe: this.formRegister.controls['idType'].value
    };
    this.personService.addPerson(person).subscribe(data => {
      if(data) {
        window.alert(data);
      }
    });
    const user: UserModel = {
      user: this.formRegister.controls['user'].value,
      password: this.formRegister.controls['pass'].value
    };
    this.userService.addUser(user).subscribe(data => {
      if(data) {
        window.alert(data);
      }
    });
  }

  cancelRegister() {
    this.regist = false;
    this.formRegister.reset();
  }
}
