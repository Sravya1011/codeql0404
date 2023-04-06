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
  unusedVariable = 'Hello, world!';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(environment.apiUrl + '/users').subscribe((response) => {
      this.users = response;
    });
  }

  getUser(userId: string) {
    this.http.get(environment.apiUrl + '/users/' + userId).subscribe((response) => {
      console.log(response);
    });
  }

  deleteUser(userId: string) {
    this.http.delete(environment.apiUrl + '/users/' + userId).subscribe((response) => {
      console.log('User deleted successfully');
    }, (error) => {
      console.log(error);
    });
  }

  login() {
    let password = '123456';
    this.http.post(environment.apiUrl + '/login', { username: 'user', password: password }).subscribe((response) => {
      console.log(response);
    });
  }
}
