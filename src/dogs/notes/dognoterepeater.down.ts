/* global angular */
import { DogNoteRepeaterComponent } from './dognoterepeater.ts';
import { upgradeAdapter } from '../../upgrade_adapter';

let dogNoteRepeaterModule =  angular.module('barkbaud.dognoterepeater', [])
  .directive('bbDogNoteRepeater', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(DogNoteRepeaterComponent));

export default dogNoteRepeaterModule;
