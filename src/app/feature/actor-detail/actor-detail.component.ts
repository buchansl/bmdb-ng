import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { Location } from '@angular/common';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  title: string = "Actor Detail";
  actor: Actor = new Actor();
  id: number = 0;

  constructor(private actorSvc: ActorService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private loc: Location) { }

  ngOnInit() {
    //get id from url
    this.route.params.subscribe(parms => this.id = parms['id'])
    // get the actor from the actor service
    this.actorSvc.get(this.id).subscribe(jr =>{
this.actor = jr.data as Actor;
    });
  }
  delete(){
    this.actorSvc.delete(this.id).subscribe( jr =>{
      if ( jr.errors !=null){
        console.log("Error deleting actor:",jr);
      }
      this.router.navigateByUrl("/actors/list")


    });
  }

}
