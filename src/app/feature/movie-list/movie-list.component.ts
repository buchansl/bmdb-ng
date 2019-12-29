import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Movie } from 'src/app/model/movie.class';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
title: string = "Movie-List";
movies: Movie[]=[];
jr: JsonResponse;
  constructor(private movieSvc: MoviesService) { }

  ngOnInit() {
    console.log("Calling movie List....");
    this.movieSvc.list().subscribe(jresp =>{
      this.jr = jresp;
      this.movies = this.jr.data as Movie[];
      console.log(this.movies)
    }
    );
  }  
}


