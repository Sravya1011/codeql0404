import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(environment.apiUrl + '/users').subscribe((response) => {
      this.users = response;
    }, (error) => {
      console.log(error);
    });
  }

  deleteUser(userId: string) {
    this.http.delete(environment.apiUrl + '/users/' + userId).subscribe((response) => {
      console.log('User deleted successfully');
    }, (error) => {
      console.log(error);
    });
  }
}
