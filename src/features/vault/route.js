import VaultPage from './VaultPage';

export default {
  path: 'vault',
  childRoutes: [{ path: ':vaultId', component: VaultPage, isIndex: true }],
};
