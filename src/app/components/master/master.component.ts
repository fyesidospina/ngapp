import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})

export class MasterComponent implements OnInit{
  
  //form : FormGroup;
  title : any;
  master_list: any;

  constructor(private formBuilder : FormBuilder, private servMaster : MasterService ) { 
  }

  ngOnInit(): void {
    this.GetAll()
  }

  Save(f: NgForm){
    
    this.servMaster.create(f.value).subscribe(
      data => {  
        console.log(data)
        console.log("GUARDADO CON EXITO" + data);
        this.GetAll();

      },
      err => {
        console.log(err);
        console.log("NO GUARDO");
      }
    );


  }

  GetAll(){
    try {
      this.servMaster.getMaster().subscribe(
        data => {  
          console.log(data)
          this.master_list = data
        },
        err => {
          console.log(err);
        }
      );
    } catch (error) {
      console.log(error)
    }
  }

  Edit(){

  }

  Delete(){

  }

}
