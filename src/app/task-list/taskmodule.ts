import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { TaskListComponent } from './task-list.component';

@NgModule({
  declarations: [TaskListComponent],
  imports: [CommonModule, MatListModule],
})
export class TaskModule {}
