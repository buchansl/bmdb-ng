import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent extends BaseComponent implements OnInit {

  title: string = "Actor-List";
  actors: Actor[]=[];
  jr: JsonResponse;
  actor: Actor[];

    constructor(private actorSvc: ActorService) {
      super();
    }
  
    ngOnInit() {
      super.ngOnInit();
      console.log("Calling actor List....");
      this.actorSvc.list().subscribe(jresp =>{
        this.jr = jresp;
        this.actors = this.jr.data as Actor[];
        console.log(this.actors)
      }
        
        )
    }

}
