import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../participant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-participant-add-form',
  templateUrl: './admin-participant-add-form.component.html',
  styleUrls: ['./admin-participant-add-form.component.css']
})
export class AdminParticipantAddFormComponent implements OnInit {

  message:string;
  constructor(private route: ActivatedRoute, private router :Router,private participantService: ParticipantService) { }

  ngOnInit() {
  }
  addParticipant(participantItem) {
    console.log(participantItem);
  
    this.participantService.addParticipant(participantItem);
    this.message="Participant" , participantItem , "ajoute";
    this.router.navigate(['admin/participant/list']);

  }

}
