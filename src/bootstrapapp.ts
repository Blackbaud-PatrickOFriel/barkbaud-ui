import { upgradeAdapter } from './upgrade_adapter';
import skyUx2Adapter  from './skyux2port/core.ts';
import dogNoteRepeaterModule from './dogs/notes/dognoterepeater.down.ts';

upgradeAdapter.bootstrap(document.body, ['barkbaud',  skyUx2Adapter.name, dogNoteRepeaterModule.name], {strictDi: true});
