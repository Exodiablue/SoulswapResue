const VAULT_ZAP = '0x6e5219606c8850D5B06781308fc72be4FE27d788';

const zapTokens = [
  {
    name: 'Fantom',
    address: '',
    symbol: 'FTM',
    wrappedSymbol: 'WFTM',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/WFTM_32.png',
  },
  {
    name: 'Dai Stablecoin',
    address: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
    symbol: 'DAI',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/MCDDai_32.png',
  },
  {
    name: 'USD Coin',
    address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    symbol: 'USDC',
    decimals: 6,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/USDC_32.png',
  },
  {
    name: 'ChainLink',
    address: '0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8',
    symbol: 'LINK',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/chainlink_32.png',
  },
  {
    name: 'Fantom USD',
    address: '0xAd84341756Bf337f5a0164515b1f6F993D194E1f',
    symbol: 'fUSD',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/fUSD_32.png',
  },
  {
    name: 'Wrapped Bitcoin',
    address: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
    symbol: 'WBTC',
    decimals: 8,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/wBTC_32.png',
  },
  {
    name: 'Wrapped Ether',
    address: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
    symbol: 'WETH',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/wETH_32.png',
  },
  {
    name: 'yearn.finance',
    address: '0x29b0Da86e484E1C0029B56e817912d778aC0EC69',
    symbol: 'YFI',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/YFI_32.png',
  },
  {
    name: 'Curve DAO',
    address: '0x1E4F97b9f9F913c46F1632781732927B9019C68b',
    symbol: 'CRV',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/CurveFi_32.png',
  },
  {
    name: 'IceToken',
    address: '0xf16e81dce15B08F326220742020379B855B87DF9',
    symbol: 'ICE',
    decimals: 18,
    chainId: 250,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xf16e81dce15B08F326220742020379B855B87DF9/logo.png',
  },
  {
    name: 'Frapped USDT',
    address: '0x049d68029688eAbF473097a2fC38ef61633A3C7A',
    symbol: 'fUSDT',
    decimals: 6,
    chainId: 250,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
];

const pools = [

  {
    id: 'grim',
    logo: 'fantom/GRIM.png',
    name: 'GRIM',
    token: 'GRIM',
    tokenDescription: 'Grim Finance',
    tokenAddress: '0x7eC94C4327dC757601B4273cD67014d7760Be97E',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'XGRIM',
    earnedTokenAddress: '0xb7145dE7F5537D07D7Cc3410691D105566A5E434',
    earnContractAddress: '0xb7145dE7F5537D07D7Cc3410691D105566A5E434',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'GRIM',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Grim Finance',
    assets: ['GRIM'],
    callFee: 0.5,
    zap: {
      zapAddress: VAULT_ZAP,
      router: '0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52',

      tokens: [
       
        ...zapTokens,

        {
          id: 'spirit-spirit-ftm',
          name: 'SPIRIT-FTM Vault',
          address: '0x7535b2d72d2b58AFAb7F643EaAdAf529499e7BaC',
          symbol: 'mlnlSPIRIT-FTM-LP',
          decimals: 18,
          chainId: 250,
          isVault: true,
          router: '0x16327e3fbdaca3bcf7e38f5af2599d2ddc33ae52',
        },
        {
          id: 'spirit-spirit-dai',
          name: 'SPIRIT-DAI Vault',
          address: '0x1BE79BA2D2cdA99F0e046a97a4Be5ee82E62C5A9',
          symbol: 'mlnlSPIRIT-LP',
          decimals: 18,
          chainId: 250,
          isVault: true,
          router: '0x16327e3fbdaca3bcf7e38f5af2599d2ddc33ae52',
        },

      ],
    },
    buyTokenUrl: 'https://swap.spiritswap.finance/#/swap?outputCurrency=0x7eC94C4327dC757601B4273cD67014d7760Be97E',
},

{
    id: 'reaper',
    logo: 'fantom/REAPER.png',
    name: 'REAPER',
    token: 'REAPER',
    tokenDescription: 'Grim Finance',
    tokenAddress: '0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'XREAPER',
    earnedTokenAddress: '0x26f47811f74f67e0Dc00494406685d07A3255C96',
    earnContractAddress: '0x26f47811f74f67e0Dc00494406685d07A3255C96',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'REAPER',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Grim Finance',
    assets: ['REAPER'],
    callFee: 0.5,
    zap: {
      zapAddress: VAULT_ZAP,
      router: '0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52',

      tokens: [

        ...zapTokens,
      ],
    },
    buyTokenUrl: 'https://swap.spiritswap.finance/#/swap?outputCurrency=0x7eC94C4327dC757601B4273cD67014d7760Be97E',

},

  {
    id: 'reaper-grim-ftm',
    logo: 'fantom/GRIM-FTM.png',
    name: 'GRIM-FTM LP',
    token: 'GRIM-FTM LP-SPIRIT',
    tokenDescription: 'Grim Finance',
    tokenAddress: '0x2c18c39622b90318b0124ecfd6d4ac81efcc51db',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-GRI-FTM',
    earnedTokenAddress: '0x18C5C07a9F68c82de678470a9E9306Ffc3e9Ced6',
    earnContractAddress: '0x18C5C07a9F68c82de678470a9E9306Ffc3e9Ced6',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'reaper-grim-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Grim Finance',
    assets: [ 'GRIM','FTM'],
    callFee: 0.5,
    zap: {
      zapAddress: VAULT_ZAP,
      disabled: false,
      router: '0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52',
      tokens: [
       
        {
          name: 'GRIM',
          symbol: 'GRIM',
          address: '0x7eC94C4327dC757601B4273cD67014d7760Be97E',
          tokenAddress: '0x7eC94C4327dC757601B4273cD67014d7760Be97E',
          decimals: 18,
          logoURI: '',
        },
       
        
        ...zapTokens,
      ],
    },
    addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/FTM/0x7eC94C4327dC757601B4273cD67014d7760Be97E',
    buyTokenUrl: 'https://swap.spiritswap.finance/#/swap?outputCurrency=0x7eC94C4327dC757601B4273cD67014d7760Be97E',
},


{
  id: 'waka-ftm-grim',
  logo: 'fantom/GRIM-FTM.png',
  name: 'GRIM-FTM LP',
  token: 'GRIM-FTM LP-WAKA',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x0b3b9452c6ed14f823cfb95ed271a43ada9e12cd',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-GRI-FTM-4',
  earnedTokenAddress: '0x6d149DA26c4b3AFB9E4D5CEb5C426242532cBEE2',
  earnContractAddress: '0x6d149DA26c4b3AFB9E4D5CEb5C426242532cBEE2',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-grim',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'GRIM'],
  callFee: 0.5,
  zap: {
    zapAddress: VAULT_ZAP,
    disabled: false,
    router: '0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52',
    tokens: [
     
      {
        name: 'GRIM',
        symbol: 'GRIM',
        address: '0x7eC94C4327dC757601B4273cD67014d7760Be97E',
        tokenAddress: '0x7eC94C4327dC757601B4273cD67014d7760Be97E',
        decimals: 18,
        logoURI: '',
      },
     
      
      ...zapTokens,
    ],
  },
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
},


  
];

const vaultTokens = pools
  .filter(v => v.assets.length > 1 && v.assets.length < 3)
  .map(v => {
    return {
      id: v.id,
      name: `${v.name.replace('LP', '')} Vault`,
      address: v.earnContractAddress,
      symbol: v.earnedToken,
      decimals: v.tokenDecimals,
      chainId: 250,
      isVault: true,
      router: v.zap.router,
    };
  });

export const fantomPools = pools.map(p => {
  p.zap.tokens = [...p.zap.tokens, ...vaultTokens];
  return p;
});
