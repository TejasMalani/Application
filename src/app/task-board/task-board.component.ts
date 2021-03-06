import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {

  constructor(private service: CommonService) { }

  userData: any;
  key = 'testKey';
  toggel = false;
  ngOnInit() {
    this.service.getData(this.key).subscribe((a) => {
      if (a != null) {
        this.userData = a;
      } else {
        this.userData = [];
      }

    });
    this.sortedArray('date');
    //console.log("taskboard", this.userData);
  }
  // Delete Item function
  deleteItem(i) {
    this.service.deleteItem(i);
  }
  // sort data function
  sortedArray(data) {
    this.userData.sort(
      this.service.compareValues(data, !this.toggel ? "asc" : "desc")
    );
    this.toggel = !this.toggel;
  }
}
