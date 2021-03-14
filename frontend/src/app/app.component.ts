import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  dynos: any;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:5000/api/dynos').subscribe({
      next: data => {
        this.dynos = data;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }

}
