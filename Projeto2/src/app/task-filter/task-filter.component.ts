import { Component, Output, EventEmitter, NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [MatButtonToggleModule, BrowserAnimationsModule, MatFormFieldModule],
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
  $event: any;

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      const value = inputElement.value;
      // Process the value here
    }
  }

  onFilterChange(filter: string) {
    this.filterChangeEvent.emit(filter);
  }
}
