import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MoviesService } from 'src/app/service/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  title: string = "Movie Detail";
  movie: Movie = new Movie();
  id: number = 0;

  constructor(private movieSvc: MoviesService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private loc: Location) { }

  ngOnInit() {
    //get id from url
    this.route.params.subscribe(parms => this.id = parms['id'])
    // get the movie from the movie service
    this.movieSvc.get(this.id).subscribe(jr =>{
this.movie = jr.data as Movie;
    });
  }
  delete(){
    this.movieSvc.delete(this.id).subscribe( jr =>{
      if ( jr.errors !=null){
        console.log("Error deleting movie:",jr);
      }
      this.router.navigateByUrl("/movies/list")


    });
  }

}
