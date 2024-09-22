import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service'; // Servico para consumir dados da API

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks = [{ name: 'Task 1' }, { name: 'Task 2' }, { name: 'Task 3' }];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  completeTask(taskId: number) {
    // Aqui, marcar a tarefa como completa
  }

  deleteTask(taskId: number) {
    // Aqui, deletar a tarefa da lista
  }
}
