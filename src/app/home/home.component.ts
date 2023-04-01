import { Component, OnInit } from '@angular/core';
import { DataService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEmployees().subscribe((data: any) => {
      this.employees = data;
    });
  }

}
