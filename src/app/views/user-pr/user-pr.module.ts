import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPrRoutingModule } from './user-pr-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserPrRoutingModule
  ]
})
export class UserPrModule { }
