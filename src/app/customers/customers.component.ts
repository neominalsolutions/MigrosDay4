import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  users:any[] = [];
  users2:any[] = [];

  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    // aslında component yüklendikten sonra api gidip veriyi load ediyor ve bu kod async çalıştığı için sayfa yüklemesi de asenkron oluyor. 
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any) => {

    this.users = res;

    })

    this.users2 = ((this.activatedRoute.snapshot.data) as any).customers;

    console.log('users', ((this.activatedRoute.snapshot.data) as any).customers)

  }

}
