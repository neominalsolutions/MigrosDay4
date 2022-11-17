import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionDirective } from '../permission.directive';


// Bu tekniğe Feature Module tekniği diyoruz.

@NgModule({
  declarations: [
    PermissionDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[PermissionDirective]
})
export class SharedModule { }
