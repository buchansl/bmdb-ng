import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie.class';
import {Location} from '@angular/common'

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  title: string = "Movie Edit";
  movie: Movie = new Movie();
  id: number = 0;


  constructor(private movieSvc: MoviesService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private loc: Location) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms ['id']);
    this.movieSvc.get( this.id ).subscribe(jresp =>{
      this.movie = jresp.data as Movie;
    });
  }
  save(): void {
    this.movieSvc.save(this.movie).subscribe(jresp =>{
     console.log("edited movie...");
      console.log(this.movie);
      this.router.navigateByUrl("/movies/list");

    
});
  }
  backClicked(){
    this.loc.back();

  }

}
