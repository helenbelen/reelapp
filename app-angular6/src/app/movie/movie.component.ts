import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
	movies:any;
  displayedColumns = ['thumb'];
  dataSource = new MovieDataSource(this.api);
  constructor(private api: ApiService) { }

  ngOnInit() {
  	this.api.getMovies()
  		.subscribe(res => {
  			console.log(res);
  			this.movies = res;

  		}, err => {
  			console.log(err);
  		});
  }

}

export class MovieDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getMovies();
  }

  disconnect() {

  }
}
