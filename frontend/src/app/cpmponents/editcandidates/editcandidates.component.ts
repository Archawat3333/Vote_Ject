import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-editcandidates',
  templateUrl: './editcandidates.component.html',
  styleUrls: ['./editcandidates.component.css']
})
export class EditcandidatesComponent implements OnInit {
  editcandidatesForm = new FormGroup({
    img: new FormControl('', [Validators.required]),
    Firstname: new FormControl('', [Validators.required]),
    Lastname: new FormControl('', [Validators.required]),
    age2: new FormControl('', [Validators.required, Validators.min(1)]),
    gender: new FormControl(''),
    intro: new FormControl('', [Validators.required])
  })
  constructor( private http:HttpClient , private router:ActivatedRoute) {}

  id!: string ;
  image!:string;
  firstname!: string ;
  lastname!:string;
  age!: number;
  gen!:string;
  describe!: string;

  
  get img() { return this.editcandidatesForm.get('img'); }

  get Firstname() { return this.editcandidatesForm.get('Firstname'); }

  get Lastname() { return this.editcandidatesForm.get('Lastname'); }

  get age2() { return this.editcandidatesForm.get('age2'); }

  get intro() { return this.editcandidatesForm.get('intro'); }

  gender: string[] = ['Male', 'Female', 'Other']


  results: any=[];
  

  ngOnInit(): void {
    this.showCandidateBy()
  }
 

  editCandidate() 
  {
    let bodyData = {
      "image" : this.image,
      "firstname": this.firstname,
      "lastname": this.lastname,
      "age": this.age,
      "gen": this.gen,
      "describe": this.describe,
      
     };

    

    this.http.put("http://localhost:3000/candidate/editCandidate/"+this.router.snapshot.params['id'],bodyData,{responseType:'text'}).subscribe(data => {
      alert("Update Candidate Success!");

     
      
    })
  }

  showCandidateBy() {
    this.http.get<any>('http://localhost:3000/candidate/getCandidateBy/'+this.router.snapshot.params['id']).subscribe(data => {
      this.results = data;
    })

    
  }

}
