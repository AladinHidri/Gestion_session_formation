import {Component, OnInit} from '@angular/core';
import {ParticipantService} from '../participant.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-participant-edit-form',
  templateUrl: './admin-participant-edit-form.component.html',
  styleUrls: ['./admin-participant-edit-form.component.css']
})
export class AdminParticipantEditFormComponent implements OnInit {

  id;
  private sub: any;
  participant: any;

  constructor(private route: ActivatedRoute, private router: Router, private participantItemService: ParticipantService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });
    console.log('Session ID ' + this.id.toString());
    this.participant = this.participantItemService.getParticipant(this.id);
  }

  editParticipant(participantItem) {
    console.log(participantItem.idParticipant);
    this.router.navigate(['admin/participant/list']);
  }

}
