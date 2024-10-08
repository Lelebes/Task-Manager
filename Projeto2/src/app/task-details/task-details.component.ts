import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  public get taskService(): TaskService {
    return this.taskService;
  }
  public set taskService(value: TaskService) {
    this.taskService = value;
  }
  task: any | undefined;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getTask();
  }
  getTask(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskService.getTasks().subscribe((task) => (this.task = task));
    }
  }
}
