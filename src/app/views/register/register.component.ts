import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  model: any = {};
  constructor() {
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }
  }
  register() {
    this.loading = true;
    this.userService.create(this.model)
        .subscribe(
            data => {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}
}
