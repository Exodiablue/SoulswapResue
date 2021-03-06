import React from 'react';
import Grid from '@material-ui/core/Grid';

import DepositSection from '../PoolDetails/DepositSection/DepositSection';
import WithdrawSection from '../PoolDetails/WithdrawSection/WithdrawSection';
import HarvestSection from '../PoolDetails/HarvestSection/HarvestSection';
import { shouldHideFromHarvest } from '../../../helpers/utils';
// import logo from '../../../../images/fantom/GinSpirit.png';

const PoolActions = ({ pool, balanceSingle, index, sharesBalance }) => {

  //console.log('Pool in PoolActions: ', pool);
  return (
    <Grid container>
      <DepositSection index={index} pool={pool} balanceSingle={balanceSingle} />
      {pool.id === 'spiritxginspirit' || pool.id === 'lqdrxgxlqdr' ?  '' : <WithdrawSection index={index} pool={pool} sharesBalance={sharesBalance} /> }
      {shouldHideFromHarvest(pool.id) ? '' : <HarvestSection index={index} pool={pool} />}
    </Grid>
  );
};

export default PoolActions;
