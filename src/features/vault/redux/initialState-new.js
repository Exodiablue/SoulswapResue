import { getNetworkPools } from '../../helpers/getNetworkData';
import { getEligibleZap } from 'features/zap/zapUniswapV2';

import { erc20ABI, vaultABI, ginspiritABI } from '../../configure/abi';
import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider('https://rpc.ftm.tools/'));

const tokens = {};
const pools = getNetworkPools();

const zapMap = {};

pools.forEach(
  (
    {
      token,
      tokenDecimals,
      tokenAddress,
      earnedToken,
      earnContractAddress,
      earnedTokenAddress,
      withdrawalFee,
      depositFee,
    },
    i
  ) => {
    if (!withdrawalFee) pools[i].withdrawalFee = '0.1%';
    if (!depositFee) pools[i].depositFee = '0.0%';

    tokens[token] = {
      symbol: token,
      Contract: new web3.eth.Contract(erc20ABI, tokenAddress),
      decimals: tokenDecimals,
      tokenAddress: tokenAddress,
      tokenBalance: 0,
      allowance: {
        ...tokens[token]?.allowance,
        [earnContractAddress]: tokenAddress ? 0 : Infinity,
      },
    };
    tokens[earnedToken] = {
      symbol: earnedToken,
      decimals: 18,
      tokenAddress: earnedTokenAddress,
      Contract: new web3.eth.Contract(erc20ABI, earnedTokenAddress),
      tokenBalance: 0,
      allowance: {
        [earnContractAddress]: 0,
      },
    };

    pools[i].Contract = new web3.eth.Contract(vaultABI, pools[i].earnedTokenAddress);
    if(pools[i].id == 'spiritxginspirit'){
        pools[i].Contract = new web3.eth.Contract(ginspiritABI, pools[i].earnedTokenAddress);
    }

    const zap = getEligibleZap(pools[i]);
    if (zap) {
      tokens[token].allowance[zap.zapAddress] = tokenAddress ? 0 : Infinity;
      tokens[earnedToken].allowance[zap.zapAddress] = 0;
      zap.tokens.forEach(t => {
        tokens[t.name] = t;
        tokens[t.name].allowance[zap.zapAddress] = 0;
      });
      pools[i]['zap'] = zap;
      zapMap[pools[i].id] = zap;
    }
  }
);

const initialState = {
  pools,
  tokens,
  apys: {},
  fetchApysDone: false,
  fetchApysPending: false,
  fetchVaultsDataDone: false,
  fetchVaultsDataPending: false,
  fetchBalancesDone: false,
  fetchBalancesPending: false,
  fetchApprovalPending: {},
  fetchDepositPending: {},
  fetchZapDepositPending: {},
  fetchWithdrawPending: {},
  fetchHarvestPending: {},
  fetchZapEstimatePending: {},
};

const allZaps = Object.keys(zapMap);
console.log('Total number of zaps: ' + allZaps.length.toString());
console.log('Total zaps:', allZaps);

export default initialState;
