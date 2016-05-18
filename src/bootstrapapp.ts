import { upgradeAdapter } from './upgrade_adapter';
import SkyUx2Adapter  from './skyux2port/core.ts';

upgradeAdapter.bootstrap(document.body, ['barkbaud', 'barkbaud.skyux2' /*, SkyUx2Adapter.name*/], {strictDi: true});
