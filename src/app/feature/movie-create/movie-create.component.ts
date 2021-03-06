import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MoviesService } from 'src/app/service/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  title: string = 'Movie Create';
  movie: Movie= new Movie();


  constructor(private movieSvc: MoviesService, private router: Router) { }

  ngOnInit() {
    
  }
  save(): void {
    this.movieSvc.save(this.movie).subscribe(jresp =>{
     console.log("saved movie...");
      console.log(this.movie);
      this.router.navigateByUrl("/movies/list");

    
});
  }
}



