import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ProfileService } from './login-page/profile.service';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit {

  @Input() permissionName!:string;

  constructor(private profile:ProfileService, private el:ElementRef,) { }
  
  
  
  ngOnInit(): void {
    if(!this.profile.getPermissions().includes(this.permissionName)){
      this.el.nativeElement.remove();
    }
  }


}
