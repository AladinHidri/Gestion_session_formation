import {Injectable} from '@angular/core';
import {Formateur} from './Model/formateur.model';
import {FORMATEURITEMS} from './Model/formateur';


@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  message: string;
  formateurs: Formateur[];
  formateurItems: Formateur;

  constructor() {
  }

  get() {
    return FORMATEURITEMS;
  }

  add(formateurItem) {
    
    if(FORMATEURITEMS.length==0){
      formateurItem.idFormateur =  1;
      FORMATEURITEMS.push(formateurItem);
    }

    else{
    formateurItem.idFormateur = FORMATEURITEMS.slice(-1)[0].idFormateur + 1;
    FORMATEURITEMS.push(formateurItem);
  }

  }

  delete(formateurItem) {
    let index;
    index = FORMATEURITEMS.indexOf(formateurItem);
    if (index > -1) {
      FORMATEURITEMS.splice(index, 1);
    }
  }

  getFormateur(id: number) {
    return FORMATEURITEMS[id - 1];
  }

}
