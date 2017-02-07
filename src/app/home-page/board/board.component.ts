import { Component, Input } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html'
})
export class BoardComponent {
  @Input() columns: number;
  @Input() rows: number;
  @Input() isClosed: boolean;

  constructor() {
    this.columns = 1;         // Default values, if not supplied
    this.rows = 1;
  }
}
