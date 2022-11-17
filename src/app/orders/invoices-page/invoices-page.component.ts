import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './invoices-page.component.html',
  styleUrls: ['./invoices-page.component.scss']
})
export class InvoicesPageComponent implements OnInit {


  reportPermission:string = 'DownloadInvoiceReport2';

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('componentPermissions', this.activatedRoute.snapshot.data['componentPermissions']);

    const componentsPermissions = this.activatedRoute.snapshot.data['componentPermissions'];

    // sadece development ortamında isek
    if(!environment.production) {
      if(!componentsPermissions.includes(this.reportPermission)){
        throw new Error('permission Name Hatalı!')
      }
    }

    
     
  }

  onReport(){
    alert('downloading...')
  }

}
