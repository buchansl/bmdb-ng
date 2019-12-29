import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { Movie } from 'src/app/model/movie.class';
import { Actor } from 'src/app/model/actor.class';
import { Router } from '@angular/router';
import { ActorService } from 'src/app/service/actor.service';
import { MoviesService } from 'src/app/service/movies.service';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-credit-create',
  templateUrl: './credit-create.component.html',
  styleUrls: ['./credit-create.component.css']
})
export class CreditCreateComponent implements OnInit {
title: string= "Credit Create"
credit: Credit = new Credit();
movies: Movie[]= [];
actors: Actor[]= [];
  constructor(private creditSvc : CreditService,
    private movieSvc: MoviesService,
    private actorSvc: ActorService,
    private router: Router) { }

  ngOnInit() {
    //popular list of movies
    this.movieSvc.list().subscribe(jr => {
      this.movies = jr.data as Movie[];

    });
    // populate list of actors
    this.actorSvc.list().subscribe(jr => {
      this.actors = jr.data as Actor[];

    });
  }
  save(): void {
    this.creditSvc.save(this.credit).subscribe(jresp =>{
     console.log("saved credit...");
      console.log(this.credit);
      this.router.navigateByUrl("/credits/list");

    
});
  }

}
