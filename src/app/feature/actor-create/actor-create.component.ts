import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';

@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {
  title: string = 'Actor Create';
  actor: Actor = new Actor();
  id: number =0;

  constructor(private actorSvc: ActorService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    
  }
  save(): void {
    this.actorSvc.save(this.actor).subscribe(jresp =>{
     console.log("saved actor...");
      console.log(this.actor);
      this.router.navigateByUrl("/actors/list");

    
});
  }
}
