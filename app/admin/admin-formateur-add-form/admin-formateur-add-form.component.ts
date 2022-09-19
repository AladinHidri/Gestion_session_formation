import { Component, OnInit } from '@angular/core';

import { FormateurService } from '../formateur.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-admin-formateur-add-form',
  templateUrl: './admin-formateur-add-form.component.html',
  styleUrls: ['./admin-formateur-add-form.component.css']
})
export class AdminFormateurAddFormComponent implements OnInit {

  message:string;
  constructor(private route: ActivatedRoute, private router : Router, private formateurService: FormateurService) { }

  ngOnInit() {
  }
  addSession(formateurItem) {
    console.log(formateurItem);
    this.formateurService.add(formateurItem);
    this.message="Formateur" , formateurItem , "ajoute";
    this.router.navigate(['admin/formateur/list']);

  }
}
