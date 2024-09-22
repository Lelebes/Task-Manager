import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup | undefined;
  editing: boolean = false;
  taskId: number | undefined;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
    });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.editing = true;
        this.taskId = +params['id'];
        this.loadTask(this.taskId);
      }
    });
  }

  loadTask(id: number) {
    if (this.taskForm) {
      this.taskService.getTaskById(id).subscribe((task) => {
        this.taskForm.patchValue(task);
      });
    }
  }

  onSubmit() {
    if (this.editing) {
      this.taskService
        .updateTask(this.taskId, this.taskForm.value)
        .subscribe(() => {
          this.router.navigate(['/tasks']);
        });
    } else {
      this.taskService.addTask(this.taskForm.value).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }
}
