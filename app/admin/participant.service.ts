import {Injectable} from '@angular/core';
import {Participant} from './Model/participant.model';
import {PARTICIPANTITEMS} from './Model/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
 
 

  message: string;
  participants: Participant[];
  participantItems: Participant;

  constructor() {
  }

  getAllParticipant() {
    return PARTICIPANTITEMS;
  }
 
  addParticipant(participantItems) {
     
    //localStorage.setItem("id",JSON.stringify(PARTICIPANTITEMS.slice(-1)[0].idParticipant));
    //localStorage.numeric=id;
    var id = sessionStorage.getItem("id");
    
    console.log("id =" + id);
    if(PARTICIPANTITEMS.length==0){
      participantItems.idParticipant =  1;
    PARTICIPANTITEMS.push(participantItems);
    }
    else{
    participantItems.idParticipant = PARTICIPANTITEMS.slice(-1)[0].idParticipant + 1;
    PARTICIPANTITEMS.push(participantItems);
    }
  }


  delete(participantItems) {
  
  
    let index;
    index = PARTICIPANTITEMS.indexOf(participantItems);
    console.log(index);
    if (index > -1) {
     
      PARTICIPANTITEMS.splice(index, 1);

    }
   
  }

  getParticipant(id: number) {
   
    return PARTICIPANTITEMS[id - 1];
  }
}
