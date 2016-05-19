import { Component, Input } from '@angular/core';

import { SkyRepeaterComponent, SkyRepeaterItemComponent } from 'blackbaud-skyux2';

import { upgradeAdapter } from '../../upgrade_adapter';

const ContextMenu = upgradeAdapter.upgradeNg1Component('bbContextMenu1');

const ContextMenuItem = upgradeAdapter.upgradeNg1Component('bbContextMenuItem1');

@Component({
  selector: 'bb-dog-note-repeater',
  directives: [SkyRepeaterComponent, SkyRepeaterItemComponent, ContextMenu, ContextMenuItem],
  template: `
  <sky-repeater [expandMode]="'single'">
    <sky-repeater-item *ngFor="let note of notes" [isCollapsible]="collapsible">
      <sky-repeater-item-context-menu>
        <bb-context-menu1 bb-context-menu-label="Some label">
          <bb-context-menu-item1>Edit history</bb-context-menu-item1>
          <bb-context-menu-item1>Remove History</bb-context-menu-item1>
        </bb-context-menu1>
      </sky-repeater-item-context-menu>
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
