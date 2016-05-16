import { upgradeAdapter } from './upgrade_adapter';
import SkyUx2Adapter  from './skyux2port/core.ts';


upgradeAdapter.bootstrap(document.body, ['barkbaud', SkyUx2Adapter.name], {strictDi: true});
