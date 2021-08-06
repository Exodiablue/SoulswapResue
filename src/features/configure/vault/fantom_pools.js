const VAULT_ZAP = '0xD8D5b20439f94F2662801c0Be57627f5e623e875'; //blues zapper
//const VAULT_ZAP = '0x425D1af0d59c20d9964881dB40D8995C205Dd56d';


const SPIRIT_ROUTER = '0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52';
const SPOOKY_ROUTER = '0xF491e7B69E4244ad4002BC14e878a34207E38c29';
const HYPER_ROUTER = '0x53c153a0df7E050BbEFbb70eE9632061f12795fB';
const WAKA_ROUTER = '0x7B17021FcB7Bc888641dC3bEdfEd3734fCaf2c87';
const PAINT_ROUTER = '0xfD000ddCEa75a2E23059881c3589F6425bFf1AbB';
const SUSHI_ROUTER = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506';
const BOMB_ROUTER = '0xb9799De71100e20aC1cdbCc63C69ddA2D0D81710';
const SHIBA_ROUTER = '0xB6f7b3d8CD9dBf30805C0dd79809dace5603Ce6A';
const OPERA_ROUTER = '0xE372753F66644A1197AB85Ff529ed02995ED2d6C';
const ZOO_ROUTER = '0x40b12a3E261416fF0035586ff96e23c2894560f2';


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


const zapTokensReduced = [
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
    name: 'USD Coin',
    address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    symbol: 'USDC',
    decimals: 6,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/USDC_32.png',
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
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap?outputCurrency=0x7eC94C4327dC757601B4273cD67014d7760Be97E',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [
     
      ...zapTokens,

    ],
  },
},

{
  id: 'reaper-grim-ftm',
  logo: 'fantom/GRIM-FTM.png',
  name: 'GRIM-FTM LP',
  token: 'GRIM-FTM LP (SpiritSwap)',
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
  assets: ['FTM', 'GRIM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/FTM/0x7eC94C4327dC757601B4273cD67014d7760Be97E',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap?outputCurrency=0x7eC94C4327dC757601B4273cD67014d7760Be97E',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'GRIM',
        address: '0x7eC94C4327dC757601B4273cD67014d7760Be97E',
        symbol: 'GRIM',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,


    ],
  },
},

{
  id: 'waka-ftm-grim',
  logo: 'fantom/GRIM-FTM.png',
  name: 'GRIM-FTM LP',
  token: 'GRIM-FTM LP (WakaSwap)',
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
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'GRIM',
        address: '0x7eC94C4327dC757601B4273cD67014d7760Be97E',
        symbol: 'GRIM',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-spirit-grim',
  logo: 'fantom/SPIRIT-GRIM.png',
  name: 'SPIRIT-GRIM LP',
  token: 'SPIRIT-GRIM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0xebe5174d117af9c71d76b3138b16e743df983c76',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SPI-GRI-1',
  earnedTokenAddress: '0x1De740fEa240fB67E40824586DC483d19966848D',
  earnContractAddress: '0x1De740fEa240fB67E40824586DC483d19966848D',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-spirit-grim',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['GRIM', 'SPIRIT'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/FTM/0x7eC94C4327dC757601B4273cD67014d7760Be97E',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'GRIM',
        address: '0x7eC94C4327dC757601B4273cD67014d7760Be97E',
        symbol: 'GRIM',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

     
      ...zapTokens,

    ],
  },
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
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap?outputCurrency=0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [
     
      ...zapTokens,

    ],
  },
},

{
  id: 'reaper-reaper-ftm',
  logo: 'fantom/REAPER-FTM.png',
  name: 'REAPER-FTM LP',
  token: 'REAPER-FTM LP (SpiritSwap)',
  tokenDescription: 'Grim Finance',
  tokenAddress: '0x355416b389a25244f4b842516fbd98de869bbb74',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-REA-FTM',
  earnedTokenAddress: '0x8582267c3a2bb11fCcF1eBB1c9Af128e94B024E0',
  earnContractAddress: '0x8582267c3a2bb11fCcF1eBB1c9Af128e94B024E0',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'reaper-reaper-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Grim Finance',
  assets: ['FTM', 'REAPER'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/FTM/0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap?outputCurrency=0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'REAPER',
        address: '0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb',
        symbol: 'REAPER',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'reaper-reaper-usdc',
  logo: 'fantom/REAPER-USDC.png',
  name: 'REAPER-USDC LP',
  token: 'REAPER-USDC LP (SpiritSwap)',
  tokenDescription: 'Grim Finance',
  tokenAddress: '0x63AA709D3Bae838AafC5000B0b6f475Bf01BCbaA',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-REA-USD',
  earnedTokenAddress: '0x48eF177C15d091A038176cD262638bE999E138D6',
  earnContractAddress: '0x48eF177C15d091A038176cD262638bE999E138D6',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'reaper-reaper-usdc',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Grim Finance',
  assets: ['USDC', 'REAPER'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap?outputCurrency=0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'REAPER',
        address: '0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb',
        symbol: 'REAPER',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'reaper-reaper-casper',
  logo: 'fantom/REAPER-CASPER.png',
  name: 'REAPER-CASPER LP',
  token: 'REAPER-CASPER LP (SpiritSwap)',
  tokenDescription: 'Grim Finance',
  tokenAddress: '0x827f642c7d1182ff2b91c45c650526d9072477ca',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-REA-CAS',
  earnedTokenAddress: '0xF34cB74a67322084b5621532A81F56C9D10eCC2F',
  earnContractAddress: '0xF34cB74a67322084b5621532A81F56C9D10eCC2F',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'reaper-reaper-casper',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'eol',
  platform: 'Grim Finance',
  assets: ['CASPER', 'REAPER'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb/0xC30d1b0Ce932C3dd3373a2C23aDA4E9608CAf345',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap?outputCurrency=0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'REAPER',
        address: '0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb',
        symbol: 'REAPER',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'reaper-wbtc-rbtc',
  logo: 'fantom/BTC-RBTC.png',
  name: 'WBTC-renBTC LP',
  token: 'wBTC-renBTC LP (HyperJump)',
  tokenDescription: 'Grim Finance',
  tokenAddress: '0x69ea05ee07c2d06753827f90b522b0ba3d3dab63',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BTC-RBT',
  earnedTokenAddress: '0x40F7E873Ebefa5BB762341a8DD63f06d9A332D56',
  earnContractAddress: '0x40F7E873Ebefa5BB762341a8DD63f06d9A332D56',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'reaper-wbtc-rbtc',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Grim Finance',
  assets: ['BTC', 'renBTC'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/0xDBf31dF14B66535aF65AaC99C32e9eA844e14501/0x321162Cd933E2Be498Cd2267a90534A804051b11',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0xdbf31df14b66535af65aac99c32e9ea844e14501',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit',
  logo: 'fantom/SPIRIT.png',
  name: 'SPIRIT',
  token: 'SPIRIT',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SPIRIT-1',
  earnedTokenAddress: '0x0d5Ecb27D1574E3B574d6D8c93C628d17348c99B',
  earnContractAddress: '0x0d5Ecb27D1574E3B574d6D8c93C628d17348c99B',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'tokens',
  oracleId: 'SPIRIT',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['SPIRIT'],
  callFee: 0.5,
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-spirit-ftm',
  logo: 'fantom/SPIRIT-FTM.png',
  name: 'SPIRIT-FTM LP',
  token: 'SPIRIT-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x30748322B6E34545DBe0788C421886AEB5297789',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SPI-FTM-1',
  earnedTokenAddress: '0x6fF9e23BdC45a165f88F723A265d412F403270A0',
  earnContractAddress: '0x6fF9e23BdC45a165f88F723A265d412F403270A0',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-spirit-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['FTM', 'SPIRIT'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/FTM/0x5Cc61A78F164885776AA610fb0FE1257df78E59B',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-spirit-xsteak',
  logo: 'fantom/SPIRIT-XSTEAK.png',
  name: 'SPIRIT-XSTEAK LP',
  token: 'SPIRIT-XSTEAK LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0xe276a71991a7a7b16cb453db2994ce9fcda2eda6',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SPI-XSTE-1',
  earnedTokenAddress: '0xB5a7854D6F034D53FF3c57E5E75E3F2A3B4957e0',
  earnContractAddress: '0xB5a7854D6F034D53FF3c57E5E75E3F2A3B4957e0',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-spirit-xsteak',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['SPIRIT', 'XSTEAK'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/FTM/0xb632c5d42BD4a44a617608Ad1c7d38f597E22E3C',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-dis-ftm',
  logo: 'fantom/DIS-FTM.png',
  name: 'DIS-FTM LP',
  token: 'DIS-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0xa6020794594568e2bf987718b6520C14b9C4Ccd9',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-DIS-FTM-1',
  earnedTokenAddress: '0xDf14d05277b55d5097bec0eC56cd599E246F77D8',
  earnContractAddress: '0xDf14d05277b55d5097bec0eC56cd599E246F77D8',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-dis-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['DIS', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/FTM/0x0e121961DD741C9D49C9A04379da944A9D2FAc7a',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-yfi-ftm',
  logo: 'fantom/YFI-FTM.png',
  name: 'YFI-FTM LP',
  token: 'YFI-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x4fc38a2735C7da1d71ccAbf6DeC235a7DA4Ec52C',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-YFI-FTM-1',
  earnedTokenAddress: '0x3621AE77Df07b6e341710F24083B8398a59E7eF1',
  earnContractAddress: '0x3621AE77Df07b6e341710F24083B8398a59E7eF1',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-yfi-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['YFI', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/FTM/0x29b0Da86e484E1C0029B56e817912d778aC0EC69',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-dai-spirit',
  logo: 'fantom/DAI-SPIRIT.png',
  name: 'DAI-SPIRIT LP',
  token: 'DAI-SPIRIT LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0xfFbfc0446cA725b21256461e214E9D472f9be390',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-DAI-SPI-1',
  earnedTokenAddress: '0xd0CA2E5A8c12F56a130A7d609DcAC0f820743056',
  earnContractAddress: '0xd0CA2E5A8c12F56a130A7d609DcAC0f820743056',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-dai-spirit',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['DAI', 'SPIRIT'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x5Cc61A78F164885776AA610fb0FE1257df78E59B/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-busd-fusdt',
  logo: 'fantom/BUSD-FUSDT.png',
  name: 'BUSD-FUSDT LP',
  token: 'BUSD-FUSDT LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x1Ac51904cFAaD15679B3500F0fC41D2971657f80',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BUS-FUS-1',
  earnedTokenAddress: '0xB45c9a2627219Db00D82b4F2816D544f41bCBC4B',
  earnContractAddress: '0xB45c9a2627219Db00D82b4F2816D544f41bCBC4B',
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-busd-fusdt',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['BUSD', 'FUSDT'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0xC931f61B1534EB21D8c11B24f3f5Ab2471d4aB50/0x049d68029688eAbF473097a2fC38ef61633A3C7A',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'spirit-frax-ftm',
  logo: 'fantom/FRAX-FTM.png',
  name: 'FRAX-FTM LP',
  token: 'FRAX-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x0eC0E1629E776272FA3E55548D4A656BE0EEdcF4',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FRA-FTM-1',
  earnedTokenAddress: '0x8C2DCB72c80a4e4014D0EAda094a4DD690c6fe37',
  earnContractAddress: '0x8C2DCB72c80a4e4014D0EAda094a4DD690c6fe37',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-frax-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['FRAX', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/FTM/0xaf319E5789945197e365E7f7fbFc56B130523B33',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'spirit-fxs-frax',
  logo: 'fantom/FRAX-FXS.png',
  name: 'FXS-FRAX LP',
  token: 'FXS-FRAX LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x100FcF27C87D1cc7b8D6c28b69b84A359e4fd377',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FXS-FRA-1',
  earnedTokenAddress: '0x72dC5eF4EC32582b18465eD7900Fe0280Fde9736',
  earnContractAddress: '0x72dC5eF4EC32582b18465eD7900Fe0280Fde9736',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-fxs-frax',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['FXS', 'FRAX'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x82F8Cb20c14F134fe6Ebf7aC3B903B2117aAfa62/0xaf319E5789945197e365E7f7fbFc56B130523B33',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-spirit-elk',
  logo: 'fantom/SPIRIT-ELK.png',
  name: 'SPIRIT-ELK LP',
  token: 'SPIRIT-ELK LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0xbc7984937c34d8234046eb52649683efc243cb5e',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SPI-ELK-1',
  earnedTokenAddress: '0x59DfF3203383f6A7573a8bA71FF3DAFD95ebee72',
  earnContractAddress: '0x59DfF3203383f6A7573a8bA71FF3DAFD95ebee72',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-spirit-elk',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'eol',
  platform: 'SpiritSwap',
  assets: ['SPIRIT', 'ELK'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x5Cc61A78F164885776AA610fb0FE1257df78E59B/0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [
     
      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-ice-ftm',
  logo: 'fantom/ICE-FTM.png',
  name: 'ICE-FTM LP',
  token: 'ICE-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x936D23C83c2469f6a14B9f5bEaec13879598A5aC',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ICE-FTM-1',
  earnedTokenAddress: '0x3A5A2a671d30b09ecFB95bC398be62313569b6de',
  earnContractAddress: '0x3A5A2a671d30b09ecFB95bC398be62313569b6de',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-ice-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['ICE', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0xf16e81dce15B08F326220742020379B855B87DF9/FTM',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-yfi-woofy',
  logo: 'fantom/YFI-WOOFY.png',
  name: 'YFI-WOOFY LP',
  token: 'YFI-WOOFY LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x287ebF376c59a037B8D8E0e987461b2fd8550D8c',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-YFI-WOO-1',
  earnedTokenAddress: '0x8f9d07bae2A31b5B82F7E5fb8916296EEB3e3e9a',
  earnContractAddress: '0x8f9d07bae2A31b5B82F7E5fb8916296EEB3e3e9a',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-yfi-woofy',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['YFI', 'WOOFY'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x29b0Da86e484E1C0029B56e817912d778aC0EC69/0xD0660cD418a64a1d44E9214ad8e459324D8157f1',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-ftm-usdc',
  logo: 'fantom/USDC-FTM.png',
  name: 'FTM-USDC LP',
  token: 'FTM-USDC LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0xe7E90f5a767406efF87Fdad7EB07ef407922EC1D',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-USD-1',
  earnedTokenAddress: '0x0092739FEDaC3c77EdC88A1e9B83686f21b9BE96',
  earnContractAddress: '0x0092739FEDaC3c77EdC88A1e9B83686f21b9BE96',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-ftm-usdc',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['FTM', 'USDC'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/FTM/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-wbtc-ftm',
  logo: 'fantom/WBTC-FTM.png',
  name: 'WBTC-FTM LP',
  token: 'WBTC-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x279b2c897737a50405ED2091694F225D83F2D3bA',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-WBT-FTM-1',
  earnedTokenAddress: '0xD671f21fAaAd44CC5c5937Ca1e90380d3276FDf5',
  earnContractAddress: '0xD671f21fAaAd44CC5c5937Ca1e90380d3276FDf5',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-wbtc-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['BTC', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x321162Cd933E2Be498Cd2267a90534A804051b11/FTM',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [
     
      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

      ...zapTokens,

    ],
  },
},
{
  id: 'spirit-weth-ftm',
  logo: 'fantom/WETH-FTM.png',
  name: 'WETH-FTM LP',
  token: 'WETH-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x613BF4E46b4817015c01c6Bb31C7ae9edAadc26e',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-WET-FTM-1',
  earnedTokenAddress: '0x106A8d32D4CcC8fA3BCf6BA39dC999853B5F4C2E',
  earnContractAddress: '0x106A8d32D4CcC8fA3BCf6BA39dC999853B5F4C2E',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-weth-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['ETH', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x74b23882a30290451A17c44f4F05243b6b58C76d/FTM',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'spirit-sushi-ftm',
  logo: 'fantom/SUSHI-FTM.png',
  name: 'SUSHI-FTM LP',
  token: 'SUSHI-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x9Fe4c0CE5F533e96C2b72d852f190961AD5a7bB3',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SUS-FTM-1',
  earnedTokenAddress: '0xBBDfebA68D7615159F1663FcF324a96F524E197F',
  earnContractAddress: '0xBBDfebA68D7615159F1663FcF324a96F524E197F',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-sushi-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['SUSHI', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC/FTM',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'spirit-cream-ftm',
  logo: 'fantom/CREAM-FTM.png',
  name: 'CREAM-FTM LP',
  token: 'CREAM-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x040dd0d0f5e2a01fEb0C5457AbB588B23Cf4c43a',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CRE-FTM-1',
  earnedTokenAddress: '0x724f06Dd82646b2cE819058F2F77138d42dB47Ec',
  earnContractAddress: '0x724f06Dd82646b2cE819058F2F77138d42dB47Ec',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-cream-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['CREAM', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x657A1861c15A3deD9AF0B6799a195a249ebdCbc6/FTM',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'spirit-cover-ftm',
  logo: 'fantom/COVER-FTM.png',
  name: 'COVER-FTM LP',
  token: 'COVER-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x5427E7AB61145c41b1e58453121245dAEF3929C3',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-COV-FTM-1',
  earnedTokenAddress: '0x22ba9BD1D288f468F540a35017537ce9023B1aaD',
  earnContractAddress: '0x22ba9BD1D288f468F540a35017537ce9023B1aaD',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-cover-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['COVER', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0xB01E8419d842beebf1b70A7b5f7142abbaf7159D/FTM',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-any-ftm',
  logo: 'fantom/ANY-FTM.png',
  name: 'ANY-FTM LP',
  token: 'ANY-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x26D583028989378Cc1b7CBC023f4Ae049d5e5899',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ANY-FTM-1',
  earnedTokenAddress: '0xebf1060892c7128e0169abE52eB53D33E131880e',
  earnContractAddress: '0xebf1060892c7128e0169abE52eB53D33E131880e',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-any-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['ANY', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0xdDcb3fFD12750B45d32E084887fdf1aABAb34239/FTM',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'spirit-bnb-ftm',
  logo: 'fantom/BNB-FTM.png',
  name: 'BNB-FTM LP',
  token: 'BNB-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x74fE5Ddc4c27F91a1898ccd5Ac62dFeb2d3dF726',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BNB-FTM-1',
  earnedTokenAddress: '0xD60ebdc6556FeCb9100C7E0c2BCCC9d18B9852D3',
  earnContractAddress: '0xD60ebdc6556FeCb9100C7E0c2BCCC9d18B9852D3',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-bnb-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['BNB', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454/FTM',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'spirit-link-ftm',
  logo: 'fantom/LINK-FTM.png',
  name: 'LINK-FTM LP',
  token: 'LINK-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0xd061c6586670792331E14a80f3b3Bb267189C681',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-LIN-FTM-1',
  earnedTokenAddress: '0x064bD3eBE8b5E7D4C7828fDb04b3425bBE5046c4',
  earnContractAddress: '0x064bD3eBE8b5E7D4C7828fDb04b3425bBE5046c4',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-link-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['LINK', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8/FTM',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'spirit-crv-ftm',
  logo: 'fantom/CRV-FTM.png',
  name: 'CRV-FTM LP',
  token: 'CRV-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x374C8ACb146407Ef0AE8F82BaAFcF8f4EC1708CF',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CRV-FTM-1',
  earnedTokenAddress: '0xa75152568b584271486D54F606BDc2b7fA4e1f0E',
  earnContractAddress: '0xa75152568b584271486D54F606BDc2b7fA4e1f0E',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-crv-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['CRV', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x1E4F97b9f9F913c46F1632781732927B9019C68b/FTM',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'spirit-fusdt-ftm',
  logo: 'fantom/FUSDT-FTM.png',
  name: 'FUSDT-FTM LP',
  token: 'FUSDT-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0xd14Dd3c56D9bc306322d4cEa0E1C49e9dDf045D4',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FUS-FTM-1',
  earnedTokenAddress: '0x19429C692737EE8a85432c8CF6209ca6d51E39c4',
  earnContractAddress: '0x19429C692737EE8a85432c8CF6209ca6d51E39c4',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-fusdt-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['FUSDT', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x049d68029688eAbF473097a2fC38ef61633A3C7A/FTM',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-cztears-spirit',
  logo: 'fantom/CZTEARS-SPIRIT.png',
  name: 'CZTEARS-SPIRIT LP',
  token: 'CZTEARS-SPIRIT LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0xC66c0F0318e2777A53F884C8874B6CA3c2ED8f84',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CZT-SPI-1',
  earnedTokenAddress: '0x0122Ce265e2F7B1E641233fd0Fd03B721B4fDa62',
  earnContractAddress: '0x0122Ce265e2F7B1E641233fd0Fd03B721B4fDa62',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-cztears-spirit',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'eol',
  platform: 'SpiritSwap',
  assets: ['CZTEARS', 'SPIRIT'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x907f1A48918Bb5DE07c12443CAB0e6EEfCC611BC/0x5Cc61A78F164885776AA610fb0FE1257df78E59B',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-bnb-spirit',
  logo: 'fantom/BNB-SPIRIT.png',
  name: 'BNB-SPIRIT LP',
  token: 'BNB-SPIRIT LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x9D103Bc85A33B007B58bE2fDee3e1A64651f676d',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BNB-SPI-1',
  earnedTokenAddress: '0xac803ecC4F119f7fe3Af53408c30d84342d49be2',
  earnContractAddress: '0xac803ecC4F119f7fe3Af53408c30d84342d49be2',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-bnb-spirit',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['BNB', 'SPIRIT'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454/0x5Cc61A78F164885776AA610fb0FE1257df78E59B',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-usdc-gton',
  logo: 'fantom/GTON-USDC.png',
  name: 'USDC-GTON LP',
  token: 'USDC-GTON LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0x8a5555c4996B72E5725Cf108Ad773Ce5E715DED4',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-USD-GTO-1',
  earnedTokenAddress: '0xb64d101172600FF652B669A813Fee37616182023',
  earnContractAddress: '0xb64d101172600FF652B669A813Fee37616182023',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-usdc-gton',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['USDC', 'GTON'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/0xC1Be9a4D5D45BeeACAE296a7BD5fADBfc14602C4',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-zoo-ftm',
  logo: 'fantom/ZOO-FTM.png',
  name: 'ZOO-FTM LP',
  token: 'ZOO-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0xDF18DD2631f02D930071DF7d6FF89bbc3718C62F',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ZOO-FTM-1',
  earnedTokenAddress: '0x9e8e674D41EF4aA269BAb21C7938000CEcF367D6',
  earnContractAddress: '0x9e8e674D41EF4aA269BAb21C7938000CEcF367D6',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-zoo-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['ZOO', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x09e145A1D53c0045F41aEEf25D8ff982ae74dD56/FTM',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-mim-ftm',
  logo: 'fantom/MIM-FTM.png',
  name: 'MIM-FTM LP',
  token: 'MIM-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0xB32b31DfAfbD53E310390F641C7119b5B9Ea0488',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-MIM-FTM-1',
  earnedTokenAddress: '0x830a058D324a1176C09a7310152519f56e29b26e',
  earnContractAddress: '0x830a058D324a1176C09a7310152519f56e29b26e',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-mim-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['MIM', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x82f0B8B456c1A451378467398982d4834b6829c1/FTM',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-just-ftm',
  logo: 'fantom/JUST-FTM.png',
  name: 'JUST-FTM LP',
  token: 'JUST-FTM LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0xea294E3C837ef457530b916Accbc3e3444a75A72',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-JUS-FTM-1',
  earnedTokenAddress: '0x42B6890dd673579CB6554939398D53365eb12482',
  earnContractAddress: '0x42B6890dd673579CB6554939398D53365eb12482',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-just-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['JUST', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0xC8Da1a26ABEF9e2E41B4C89c1b345Cc05ce034e8/FTM',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'spirit-spirit-lqdr',
  logo: 'fantom/LQDR-SPIRIT.png',
  name: 'SPIRIT-LQDR LP',
  token: 'SPIRIT-LQDR LP (SpiritSwap)',
  tokenDescription: 'SpiritSwap',
  tokenAddress: '0xFeBbfeA7674720cEdD35e9384d07F235365c1B3e',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SPI-LQD-1',
  earnedTokenAddress: '0xBe5a76c85bC5a5038F89FBf800fE86DC865f6C18',
  earnContractAddress: '0xBe5a76c85bC5a5038F89FBf800fE86DC865f6C18',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'spirit-spirit-lqdr',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpiritSwap',
  assets: ['SPIRIT', 'LQDR'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/0x5Cc61A78F164885776AA610fb0FE1257df78E59B/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [

      {
        name: 'SPIRIT',
        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
        symbol: 'SPIRIT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'boo',
  logo: 'fantom/BOO.png',
  name: 'BOO',
  token: 'BOO',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BOO-2',
  earnedTokenAddress: '0x177Bd708eB4880d2f0e0E319F48BF1308CFe6494',
  earnContractAddress: '0x177Bd708eB4880d2f0e0E319F48BF1308CFe6494',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'tokens',
  oracleId: 'BOO',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['BOO'],
  callFee: 0.5,
  buyTokenUrl: 'https://spookyswap.finance/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [
     
      ...zapTokens,

    ],
  },
},

{
  id: 'boo-ftm-boo',
  logo: 'fantom/BOO-FTM.png',
  name: 'FTM-BOO LP',
  token: 'FTM-BOO LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0xEc7178F4C41f346b2721907F5cF7628E388A7a58',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-BOO-2',
  earnedTokenAddress: '0x2e36e51335715c4B37022C46E8Ab170BF35B2F41',
  earnContractAddress: '0x2e36e51335715c4B37022C46E8Ab170BF35B2F41',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-ftm-boo',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'BOO'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x841fad6eae12c286d1fd18d1d525dffa75c7effe',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},


{
  id: 'boo-ftm-mim',
  logo: 'fantom/MIM-FTM.png',
  name: 'FTM-MIM LP',
  token: 'FTM-MIM LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0x6f86e65b255c9111109d2d2325ca2dfc82456efc',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-MIM-2',
  earnedTokenAddress: '0x15337eC8FBCeD2E27c153A11DeD23879A2E084d6',
  earnContractAddress: '0x15337eC8FBCeD2E27c153A11DeD23879A2E084d6',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-ftm-mim',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'MIM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x82f0B8B456c1A451378467398982d4834b6829c1',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x82f0b8b456c1a451378467398982d4834b6829c1',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},


{
  id: 'boo-link-ftm',
  logo: 'fantom/LINK-FTM.png',
  name: 'FTM-LINK LP',
  token: 'FTM-LINK LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0x89d9bc2f2d091cfbfc31e333d6dc555ddbc2fd29',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-LIN-2',
  earnedTokenAddress: '0x5197AD80800060C324e7B8306766BCfbe73b5E7f',
  earnContractAddress: '0x5197AD80800060C324e7B8306766BCfbe73b5E7f',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-link-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'LINK'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'boo-any-ftm',
  logo: 'fantom/ANY-FTM.png',
  name: 'FTM-ANY LP',
  token: 'FTM-ANY LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0x5c021D9cfaD40aaFC57786b409A9ce571de375b4',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-ANY-2',
  earnedTokenAddress: '0xF520d3D486d3378b7370efC7722B44d0D88B4a9A',
  earnContractAddress: '0xF520d3D486d3378b7370efC7722B44d0D88B4a9A',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-any-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'ANY'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0xdDcb3fFD12750B45d32E084887fdf1aABAb34239',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0xddcb3ffd12750b45d32e084887fdf1aabab34239',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [
     
      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

      ...zapTokens,

    ],
  },
},

{
  id: 'boo-ftm-bnb',
  logo: 'fantom/BNB-FTM.png',
  name: 'FTM-BNB LP',
  token: 'FTM-BNB LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0x956DE13EA0FA5b577E4097Be837BF4aC80005820',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-BNB-2',
  earnedTokenAddress: '0xC6ac0Dd798da6A7d41a7E4717C04cA1297D58b15',
  earnContractAddress: '0xC6ac0Dd798da6A7d41a7E4717C04cA1297D58b15',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-ftm-bnb',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'BNB'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0xd67de0e0a0fd7b15dc8348bb9be742f3c5850454',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'boo-sushi-ftm',
  logo: 'fantom/SUSHI-FTM.png',
  name: 'FTM-SUSHI LP',
  token: 'FTM-SUSHI LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0xf84e313b36e86315af7a06ff26c8b20e9eb443c3',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-SUS-2',
  earnedTokenAddress: '0xf4828601Db52156c2d5f901A65E0D70a65557f39',
  earnContractAddress: '0xf4828601Db52156c2d5f901A65E0D70a65557f39',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-sushi-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'SUSHI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{

  id: 'boo-ftm-woofy',
  logo: 'fantom/WOOFY-FTM.png',
  name: 'FTM-WOOFY LP',
  token: 'FTM-WOOFY LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0xfD0aB56B83130ce8f2b7A4f4d4532dEe495c0794',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-WOO-2',
  earnedTokenAddress: '0x650e0523636c9811dE26ca324e761639b2ACc22F',
  earnContractAddress: '0x650e0523636c9811dE26ca324e761639b2ACc22F',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-ftm-woofy',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'WOOFY'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0xD0660cD418a64a1d44E9214ad8e459324D8157f1',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0xd0660cd418a64a1d44e9214ad8e459324d8157f1',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'boo-ftm-band',
  logo: 'fantom/BAND-FTM.png',
  name: 'FTM-BAND LP',
  token: 'FTM-BAND LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0x91b39d5584e2a7dc829f696235742cc293f2e8cf',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-BAN-2',
  earnedTokenAddress: '0xD34d4F1da52196861A0bC807804DBD150D22244A',
  earnContractAddress: '0xD34d4F1da52196861A0bC807804DBD150D22244A',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-ftm-band',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'BAND'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x46E7628E8b4350b2716ab470eE0bA1fa9e76c6C5',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x46E7628E8b4350b2716ab470eE0bA1fa9e76c6C5',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'boo-ftm-cream',
  logo: 'fantom/CREAM-FTM.png',
  name: 'FTM-CREAM LP',
  token: 'FTM-CREAM LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0xb77b223490e1f5951ec79a8d09db9eab2adcb934',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-CRE-2',
  earnedTokenAddress: '0x752c106344dca85b4aA061cCa3D459747b8C9d53',
  earnContractAddress: '0x752c106344dca85b4aA061cCa3D459747b8C9d53',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-ftm-cream',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'CREAM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x657A1861c15A3deD9AF0B6799a195a249ebdCbc6',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x657A1861c15A3deD9AF0B6799a195a249ebdCbc6',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'boo-crv-ftm',
  logo: 'fantom/CRV-FTM.png',
  name: 'CRV-FTM LP',
  token: 'CRV-FTM LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0xb471ac6ef617e952b84c6a9ff5de65a9da96c93b',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CRV-FTM-2',
  earnedTokenAddress: '0xA7c827f796761427aDa4269F56b48dCb69b6897d',
  earnContractAddress: '0xA7c827f796761427aDa4269F56b48dCb69b6897d',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-crv-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['CRV', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x1E4F97b9f9F913c46F1632781732927B9019C68b',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x1E4F97b9f9F913c46F1632781732927B9019C68b',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'boo-ftm-badger',
  logo: 'fantom/BADGER-FTM.png',
  name: 'FTM-BADGER LP',
  token: 'FTM-BADGER LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0x1c94665fd3ecfa969feda7ed01e35522e6982022',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-BAD-2',
  earnedTokenAddress: '0xa484E9a6C10C1a8d777ae26Dc4340958d79C3FFB',
  earnContractAddress: '0xa484E9a6C10C1a8d777ae26Dc4340958d79C3FFB',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-ftm-badger',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'BADGER'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x753fbc5800a8C8e3Fb6DC6415810d627A387Dfc9',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x753fbc5800a8C8e3Fb6DC6415810d627A387Dfc9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'boo-ftm-ice',
  logo: 'fantom/ICE-FTM.png',
  name: 'FTM-ICE LP ',
  token: 'FTM-ICE LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0x623ee4a7f290d11c11315994db70fb148b13021d',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-ICE-2',
  earnedTokenAddress: '0x83859901dB1D927e387C58f5E1c89D1dfdD3E032',
  earnContractAddress: '0x83859901dB1D927e387C58f5E1c89D1dfdD3E032',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-ftm-ice',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'ICE'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0xf16e81dce15B08F326220742020379B855B87DF9',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0xf16e81dce15b08f326220742020379b855b87df9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'boo-fusdt-ftm',
  logo: 'fantom/FUSDT-FTM.png',
  name: 'FUSDT-FTM LP',
  token: 'FUSDT-FTM LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FUS-FTM-2',
  earnedTokenAddress: '0xD95D30097dcE2cF32b17d23f742F3a0c02b56895',
  earnContractAddress: '0xD95D30097dcE2cF32b17d23f742F3a0c02b56895',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-fusdt-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FUSDT', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x049d68029688eAbF473097a2fC38ef61633A3C7A',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x049d68029688eabf473097a2fc38ef61633a3c7a',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'boo-ftm-usdc',
  logo: 'fantom/USDC-FTM.png',
  name: 'USDC-FTM LP',
  token: 'USDC-FTM LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-USD-FTM-2',
  earnedTokenAddress: '0xdeED1f3CDA881763315d7Be2E147Fc9BAFCd07e9',
  earnContractAddress: '0xdeED1f3CDA881763315d7Be2E147Fc9BAFCd07e9',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-ftm-usdc',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['USDC', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x04068da6c83afcfa0e13ba15a6696662335d5b75',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [
     
      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

      ...zapTokens,

    ],
  },
},
{
  id: 'boo-ftm-dai',
  logo: 'fantom/DAI-FTM.png',
  name: 'FTM-DAI LP',
  token: 'FTM-DAI LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0xe120ffbda0d14f3bb6d6053e90e63c572a66a428',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-DAI-2',
  earnedTokenAddress: '0x7D2c2194a17A1d6Bc2f288be7fDa22607F587A22',
  earnContractAddress: '0x7D2c2194a17A1d6Bc2f288be7fDa22607F587A22',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-ftm-dai',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'DAI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},
{
  id: 'boo-btc-ftm',
  logo: 'fantom/WBTC-FTM.png',
  name: 'FTM-BTC LP',
  token: 'FTM-BTC LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0xfdb9ab8b9513ad9e419cf19530fee49d412c3ee3',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-BTC-2',
  earnedTokenAddress: '0xDfA8f14ADbfF7f477E8B6e9EA9fAd3ab8594e98B',
  earnContractAddress: '0xDfA8f14ADbfF7f477E8B6e9EA9fAd3ab8594e98B',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-btc-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'BTC'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x321162Cd933E2Be498Cd2267a90534A804051b11',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x321162Cd933E2Be498Cd2267a90534A804051b11',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [
     
      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

      ...zapTokens,

    ],
  },
},
{
  id: 'boo-eth-ftm',
  logo: 'fantom/WETH-FTM.png',
  name: 'FTM-WETH LP',
  token: 'FTM-WETH LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0xf0702249f4d3a25cd3ded7859a165693685ab577',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-WET-2',
  earnedTokenAddress: '0xc1426E48378AfaD5b3cD93580b4B411E60C79536',
  earnContractAddress: '0xc1426E48378AfaD5b3cD93580b4B411E60C79536',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-eth-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['ETH', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x74b23882a30290451A17c44f4F05243b6b58C76d',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x74b23882a30290451A17c44f4F05243b6b58C76d',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'boo-aave-ftm',
  logo: 'fantom/AAVE-FTM.png',
  name: 'FTM-AAVE LP',
  token: 'FTM-AAVE LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0xebf374bb21d83cf010cc7363918776adf6ff2bf6',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-AAV-2',
  earnedTokenAddress: '0x64c2D4de917a0e3f07600281a7a8b1e4e422B588',
  earnContractAddress: '0x64c2D4de917a0e3f07600281a7a8b1e4e422B588',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-aave-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'AAVE'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'boo-ftm-snx',
  logo: 'fantom/SNX-FTM.png',
  name: 'FTM-SNX LP',
  token: 'FTM-SNX LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0x06d173628be105fe81f1c82c9979ba79ebcafcb7',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-SNX-2',
  earnedTokenAddress: '0xAcdcECc12a5e0714add4493B1369C2849232674d',
  earnContractAddress: '0xAcdcECc12a5e0714add4493B1369C2849232674d',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-ftm-snx',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'SNX'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x56ee926bD8c72B2d5fa1aF4d9E4Cbb515a1E3Adc',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x56ee926bD8c72B2d5fa1aF4d9E4Cbb515a1E3Adc',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'boo-ftm-bifi',
  logo: 'fantom/FTM-BIFI.png',
  name: 'FTM-BIFI LP',
  token: 'FTM-BIFI LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0x1656728af3a14e1319F030Dc147fAbf6f627059e',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-BIF-2',
  earnedTokenAddress: '0xDF3a54f99c08f85cFcb0D4a0849736d720EACF27',
  earnContractAddress: '0xDF3a54f99c08f85cFcb0D4a0849736d720EACF27',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-ftm-bifi',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'BIFI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0xd6070ae98b8069de6B494332d1A1a81B6179D960',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0xd6070ae98b8069de6b494332d1a1a81b6179d960',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'boo-ftm-kek',
  logo: 'fantom/KEK-FTM.png',
  name: 'FTM-KEK LP ',
  token: 'FTM-KEK LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0xf3582dbaebb4287b462f00d308911621a960a5fd',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-KEK-2',
  earnedTokenAddress: '0x07CEC07aD0B326d50E205a2a840E1d0d1932b1eB',
  earnContractAddress: '0x07CEC07aD0B326d50E205a2a840E1d0d1932b1eB',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-ftm-kek',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['FTM', 'KEK'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x627524d78B4fC840C887ffeC90563c7A42b671fD',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x627524d78B4fC840C887ffeC90563c7A42b671fD',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'boo-yfi-eth',
  logo: 'fantom/YFI-ETH.png',
  name: 'YFI-ETH LP ',
  token: 'YFI-ETH LP (SpookySwap)',
  tokenDescription: 'SpookySwap',
  tokenAddress: '0x0845c0bfe75691b1e21b24351aac581a7fb6b7df',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-YFI-ETH-2',
  earnedTokenAddress: '0xd93e4Bf751D718C2B5678197955AA91eA59142A8',
  earnContractAddress: '0xd93e4Bf751D718C2B5678197955AA91eA59142A8',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'boo-yfi-eth',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'SpookySwap',
  assets: ['YFI', 'ETH'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/0x29b0Da86e484E1C0029B56e817912d778aC0EC69/0x74b23882a30290451A17c44f4F05243b6b58C76d',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x29b0Da86e484E1C0029B56e817912d778aC0EC69',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'BOO',
        address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
        symbol: 'BOO',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},


{
  id: 'hyper-aurora-ftm',
  logo: 'fantom/AURORA-FTM.png',
  name: 'AURORA-FTM LP ',
  token: 'AURORA-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x483D07BC99CdD1DF66F64aE0A769A70725C46fA4',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-AUR-FTM-3',
  earnedTokenAddress: '0xb4Ed4Ab1079a8683e9759E41FF6e60C50FB42526',
  earnContractAddress: '0xb4Ed4Ab1079a8683e9759E41FF6e60C50FB42526',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-aurora-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['AURORA', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0xbc2451AaD349b6B43FD05F4F0cC327F8A6bcA2d4',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0xbc2451aad349b6b43fd05f4f0cc327f8a6bca2d4',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: 'hyper-ori-ftm',
  logo: 'fantom/ORI-FTM.png',
  name: 'ORI-FTM LP ',
  token: 'ORI-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x0433305Ae161d28eD1408D11581610339dfC9BE4',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ORI-FTM-3',
  earnedTokenAddress: '0xaDc65e44F69e4bB0Fe8A09CFE1c49C59Ed07d022',
  earnContractAddress: '0xaDc65e44F69e4bB0Fe8A09CFE1c49C59Ed07d022',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-ori-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['ORI', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0x0575f8738EFdA7F512e3654F277C77e80C7d2725',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x0575f8738efda7f512e3654f277c77e80c7d2725',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-usdc-ftm',
  logo: 'fantom/USDC-FTM.png',
  name: 'USDC-FTM LP ',
  token: 'USDC-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x50Cc648E45B84D68405BA0707e94c507b08e593d',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-USD-FTM-3',
  earnedTokenAddress: '0x366986561196117Ce020ecC5E6A62e595b20f90d',
  earnContractAddress: '0x366986561196117Ce020ecC5E6A62e595b20f90d',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-usdc-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['USDC', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x04068da6c83afcfa0e13ba15a6696662335d5b75',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-ori-usdc',
  logo: 'fantom/USDC-ORI.png',
  name: 'ORI-USDC LP ',
  token: 'ORI-USDC LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0xF70a9Af9f581c2F752Acc779148712c43E58d2f0',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ORI-USD-3',
  earnedTokenAddress: '0xAA54cfdD1119f29881C0FBC1d506F10BC15b03ae',
  earnContractAddress: '0xAA54cfdD1119f29881C0FBC1d506F10BC15b03ae',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-ori-usdc',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['ORI', 'USDC'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/0x0575f8738EFdA7F512e3654F277C77e80C7d2725/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x0575f8738efda7f512e3654f277c77e80c7d2725',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-dai-ftm',
  logo: 'fantom/DAI-FTM.png',
  name: 'DAI-FTM LP ',
  token: 'DAI-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x6D898d98818e670C695E374ED77cd1753cF109Dd',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-DAI-FTM-3',
  earnedTokenAddress: '0xE8895281398122B1F447De75d35786493Ea9Dc50',
  earnContractAddress: '0xE8895281398122B1F447De75d35786493Ea9Dc50',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-dai-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['DAI', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},


{
  id: 'hyper-dai-usdc',
  logo: 'fantom/DAI-USDC.png',
  name: 'DAI-USDC LP ',
  token: 'DAI-USDC LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0xD7Ee3fd59a2d8082B56319f858fceaD9a902C0A1',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-DAI-USD-3',
  earnedTokenAddress: '0x71af16B836Ba3855608a910D3E45b22B27ddF8B3',
  earnContractAddress: '0x71af16B836Ba3855608a910D3E45b22B27ddF8B3',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-dai-usdc',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['DAI', 'USDC'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-eth-ftm',
  logo: 'fantom/WETH-FTM.png',
  name: 'ETH-FTM LP ',
  token: 'ETH-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0xc81a9cE5Be68dF6A52F82D83398420D8A1C245c2',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ETH-FTM-3',
  earnedTokenAddress: '0xa286d50AE31AcA88Ab8C1C0c0E495CC991f082fE',
  earnContractAddress: '0xa286d50AE31AcA88Ab8C1C0c0E495CC991f082fE',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-eth-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['ETH', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0x74b23882a30290451A17c44f4F05243b6b58C76d',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x74b23882a30290451A17c44f4F05243b6b58C76d',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-eth-ori',
  logo: 'fantom/WETH-ORI.png',
  name: 'ETH-ORI LP ',
  token: 'ETH-ORI LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0xb18E654Af9c3bd229aD72C9F1e8B67518CE6aF37',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ETH-ORI-3',
  earnedTokenAddress: '0x0F2c793F77645706b57491F301D870085980e1a4',
  earnContractAddress: '0x0F2c793F77645706b57491F301D870085980e1a4',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-eth-ori',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['ETH', 'ORI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/0x74b23882a30290451A17c44f4F05243b6b58C76d/0x0575f8738EFdA7F512e3654F277C77e80C7d2725',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x0575f8738efda7f512e3654f277c77e80c7d2725',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-btc-ftm',
  logo: 'fantom/WBTC-FTM.png',
  name: 'BTC-FTM LP ',
  token: 'BTC-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x9a2B08B7620B8c387d96f9C1DC315aFD93651F5e',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BTC-FTM-3',
  earnedTokenAddress: '0x9aFe2842C694ae3C3b444d048356c4e42553ee22',
  earnContractAddress: '0x9aFe2842C694ae3C3b444d048356c4e42553ee22',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-btc-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['BTC', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0x321162Cd933E2Be498Cd2267a90534A804051b11',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x321162Cd933E2Be498Cd2267a90534A804051b11',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-btc-ori',
  logo: 'fantom/WBTC-ORI.png',
  name: 'BTC-ORI LP ',
  token: 'BTC-ORI LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0xdDe0ACA9Dc806544f7D5D4DD308a4ee065364Cca',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BTC-ORI-3',
  earnedTokenAddress: '0x122B48eca046F467d54A76D81c3bf874Bf2c2F2C',
  earnContractAddress: '0x122B48eca046F467d54A76D81c3bf874Bf2c2F2C',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-btc-ori',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['BTC', 'ORI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/0x321162Cd933E2Be498Cd2267a90534A804051b11/0x0575f8738EFdA7F512e3654F277C77e80C7d2725',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x0575f8738efda7f512e3654f277c77e80c7d2725',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-link-ftm',
  logo: 'fantom/LINK-FTM.png',
  name: 'LINK-FTM LP ',
  token: 'LINK-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x442bEcA06141F99466d288bde60e79330eCbDf51',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-LIN-FTM-3',
  earnedTokenAddress: '0x645cA2db228902B86c9026ACf8f824EA2A94E19B',
  earnContractAddress: '0x645cA2db228902B86c9026ACf8f824EA2A94E19B',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-link-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['LINK', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-link-ori',
  logo: 'fantom/LINK-ORI.png',
  name: 'LINK-ORI LP ',
  token: 'LINK-ORI LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x9571d8B11035657d6FcC26fbD26ABFa23Fb62ae2',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-LIN-ORI-3',
  earnedTokenAddress: '0xb87f072126C28A7834E402a1E4B7E41ac81b70b8',
  earnContractAddress: '0xb87f072126C28A7834E402a1E4B7E41ac81b70b8',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-link-ori',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['LINK', 'ORI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8/0x0575f8738EFdA7F512e3654F277C77e80C7d2725',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x0575f8738efda7f512e3654f277c77e80c7d2725',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-sushi-ftm',
  logo: 'fantom/SUSHI-FTM.png',
  name: 'SUSHI-FTM LP ',
  token: 'SUSHI-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0xF9f979b0283031c4afA4d668626779363B5fE510',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SUS-FTM-3',
  earnedTokenAddress: '0xAee374a0B974ce7f270c28b6008186941aeEb213',
  earnContractAddress: '0xAee374a0B974ce7f270c28b6008186941aeEb213',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-sushi-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['SUSHI', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},
{
  id: 'hyper-yfi-ftm',
  logo: 'fantom/YFI-FTM.png',
  name: 'YFI-FTM LP ',
  token: 'YFI-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0xbD9d4981dEd98F5Dedfd7920C3857c4d6A5eA113',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-YFI-FTM-3',
  earnedTokenAddress: '0x34a3FEb169F3718ACE8829B46c0bA7638a32A452',
  earnContractAddress: '0x34a3FEb169F3718ACE8829B46c0bA7638a32A452',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-yfi-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['YFI', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0x29b0Da86e484E1C0029B56e817912d778aC0EC69',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x29b0Da86e484E1C0029B56e817912d778aC0EC69',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},
{
  id: 'hyper-snx-ftm',
  logo: 'fantom/SNX-FTM.png',
  name: 'SNX-FTM LP ',
  token: 'SNX-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0xF2fCd382Ee404B105bfc0086ED41F1Bd19B8952a',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SNX-FTM-3',
  earnedTokenAddress: '0x12ff76Dbf229CC2B54F12384585a6f7Bc5481202',
  earnContractAddress: '0x12ff76Dbf229CC2B54F12384585a6f7Bc5481202',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-snx-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['SNX', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0x56ee926bD8c72B2d5fa1aF4d9E4Cbb515a1E3Adc',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x56ee926bD8c72B2d5fa1aF4d9E4Cbb515a1E3Adc',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-ftm-eswap',
  logo: 'fantom/FTM-ESWAP.png',
  name: 'FTM-ESWAP LP ',
  token: 'FTM-ESWAP LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x08492d0fF546B08a9Fb3bd056665cfD240B7D55c',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-ESW-3',
  earnedTokenAddress: '0xD10780626b6b3Cca8724E9d998e25E7C01b89CF0',
  earnContractAddress: '0xD10780626b6b3Cca8724E9d998e25E7C01b89CF0',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-ftm-eswap',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['FTM', 'ESWAP'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0x735aBE48e8782948a37C7765ECb76b98CdE97B0F',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x735abe48e8782948a37c7765ecb76b98cde97b0f',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},


{
  id: 'hyper-ori-eswap',
  logo: 'fantom/ORI-ESWAP.png',
  name: 'ORI-ESWAP LP ',
  token: 'ORI-ESWAP LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x1935776c366db172a3c4881c7548Cd35D7457c5c',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ORI-ESW-3',
  earnedTokenAddress: '0x253641B5e9627F53072F06eD0C5f16bA629C70a1',
  earnContractAddress: '0x253641B5e9627F53072F06eD0C5f16bA629C70a1',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-ori-eswap',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['ORI', 'ESWAP'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/0x0575f8738EFdA7F512e3654F277C77e80C7d2725/0x735aBE48e8782948a37C7765ECb76b98CdE97B0F',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x0575f8738efda7f512e3654f277c77e80c7d2725',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-bnb-ftm',
  logo: 'fantom/BNB-FTM.png',
  name: 'BNB-FTM LP ',
  token: 'BNB-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x55c5B2868eae98f38C8c6b84435eD90B400466f9',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BNB-FTM-3',
  earnedTokenAddress: '0x49fF9Fed2aC69275eC1Ab4D0b194BcA1ed280199',
  earnContractAddress: '0x49fF9Fed2aC69275eC1Ab4D0b194BcA1ed280199',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-bnb-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['BNB', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0xd67de0e0a0fd7b15dc8348bb9be742f3c5850454',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-rbtc-ftm',
  logo: 'fantom/RENBTC-FTM.png',
  name: 'renBTC-FTM LP ',
  token: 'renBTC-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x91BDC3Dc2028E53Be65f7fd84f21a4a46eA3CB4B',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-RBT-FTM-3',
  earnedTokenAddress: '0x144117cce4CcFDCc9B56F2fE13d5c367E2960014',
  earnContractAddress: '0x144117cce4CcFDCc9B56F2fE13d5c367E2960014',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-rbtc-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['renBTC', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0xdbf31df14b66535af65aac99c32e9ea844e14501',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-rbtc-ori',
  logo: 'fantom/RENBTC-ORI.png',
  name: 'renBTC-ORI LP ',
  token: 'renBTC-ORI LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0xB7A8659fe7a9741EB2082F177d102f58C86BBe87',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-RBT-ORI-3',
  earnedTokenAddress: '0x891D65d1227170210C90d94d7B4cd75445DEEA8F',
  earnContractAddress: '0x891D65d1227170210C90d94d7B4cd75445DEEA8F',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-rbtc-ori',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['renBTC', 'ORI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/0x0575f8738EFdA7F512e3654F277C77e80C7d2725/0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x0575f8738efda7f512e3654f277c77e80c7d2725',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-rzec-ftm',
  logo: 'fantom/RENZEC-FTM.png',
  name: 'renZEC-FTM LP ',
  token: 'renZEC-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x6B7EDB556B0428fa4FE58609052618b56CCC7C46',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-RZE-FTM-3',
  earnedTokenAddress: '0x17c64A789a46F7D64b102eb3744876aa4B88Df7e',
  earnContractAddress: '0x17c64A789a46F7D64b102eb3744876aa4B88Df7e',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-rzec-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['renZEC', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0x31a0D1A199631D244761EEba67e8501296d2E383',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x31a0d1a199631d244761eeba67e8501296d2e383',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-rzec-ori',
  logo: 'fantom/RENZEC-ORI.png',
  name: 'renZEC-ORI LP ',
  token: 'renZEC-ORI LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x28ac64a278A51c84E0C4C65ba561148e5b15CF43',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-RZE-ORI-3',
  earnedTokenAddress: '0x32e648Ac5FFeDf07170b5b1a8e79515058230083',
  earnContractAddress: '0x32e648Ac5FFeDf07170b5b1a8e79515058230083',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-rzec-ori',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['renZEC', 'ORI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/0x0575f8738EFdA7F512e3654F277C77e80C7d2725/0x31a0D1A199631D244761EEba67e8501296d2E383',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x0575f8738efda7f512e3654f277c77e80c7d2725',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-rbch-ftm',
  logo: 'fantom/RENBCH-FTM.png',
  name: 'renBCH-FTM LP ',
  token: 'renBCH-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0xCb90e14e3d73090C6137623225c2E155272038D2',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-RBC-FTM-3',
  earnedTokenAddress: '0xB6beCceED9bcb92B1cf475F473E7F81471b2d2d4',
  earnContractAddress: '0xB6beCceED9bcb92B1cf475F473E7F81471b2d2d4',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-rbch-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['renBCH', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0xc3fEd6eB39178A541D274e6Fc748d48f0Ca01CC3',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0xc3fEd6eB39178A541D274e6Fc748d48f0Ca01CC3',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-rbch-ori',
  logo: 'fantom/RENBCH-ORI.png',
  name: 'renBCH-ORI LP ',
  token: 'renBCH-ORI LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x9b6553e4A939DC1f56524337AE10E298B3aFb9CD',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-RBC-ORI-3',
  earnedTokenAddress: '0xD3CF64FDA8b2e22167f8253009dC1A149DfCd87B',
  earnContractAddress: '0xD3CF64FDA8b2e22167f8253009dC1A149DfCd87B',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-rbch-ori',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['renBCH', 'ORI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/0x0575f8738EFdA7F512e3654F277C77e80C7d2725/0xc3fEd6eB39178A541D274e6Fc748d48f0Ca01CC3',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x0575f8738efda7f512e3654f277c77e80c7d2725',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-ice-ftm',
  logo: 'fantom/ICE-FTM.png',
  name: 'ICE-FTM LP ',
  token: 'ICE-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x3D7bC2eE79a21e56dc52B874de3aD5c341f6D888',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ICE-FTM-3',
  earnedTokenAddress: '0x27F261FCDf1Df0Af1D557dAADB40ad53556c90A9',
  earnContractAddress: '0x27F261FCDf1Df0Af1D557dAADB40ad53556c90A9',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-ice-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['ICE', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/0xf16e81dce15B08F326220742020379B855B87DF9/FTM',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0xf16e81dce15b08f326220742020379b855b87df9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-zoo-ftm',
  logo: 'fantom/ZOO-FTM.png',
  name: 'ZOO-FTM LP ',
  token: 'ZOO-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0xe200510dC1F28b53C1b1f629861ddE4f8B06B373',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ZOO-FTM-3',
  earnedTokenAddress: '0xC90fff6f55191788A6bE165129caFe8E446251f9',
  earnContractAddress: '0xC90fff6f55191788A6bE165129caFe8E446251f9',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-zoo-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['ZOO', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/0x09e145A1D53c0045F41aEEf25D8ff982ae74dD56/FTM',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x09e145a1d53c0045f41aeef25d8ff982ae74dd56',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-crv-ftm',
  logo: 'fantom/CRV-FTM.png',
  name: 'CRV-FTM LP ',
  token: 'CRV-FTM LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x7785698F2Aa354558C77a0186bE0dFD2a9B2452d',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CRV-FTM-3',
  earnedTokenAddress: '0x669dcA8f88296eC7CA8d180621B36919fd88E292',
  earnContractAddress: '0x669dcA8f88296eC7CA8d180621B36919fd88E292',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-crv-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['CRV', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/0x1E4F97b9f9F913c46F1632781732927B9019C68b/FTM',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x1E4F97b9f9F913c46F1632781732927B9019C68b',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'hyper-crv-ori',
  logo: 'fantom/CRV-ORI.png',
  name: 'CRV-ORI LP ',
  token: 'CRV-ORI LP (HyperJump)',
  tokenDescription: 'HyperJump',
  tokenAddress: '0x1449Eb84698D6C2faf86863faB8A91aa975ef2F8',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CRV-ORI-3',
  earnedTokenAddress: '0x314eCbD766664c1371BaaFd267395Db97ac75c0b',
  earnContractAddress: '0x314eCbD766664c1371BaaFd267395Db97ac75c0b',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'hyper-crv-ori',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'HyperJump',
  assets: ['CRV', 'ORI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/0x1E4F97b9f9F913c46F1632781732927B9019C68b/0x0575f8738EFdA7F512e3654F277C77e80C7d2725',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x0575f8738efda7f512e3654f277c77e80c7d2725',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [

      {
        name: 'ORI',
        address: '0x0575f8738efda7f512e3654f277c77e80c7d2725',
        symbol: 'ORI',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'waka-waka-ftm',
  logo: 'fantom/WAKA-FTM.png',
  name: 'WAKA-FTM LP',
  token: 'WAKA-FTM LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x696885e9581bd33ee9877bd8750ddda65381ff01',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-WAK-FTM-4',
  earnedTokenAddress: '0x7cC3C243CB8e2f9Ddef1e37bDc27dBa162109FE2',
  earnContractAddress: '0x7cC3C243CB8e2f9Ddef1e37bDc27dBa162109FE2',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-waka-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['WAKA', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'waka-ftm-wbtc',
  logo: 'fantom/WBTC-FTM.png',
  name: 'FTM-WBTC LP',
  token: 'FTM-WBTC LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x195C45044B121D8CAF4C9e2d8F47fb81f4E12f21',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-WBT-4',
  earnedTokenAddress: '0x4574005C8DB94210bA17F7b0591c118Df0E1f6DB',
  earnContractAddress: '0x4574005C8DB94210bA17F7b0591c118Df0E1f6DB',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-wbtc',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'BTC'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'waka-ftm-yfi',
  logo: 'fantom/YFI-FTM.png',
  name: 'FTM-YFI LP',
  token: 'FTM-YFI LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0xb0e5d65b4c22ff9f099e449df03acb3a57bb5f27',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-YFI-4',
  earnedTokenAddress: '0x46982CAA0d955F3aC70Fa7CAE127e4D9Eb409CC4',
  earnContractAddress: '0x46982CAA0d955F3aC70Fa7CAE127e4D9Eb409CC4',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-yfi',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'YFI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'waka-ftm-usdc',
  logo: 'fantom/USDC-FTM.png',
  name: 'FTM-USDC LP',
  token: 'FTM-USDC LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x97a490e7c90b4d8f6d18752672f4c8e3c35891a2',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-USD-4',
  earnedTokenAddress: '0xaFce788BA91b7BbBbFd80f29FD871EC07F0B5D9c',
  earnContractAddress: '0xaFce788BA91b7BbBbFd80f29FD871EC07F0B5D9c',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-usdc',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'USDC'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'waka-ftm-dai',
  logo: 'fantom/DAI-FTM.png',
  name: 'FTM-DAI LP',
  token: 'FTM-DAI LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x78da2bd2c18837c9d1b9008c81078e378f1952c6',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-DAI-4',
  earnedTokenAddress: '0x847D8c0C0b7e5afce86dBEeaE782B178eba12D5B',
  earnContractAddress: '0x847D8c0C0b7e5afce86dBEeaE782B178eba12D5B',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-dai',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'DAI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
      
      ...zapTokens,



    ],
  },
},
{
  id: 'waka-ftm-sushi',
  logo: 'fantom/SUSHI-FTM.png',
  name: 'FTM-SUSHI LP',
  token: 'FTM-SUSHI LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x1b084cda6e11347b3c15eae537cf8a7ce39f96da',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-SUS-4',
  earnedTokenAddress: '0xAf677319f6cb43827bB1a9fE4ba74406E88984bD',
  earnContractAddress: '0xAf677319f6cb43827bB1a9fE4ba74406E88984bD',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-sushi',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'SUSHI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},
{
  id: 'waka-ftm-badger',
  logo: 'fantom/BADGER-FTM.png',
  name: 'FTM-BADGER LP',
  token: 'FTM-BADGER LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x8a400d6bf3cdf070af6e3312ef4f9681f16a92bd',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-BAD-4',
  earnedTokenAddress: '0xF8963c3B8705F312B8b38CdE3d8B411a4D5b6317',
  earnContractAddress: '0xF8963c3B8705F312B8b38CdE3d8B411a4D5b6317',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-badger',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'BADGER'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},
{
  id: 'waka-ftm-aave',
  logo: 'fantom/AAVE-FTM.png',
  name: 'FTM-AAVE LP',
  token: 'FTM-AAVE LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x2e783ce36830a6274761cc4a9d04d275553f3bc1',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-AAV-4',
  earnedTokenAddress: '0x5d2289dA1bb9718Ffa6560FEdE8e25CB81175202',
  earnContractAddress: '0x5d2289dA1bb9718Ffa6560FEdE8e25CB81175202',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-aave',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'AAVE'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},
{
  id: 'waka-ftm-ice',
  logo: 'fantom/ICE-FTM.png',
  name: 'FTM-ICE LP',
  token: 'FTM-ICE LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0xef179689b6d242ffc93dfc69241f74d4d391fa7c',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-ICE-4',
  earnedTokenAddress: '0x50b3A8bCd47174b9B4F2386AF93FeC616c43C946',
  earnContractAddress: '0x50b3A8bCd47174b9B4F2386AF93FeC616c43C946',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-ice',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'ICE'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},
{
  id: 'waka-ftm-snx',
  logo: 'fantom/SNX-FTM.png',
  name: 'FTM-SNX LP',
  token: 'FTM-SNX LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0xff09b99aed8fb58c209904f6adc4a1fcceea79ac',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-SNX-4',
  earnedTokenAddress: '0x981A93DcFF4FC1143942e342bc9BB3E67A2b8775',
  earnContractAddress: '0x981A93DcFF4FC1143942e342bc9BB3E67A2b8775',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-snx',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'SNX'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},
{
  id: 'waka-ftm-cream',
  logo: 'fantom/CREAM-FTM.png',
  name: 'FTM-CREAM LP',
  token: 'FTM-CREAM LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x3c4ad49f26b47f00f7e5165b942d41367dd60a04',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-CRE-4',
  earnedTokenAddress: '0x0266e2DF6D0f6e6f2C40eB84bBC9cD2487DCA30C',
  earnContractAddress: '0x0266e2DF6D0f6e6f2C40eB84bBC9cD2487DCA30C',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-cream',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'CREAM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},
{
  id: 'waka-ftm-cover',
  logo: 'fantom/COVER-FTM.png',
  name: 'FTM-COVER LP',
  token: 'FTM-COVER LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x9c58df352fcd984700c57324a116845378adc5ba',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-COV-4',
  earnedTokenAddress: '0x8a88A650612E0362C9e8c21139bb617DB12241D7',
  earnContractAddress: '0x8a88A650612E0362C9e8c21139bb617DB12241D7',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-cover',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'COVER'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},
{
  id: 'waka-ftm-link',
  logo: 'fantom/LINK-FTM.png',
  name: 'FTM-LINK LP',
  token: 'FTM-LINK LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x32736ae178d0debf137326a0c0c6d50e374d9f19',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-LIN-4',
  earnedTokenAddress: '0x3066bE17129857bFeEe112c14887dd8abAc2e590',
  earnContractAddress: '0x3066bE17129857bFeEe112c14887dd8abAc2e590',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-link',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'LINK'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},
{
  id: 'waka-ftm-crv',
  logo: 'fantom/CRV-FTM.png',
  name: 'FTM-CRV LP',
  token: 'FTM-CRV LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x3b1b72d6de14a45096227c3319dd58fceae95faf',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-CRV-4',
  earnedTokenAddress: '0x820345700b090DEE21EB6322484A1511423ddd83',
  earnContractAddress: '0x820345700b090DEE21EB6322484A1511423ddd83',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-crv',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'CRV'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},
{
  id: 'waka-ftm-band',
  logo: 'fantom/BAND-FTM.png',
  name: 'FTM-BAND LP',
  token: 'FTM-BAND LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x60ff8c1dffc8252cfd94c07f65feb4ce90ee9b99',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-BAN-4',
  earnedTokenAddress: '0x163b6C8A510Ba7c4487d47d3E709Af00A1a7d340',
  earnContractAddress: '0x163b6C8A510Ba7c4487d47d3E709Af00A1a7d340',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-band',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'BAND'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},
{
  id: 'waka-ftm-weth',
  logo: 'fantom/WETH-FTM.png',
  name: 'FTM-WETH LP',
  token: 'FTM-WETH LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x0eea1bf6342c71171882c2ac3838a9c78e00b5cb',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-WET-4',
  earnedTokenAddress: '0x334c090e07d14280Af91Bf2b3a12eCA3913DF1A8',
  earnContractAddress: '0x334c090e07d14280Af91Bf2b3a12eCA3913DF1A8',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-weth',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'ETH'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'waka-ftm-atari',
  logo: 'fantom/ATARI-FTM.png',
  name: 'FTM-ATARI LP',
  token: 'FTM-ATARI LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x0370dc24570ed93db0b67d20340923e56c0aadd9',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-ATA-4',
  earnedTokenAddress: '0x9A84E461b83173b1E36a72965C3875986aA439a8',
  earnContractAddress: '0x9A84E461b83173b1E36a72965C3875986aA439a8',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-atari',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'ATARI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'waka-ftm-bomb',
  logo: 'fantom/FTM-BOMB.png',
  name: 'FTM-BOMB LP',
  token: 'FTM-BOMB LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0xbb51d140661bfc4232d0838a0400d5161984616f',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-BOM-4',
  earnedTokenAddress: '0x833660249bF4a60Ea9146C90773Ba0a30d704B8d',
  earnContractAddress: '0x833660249bF4a60Ea9146C90773Ba0a30d704B8d',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-bomb',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'BOMB'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'waka-ftm-shiba',
  logo: 'fantom/FTM-SHIBA.png',
  name: 'FTM-SHIBA LP',
  token: 'FTM-SHIBA LP (WakaSwap)',
  tokenDescription: 'WakaSwap',
  tokenAddress: '0x5d520c7cfd8ed8acf2b2529e374676121639680a',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-SHI-4',
  earnedTokenAddress: '0x528DF137C8131760aa7f340737Bf2CE60Fb16aDe',
  earnContractAddress: '0x528DF137C8131760aa7f340737Bf2CE60Fb16aDe',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'waka-ftm-shiba',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'WakaSwap',
  assets: ['FTM', 'SHIBA'],
  callFee: 0.5,
  addLiquidityUrl: 'https://waka.finance/#/liquidity',
  buyTokenUrl: 'https://waka.finance/#/exchange',
  zap: {
    zapAddress: VAULT_ZAP,
    router: WAKA_ROUTER,

    tokens: [

      {
        name: 'WAKA',
        address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
        symbol: 'WAKA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},



{
  id: 'gbone-shiba-ftm',
  logo: 'fantom/SHIBA-FTM.png',
  name: 'SHIBA-FTM LP',
  token: 'SHIBA-FTM LP (ShibaSwap)',
  tokenDescription: 'ShibaSwap',
  tokenAddress: '0xD7199dc9F406444808930F72701E8ed9F18c4767',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SHI-FTM-I',
  earnedTokenAddress: '0xA70FFD8DC102E5AC465f35e806f45885d7A08b09',
  earnContractAddress: '0xA70FFD8DC102E5AC465f35e806f45885d7A08b09',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'gbone-shiba-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShibaSwap',
  assets: ['SHIBA','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.shibafantom.finance/#/add/FTM/0x9Ba3e4F84a34DF4e08C112e1a0FF148b81655615',
  buyTokenUrl: 'https://swap.shibafantom.finance/#/swap?outputCurrency=0x9ba3e4f84a34df4e08c112e1a0ff148b81655615',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SHIBA_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'gbone-gbone-shiba',
  logo: 'fantom/GBONE-SHIBA.png',
  name: 'GBONE-SHIBA LP',
  token: 'GBONE-SHIBA LP (ShibaSwap)',
  tokenDescription: 'ShibaSwap',
  tokenAddress: '0x76A40824e2a554349290BD53CaC78653d062Fe21',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-GBO-SHI-I',
  earnedTokenAddress: '0x27839BF179B72D6B78c021281E7065f689EeAA60',
  earnContractAddress: '0x27839BF179B72D6B78c021281E7065f689EeAA60',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'gbone-gbone-shiba',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShibaSwap',
  assets: ['GBONE','SHIBA'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.shibafantom.finance/#/add/0x004B122eb5632077abdD2C38e8d9392348d5cA15/0x9Ba3e4F84a34DF4e08C112e1a0FF148b81655615',
  buyTokenUrl: 'https://swap.shibafantom.finance/#/swap?outputCurrency=0x004B122eb5632077abdD2C38e8d9392348d5cA15',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SHIBA_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'gbone-gbone-ftm',
  logo: 'fantom/GBONE-FTM.png',
  name: 'GBONE-FTM LP',
  token: 'GBONE-FTM LP (ShibaSwap)',
  tokenDescription: 'ShibaSwap',
  tokenAddress: '0x881D898BA9806D5065e5fe4dd26991d57bA32Ff0',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-GBO-FTM-I',
  earnedTokenAddress: '0xA2f1Aa5b9290437FED8056Bd2F9bCa656A75607a',
  earnContractAddress: '0xA2f1Aa5b9290437FED8056Bd2F9bCa656A75607a',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'gbone-gbone-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShibaSwap',
  assets: ['GBONE','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.shibafantom.finance/#/add/0x004B122eb5632077abdD2C38e8d9392348d5cA15/FTM',
  buyTokenUrl: 'https://swap.shibafantom.finance/#/swap?outputCurrency=0x004B122eb5632077abdD2C38e8d9392348d5cA15',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SHIBA_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'bone-bone-ftm',
  logo: 'fantom/BONE-FTM.png',
  name: 'BONE-FTM LP',
  token: 'BONE-FTM LP (ShibaSwap)',
  tokenDescription: 'ShibaSwap',
  tokenAddress: '0xFb6732e6b145Dd4b11eFD6725A759056Fa605EbF',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BON-FTM-I',
  earnedTokenAddress: '0xCafA45755086DfCd37A707eaBC33A6d65bf73256',
  earnContractAddress: '0xCafA45755086DfCd37A707eaBC33A6d65bf73256',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bone-bone-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShibaSwap',
  assets: ['BONE','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.shibafantom.finance/#/add/0x8a0d557BB132Dbe2C9Aa3CFb6Ef81eeE4107057a/FTM',
  buyTokenUrl: 'https://swap.shibafantom.finance/#/swap?outputCurrency=0x8a0d557BB132Dbe2C9Aa3CFb6Ef81eeE4107057a',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SHIBA_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'bone-ftm-usdc',
  logo: 'fantom/USDC-FTM.png',
  name: 'FTM-USDC LP',
  token: 'FTM-USDC LP (ShibaSwap)',
  tokenDescription: 'ShibaSwap',
  tokenAddress: '0x9C2BeaC6062b843b23CF96FF53B5C63193Da92bb',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-USD-I',
  earnedTokenAddress: '0xA63792Cd616D67B7D5Daa249B689f646B6732ACe',
  earnContractAddress: '0xA63792Cd616D67B7D5Daa249B689f646B6732ACe',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bone-ftm-usdc',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShibaSwap',
  assets: ['USDC','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.shibafantom.finance/#/add/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/FTM',
  buyTokenUrl: 'https://swap.shibafantom.finance/#/swap?outputCurrency=0x8a0d557BB132Dbe2C9Aa3CFb6Ef81eeE4107057a',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SHIBA_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'bone-boo-ftm',
  logo: 'fantom/BOO-FTM.png',
  name: 'BOO-FTM LP',
  token: 'BOO-FTM LP (ShibaSwap)',
  tokenDescription: 'ShibaSwap',
  tokenAddress: '0x2980380598Ca85295637499D52fbB271c051d9d3',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BOO-FTM-I',
  earnedTokenAddress: '0x2E97Dc857010f450f6bDDC7a8902fd3ae15A99D7',
  earnContractAddress: '0x2E97Dc857010f450f6bDDC7a8902fd3ae15A99D7',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bone-boo-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShibaSwap',
  assets: ['BOO','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.shibafantom.finance/#/add/0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE/FTM',
  buyTokenUrl: 'https://swap.shibafantom.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SHIBA_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'bone-waka-ftm',
  logo: 'fantom/WAKA-FTM.png',
  name: 'WAKA-FTM LP',
  token: 'WAKA-FTM LP (ShibaSwap)',
  tokenDescription: 'ShibaSwap',
  tokenAddress: '0x83Df88197db0AaC646162ae53C5eCdBD066f6fae',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-WAK-FTM-I',
  earnedTokenAddress: '0x56204721C73b4f7d5b78779E0f36003e34d34d79',
  earnContractAddress: '0x56204721C73b4f7d5b78779E0f36003e34d34d79',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bone-waka-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShibaSwap',
  assets: ['WAKA','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.shibafantom.finance/#/add/0xf61cCdE1D4bB76CeD1dAa9D4c429cCA83022B08B/FTM',
  buyTokenUrl: 'https://swap.shibafantom.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SHIBA_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'bone-dai-ftm',
  logo: 'fantom/DAI-FTM.png',
  name: 'DAI-FTM LP',
  token: 'DAI-FTM LP (ShibaSwap)',
  tokenDescription: 'ShibaSwap',
  tokenAddress: '0x200c4f35c03845b340629527799d38177f5fb283',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-DAI-FTM-I',
  earnedTokenAddress: '0x327a8262e8ab9504e2c3Cde37ccfD34F10C48806',
  earnContractAddress: '0x327a8262e8ab9504e2c3Cde37ccfD34F10C48806',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bone-dai-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShibaSwap',
  assets: ['DAI','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.shibafantom.finance/#/add/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E/FTM',
  buyTokenUrl: 'https://swap.shibafantom.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SHIBA_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'bone-fusdt-ftm',
  logo: 'fantom/FUSDT-FTM.png',
  name: 'FUSDT-FTM LP',
  token: 'FUSDT-FTM LP (ShibaSwap)',
  tokenDescription: 'ShibaSwap',
  tokenAddress: '0x7de2e65476B0a08e49c5D0f30A4cF567047cd80E',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FUS-FTM-I',
  earnedTokenAddress: '0xaaE9836068D9321bA13E2456e96eb6b27DE77bf9',
  earnContractAddress: '0xaaE9836068D9321bA13E2456e96eb6b27DE77bf9',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bone-fusdt-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShibaSwap',
  assets: ['FUSDT','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.shibafantom.finance/#/add/0x049d68029688eAbF473097a2fC38ef61633A3C7A/FTM',
  buyTokenUrl: 'https://swap.shibafantom.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SHIBA_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'bone-eth-ftm',
  logo: 'fantom/WETH-FTM.png',
  name: 'ETH-FTM LP',
  token: 'ETH-FTM LP (ShibaSwap)',
  tokenDescription: 'ShibaSwap',
  tokenAddress: '0xcaD589120FdcF8083d076b2467d884742783e5B3',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ETH-FTM-I',
  earnedTokenAddress: '0x63127BFE9B0f0100758065AB9a7b2520c3A8d667',
  earnContractAddress: '0x63127BFE9B0f0100758065AB9a7b2520c3A8d667',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bone-eth-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShibaSwap',
  assets: ['ETH','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.shibafantom.finance/#/add/0x74b23882a30290451A17c44f4F05243b6b58C76d/FTM',
  buyTokenUrl: 'https://swap.shibafantom.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SHIBA_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'bone-btc-ftm',
  logo: 'fantom/WBTC-FTM.png',
  name: 'BTC-FTM LP',
  token: 'BTC-FTM LP (ShibaSwap)',
  tokenDescription: 'ShibaSwap',
  tokenAddress: '0xe0D5053E2d98831F092F7289a21DA8Fc54330F4b',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BTC-FTM-I',
  earnedTokenAddress: '0xd4D3Baeb0a248c9AE78100e00011f1dC28905580',
  earnContractAddress: '0xd4D3Baeb0a248c9AE78100e00011f1dC28905580',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bone-btc-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShibaSwap',
  assets: ['BTC','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.shibafantom.finance/#/add/0x321162Cd933E2Be498Cd2267a90534A804051b11/FTM',
  buyTokenUrl: 'https://swap.shibafantom.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SHIBA_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'bone-bnb-ftm',
  logo: 'fantom/BNB-FTM.png',
  name: 'BNB-FTM LP',
  token: 'BNB-FTM LP (ShibaSwap)',
  tokenDescription: 'ShibaSwap',
  tokenAddress: '0xC2FC322BaE7804d4c1a655189DCE78eBeBaECfc8',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BNB-FTM-I',
  earnedTokenAddress: '0xeF4fA79EE085e2Cb012be244535026405DD60B25',
  earnContractAddress: '0xeF4fA79EE085e2Cb012be244535026405DD60B25',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bone-bnb-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShibaSwap',
  assets: ['BNB','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.shibafantom.finance/#/add/0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454/FTM',
  buyTokenUrl: 'https://swap.shibafantom.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SHIBA_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'bone-lqdr-ftm',
  logo: 'fantom/LQDR-FTM.png',
  name: 'LQDR-FTM LP',
  token: 'LQDR-FTM LP (ShibaSwap)',
  tokenDescription: 'ShibaSwap',
  tokenAddress: '0x93C9Ca8B2C26c9D61Eb35a1ca6b464f995E48DAc',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-LQD-FTM-I',
  earnedTokenAddress: '0xD60b5FC3f02e6e42a56C6669555649F5Ba01cFEC',
  earnContractAddress: '0xD60b5FC3f02e6e42a56C6669555649F5Ba01cFEC',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bone-lqdr-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShibaSwap',
  assets: ['LQDR','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.shibafantom.finance/#/add/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9/FTM',
  buyTokenUrl: 'https://swap.shibafantom.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SHIBA_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'bone-nips-ftm',
  logo: 'fantom/NIPS-FTM.png',
  name: 'NIPS-FTM LP',
  token: 'NIPS-FTM LP (ShibaSwap)',
  tokenDescription: 'ShibaSwap',
  tokenAddress: '0x9605f6CC0E930c21965241bDA304A3437CdBD94B',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-NIP-FTM-I',
  earnedTokenAddress: '0x026F4E45A42E88f70F0B4BA9869035b538F351e4',
  earnContractAddress: '0x026F4E45A42E88f70F0B4BA9869035b538F351e4',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bone-nips-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShibaSwap',
  assets: ['NIPS','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.shibafantom.finance/#/add/0x667Afbb7D558c3dFd20fAbd295D31221Dab9dBC2/FTM',
  buyTokenUrl: 'https://swap.shibafantom.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SHIBA_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'bone-bone-shiba',
  logo: 'fantom/BONE-SHIBA.png',
  name: 'BONE-SHIBA LP',
  token: 'BONE-SHIBA LP (ShibaSwap)',
  tokenDescription: 'ShibaSwap',
  tokenAddress: '0x7dF481f03c3dA6A609aDcA14AB2a99F8040c4C3C',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BON-SHI-I',
  earnedTokenAddress: '0x0Ca6d894fEB5d99b299386ad6dF1367fa82afdd1',
  earnContractAddress: '0x0Ca6d894fEB5d99b299386ad6dF1367fa82afdd1',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bone-bone-shiba',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShibaSwap',
  assets: ['BONE','SHIBA'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.shibafantom.finance/#/add/0x8a0d557BB132Dbe2C9Aa3CFb6Ef81eeE4107057a/0x9Ba3e4F84a34DF4e08C112e1a0FF148b81655615',
  buyTokenUrl: 'https://swap.shibafantom.finance/#/swap?outputCurrency=0x8a0d557BB132Dbe2C9Aa3CFb6Ef81eeE4107057a',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SHIBA_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'curve-ftm-fusdt',
  logo: 'fantom/DAI-USDC-FUSDT.png',
  name: 'DAI-USDT-FUSDT LP',
  token: 'FUSDT-2CRV LP (Curve)',
  tokenDescription: 'Curve',
  tokenAddress: '0x92D5ebF3593a92888C25C0AbEF126583d4b5312E',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'GCRV2',
  earnedTokenAddress: '0x759D4B315ccC43FC2f9B8591C5B208776CdCFD66',
  earnContractAddress: '0x759D4B315ccC43FC2f9B8591C5B208776CdCFD66',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'curve-ftm-fusdt',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Curve',
  assets: ['FUSDT', 'USDC', 'DAI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm.curve.fi/fusdt/deposit',
  buyTokenUrl: 'https://app.sushi.com/swap',
  zap: {
    disabled: true,

    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [
     



    ],
  },
},

{
  id: 'casper',
  logo: 'fantom/CASPER.png',
  name: 'CASPER',
  token: 'CASPER',
  tokenDescription: 'Casper DeFi',
  tokenAddress: '0xC30d1b0Ce932C3dd3373a2C23aDA4E9608CAf345',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CASPER-J',
  earnedTokenAddress: '0x7b058960309332da366FE98ea9274b3361a03d34',
  earnContractAddress: '0x7b058960309332da366FE98ea9274b3361a03d34',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'tokens',
  oracleId: 'casper',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'eol',
  platform: 'Casper DeFi',
  assets: ['CASPER'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.spiritswap.finance/#/add/FTM/0xC30d1b0Ce932C3dd3373a2C23aDA4E9608CAf345',
  buyTokenUrl: 'https://swap.spiritswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPIRIT_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},

{
  id: 'zoo-wild-ftm',
  logo: 'fantom/WILD-FTM.png',
  name: 'WILD-FTM LP',
  token: 'WILD-FTM LP (Zoo)',
  tokenDescription: 'Zoo',
  tokenAddress: '0x80C70A23AB388c3B8624f8FC9dBfB4ee469A69a1',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-WIL-FTM-K',
  earnedTokenAddress: '0xCF1e158d5e9839D95d2d71f8153e1fe183265fa4',
  earnContractAddress: '0xCF1e158d5e9839D95d2d71f8153e1fe183265fa4',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'zoo-wild-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Zoo',
  assets: ['WILD','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0xAe0C241Ec740309c2cbdc27456eB3C1a2aD74737&outputCurrency=FTM',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0xAe0C241Ec740309c2cbdc27456eB3C1a2aD74737',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'zoo-ftm-usdc',
  logo: 'fantom/USDC-FTM.png',
  name: 'USDC-FTM LP',
  token: 'USDC-FTM LP (Zoo)',
  tokenDescription: 'Zoo',
  tokenAddress: '0x38E3AD31EC5eee7D0908353231E639849E1510c0',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-USD-FTM-K',
  earnedTokenAddress: '0xAE6F3adf603be023730F05cA0715381c587E59F7',
  earnContractAddress: '0xAE6F3adf603be023730F05cA0715381c587E59F7',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'zoo-ftm-usdc',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Zoo',
  assets: ['USDC','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0x04068DA6C83AFCFA0e13ba15A6696662335D5B75&outputCurrency=FTM',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'zoo-ftm-fusdt',
  logo: 'fantom/FUSDT-FTM.png',
  name: 'FUSDT-FTM LP',
  token: 'FUSDT-FTM LP (Zoo)',
  tokenDescription: 'Zoo',
  tokenAddress: '0x9b7f941894548c905866843a50fDF54517eAeAbb',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FUS-FTM-K',
  earnedTokenAddress: '0x174E7169BeFC2F86F115Ce80f9D992261652Be68',
  earnContractAddress: '0x174E7169BeFC2F86F115Ce80f9D992261652Be68',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'zoo-ftm-fusdt',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Zoo',
  assets: ['FUSDT','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0x049d68029688eAbF473097a2fC38ef61633A3C7A&outputCurrency=FTM',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0x049d68029688eAbF473097a2fC38ef61633A3C7A',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'zoo-ftm-eth',
  logo: 'fantom/WETH-FTM.png',
  name: 'ETH-FTM LP',
  token: 'ETH-FTM LP (Zoo)',
  tokenDescription: 'Zoo',
  tokenAddress: '0xC89dbCB06A74BD2Ec521A3e49e192906C2CC5512',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ETH-FTM-K',
  earnedTokenAddress: '0x4Ee034F9b4d279743381B26d40A9766187130539',
  earnContractAddress: '0x4Ee034F9b4d279743381B26d40A9766187130539',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'zoo-ftm-eth',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Zoo',
  assets: ['ETH','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0x74b23882a30290451A17c44f4F05243b6b58C76d&outputCurrency=FTM',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0x74b23882a30290451A17c44f4F05243b6b58C76d',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'zoo-ftm-zoo',
  logo: 'fantom/ZOO-FTM.png',
  name: 'ZOO-FTM LP',
  token: 'ZOO-FTM LP (Zoo)',
  tokenDescription: 'Zoo',
  tokenAddress: '0x128dF293532203eFaf6e2801656844F8738dB001',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ZOO-FTM-K',
  earnedTokenAddress: '0x8e12feca01a1016950789E6C230E34B6248B70bF',
  earnContractAddress: '0x8e12feca01a1016950789E6C230E34B6248B70bF',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'zoo-ftm-zoo',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Zoo',
  assets: ['ZOO','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0x09e145A1D53c0045F41aEEf25D8ff982ae74dD56&outputCurrency=FTM',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0x09e145A1D53c0045F41aEEf25D8ff982ae74dD56',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'zoo-ftm-atari',
  logo: 'fantom/ATARI-FTM.png',
  name: 'ATARI-FTM LP',
  token: 'ATARI-FTM LP (Zoo)',
  tokenDescription: 'Zoo',
  tokenAddress: '0xcA618f90850B7e0b34E38B353188EF46b969CEC5',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ATR-FTM-K',
  earnedTokenAddress: '0x231492214B5bbF0Ddd80971d966D5ec8a568e24f',
  earnContractAddress: '0x231492214B5bbF0Ddd80971d966D5ec8a568e24f',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'zoo-ftm-atari',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Zoo',
  assets: ['ATARI','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b&outputCurrency=FTM',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'ice-ice-ftm-boo',
  logo: 'fantom/ICE-FTM.png',
  name: 'ICE-FTM LP (SpookySwap)',
  token: 'ICE-FTM LP (SpookySwap)',
  tokenDescription: 'Popsicle',
  tokenAddress: '0x623ee4a7f290d11c11315994db70fb148b13021d',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ICE-FTM-6',
  earnedTokenAddress: '0x6D69AD57b242C2777aaC8F2E00ce1f27450E9374',
  earnContractAddress: '0x6D69AD57b242C2777aaC8F2E00ce1f27450E9374',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'ice-ice-ftm-boo',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Popsicle',
  assets: ['ICE', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0xf16e81dce15B08F326220742020379B855B87DF9',
  buyTokenUrl: 'https://spookyswap.finance/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},

{
  id: 'ice-ice-ftm-sushi',
  logo: 'fantom/ICE-FTM.png',
  name: 'ICE-FTM LP-SUSHISWAP',
  token: 'ICE-FTM LP-SUSHISWAP',
  tokenDescription: 'Popsicle',
  tokenAddress: '0x84311ECC54D7553378c067282940b0fdfb913675',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-ICE-6',
  earnedTokenAddress: '0xE113E8a28F9E61B5A7eFE73D4f54b3406a8e9acA',
  earnContractAddress: '0xE113E8a28F9E61B5A7eFE73D4f54b3406a8e9acA',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'ice-ice-ftm-sushi',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Popsicle',
  assets: ['ICE', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0xf16e81dce15B08F326220742020379B855B87DF9',
  buyTokenUrl: 'https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xf16e81dce15B08F326220742020379B855B87DF9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},

{
  id: 'tomb-tomb-ftm',
  logo: 'fantom/TOMB-FTM.png',
  name: 'TOMB-FTM LP',
  token: 'TOMB-FTM LP (SpookySwap)',
  tokenDescription: 'Tomb',
  tokenAddress: '0x2A651563C9d3Af67aE0388a5c8F89b867038089e',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-TOM-FTM-8',
  earnedTokenAddress: '0xFDc10560bd833B763352C481f5785Dd69C803429',
  earnContractAddress: '0xFDc10560bd833B763352C481f5785Dd69C803429',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "tomb-tomb-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Tomb',
  assets: ['TOMB', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add',
  buyTokenUrl: 'https://spookyswap.finance/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'TSHARE',
        symbol: 'TSHARE',
        address: '0x4cdF39285D7Ca8eB3f090fDA0C069ba5F4145B37',
        tokenAddress: '0x4cdF39285D7Ca8eB3f090fDA0C069ba5F4145B37',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,

    ],
  },
},

{
  id: "tomb-tshare-ftm",
  logo: 'fantom/TSHARE-FTM.png',
  name: 'TSHARE-FTM LP',
  token: 'TSHARE-FTM LP (SpookySwap)',
  tokenDescription: 'Tomb',
  tokenAddress: '0x4733bc45eF91cF7CcEcaeeDb794727075fB209F2',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-TSH-FTM-8',
  earnedTokenAddress: '0xC7abe55e5532ddA1943bbe5A94bD837dcd96e233',
  earnContractAddress: '0xC7abe55e5532ddA1943bbe5A94bD837dcd96e233',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "tomb-tshare-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Tomb',
  assets: ['TSHARE', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add',
  buyTokenUrl: 'https://spookyswap.finance/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [

      {
        name: 'TSHARE',
        symbol: 'TSHARE',
        address: '0x4cdF39285D7Ca8eB3f090fDA0C069ba5F4145B37',
        tokenAddress: '0x4cdF39285D7Ca8eB3f090fDA0C069ba5F4145B37',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-lqdr-ftm",
  logo: 'fantom/LQDR-FTM.png',
  name: 'LQDR-FTM LP',
  token: 'LQDR-FTM LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0xfA7cA6E6D17368e0a1fA9C75f2eBE5A8d7bE9fc6',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-LQD-FTM-0',
  earnedTokenAddress: '0xb96a04bc0a52180568894bABB8DBc21A559AE9F1',
  earnContractAddress: '0xb96a04bc0a52180568894bABB8DBc21A559AE9F1',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-lqdr-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['LQDR', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-lqdr-fusdt",
  logo: 'fantom/LQDR-FUSDT.png',
  name: 'LQDR-FUSDT LP',
  token: 'LQDR-FUSDT LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0xA1BB6830fAbdDB99Ed365C0611a33741c5e6173f',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-LQD-FUS-0',
  earnedTokenAddress: '0x588B594348E1d7057163433332ef5E282eE9D5F8',
  earnContractAddress: '0x588B594348E1d7057163433332ef5E282eE9D5F8',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-lqdr-fusdt",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['LQDR', 'FUSDT'],
  callFee: 0.5,
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-yfi-ftm",
  logo: 'fantom/YFI-FTM.png',
  name: 'YFI-FTM LP',
  token: 'YFI-FTM LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0x280AbC0D9727f4DE3A46Ca9CF93C16b4a9c127D1',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-YFI-FTM-0',
  earnedTokenAddress: '0xc7710dfE548E6f4b9DaaDA96FAd8DC6B8B790ea8',
  earnContractAddress: '0xc7710dfE548E6f4b9DaaDA96FAd8DC6B8B790ea8',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-yfi-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['YFI', 'FTM'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },

      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-dai-ftm",
  logo: 'fantom/DAI-FTM.png',
  name: 'DAI-FTM LP',
  token: 'DAI-FTM LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0xd32F2EB49E91aA160946f3538564118388d6246a',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-DAI-FTM-0',
  earnedTokenAddress: '0x4e37A6b7E814b3FB22A1A9c5f5B1C92100eb290F',
  earnContractAddress: '0x4e37A6b7E814b3FB22A1A9c5f5B1C92100eb290F',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-dai-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['DAI', 'FTM'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-link-ftm",
  logo: 'fantom/LINK-FTM.png',
  name: 'LINK-FTM LP',
  token: 'LINK-FTM LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0x1Ca86e57103564F47fFCea7259a6ce8Cc1301549',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-LIN-FTM-0',
  earnedTokenAddress: '0x10129aEc48f87e45376413Ca1fD08962f95204cf',
  earnContractAddress: '0x10129aEc48f87e45376413Ca1fD08962f95204cf',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-link-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['LINK', 'FTM'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-weth-ftm",
  logo: 'fantom/WETH-FTM.png',
  name: 'WETH-FTM LP',
  token: 'WETH-FTM LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0x3d0BD54c48C2C433ea6fed609Cc3d5Fb7A77622B',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-WET-FTM-0',
  earnedTokenAddress: '0x50Cab7317df87f4d377B1433467b617EeC9F3D98',
  earnContractAddress: '0x50Cab7317df87f4d377B1433467b617EeC9F3D98',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-weth-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['ETH', 'FTM'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-fusdt-ftm",
  logo: 'fantom/FUSDT-FTM.png',
  name: 'FUSDT-FTM LP',
  token: 'FUSDT-FTM LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0xd019dd7C760c6431797d6ed170bFFb8FAee11F99',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FUS-FTM-0',
  earnedTokenAddress: '0xeedc637397AFE802D3AF1C60C57Bc79c4Bd286d0',
  earnContractAddress: '0xeedc637397AFE802D3AF1C60C57Bc79c4Bd286d0',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-fusdt-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['FUSDT', 'FTM'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-wbtc-ftm",
  logo: 'fantom/WBTC-FTM.png',
  name: 'WBTC-FTM LP',
  token: 'WBTC-FTM LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0xC92D97416328A461BcE2F539498b505c6c97748f',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-WBT-FTM-0',
  earnedTokenAddress: '0xDda08B5F3c9d5d24A1Aa5ae6b8f6D902b4288B33',
  earnContractAddress: '0xDda08B5F3c9d5d24A1Aa5ae6b8f6D902b4288B33',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-wbtc-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['BTC', 'FTM'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-sushi-ftm",
  logo: 'fantom/SUSHI-FTM.png',
  name: 'SUSHI-FTM LP',
  token: 'SUSHI-FTM LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0x49D2e0DC99C7358D7A9A8633Bf6df111D0EE7F65',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SUS-FTM-0',
  earnedTokenAddress: '0xc599431b1cec674f5264c1984bf139d29a0A5263',
  earnContractAddress: '0xc599431b1cec674f5264c1984bf139d29a0A5263',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-sushi-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['SUSHI', 'FTM'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-cream-ftm",
  logo: 'fantom/CREAM-FTM.png',
  name: 'CREAM-FTM LP',
  token: 'CREAM-FTM LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0x147e27BE8E66f74c7659d88E2e6a13188873D58b',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CRE-FTM-0',
  earnedTokenAddress: '0x48fa56d8F0220874D55c86330eB4fB68f8d8Aad8',
  earnContractAddress: '0x48fa56d8F0220874D55c86330eB4fB68f8d8Aad8',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-cream-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['CREAM', 'FTM'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-frax-fxs",
  logo: 'fantom/FRAX-FXS.png',
  name: 'FRAX-FXS LP',
  token: 'FRAX-FXS LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0xCFF4353E10A7207Bd16427CA9549437d439b68Df',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FRA-FXS-0',
  earnedTokenAddress: '0x6a4cB2Bf6361DC9661A56dBe81Bd33Bf82398be8',
  earnContractAddress: '0x6a4cB2Bf6361DC9661A56dBe81Bd33Bf82398be8',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-frax-fxs",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['FRAX', 'FXS'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-aave-usdc",
  logo: 'fantom/AAVE-USDC.png',
  name: 'AAVE-USDC LP',
  token: 'AAVE-USDC LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0x2d89BB3b1448152002453AA37fbE4051AfdBf56d',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-AAV-USD-0',
  earnedTokenAddress: '0xa020501aa126b0051EeDCc2dE51f641Ffe23263B',
  earnContractAddress: '0xa020501aa126b0051EeDCc2dE51f641Ffe23263B',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-aave-usdc",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['AAVE', 'USDC'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-snx-ftm",
  logo: 'fantom/SNX-FTM.png',
  name: 'SNX-FTM LP',
  token: 'SNX-FTM LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0xFe69403CF2e22390c0D87aB05062F67D9084935B',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SNX-FTM-0',
  earnedTokenAddress: '0xaa9CfC06911A517Cd32324A9D10BbD1Ff0116a4A',
  earnContractAddress: '0xaa9CfC06911A517Cd32324A9D10BbD1Ff0116a4A',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-snx-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['SNX', 'FTM'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-ice-ftm",
  logo: 'fantom/ICE-FTM.png',
  name: 'ICE-FTM LP',
  token: 'ICE-FTM LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0x84311ECC54D7553378c067282940b0fdfb913675',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ICE-FTM-0',
  earnedTokenAddress: '0xf62673b36Cc5B93b44212c3D9daae2Eb8860cc1F',
  earnContractAddress: '0xf62673b36Cc5B93b44212c3D9daae2Eb8860cc1F',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-ice-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['ICE', 'FTM'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-cover-ftm",
  logo: 'fantom/COVER-FTM.png',
  name: 'COVER-FTM LP',
  token: 'COVER-FTM LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0xAFa1BF9b2a89DFD60499838c331538283b3346ED',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-COV-FTM-0',
  earnedTokenAddress: '0x497026cc1a27E0a41864B34ee871b950FCfa85b1',
  earnContractAddress: '0x497026cc1a27E0a41864B34ee871b950FCfa85b1',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-cover-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['COVER', 'FTM'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-zoo-ftm",
  logo: 'fantom/ZOO-FTM.png',
  name: 'ZOO-FTM LP',
  token: 'ZOO-FTM LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0x3Ac28d350C59ef9054B305DFe9078fADc3cecABe',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ZOO-FTM-0',
  earnedTokenAddress: '0x499b4B436c394B6564dA90f535B2ac70697d3830',
  earnContractAddress: '0x499b4B436c394B6564dA90f535B2ac70697d3830',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-zoo-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['ZOO', 'FTM'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x09e145a1d53c0045f41aeef25d8ff982ae74dd56',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-crv-ftm",
  logo: 'fantom/CRV-FTM.png',
  name: 'CRV-FTM LP',
  token: 'CRV-FTM LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0x177e2cc843d2Ee20AA884DC8af2a865adf78adb2',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CRV-FTM-0',
  earnedTokenAddress: '0x3d7089Bee0bD2641d2748c704B7A6D17712F949B',
  earnContractAddress: '0x3d7089Bee0bD2641d2748c704B7A6D17712F949B',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-crv-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['CRV', 'FTM'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "lqdr-fusdt-frax",
  logo: 'fantom/FUSDT-FRAX.png',
  name: 'FUSDT-FRAX LP',
  token: 'FUSDT-FRAX LP (LiquidDriver)',
  tokenDescription: 'LiquidDriver',
  tokenAddress: '0x4669751cD7933c9Ca2aC8147aE7043d8561f4C8D',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FUS-FRA-0',
  earnedTokenAddress: '0x79D6Ae816A8e27930497c74d32C2b6660A8708D6',
  earnContractAddress: '0x79D6Ae816A8e27930497c74d32C2b6660A8708D6',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "lqdr-fusdt-frax",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'LiquidDriver',
  assets: ['FUSDT', 'FRAX'],
  callFee: 0.5,
  depositFee: '1% from Farm Provider',
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [

      {
        name: 'LQDR',
        symbol: 'LQDR',
        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        tokenAddress: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
        decimals: 18,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: "froyo-froyo-ftm",
  logo: 'fantom/FROYO-FTM.png',
  name: 'FROYO-FTM LP',
  token: 'FROYO-FTM LP-FROYO',
  tokenDescription: 'Froyo',
  tokenAddress: '0xBE0AF661BC9794E05fAb18C08C2C99811A0F45D2',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FRO-FTM-A',
  earnedTokenAddress: '0x0eF324f07df0292B5F562cCD5E0E7599DE2cA8ba',
  earnContractAddress: '0x0eF324f07df0292B5F562cCD5E0E7599DE2cA8ba',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "froyo-froyo-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Froyo',
  assets: ['FROYO', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://app.sushi.com/add/ETH/0xA92d41Ab8eFeE617d80a829CD9F5683c5F793ADA',
  buyTokenUrl: 'https://app.sushi.com/swap?outputCurrency=0xA92d41Ab8eFeE617d80a829CD9F5683c5F793ADA',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SUSHI_ROUTER,

    tokens: [
     
      ...zapTokens,


    ],
  },
},

{
  id: 'shade',
  logo: 'fantom/SHADE.png',
  name: 'SHADE',
  token: 'SHADE',
  tokenDescription: 'ShadeCash',
  tokenAddress: '0x3A3841f5fa9f2c283EA567d5Aeea3Af022dD2262',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SHADE-B',
  earnedTokenAddress: '0xb516B5C964c3074117beA4F06E754a66AD34cD9f',
  earnContractAddress: '0xb516B5C964c3074117beA4F06E754a66AD34cD9f',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'tokens',
  oracleId: 'SHADE',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShadeCash',
  assets: ['SHADE'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add',
  buyTokenUrl: 'https://spookyswap.finance/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},

{
  id: 'shade-shade-ftm',
  logo: 'fantom/SHADE-FTM.png',
  name: 'SHADE-FTM LP',
  token: 'SHADE-FTM LP (SpookySwap)',
  tokenDescription: 'ShadeCash',
  tokenAddress: '0x20aa395F3bcc4dc44a94215D129650533B3da0b3',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SHA-FTM-B',
  earnedTokenAddress: '0x62a6fe5edC535892cab6a65b23C097C3c6c5B45B',
  earnContractAddress: '0x62a6fe5edC535892cab6a65b23C097C3c6c5B45B',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'shade-shade-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'ShadeCash',
  assets: ['SHADE', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x3A3841f5fa9f2c283EA567d5Aeea3Af022dD2262',
  buyTokenUrl: 'https://spookyswap.finance/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},

{
  id: 'chad-chad-grim',
  logo: 'fantom/CHAD-GRIM.png',
  name: 'CHAD-GRIM LP',
  token: 'CHAD-GRIM LP (PaintSwap)',
  tokenDescription: 'Chad Finance',
  tokenAddress: '0x6680B936216e770605E43E7214e5838E2803f514',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CHA-GRI-5',
  earnedTokenAddress: '0x406B349af1187dA303894b933B3a781c67851fa1',
  earnContractAddress: '0x406B349af1187dA303894b933B3a781c67851fa1',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'chad-chad-grim',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Chad',
  assets: ['CHAD', 'GRIM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://exchange.paintswap.finance/#/pool',
  buyTokenUrl: 'https://exchange.paintswap.finance/#/swap?outputCurrency=0x7eC94C4327dC757601B4273cD67014d7760Be97E',
  zap: {
    zapAddress: VAULT_ZAP,
    router: PAINT_ROUTER,

    tokens: [

      {
        name: 'CHAD',
        address: '0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
        symbol: 'CHAD',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

    ],
  },
},

{
  id: 'chad',
  logo: 'fantom/CHAD.png',
  name: 'CHAD',
  token: 'CHAD',
  tokenDescription: 'Chad Finance',
  tokenAddress: '0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CHAD-5',
  earnedTokenAddress: '0x6E7232333eBDD240eA40DF09DD27DBfccC5fd59b',
  earnContractAddress: '0x6E7232333eBDD240eA40DF09DD27DBfccC5fd59b',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'tokens',
  oracleId: 'CHAD',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Chad',
  assets: ['CHAD'],
  callFee: 0.5,
  addLiquidityUrl: 'https://exchange.paintswap.finance/#/pool',
  buyTokenUrl: 'https://exchange.paintswap.finance/#/swap?outputCurrency=0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
  zap: {
    zapAddress: VAULT_ZAP,
    router: PAINT_ROUTER,

    tokens: [
     

    ],
  },
},

{
  id: 'chad-chad-ftm',
  logo: 'fantom/CHAD-FTM.png',
  name: 'CHAD-FTM LP',
  token: 'CHAD-FTM LP (PaintSwap)',
  tokenDescription: 'Chad Finance',
  tokenAddress: '0x55a00f4daf71e3ef4b385991b2bf23bd3bef627a',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CHA-FTM-5',
  earnedTokenAddress: '0x8B6815368121CAd92E4211Af89c42640c0d6aF35',
  earnContractAddress: '0x8B6815368121CAd92E4211Af89c42640c0d6aF35',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'chad-chad-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Chad',
  assets: ['CHAD', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://exchange.paintswap.finance/#/pool',
  buyTokenUrl: 'https://exchange.paintswap.finance/#/swap?outputCurrency=0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
  zap: {
    zapAddress: VAULT_ZAP,
    router: PAINT_ROUTER,

    tokens: [

      {
        name: 'CHAD',
        address: '0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
        symbol: 'CHAD',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },


    ],
  },
},

{
  id: 'chad-chad-usdc',
  logo: 'fantom/CHAD-USDC.png',
  name: 'CHAD-USDC LP',
  token: 'CHAD-USDC LP (PaintSwap)',
  tokenDescription: 'Chad Finance',
  tokenAddress: '0x698a49A0Bb3947897611A4C5e289FbeDB557D150',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CHA-USD-5',
  earnedTokenAddress: '0xb7Ce32c8f77BEa2Bb3b482a09c063Aa4Cd5f96a7',
  earnContractAddress: '0xb7Ce32c8f77BEa2Bb3b482a09c063Aa4Cd5f96a7',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'chad-chad-usdc',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Chad',
  assets: ['CHAD', 'USDC'],
  callFee: 0.5,
  addLiquidityUrl: 'https://exchange.paintswap.finance/#/pool',
  buyTokenUrl: 'https://exchange.paintswap.finance/#/swap?outputCurrency=0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
  zap: {
    zapAddress: VAULT_ZAP,
    router: PAINT_ROUTER,

    tokens: [

      {
        name: 'CHAD',
        address: '0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
        symbol: 'CHAD',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

    ],
  },
},


{
  id: 'chad-chad-brush',
  logo: 'fantom/CHAD-BRUSH.png',
  name: 'CHAD-BRUSH LP',
  token: 'CHAD-BRUSH LP (PaintSwap)',
  tokenDescription: 'Chad Finance',
  tokenAddress: '0xaf7ae01e65244f260eb5c8f0142ecf5d4434aa05',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CHA-BRU-5',
  earnedTokenAddress: '0x170A69D76b4A3Ed1217Ca598F152F336A0006676',
  earnContractAddress: '0x170A69D76b4A3Ed1217Ca598F152F336A0006676',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'chad-chad-brush',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Chad',
  assets: ['CHAD', 'BRUSH'],
  callFee: 0.5,
  addLiquidityUrl: 'https://exchange.paintswap.finance/#/pool',
  buyTokenUrl: 'https://exchange.paintswap.finance/#/swap?outputCurrency=0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
  zap: {
    zapAddress: VAULT_ZAP,
    router: PAINT_ROUTER,

    tokens: [

      {
        name: 'CHAD',
        address: '0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
        symbol: 'CHAD',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },


    ],
  },
},

{
  id: 'chad-chad-fbomb',
  logo: 'fantom/CHAD-FBOMB.png',
  name: 'CHAD-BOMB LP',
  token: 'CHAD-BOMB LP (SpookySwap)',
  tokenDescription: 'Chad Finance',
  tokenAddress: '0x2acf18104ffce06ac4b7dfb9c1ff539119d96b27',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CHA-FBO-5',
  earnedTokenAddress: '0xcbF73e45c9F192539950C3eF525b359a4fe4A3c4',
  earnContractAddress: '0xcbF73e45c9F192539950C3eF525b359a4fe4A3c4',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'chad-chad-fbomb',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Chad',
  assets: ['CHAD', 'BOMB'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add',
  buyTokenUrl: 'https://spookyswap.finance/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [



    ],
  },
},

{
  id: 'chad-chad-tomb',
  logo: 'fantom/CHAD-TOMB.png',
  name: 'CHAD-TOMB LP',
  token: 'CHAD-TOMB LP (PaintSwap)',
  tokenDescription: 'Chad Finance',
  tokenAddress: '0x777445A6E9DE0e7a2E38D091f76060Dd4c09cdd9',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CHA-TOM-5',
  earnedTokenAddress: '0x1F42cf915E728F3e9cfFF5C85562D44859805298',
  earnContractAddress: '0x1F42cf915E728F3e9cfFF5C85562D44859805298',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'chad-chad-tomb',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Chad',
  assets: ['CHAD', 'TOMB'],
  callFee: 0.5,
  addLiquidityUrl: 'https://exchange.paintswap.finance/#/pool',
  buyTokenUrl: 'https://exchange.paintswap.finance/#/swap?outputCurrency=0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
  zap: {
    zapAddress: VAULT_ZAP,
    router: PAINT_ROUTER,

    tokens: [

      {
        name: 'CHAD',
        address: '0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
        symbol: 'CHAD',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

    ],
  },
},

{
  id: 'chad-chad-cztears',
  logo: 'fantom/CHAD-CZTEARS.png',
  name: 'CHAD-CZTEARS LP',
  token: 'CHAD-CZTEARS LP (PaintSwap)',
  tokenDescription: 'Chad Finance',
  tokenAddress: '0x2B932f3C08C73f4d698E1D91Bb838435bA7b4931',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CHA-CZT-5',
  earnedTokenAddress: '0xB70eF424D19f6fD958964626e7b61707E4B7Ce53',
  earnContractAddress: '0xB70eF424D19f6fD958964626e7b61707E4B7Ce53',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'chad-chad-cztears',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Chad',
  assets: ['CHAD', 'CZTEARS'],
  callFee: 0.5,
  addLiquidityUrl: 'https://exchange.paintswap.finance/#/pool',
  buyTokenUrl: 'https://exchange.paintswap.finance/#/swap?outputCurrency=0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
  zap: {
    zapAddress: VAULT_ZAP,
    router: PAINT_ROUTER,

    tokens: [

      {
        name: 'CHAD',
        address: '0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
        symbol: 'CHAD',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },


    ],
  },
},

{
  id: 'chad-chad-atari',
  logo: 'fantom/CHAD-ATARI.png',
  name: 'CHAD-ATARI LP',
  token: 'CHAD-ATARI LP (PaintSwap)',
  tokenDescription: 'Chad Finance',
  tokenAddress: '0xb7b3Ca37483117B797Db428948d9CAf79491E97C',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CHA-ATA-5',
  earnedTokenAddress: '0xbB59f6c0e0082123D1A9bCA434f3fFd2388B69c1',
  earnContractAddress: '0xbB59f6c0e0082123D1A9bCA434f3fFd2388B69c1',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'chad-chad-atari',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Chad',
  assets: ['CHAD', 'ATARI'],
  callFee: 0.5,
  addLiquidityUrl: 'https://exchange.paintswap.finance/#/pool',
  buyTokenUrl: 'https://exchange.paintswap.finance/#/swap?outputCurrency=0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
  zap: {
    zapAddress: VAULT_ZAP,
    router: PAINT_ROUTER,

    tokens: [

      {
        name: 'CHAD',
        address: '0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
        symbol: 'CHAD',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

    ],
  },
},

{
  id: 'chad-chad-just',
  logo: 'fantom/CHAD-JUST.png',
  name: 'CHAD-JUST LP',
  token: 'CHAD-JUST LP (Zoo)',
  tokenDescription: 'Chad Finance',
  tokenAddress: '0xF096E1375a4200072D08993cd1d0C2A903EF57E7',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CHA-JUS-5',
  earnedTokenAddress: '0x31627D796E02bf87EA8B67985c1648457F3EF5cC',
  earnContractAddress: '0x31627D796E02bf87EA8B67985c1648457F3EF5cC',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'chad-chad-just',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Chad',
  assets: ['CHAD', 'JUST'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0xCcE93540b80ABF71B66E0a44fd71E322cE9C4D9e&outputCurrency=0xC8Da1a26ABEF9e2E41B4C89c1b345Cc05ce034e8',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0xC8Da1a26ABEF9e2E41B4C89c1b345Cc05ce034e8',
  zap: {
    zapAddress: VAULT_ZAP,
    router: PAINT_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'chad-chad-shiba',
  logo: 'fantom/CHAD-SHIBA.png',
  name: 'CHAD-SHIBA LP',
  token: 'CHAD-SHIBA LP (PaintSwap)',
  tokenDescription: 'Chad Finance',
  tokenAddress: '0x5886A4566Dc8605DF9A477863D1A2aA9a4384143',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CHA-SHI-5',
  earnedTokenAddress: '0x03760170336C35063a3677e455272233CC808E83',
  earnContractAddress: '0x03760170336C35063a3677e455272233CC808E83',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'chad-chad-shiba',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Chad',
  assets: ['CHAD', 'SHIBA'],
  callFee: 0.5,
  addLiquidityUrl: 'https://exchange.paintswap.finance/#/pool',
  buyTokenUrl: 'https://exchange.paintswap.finance/#/swap?outputCurrency=0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
  zap: {
    zapAddress: VAULT_ZAP,
    router: PAINT_ROUTER,

    tokens: [

      {
        name: 'CHAD',
        address: '0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
        symbol: 'CHAD',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },


    ],
  },
},

{
  id: 'chad-shiba-ftm',
  logo: 'fantom/FTM-SHIBA.png',
  name: 'FTM-SHIBA LP',
  token: 'FTM-SHIBA LP (PaintSwap)',
  tokenDescription: 'Chad Finance',
  tokenAddress: '0x71020669C6cbeD08e511ecE3A28e5aF5eA0cB6aE',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-SHI-5',
  earnedTokenAddress: '0xe8D247aD0E5e31f919B3D0dF3C1190A79B02564b',
  earnContractAddress: '0xe8D247aD0E5e31f919B3D0dF3C1190A79B02564b',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'chad-shiba-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Chad',
  assets: ['FTM', 'SHIBA'],
  callFee: 0.5,
  addLiquidityUrl: 'https://exchange.paintswap.finance/#/pool',
  buyTokenUrl: 'https://exchange.paintswap.finance/#/swap?outputCurrency=0x9ba3e4f84a34df4e08c112e1a0ff148b81655615',
  zap: {
    zapAddress: VAULT_ZAP,
    router: PAINT_ROUTER,

    tokens: [

      {
        name: 'CHAD',
        address: '0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
        symbol: 'CHAD',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

    ],
  },
},

{
  id: 'chad-ftm-hodl',
  logo: 'fantom/HODL-FTM.png',
  name: 'FTM-HODL LP',
  token: 'FTM-HODL LP (PaintSwap)',
  tokenDescription: 'Chad Finance',
  tokenAddress: '0x06BEF78Cd8bb17a6dAceD10B610884C09f36FdB7',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-HOD-5',
  earnedTokenAddress: '0x86f43D26d9807C19F516204438b122ca836c12D4',
  earnContractAddress: '0x86f43D26d9807C19F516204438b122ca836c12D4',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'chad-ftm-hodl',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Chad',
  assets: ['FTM', 'HODL'],
  callFee: 0.5,
  depositFee: '4% from Farm Provider',
  addLiquidityUrl: 'https://exchange.paintswap.finance/#/pool',
  buyTokenUrl: 'https://exchange.paintswap.finance/#/swap?outputCurrency=0xb2da66c4a89d0f93935d1efdb9c9c8d1d3ba9343',
  zap: {
    zapAddress: VAULT_ZAP,
    router: PAINT_ROUTER,

    tokens: [

      {
        name: 'CHAD',
        address: '0xcce93540b80abf71b66e0a44fd71e322ce9c4d9e',
        symbol: 'CHAD',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

    ],
  },
},

{
  id: "yoro-grim-yoro",
  logo: 'fantom/GRIM-YORO.png',
  name: 'GRIM-YORO LP',
  token: 'GRIM-YORO LP (Zoo)',
  tokenDescription: 'Yoro',
  tokenAddress: '0x2e028c6eaCcFE2a4aA82A86Ad983C8bCAec32c73',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-GRI-YOR-C',
  earnedTokenAddress: '0x38A5Fc5E7a699ec9b0421eeD4F72E8F22CBc63e9',
  earnContractAddress: '0x38A5Fc5E7a699ec9b0421eeD4F72E8F22CBc63e9',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "yoro-grim-yoro",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Yoro',
  assets: ['GRIM', 'YORO'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0xCF7e516E2dd67C3B0Bd52266DA41F403A0F19A07&outputCurrency=0x7eC94C4327dC757601B4273cD67014d7760Be97E',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?outputCurrency=0xBbd946041824416A4e2EB37d5880718B3812c9Cb&inputCurrency=FTM',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,


    ],
  },
},

{
  id: "yoro-grim-catnip",
  logo: 'fantom/GRIM-CATNIP.png',
  name: 'GRIM-CATNIP LP',
  token: 'GRIM-CATNIP LP (Zoo)',
  tokenDescription: 'Yoro',
  tokenAddress: '0x45f446cD7ECc82eD1655cC00663004d5eac6c841',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-GRI-CAT-C',
  earnedTokenAddress: '0x71bA6AD792E9ce8f154cc5bA461A57Aa8b432D87',
  earnContractAddress: '0x71bA6AD792E9ce8f154cc5bA461A57Aa8b432D87',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "yoro-grim-catnip",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'eol',
  platform: 'Yoro',
  assets: ['GRIM', 'CATNIP'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0xBbd946041824416A4e2EB37d5880718B3812c9Cb&outputCurrency=0x7eC94C4327dC757601B4273cD67014d7760Be97E',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?outputCurrency=0xBbd946041824416A4e2EB37d5880718B3812c9Cb&inputCurrency=FTM',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: "yoro-reaper-catnip",
  logo: 'fantom/CATNIP-REAPER.png',
  name: 'REAPER-CATNIP LP',
  token: 'REAPER-CATNIP LP (Zoo)',
  tokenDescription: 'Yoro',
  tokenAddress: '0xE177d58724092d6d3a3178b0C557C35928DD471F',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-REA-CAT-C',
  earnedTokenAddress: '0xD563c7f2eE865C56E68C8e9645579c07A714E19a',
  earnContractAddress: '0xD563c7f2eE865C56E68C8e9645579c07A714E19a',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "yoro-reaper-catnip",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Yoro',
  assets: ['REAPER', 'CATNIP'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb&outputCurrency=0xBbd946041824416A4e2EB37d5880718B3812c9Cb',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?outputCurrency=0xBbd946041824416A4e2EB37d5880718B3812c9Cb&inputCurrency=FTM',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'catnip',
  logo: 'fantom/CATNIP.png',
  name: 'CATNIP',
  token: 'CATNIP',
  tokenDescription: 'Yoro',
  tokenAddress: '0xBbd946041824416A4e2EB37d5880718B3812c9Cb',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CATNIP-C',
  earnedTokenAddress: '0xc2894BA6dfd088aA94437627Cd2F93963FB4661F',
  earnContractAddress: '0xc2894BA6dfd088aA94437627Cd2F93963FB4661F',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'tokens',
  oracleId: 'CATNIP',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Yoro',
  assets: ['CATNIP'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0xBbd946041824416A4e2EB37d5880718B3812c9Cb',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?outputCurrency=0xBbd946041824416A4e2EB37d5880718B3812c9Cb',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},

{
  id: "yoro-yoro-ftm",
  logo: 'fantom/YORO-FTM.png',
  name: 'YORO-FTM LP',
  token: 'YORO-FTM LP (Zoo)',
  tokenDescription: 'Yoro',
  tokenAddress: '0x116f65A1F1A206Dd541d58cb7580DdC4675D13b5',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-YOR-FTM-C',
  earnedTokenAddress: '0x5A2a447d6f6ebB43f14bf94D25399A8412C77bDE',
  earnContractAddress: '0x5A2a447d6f6ebB43f14bf94D25399A8412C77bDE',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "yoro-yoro-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Yoro',
  assets: ['YORO', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0xCF7e516E2dd67C3B0Bd52266DA41F403A0F19A07',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?outputCurrency=0xCF7e516E2dd67C3B0Bd52266DA41F403A0F19A07',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: "yoro-catnip-ftm",
  logo: 'fantom/CATNIP-FTM.png',
  name: 'CATNIP-FTM LP',
  token: 'CATNIP-FTM LP (Zoo)',
  tokenDescription: 'Yoro',
  tokenAddress: '0xDaBaCA4523345023C32BfC6B156Ae42e41A49821',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CAT-FTM-C',
  earnedTokenAddress: '0xb422B9864B5Ac5068F1e47621AB722a463a30cf6',
  earnContractAddress: '0xb422B9864B5Ac5068F1e47621AB722a463a30cf6',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "yoro-catnip-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Yoro',
  assets: ['CATNIP', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0xBbd946041824416A4e2EB37d5880718B3812c9Cb',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?outputCurrency=0xBbd946041824416A4e2EB37d5880718B3812c9Cb',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: "yoro-yoro-zoo",
  logo: 'fantom/YORO-ZOO.png',
  name: 'YORO-ZOO LP',
  token: 'YORO-ZOO LP (Zoo)',
  tokenDescription: 'Yoro',
  tokenAddress: '0xC4430E31ceC5967949dE2cAb4961a8D17D3D7ff0',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-YOR-ZOO-C',
  earnedTokenAddress: '0x93e6B820969Cc609C52d4cA2c9908cbFb1a218Aa',
  earnContractAddress: '0x93e6B820969Cc609C52d4cA2c9908cbFb1a218Aa',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "yoro-yoro-zoo",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Yoro',
  assets: ['YORO', 'ZOO'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0xCF7e516E2dd67C3B0Bd52266DA41F403A0F19A07',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?outputCurrency=0xCF7e516E2dd67C3B0Bd52266DA41F403A0F19A07',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: "yoro-catnip-zoo",
  logo: 'fantom/CATNIP-ZOO.png',
  name: 'CATNIP-ZOO LP',
  token: 'CATNIP-ZOO LP (Zoo)',
  tokenDescription: 'Yoro',
  tokenAddress: '0x6DF2fc52bC307954E7eD6A07104F8378E97cACcF',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-CAT-ZOO-C',
  earnedTokenAddress: '0x412785363F59fc575C351679EB21F6ee8dfd0176',
  earnContractAddress: '0x412785363F59fc575C351679EB21F6ee8dfd0176',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "yoro-catnip-zoo",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'eol',
  platform: 'Yoro',
  assets: ['CATNIP', 'ZOO'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0xBbd946041824416A4e2EB37d5880718B3812c9Cb',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?outputCurrency=0xBbd946041824416A4e2EB37d5880718B3812c9Cb',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: "yoro-yoro-catnip",
  logo: 'fantom/YORO-CATNIP.png',
  name: 'YORO-CATNIP LP',
  token: 'YORO-CATNIP LP (Zoo)',
  tokenDescription: 'Yoro',
  tokenAddress: '0x2cA2B777f5D3cAF8247E31a0C8e4b0bD8a22A33b',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-YOR-CAT-C',
  earnedTokenAddress: '0x800D64b93231ef0Ce67E3eEcAD593EcD082508e5',
  earnContractAddress: '0x800D64b93231ef0Ce67E3eEcAD593EcD082508e5',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "yoro-yoro-catnip",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'eol',
  platform: 'Yoro',
  assets: ['YORO', 'CATNIP'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0xBbd946041824416A4e2EB37d5880718B3812c9Cb',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?outputCurrency=0xBbd946041824416A4e2EB37d5880718B3812c9Cb',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: "yoro-atari-zoo",
  logo: 'fantom/ATARI-ZOO.png',
  name: 'ATARI-ZOO LP',
  token: 'ATARI-ZOO LP (Zoo)',
  tokenDescription: 'Yoro',
  tokenAddress: '0x5FBcb37F7E2723CFa91d0F2A3c8B8cbF3B2A77B1',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ATA-ZOO-C',
  earnedTokenAddress: '0x003F5B68c053F9701E14be1C4cbFDF789dd7F9D3',
  earnContractAddress: '0x003F5B68c053F9701E14be1C4cbFDF789dd7F9D3',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "yoro-atari-zoo",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Yoro',
  assets: ['ATARI', 'ZOO'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b&outputCurrency=0x09e145A1D53c0045F41aEEf25D8ff982ae74dD56',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?outputCurrency=0x09e145A1D53c0045F41aEEf25D8ff982ae74dD56&inputCurrency=FTM',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: "yoro-echo-ftm",
  logo: 'fantom/ECHO-FTM.png',
  name: 'ECHO-FTM LP',
  token: 'ECHO-FTM LP (Zoo)',
  tokenDescription: 'Yoro',
  tokenAddress: '0x79d25d00C159BAf1bdE8831B00e2f7370Bf5Fe46',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-ECH-FTM-C',
  earnedTokenAddress: '0x7998F8D0E83E440C7F920A0b5Fa36033970d9bE4',
  earnContractAddress: '0x7998F8D0E83E440C7F920A0b5Fa36033970d9bE4',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "yoro-echo-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Yoro',
  assets: ['ECHO', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0x54477A1D1bb8C1139eEF754Fd2eFd4DDeE7933dd&outputCurrency=FTM',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?outputCurrency=0x09e145A1D53c0045F41aEEf25D8ff982ae74dD56&inputCurrency=FTM',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'sbrw',
  logo: 'fantom/SBRW.png',
  name: 'SBRW',
  token: 'SBRW',
  tokenDescription: 'StrangeBrew',
  tokenAddress: '0x3853f3839ca1655acc8c433eef8c086f9895d0bf',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SBRW-D',
  earnedTokenAddress: '0x419d6855CA9f6Fc56f5E548E2d1551cF3CC659c2',
  earnContractAddress: '0x419d6855CA9f6Fc56f5E548E2d1551cF3CC659c2',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'tokens',
  oracleId: 'SBRW',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'StrangeBrew',
  assets: ['SBRW'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0x3853F3839ca1655AcC8c433EEF8C086F9895d0BF',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x3853f3839ca1655acc8c433eef8c086f9895d0bf',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},

{
  id: 'sbrw-sbrw-ftm',
  logo: 'fantom/SBRW-FTM.png',
  name: 'SBRW-FTM LP',
  token: 'SBRW-FTM LP (HyperJump)',
  tokenDescription: 'StrangeBrew',
  tokenAddress: '0x5360aedcaed83d4fc694755af80ef8c6896d04c6',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SBR-FTM-D',
  earnedTokenAddress: '0x21ba785ebA7744bC364E5C4f343761F3408ee249',
  earnContractAddress: '0x21ba785ebA7744bC364E5C4f343761F3408ee249',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'sbrw-sbrw-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'StrangeBrew',
  assets: ['SBRW', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0x3853F3839ca1655AcC8c433EEF8C086F9895d0BF',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x3853f3839ca1655acc8c433eef8c086f9895d0bf',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},

{
  id: 'sbrw-sbrw-usdc',
  logo: 'fantom/SBRW-USDC.png',
  name: 'SBRW-USDC LP',
  token: 'SBRW-USDC LP (HyperJump)',
  tokenDescription: 'StrangeBrew',
  tokenAddress: '0x01fa4d84f5bd205e11ac5aff836094ee77363c2c',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SBR-USD-D',
  earnedTokenAddress: '0x1318C46bB503d2a9F699359eB81bfE8735008978',
  earnContractAddress: '0x1318C46bB503d2a9F699359eB81bfE8735008978',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'sbrw-sbrw-usdc',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'StrangeBrew',
  assets: ['SBRW', 'USDC'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/0x3853F3839ca1655AcC8c433EEF8C086F9895d0BF/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0x3853f3839ca1655acc8c433eef8c086f9895d0bf',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},

{
  id: 'sbrw-beermoney-ftm',
  logo: 'fantom/SBRW-FTM.png',
  name: 'BEERMONEY-FTM LP',
  token: 'BEERMONEY-FTM LP (HyperJump)',
  tokenDescription: 'StrangeBrew',
  tokenAddress: '0xaab4b34e89e9b3d8f628019278b8bfd2745671a3',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BEE-FTM-D',
  earnedTokenAddress: '0x68a05D167832F0Be267bdc7e7B93f5c44DecA58A',
  earnContractAddress: '0x68a05D167832F0Be267bdc7e7B93f5c44DecA58A',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'sbrw-beermoney-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'eol',
  platform: 'StrangeBrew',
  assets: ['BEERMONEY', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://ftm-swap.hyperjump.fi/#/add/FTM/0xb207A6623764E149ee5cd681DC95F71620a0abD5',
  buyTokenUrl: 'https://ftm-swap.hyperjump.fi/#/swap?outputCurrency=0xb207a6623764e149ee5cd681dc95f71620a0abd5',
  zap: {
    zapAddress: VAULT_ZAP,
    router: HYPER_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},


{
  id: 'butt-butt-reaper',
  logo: 'fantom/BUTT-REAPER.png',
  name: 'BUTT-REAPER LP',
  token: 'BUTT-REAPER LP (Zoo)',
  tokenDescription: 'Buttcoin',
  tokenAddress: '0x3309AD0e5Eb8DF992F7D153AFb48866B0e5cC829',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BUT-REA-E',
  earnedTokenAddress: '0xbEd160F93757C623C4CFC9B7A80b14e120a13173',
  earnContractAddress: '0xbEd160F93757C623C4CFC9B7A80b14e120a13173',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'butt-butt-reaper',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Buttcoin',
  assets: ['BUTT', 'REAPER'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0xF42cc7284389fBf749590f26539002ca931323D0&outputCurrency=0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0xF42cc7284389fBf749590f26539002ca931323D0',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,

    ],
  },
},

{
  id: 'butt-shit-reaper',
  logo: 'fantom/SHIT-REAPER.png',
  name: 'SHIT-REAPER LP',
  token: 'SHIT-REAPER LP (Zoo)',
  tokenDescription: 'Buttcoin',
  tokenAddress: '0x5Fc97bB549b607F6A2f22AE9bdfd5aF06836378e',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SHI-REA-E',
  earnedTokenAddress: '0x4127d4d8c75E6E5345051dF337508787C31D9CDE',
  earnContractAddress: '0x4127d4d8c75E6E5345051dF337508787C31D9CDE',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'butt-shit-reaper',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Buttcoin',
  assets: ['SHIT', 'REAPER'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0x65414A8581A7571531eA2BCDcBa8A3F0c1A1554B&outputCurrency=0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0x65414A8581A7571531eA2BCDcBa8A3F0c1A1554B',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokensReduced,

    ],
  },
},

{
  id: 'butt',
  logo: 'fantom/BUTT.png',
  name: 'BUTT',
  token: 'BUTT',
  tokenDescription: 'Buttcoin',
  tokenAddress: '0xF42cc7284389fBf749590f26539002ca931323D0',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BUTT-E',
  earnedTokenAddress: '0xad5f10Fb9475206eD8d1963F51E7A7C3f2c885e9',
  earnContractAddress: '0xad5f10Fb9475206eD8d1963F51E7A7C3f2c885e9',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'tokens',
  oracleId: 'BUTT',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Buttcoin',
  assets: ['BUTT'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0xF42cc7284389fBf749590f26539002ca931323D0&outputCurrency=FTM',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0xF42cc7284389fBf749590f26539002ca931323D0',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},

{
  id: 'butt-butt-ftm',
  logo: 'fantom/BUTT-FTM.png',
  name: 'BUTT-FTM LP',
  token: 'BUTT-FTM LP (Zoo)',
  tokenDescription: 'Buttcoin',
  tokenAddress: '0x823aa5dccb5bb602b393081365d9e3e92867e123',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BUT-FTM-E',
  earnedTokenAddress: '0xdAc89b39fa83327d6482F8C743784B9350C6C491',
  earnContractAddress: '0xdAc89b39fa83327d6482F8C743784B9350C6C491',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'butt-butt-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Buttcoin',
  assets: ['BUTT', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0xF42cc7284389fBf749590f26539002ca931323D0&outputCurrency=FTM',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0xF42cc7284389fBf749590f26539002ca931323D0',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [

      
      {
        name: 'BUTT',
        address: '0xF42cc7284389fBf749590f26539002ca931323D0',
        symbol: 'BUTT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'butt-shit-ftm',
  logo: 'fantom/SHIT-FTM.png',
  name: 'SHIT-FTM LP',
  token: 'SHIT-FTM LP (Zoo)',
  tokenDescription: 'Buttcoin',
  tokenAddress: '0xf386ce2d4de9fe8fc47d00ebc6816cc5f79a350b',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SHI-FTM-E',
  earnedTokenAddress: '0x5329f72C169E8642abF2eFbF60D5ed2597ED79F2',
  earnContractAddress: '0x5329f72C169E8642abF2eFbF60D5ed2597ED79F2',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'butt-shit-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Buttcoin',
  assets: ['SHIT', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0x65414A8581A7571531eA2BCDcBa8A3F0c1A1554B&outputCurrency=FTM',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0x65414A8581A7571531eA2BCDcBa8A3F0c1A1554B',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
      
      {
        name: 'BUTT',
        address: '0xF42cc7284389fBf749590f26539002ca931323D0',
        symbol: 'BUTT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

      ...zapTokensReduced,



    ],
  },
},

{
  id: 'butt-butt-shit',
  logo: 'fantom/BUTT-SHIT.png',
  name: 'BUTT-SHIT LP',
  token: 'BUTT-SHIT LP (Zoo)',
  tokenDescription: 'Buttcoin',
  tokenAddress: '0xf5F1Bc0100D8A46091a861c8C5c2a18e2427c169',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BUT-SHI-E',
  earnedTokenAddress: '0xe44264e71f03c5e83B8e07d51Ee4B53EE640279D',
  earnContractAddress: '0xe44264e71f03c5e83B8e07d51Ee4B53EE640279D',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'butt-butt-shit',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Buttcoin',
  assets: ['BUTT', 'SHIT'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0x65414A8581A7571531eA2BCDcBa8A3F0c1A1554B&outputCurrency=0xF42cc7284389fBf749590f26539002ca931323D0',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0x65414A8581A7571531eA2BCDcBa8A3F0c1A1554B',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [

      {
        name: 'BUTT',
        address: '0xF42cc7284389fBf749590f26539002ca931323D0',
        symbol: 'BUTT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'butt-butt-zoo',
  logo: 'fantom/BUTT-ZOO.png',
  name: 'BUTT-ZOO LP',
  token: 'BUTT-ZOO LP (Zoo)',
  tokenDescription: 'Buttcoin',
  tokenAddress: '0x81d82a53f2b96ad0307a30626559ca164e4acd8a',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BUT-ZOO-E',
  earnedTokenAddress: '0xD0391F958e22E6944357A1D1C5a34b8E1874f1b5',
  earnContractAddress: '0xD0391F958e22E6944357A1D1C5a34b8E1874f1b5',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'butt-butt-zoo',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Buttcoin',
  assets: ['BUTT', 'ZOO'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0xF42cc7284389fBf749590f26539002ca931323D0&outputCurrency=0x09e145A1D53c0045F41aEEf25D8ff982ae74dD56',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0x09e145A1D53c0045F41aEEf25D8ff982ae74dD56',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
     
      {
        name: 'BUTT',
        address: '0xF42cc7284389fBf749590f26539002ca931323D0',
        symbol: 'BUTT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

      ...zapTokensReduced,



    ],
  },
},

{
  id: 'butt-shit-wild',
  logo: 'fantom/SHIT-WILD.png',
  name: 'WILD-SHIT LP',
  token: 'WILD-SHIT LP (Zoo)',
  tokenDescription: 'Buttcoin',
  tokenAddress: '0x4aC3643E27E41f630F1c0b7E39B2e849876D01C3',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SHI-WIL-E',
  earnedTokenAddress: '0xE437C40d70A465af670aaE0b0FEa32D33Dc5e624',
  earnContractAddress: '0xE437C40d70A465af670aaE0b0FEa32D33Dc5e624',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'butt-shit-wild',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Buttcoin',
  assets: ['SHIT', 'WILD'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0x65414A8581A7571531eA2BCDcBa8A3F0c1A1554B&outputCurrency=0xAe0C241Ec740309c2cbdc27456eB3C1a2aD74737',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0xF42cc7284389fBf749590f26539002ca931323D0',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [

      
      {
        name: 'BUTT',
        address: '0xF42cc7284389fBf749590f26539002ca931323D0',
        symbol: 'BUTT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'butt-hodl-shit',
  logo: 'fantom/SHIT-HODL.png',
  name: 'HODL-SHIT LP',
  token: 'HODL-SHIT LP (Zoo)',
  tokenDescription: 'Buttcoin',
  tokenAddress: '0x9030c1F9Af5a7457A8E89a05C42a0Ed6DeE51A8D',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-HOD-SHI-E',
  earnedTokenAddress: '0x22C0203A21E610827C1C8bc58a75B0f29351D76D',
  earnContractAddress: '0x22C0203A21E610827C1C8bc58a75B0f29351D76D',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'butt-hodl-shit',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Buttcoin',
  assets: ['HODL', 'SHIT'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0x65414A8581A7571531eA2BCDcBa8A3F0c1A1554B&outputCurrency=0xB2Da66c4a89D0f93935D1efDB9C9c8D1d3Ba9343',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0x65414A8581A7571531eA2BCDcBa8A3F0c1A1554B',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [

      {
        name: 'BUTT',
        address: '0xF42cc7284389fBf749590f26539002ca931323D0',
        symbol: 'BUTT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'butt-hodl-butt',
  logo: 'fantom/BUTT-HODL.png',
  name: 'HODL-BUTT LP',
  token: 'HODL-BUTT LP (Zoo)',
  tokenDescription: 'Buttcoin',
  tokenAddress: '0x3cAF51d882594c5aA980611aead947f80794A804',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-HOD-BUT-E',
  earnedTokenAddress: '0x90E180F9d45984572843421bE0aD5c738818Eeb8',
  earnContractAddress: '0x90E180F9d45984572843421bE0aD5c738818Eeb8',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'butt-hodl-butt',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Buttcoin',
  assets: ['HODL', 'BUTT'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0xF42cc7284389fBf749590f26539002ca931323D0&outputCurrency=0xB2Da66c4a89D0f93935D1efDB9C9c8D1d3Ba9343',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0x65414A8581A7571531eA2BCDcBa8A3F0c1A1554B',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [

      {
        name: 'BUTT',
        address: '0xF42cc7284389fBf749590f26539002ca931323D0',
        symbol: 'BUTT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'butt-shit-totem',
  logo: 'fantom/SHIT-TOTEM.png',
  name: 'SHIT-TOTEM LP',
  token: 'SHIT-TOTEM LP (Zoo)',
  tokenDescription: 'Buttcoin',
  tokenAddress: '0x778569244e2a7A73804435f170832E938596EF94',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SHI-TOT-E',
  earnedTokenAddress: '0xc36126F539187F74354C92e6e3086c021D204283',
  earnContractAddress: '0xc36126F539187F74354C92e6e3086c021D204283',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'butt-shit-totem',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Buttcoin',
  assets: ['SHIT', 'TOTEM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://dex.zoocoin.cash/pool/add?inputCurrency=0x65414A8581A7571531eA2BCDcBa8A3F0c1A1554B&outputCurrency=0x31a37aedC0C18AA139e120e1CDC673BbB2063e6f',
  buyTokenUrl: 'https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0x65414A8581A7571531eA2BCDcBa8A3F0c1A1554B',
  zap: {
    zapAddress: VAULT_ZAP,
    router: ZOO_ROUTER,

    tokens: [
      
      {
        name: 'BUTT',
        address: '0xF42cc7284389fBf749590f26539002ca931323D0',
        symbol: 'BUTT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokensReduced,



    ],
  },
},

{
  id: 'butt-shit-babyboo',
  logo: 'fantom/SHIT-BABYBOO.png',
  name: 'SHIT-BABYBOO LP',
  token: 'SHIT-BABYBOO LP (SpookySwap)',
  tokenDescription: 'Buttcoin',
  tokenAddress: '0x2B870b5EcD0Ad4ACeeCb4Aa27A8A2c47eB476d50',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SHI-BAB-E',
  earnedTokenAddress: '0x410feAB03c786664adfb4D5a0EE3EdAB6BD87839',
  earnContractAddress: '0x410feAB03c786664adfb4D5a0EE3EdAB6BD87839',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'butt-shit-babyboo',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'Buttcoin',
  assets: ['SHIT', 'BABYBOO'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/0x65414A8581A7571531eA2BCDcBa8A3F0c1A1554B/0x471762A7017A5B1A3e931F1A97aa03Ef1E7F4A73',
  buyTokenUrl: 'https://spookyswap.finance/swap?input%D0%A1urrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83&outputCurrency=0x471762a7017a5b1a3e931f1a97aa03ef1e7f4a73',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [
      
      {
        name: 'BUTT',
        address: '0xF42cc7284389fBf749590f26539002ca931323D0',
        symbol: 'BUTT',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },
     
      ...zapTokens,



    ],
  },
},

{
  id: 'opera',
  logo: 'fantom/OPERA.png',
  name: 'OPERA',
  token: 'OPERA',
  tokenDescription: 'OperaSwap',
  tokenAddress: '0xed940c1db02a8e7dc2e6748aff3aab165b59c7e3',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-OPERA-9',
  earnedTokenAddress: '0x7a4bBdeB10D35F65E7e5F1ed38f51Cd350E176c0',
  earnContractAddress: '0x7a4bBdeB10D35F65E7e5F1ed38f51Cd350E176c0',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'tokens',
  oracleId: 'OPERA',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'OperaSwap',
  assets: ['OPERA'],
  callFee: 0.5,
  addLiquidityUrl: 'https://exchange.operaswap.finance/#/pool',
  buyTokenUrl: 'https://exchange.operaswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: OPERA_ROUTER,

    tokens: [


    ],
  },
},

{
  id: "opera-opera-ftm",
  logo: 'fantom/OPERA-FTM.png',
  name: 'OPERA-FTM LP',
  token: 'OPERA-FTM LP (OperaSwap)',
  tokenDescription: 'OperaSwap',
  tokenAddress: '0x31C782F4f7bdabc2f1Ac02Da1782eA6107C4CFCf',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-OPE-FTM-9',
  earnedTokenAddress: '0xA874e458C63348891096Fb1e8Cbf69e19E23dad2',
  earnContractAddress: '0xA874e458C63348891096Fb1e8Cbf69e19E23dad2',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: "opera-opera-ftm",
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'OperaSwap',
  assets: ['OPERA', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://exchange.operaswap.finance/#/pool',
  buyTokenUrl: 'https://exchange.operaswap.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: OPERA_ROUTER,

    tokens: [

      {
        name: 'OPERA',
        address: '0xed940c1db02a8e7dc2e6748aff3aab165b59c7e3',
        symbol: 'OPERA',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },     

    ],
  },
},


{
  id: 'behodl-behodl-reaper',
  logo: 'fantom/beHODL-REAPER.png',
  name: 'beHODL-REAPER LP',
  token: 'beHODL-REAPER LP (SpookySwap)',
  tokenDescription: 'beHODL',
  tokenAddress: '0xe422335D1C766cE5c45987293DB555BB108b9A74',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BEH-REA-F',
  earnedTokenAddress: '0x5fee5EA92bf82d5b441fBD0b270F9D1C98cdC069',
  earnContractAddress: '0x5fee5EA92bf82d5b441fBD0b270F9D1C98cdC069',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'behodl-behodl-reaper',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'eol',
  platform: 'beHODL',
  assets: ['beHODL', 'REAPER'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb/0x6b60d2b6bb9fe657ec0e5b7d44e557504e78af6a',
  buyTokenUrl: 'https://spookyswap.finance/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [
     
      ...zapTokens,

    ],
  },
},

{
  id: 'behodl-hodlcc-ftm',
  logo: 'fantom/HODLcc-FTM.png',
  name: 'HODLcc-FTM LP',
  token: 'HODLcc-FTM LP (SpookySwap)',
  tokenDescription: 'beHODL',
  tokenAddress: '0x64e559154a6AD93AD0F1Ef1AfA697Fd00804709A',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-HOD-FTM-F',
  earnedTokenAddress: '0x5Bed2B5Bb634d6Fa6cB2C706b48dd5de362Cd20B',
  earnContractAddress: '0x5Bed2B5Bb634d6Fa6cB2C706b48dd5de362Cd20B',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'behodl-hodlcc-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'beHODL',
  assets: ['HODLcc', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x3F7abB98D269213cDEf6b295Bc2E1Fbe3FbF8F59',
  buyTokenUrl: 'https://spookyswap.finance/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},

{
  id: 'behodl-behodl-ftm',
  logo: 'fantom/beHODL-FTM.png',
  name: 'beHODL-FTM LP',
  token: 'beHODL-FTM LP (SpookySwap)',
  tokenDescription: 'beHODL',
  tokenAddress: '0xF26bD52EFE714870e31f58E4F0F7E9fe01424328',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BEH-FTM-F',
  earnedTokenAddress: '0x619B73417520E7A2B6bd7Fa3074A720aD99Ac120',
  earnContractAddress: '0x619B73417520E7A2B6bd7Fa3074A720aD99Ac120',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'behodl-behodl-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'beHODL',
  assets: ['beHODL', 'FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x6b60d2b6bb9fe657ec0e5b7d44e557504e78af6a',
  buyTokenUrl: 'https://spookyswap.finance/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},

{
  id: 'behodl-behodl-nips',
  logo: 'fantom/beHODL-NIPS.png',
  name: 'beHODL-NIPS LP',
  token: 'beHODL-NIPS LP (SpookySwap)',
  tokenDescription: 'beHODL',
  tokenAddress: '0xbE1B408A803A9d073d8ee3635b468a47a49D800C',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BEH-NIP-F',
  earnedTokenAddress: '0xBFF1b8f71381A56C9BDAAB98d305D0463cfbA8C9',
  earnContractAddress: '0xBFF1b8f71381A56C9BDAAB98d305D0463cfbA8C9',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'behodl-behodl-nips',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'beHODL',
  assets: ['beHODL', 'NIPS'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/0x667Afbb7D558c3dFd20fAbd295D31221Dab9dBC2/0x6b60d2b6bb9fe657ec0e5b7d44e557504e78af6a',
  buyTokenUrl: 'https://spookyswap.finance/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},

{
  id: 'behodl-behodl-shiba',
  logo: 'fantom/beHODL-SHIBA.png',
  name: 'beHODL-SHIBA LP',
  token: 'beHODL-SHIBA LP (SpookySwap)',
  tokenDescription: 'beHODL',
  tokenAddress: '0xBDaD44dC4886695D6b1B7c1DDCAbDa5621D10A03',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BEH-SHI-F',
  earnedTokenAddress: '0xEA63983D079836c158C5AfC7df44135333A5846D',
  earnContractAddress: '0xEA63983D079836c158C5AfC7df44135333A5846D',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'behodl-behodl-shiba',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'beHODL',
  assets: ['beHODL', 'SHIBA'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/0x9Ba3e4F84a34DF4e08C112e1a0FF148b81655615/0x6b60d2b6bb9fe657ec0e5b7d44e557504e78af6a',
  buyTokenUrl: 'https://spookyswap.finance/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},

{
  id: 'behodl-ftm-babyboo',
  logo: 'fantom/beHODL-BABYBOO.png',
  name: 'FTM-BABYBOO LP',
  token: 'FTM-BABYBOO LP (SpookySwap)',
  tokenDescription: 'beHODL',
  tokenAddress: '0x24a5D3e0E3D8F21d94508f148682379fCaB532D8',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-FTM-BAB-F',
  earnedTokenAddress: '0x170de72957b543f3cA958207fCc7f21F93D97b85',
  earnContractAddress: '0x170de72957b543f3cA958207fCc7f21F93D97b85',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'behodl-ftm-babyboo',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'beHODL',
  assets: ['FTM', 'BABYBOO'],
  callFee: 0.5,
  addLiquidityUrl: 'https://spookyswap.finance/add/FTM/0x471762A7017A5B1A3e931F1A97aa03Ef1E7F4A73',
  buyTokenUrl: 'https://spookyswap.finance/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: SPOOKY_ROUTER,

    tokens: [
     
      ...zapTokens,



    ],
  },
},

{
  id: 'bomb-bomb-ftm',
  logo: 'fantom/BOMB-FTM.png',
  name: 'BOMB-FTM LP',
  token: 'BOMB-FTM LP (BombSwap)',
  tokenDescription: 'BombSwap',
  tokenAddress: '0x8264f247E4571e2879A05D5d2115C26406c0bC2b',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BOM-FTM-L',
  earnedTokenAddress: '0x7054442F7A0aFd8E0957841F24Ea67678A85f4Ca',
  earnContractAddress: '0x7054442F7A0aFd8E0957841F24Ea67678A85f4Ca',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bomb-bomb-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'BombSwap',
  assets: ['BOMB','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.fbomb.finance/#/add/FTM/0x8503eb4A136bDBeB323E37Aa6e0FA0C772228378',
  buyTokenUrl: 'https://swap.fbomb.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: BOMB_ROUTER,

    tokens: [


    ],
  },
},

{
  id: 'bomb-shrap-ftm',
  logo: 'fantom/SHRAP-FTM.png',
  name: 'SHRAP-FTM LP',
  token: 'SHRAP-FTM LP (BombSwap)',
  tokenDescription: 'BombSwap',
  tokenAddress: '0xE69b45BE6260634de4e432F66179ce47EE846800',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SHR-FTM-L',
  earnedTokenAddress: '0x7e43c33a2359fDf22Bc89Df2a2DD86C0199a59Aa',
  earnContractAddress: '0x7e43c33a2359fDf22Bc89Df2a2DD86C0199a59Aa',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bomb-shrap-ftm',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'BombSwap',
  assets: ['SHRAP','FTM'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.fbomb.finance/#/add/FTM/0xbf4906762C38F50bC7Be0A11BB452C944f6C72E1',
  buyTokenUrl: 'https://swap.fbomb.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: BOMB_ROUTER,

    tokens: [
     
      
      {
        name: 'SHRAP',
        address: '0xbf4906762c38f50bc7be0a11bb452c944f6c72e1',
        symbol: 'SHRAP',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

    ],
  },
},

{
  id: 'bomb-bomb-shrap',
  logo: 'fantom/BOMB-SHRAP.png',
  name: 'BOMB-SHRAP LP',
  token: 'BOMB-SHRAP LP (BombSwap)',
  tokenDescription: 'BombSwap',
  tokenAddress: '0x4710D96DCAeD0dBb1f82E77F620C03C1D9f4A5e1',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BOM-SHR-L',
  earnedTokenAddress: '0x0e4Af6DD9174B234670Dba6E51354EC97EcC8b29',
  earnContractAddress: '0x0e4Af6DD9174B234670Dba6E51354EC97EcC8b29',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bomb-bomb-shrap',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'BombSwap',
  assets: ['BOMB','SHRAP'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.fbomb.finance/#/add/0x8503eb4A136bDBeB323E37Aa6e0FA0C772228378/0xbf4906762C38F50bC7Be0A11BB452C944f6C72E1',
  buyTokenUrl: 'https://swap.fbomb.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: BOMB_ROUTER,

    tokens: [
     
      
      {
        name: 'SHRAP',
        address: '0xbf4906762c38f50bc7be0a11bb452c944f6c72e1',
        symbol: 'SHRAP',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },


    ],
  },
},

{
  id: 'bomb-bomb-usdc',
  logo: 'fantom/BOMB-USDC.png',
  name: 'BOMB-USDC LP',
  token: 'BOMB-USDC LP (BombSwap)',
  tokenDescription: 'BombSwap',
  tokenAddress: '0xFD98aa53999613CfFB57a784553e7B3F6D4e25B8',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-BOM-USD-L',
  earnedTokenAddress: '0xdE496b08274d357EaAcCBDBb2D0bd20f5ED9F9a9',
  earnContractAddress: '0xdE496b08274d357EaAcCBDBb2D0bd20f5ED9F9a9',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bomb-bomb-usdc',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'BombSwap',
  assets: ['BOMB','USDC'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.fbomb.finance/#/add/0x8503eb4A136bDBeB323E37Aa6e0FA0C772228378/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  buyTokenUrl: 'https://swap.fbomb.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: BOMB_ROUTER,

    tokens: [
     
      {
        name: 'SHRAP',
        address: '0xbf4906762c38f50bc7be0a11bb452c944f6c72e1',
        symbol: 'SHRAP',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },

    ],
  },
},

{
  id: 'bomb-shrap-usdc',
  logo: 'fantom/SHRAP-USDC.png',
  name: 'SHRAP-USDC LP',
  token: 'SHRAP-USDC LP (BombSwap)',
  tokenDescription: 'BombSwap',
  tokenAddress: '0x873fa944414F569B23649EB92DBB254340B6b25D',
  tokenDecimals: 18,
  tokenDescriptionUrl: '#',
  earnedToken: 'G-SHR-USD-L',
  earnedTokenAddress: '0xb377aCD5c06aACc955193147fe1007aB4310B7C1',
  earnContractAddress: '0xb377aCD5c06aACc955193147fe1007aB4310B7C1',
  pricePerFullShare: 1,
  tvl: 0,
  oracle: 'lps',
  oracleId: 'bomb-shrap-usdc',
  oraclePrice: 0,
  depositsPaused: false,
  status: 'active',
  platform: 'BombSwap',
  assets: ['SHRAP','USDC'],
  callFee: 0.5,
  addLiquidityUrl: 'https://swap.fbomb.finance/#/add/0xbf4906762C38F50bC7Be0A11BB452C944f6C72E1/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  buyTokenUrl: 'https://swap.fbomb.finance/#/swap',
  zap: {
    zapAddress: VAULT_ZAP,
    router: BOMB_ROUTER,

    tokens: [
     
      {
        name: 'SHRAP',
        address: '0xbf4906762c38f50bc7be0a11bb452c944f6c72e1',
        symbol: 'SHRAP',
        decimals: 18,
        chainId: 250,
        logoURI: '',
      },


    ],
  },
},

  
];


// const spiritLps = [
  //   {
  //     id: 'spirit-spirit-ftm',
  //     name: 'SPIRIT-FTM LP',
  //     address: '0x30748322B6E34545DBe0788C421886AEB5297789',
  //     symbol: 'SPIRIT-FTM LP (SpiritSwap)',
  //     decimals: 18,
  //     chainId: 250,
  //     router: SPIRIT_ROUTER,
  //   },
  
  //   {
  //     id: 'spirit-spirit-xsteak',
  //     name: 'SPIRIT-FTM LP',
  //     address: '0xe276a71991a7a7b16cb453db2994ce9fcda2eda6',
  //     symbol: 'SPIRIT-XSTEAK LP (SpiritSwap)',
  //     decimals: 18,
  //     chainId: 250,
  //     router: SPIRIT_ROUTER,
  //   },
  
  
  
  // ];


const lpTokens = pools
  .filter(v => v.assets.length > 1 && v.assets.length < 3)
  .map(v => {
    return {
      id: v.id,
      name: `${v.name} (${v.platform})`,
      address: v.tokenAddress,
      symbol: v.token,
      decimals: v.tokenDecimals,
      chainId: 250,
      isLP: true,
      router: v.zap.router,
    };
  });


const vaultTokens = pools
  .filter(v => v.assets.length > 1 && v.assets.length < 3)
  .map(v => {
    return {
      id: v.id,
      name: `${v.name.replace('LP', '')} Vault (${v.platform})`,
      address: v.earnContractAddress,
      symbol: v.earnedToken,
      decimals: v.tokenDecimals,
      chainId: 250,
      isVault: true,
      router: v.zap.router,
    };
  });

export const fantomPools = pools.map(p => {
  //p.zap.tokens = [...p.zap.tokens, ...vaultTokens];
  p.zap.tokens = [...p.zap.tokens, ...lpTokens, ...vaultTokens];
  return p;
});
