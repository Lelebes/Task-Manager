import { Component, Output, EventEmitter, NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [MatButtonToggleModule, BrowserAnimationsModule],
})
export class AppModule {}

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css'],
})
export class TaskFilterComponent {
  @Output() searchEvent = new EventEmitter<string>();
  @Output() filterChangeEvent = new EventEmitter<string>();

  onSearch(query: string) {
    this.searchEvent.emit(query);
  }

  onFilterChange(filter: string) {
    this.filterChangeEvent.emit(filter);
  }
}
