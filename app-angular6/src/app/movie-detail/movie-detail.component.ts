import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
	movie = {};
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
  	this.getMovieDetails(this.route.snapshot.params['id']);
  }

  getMovieDetails(id){
  	this.api.getMovie(id).subscribe(data =>
  		{
  			console.log(data);
  			this.movie = data;
  		}
  	);
  }

}
