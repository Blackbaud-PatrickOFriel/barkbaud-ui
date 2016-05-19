import { Component, Input } from '@angular/core';

import { SkyRepeaterComponent, SkyRepeaterItemComponent } from 'blackbaud-skyux2';

@Component({
  selector: 'bb-dog-note-repeater',
  directives: [SkyRepeaterComponent, SkyRepeaterItemComponent],
  template: `
  <sky-repeater [expandMode]="'single'">
    <sky-repeater-item *ngFor="let note of notes" [isCollapsible]="collapsible">
      <sky-repeater-item-title>
        <div>
          {{ note.title }}
        </div>
      </sky-repeater-item-title>
      <sky-repeater-item-content>
        <div>
          {{ note.description }}
        </div>
      </sky-repeater-item-content>
    </sky-repeater-item>
  </sky-repeater>

  `
})
export class DogNoteRepeaterComponent {

  @Input()
  public notes: any;

  private collapsible = true;

}
