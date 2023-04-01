import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  User={
    Name:'',Designation:'',Location:'',Salary:''
  }
  display(){
    alert(`Data of employee: ${this.User.Name} added`)
  }
  }

 



