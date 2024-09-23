import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerToggle } from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskService } from './services/task.service';
import { MatListModule } from '@angular/material/list';
import { TaskFilterComponent } from './task-filter/task-filter.component';

const routes: Routes = [
  { path: 'task-details/:id', component: TaskDetailsComponent },
];

@NgModule({
  declarations: [TaskFilterComponent],
  imports: [
    MatListModule,
    MatDatepickerToggle,
    AppComponent,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    RouterModule.forRoot(routes),
  ],
  providers: [TaskService],
  bootstrap: [],
})
export class AppModule {}
