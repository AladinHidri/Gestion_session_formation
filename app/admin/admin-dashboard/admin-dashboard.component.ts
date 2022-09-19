import {Component, OnInit} from '@angular/core';
import {FakesessionitemService} from '../fakesessionitem.service';
import {FormateurService} from '../formateur.service';
import {ParticipantService} from '../participant.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  sessionItems;
  formateurItems;
  participantItems;
  sessiontracingTable = [];
  sessiontracing = {
    MEAN: 0,
    Ionic: 0,
    NodeJS: 0,
    Angular: 0,
    Symphony: 0,
    Laravel: 0,
    Swift: 0,
    Xamarin: 0,
    Android: 0
  };

  constructor(private sessionItemService: FakesessionitemService,
              private formateurService : FormateurService,
              private participantService : ParticipantService) {
  }

  ngOnInit(): void {

    this.sessionItems = this.sessionItemService.get();
    this.formateurItems = this.formateurService.get();
    this.participantItems = this.participantService.getAllParticipant();

    this.sessionItems.forEach(function (session, key) {
      this.sessiontracing[session.track]++;
    }.bind(this));

    let trackName = "";
    for (let key in this.sessiontracing) {
      if (key == "MEAN") {
        trackName = "MEAN Stack";
      } else {
        trackName = key;
      }
      this.sessiontracingTable.push({track_name: trackName, track_session: this.sessiontracing[key]});
    }
  }


}
