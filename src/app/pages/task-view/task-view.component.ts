// task-view.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  tasks: any[] = [];
  lists: any[] = []; // Declare and initialize lists as an empty array

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.get().subscribe((response: any) => {
      this.tasks = response;
    });
  }

  createNewlist(title: string) {
    this.taskService.createList(title).subscribe((response: any) => {
      console.log(response);
      this.taskService.get().subscribe((tasks: any) => {
        this.tasks = tasks;
      });
    });
  }
}
