import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() name: string | undefined;
  @Output() favoriteSelected = new EventEmitter<string>();

  markAsFavorite() {
    this.favoriteSelected.emit(this.name);
  }
}
