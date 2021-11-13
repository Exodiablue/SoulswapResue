import React, { useCallback, useEffect, useMemo } from 'react';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import BigNumber from 'bignumber.js';
import { makeStyles } from '@material-ui/core/styles';
import { formatTvl } from 'features/helpers/format';
import { byDecimals } from 'features/helpers/bignumber';
import styles from './styles';
import PoolPaused from './PoolPaused/PoolPaused';
import PoolTitle from './PoolTitle/PoolTitle';
import LabeledStat from './LabeledStat/LabeledStat';
import ApyStats from './ApyStats/ApyStats';
import { useConnectWallet } from '../../../home/redux/connectWallet'; //add for stats
import Web3 from 'web3';

const useStyles = makeStyles(styles);

const PoolSummary = ({
  pool,
  launchpool,
  toggleCard,
  balanceSingle,
  sharesBalance,
  apy,
  fetchBalancesDone,
  fetchApysDone,
  fetchVaultsDataDone,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const { web3, address } = useConnectWallet(); //add for stats

  const vaultStateTitle = useMemo(() => {
    let state =
      pool.status === 'eol'
        ? t('Vault-DepositsRetiredTitle')
        : pool.depositsPaused
        ? t('Vault-DepositsPausedTitle')
        : null;

    if (launchpool) {
      state = t('Stake-BoostedBy', { name: launchpool.name });
    }

    if (pool.experimental) {
      state = t('Vault-Experimental');
    }

    return state === null ? (
      ''
    ) : (
      <PoolPaused
        message={t(state)}
        isBoosted={!!launchpool}
        isExperimental={!!pool.experimental}
      />
    );
  }, [pool, launchpool, t]);

  const balanceUsd =
    balanceSingle > 0 && fetchVaultsDataDone ? formatTvl(balanceSingle, pool.oraclePrice) : '';
  const deposited = byDecimals(
    sharesBalance.multipliedBy(new BigNumber(pool.pricePerFullShare)),
    pool.tokenDecimals
  );
  const depositedUsd =
    deposited > 0 && fetchVaultsDataDone ? formatTvl(deposited, pool.oraclePrice) : '';

  const onSummaryClick = useCallback(
    e => {
      if (!e.target || !e.target.classList.contains('tooltip-toggle')) {
        toggleCard();
      }
    },
    [toggleCard]
  );

  //============ SOUL WITHDRAWAL LOCK - IMPLEMENTATION =========================
  function CountdownEpoch(n) {
    var date = new Date();
    var seconds = Math.round(date.getTime() / 1000);
    n = n-seconds;
    if (n<0){
      return 'WAITING FOR NEXT HARVEST'
    }
    var day = parseInt( n / (24 * 3600));

    n = n % (24 * 3600);
    var hour = parseInt(n / 3600);

    n %= 3600;
    var minutes = n / 60;

    return  day + " " + "days " + 
            hour + " " + "hours " + 
            minutes.toFixed() + " " + "minutes"
  }

  function SecondsToDays(seconds) {
    // var date = new Date();
    // var dateSeconds = Math.round(date.getTime() / 1000);
    // seconds = seconds-dateSeconds;
    if (seconds<0){
      return 'WAITING FOR NEXT HARVEST'
    }

    var day = Math.floor(seconds / (3600*24));
    var hour = Math.floor(seconds % (3600*24) / 3600);
    var minutes = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);

    return  day + " " + "days " + 
            hour + " " + "hours " + 
            minutes.toFixed() + " " + "minutes"
  }

  //============ START SOUL WITHDRAWAL LOCK - IMPLEMENTATION =========================
  useEffect(() => { //use effect to wait for load
    //get reaper balance
    const getLockTime = async() => {
      if (pool.id.includes('soul-') && pool.strategyAddress != ''){
        const SOUL_ABI = [{"inputs":[{"internalType":"address","name":"_want","type":"address"},{"internalType":"uint256","name":"_poolId","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"harvester","type":"address"}],"name":"StratHarvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"CALL_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_BATCH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PLATFORM_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STRATEGIST_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAWAL_MAX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAW_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"add","type":"address"},{"internalType":"bool","name":"isAdd","type":"bool"}],"name":"addOrRemoveFromWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balanceOfPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balanceOfWant","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"beforeDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"canWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"forceWindow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"grimFeeRecipient","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"harvester","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_fromToken","type":"address"},{"internalType":"address","name":"_toToken","type":"address"},{"internalType":"address","name":"_unirouter","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"makeCustomTxn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextWindowStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openWithdrawal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"output","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"outputToLp0Route","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"outputToLp1Route","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"outputToWrappedRoute","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"panic","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"retireStrat","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"routerOutput","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newCallFee","type":"uint256"},{"internalType":"uint256","name":"newStratFee","type":"uint256"},{"internalType":"uint256","name":"newWithdrawFee","type":"uint256"},{"internalType":"uint256","name":"newFeeBatchAmount","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_strategist","type":"address"}],"name":"setStrategist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_unirouter","type":"address"}],"name":"setUnirouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vault","type":"address"}],"name":"setVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"strategist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timeStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unirouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"want","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"windowEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"windowLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"windowStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawLockStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wrapped","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
        const myweb3 = new Web3(new Web3.providers.HttpProvider('https://rpc.ftm.tools'));
        const contract = new myweb3.eth.Contract(SOUL_ABI, pool.strategyAddress);
    
        const openWithdrawal = await contract.methods.openWithdrawal().call();
        const timeStaked = new BigNumber( await contract.methods.timeStaked().call() );
        const withdrawLockStart = new BigNumber( await contract.methods.withdrawLockStart().call() );
        const windowLength = new BigNumber( await contract.methods.windowLength().call() );
        const nextWindowStartTime = new BigNumber( await contract.methods.nextWindowStartTime().call() );
        const remainingLockTime = windowLength-timeStaked;

          //var lockVars =  getLockTime();
          var lockDisplay = 'NEXT UNLOCK IN: ' + CountdownEpoch(nextWindowStartTime);
          if (openWithdrawal == true){
            lockDisplay = 'NEXT LOCK IN: ' + SecondsToDays(remainingLockTime);
          }
          pool.tokenDescription = 
            'SoulSwap | Withdrawals are locked in 14 day periods with 1 day of unlocking each cycle to avoid the platform withdrawal fee. ' +
            'During the unlock period rewards will not be compounded. ' + lockDisplay
      }

    }
    getLockTime()
  });   //============ END SOUL WITHDRAWAL LOCK - IMPLEMENTATION =========================

  // async function getLockTime(strategy) {
  //   var myweb3 = new Web3(new Web3.providers.HttpProvider('https://rpc.ftm.tools'));
  //   const contract = new myweb3.eth.Contract(SOUL_ABI, '0x458b16d49EA9966E475cc262f1FAEd6A5D8679EC');

  //   const openWithdrawal = new BigNumber( await contract.methods.openWithdrawal().call() );
  //   const timeStaked = new BigNumber( await contract.methods.timeStaked().call() );
  //   const withdrawLockStart = new BigNumber( await contract.methods.withdrawLockStart().call() );
    
  //   const nextWindowStartTime = new BigNumber( await contract.methods.nextWindowStartTime().call() );
  //   const remainingLockTime = nextWindowStartTime - timeStaked + withdrawLockStart ;

  //   return [nextWindowStartTime, remainingLockTime, openWithdrawal];
  //   // expected output: "resolved"
  // }

  // // pool.id  == 'soul-' ? '' : 
  // if (pool.id.includes('soul-')){
  //   var lockVars =  getLockTime(pool.strategyAddress);
  //   var lockDisplay = 'NEXT UNLOCK IN: ' + CountdownEpoch(lockVars[1]);
  //   if (lockVars[2] == true){
  //     lockDisplay = 'NEXT LOCK IN: ' + SecondsToDays(lockVars[0]);
  //   }
  //   pool.tokenDescription = 
  //     'SoulSwap | Withdrawals are locked in 15 day periods with 1 day of unlocking to avoid the platform withdrawal fee.' +
  //     'During the withdrawal period rewards will not be compounded. ' + lockDisplay
  // }

  //============ END SOUL WITHDRAWAL LOCK - IMPLEMENTATION =========================

  return (
    <AccordionSummary
      className={
        pool.status === 'eol'
          ? classes.detailsRetired
          : pool.depositsPaused
          ? classes.detailsPaused
          : classes.details
      }
      style={{ justifyContent: 'space-between' }}
      onClick={onSummaryClick}
    >
      <Grid container alignItems="center" style={{ paddingTop: '20px' }}>
        {vaultStateTitle}
        <Grid item xs={12} className={`${classes.item} ${classes.itemTitle}`}>
          <PoolTitle
            name={pool.name}
            logo={pool.logo}
            poolId={pool.id}
            description={t('Vault-Description', { vault: pool.tokenDescription })}
            launchpool={launchpool}
            addLiquidityUrl={pool.addLiquidityUrl}
            removeLiquidityUrl={pool.removeLiquidityUrl}
            priceChart={pool.priceChart}
            statsUrl={pool.analytics==false ? false : 'https://www.yieldstation.net/account/portfolio?selectFarms=' + address + ':68&openPosition=' + address + ':' + pool.earnedTokenAddress + ':vault'}
            //https://www.yieldstation.net/account/portfolio?selectFarms=0x9176FA969181058A8d477436342113D7299aFC06:68&openPosition=0x9176FA969181058A8d477436342113D7299aFC06:0x6d149DA26c4b3AFB9E4D5CEb5C426242532cBEE2:vault
            buyTokenUrl={pool.buyTokenUrl}
            assets={pool.assets}
          />
        </Grid>
        <Grid item xs={6} className={`${classes.item} ${classes.itemBalances}`}>
          <LabeledStat
            value={formatDecimals(balanceSingle)}
            subvalue={balanceUsd}
            label={t('Vault-Wallet')}
            isLoading={!fetchBalancesDone}
            className={classes.itemInner}
          />
        </Grid>
        <Grid item xs={6} className={`${classes.item} ${classes.itemBalances}`}>
          {pool.id === 'spiritxginspirit' ?  ''  :  
            <LabeledStat
            value={formatDecimals(deposited)}
            subvalue={depositedUsd}
            label={t('Vault-Deposited')}
            isLoading={!fetchBalancesDone}
            className={classes.itemInner}
            />
        } 
        </Grid>
        {pool.id === 'spiritxginspirit' ?  ''  : 
          <ApyStats
            apy={apy}
            launchpool={launchpool}
            isLoading={!fetchApysDone}
            itemClasses={`${classes.item} ${classes.itemStats}`}
            itemInnerClasses={classes.itemInner}
          />
      }
        <Grid item xs={4} className={`${classes.item} ${classes.itemStats}`}>
            <LabeledStat
              value={formatTvl(pool.tvl, pool.oraclePrice)}
              label={t('Vault-TVL')}
              isLoading={!fetchVaultsDataDone}
              className={classes.itemInner}
            />
        </Grid>
      </Grid>
    </AccordionSummary>
  );
};


const formatDecimals = number => {
  return number >= 10 ? number.toFixed(4) : number.isEqualTo(0) ? 0 : number.toFixed(8);
};

export default PoolSummary;
