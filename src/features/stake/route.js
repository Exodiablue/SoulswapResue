import StakePage from './StakePage';
import PoolPage from "./PoolPage"

export default {
  path: 'stake',
  childRoutes: [
    { path: 'stake', component: StakePage, isIndex: true },
    { path: 'pool/:index', component: PoolPage },
  ],
};
