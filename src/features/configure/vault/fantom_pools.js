const VAULT_ZAP = '0xe6098d5A2F817Ab55D91eF74b775236825ab9808'; //blues zapper - private
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
const XDAO_ROUTER = '0xD9B37cA21e53581F784fFB265F9BFBcF9AD255d6';
const OLIVE_ROUTER = '0xF491e7B69E4244ad4002BC14e878a34207E38c29';
const JET_ROUTER = '0x845E76A8691423fbc4ECb8Dd77556Cb61c09eE25';
const MORPH_ROUTER = '0x8aC868293D97761A1fED6d4A01E9FF17C5594Aa3';
const SOUL_ROUTER = '0x6b3d631B87FE27aF29efeC61d2ab8CE4d621cCBF';
const DK_ROUTER = '0x045312C737a6b7a115906Be0aD0ef53A6AA38106';

const zapTokens = [
  {
    name: 'Fantom',
    address: '',
    symbol: 'FTM',
    wrappedSymbol: 'WFTM',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/WFTM_32.png',
    isToken: true,
  },
  {
    name: 'USD Coin',
    address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    symbol: 'USDC',
    decimals: 6,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/USDC_32.png',
    isToken: true,
  },
  {
    name: 'ChainLink',
    address: '0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8',
    symbol: 'LINK',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/chainlink_32.png',
    isToken: true,
  },
  {
    name: 'Wrapped Bitcoin',
    address: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
    symbol: 'WBTC',
    decimals: 8,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/wBTC_32.png',
    isToken: true,
  },
  {
    name: 'Wrapped Ether',
    address: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
    symbol: 'WETH',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/wETH_32.png',
    isToken: true,
  },
  {
    name: 'yearn.finance',
    address: '0x29b0Da86e484E1C0029B56e817912d778aC0EC69',
    symbol: 'YFI',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/YFI_32.png',
    isToken: true,
  },
  {
    name: 'Curve DAO',
    address: '0x1E4F97b9f9F913c46F1632781732927B9019C68b',
    symbol: 'CRV',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/CurveFi_32.png',
    isToken: true,
  },
  {
    name: 'IceToken',
    address: '0xf16e81dce15B08F326220742020379B855B87DF9',
    symbol: 'ICE',
    decimals: 18,
    chainId: 250,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xf16e81dce15B08F326220742020379B855B87DF9/logo.png',
    isToken: true,
  },
  {
    name: 'Frapped USDT',
    address: '0x049d68029688eAbF473097a2fC38ef61633A3C7A',
    symbol: 'fUSDT',
    decimals: 6,
    chainId: 250,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
    isToken: true,
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
    isToken: true,
  },
];

const zapTokensNoFtm = [
  {
    name: 'USD Coin',
    address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    symbol: 'USDC',
    decimals: 6,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/USDC_32.png',
    isToken: true,
  },
  {
    name: 'ChainLink',
    address: '0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8',
    symbol: 'LINK',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/chainlink_32.png',
    isToken: true,
  },
  {
    name: 'Fantom USD',
    address: '0xAd84341756Bf337f5a0164515b1f6F993D194E1f',
    symbol: 'fUSD',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/fUSD_32.png',
    isToken: true,
  },
  {
    name: 'Wrapped Bitcoin',
    address: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
    symbol: 'WBTC',
    decimals: 8,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/wBTC_32.png',
    isToken: true,
  },
  {
    name: 'Wrapped Ether',
    address: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
    symbol: 'WETH',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/wETH_32.png',
    isToken: true,
  },
  {
    name: 'yearn.finance',
    address: '0x29b0Da86e484E1C0029B56e817912d778aC0EC69',
    symbol: 'YFI',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/YFI_32.png',
    isToken: true,
  },
  {
    name: 'Curve DAO',
    address: '0x1E4F97b9f9F913c46F1632781732927B9019C68b',
    symbol: 'CRV',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/CurveFi_32.png',
    isToken: true,
  },
  {
    name: 'IceToken',
    address: '0xf16e81dce15B08F326220742020379B855B87DF9',
    symbol: 'ICE',
    decimals: 18,
    chainId: 250,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xf16e81dce15B08F326220742020379B855B87DF9/logo.png',
    isToken: true,
  },
  {
    name: 'Frapped USDT',
    address: '0x049d68029688eAbF473097a2fC38ef61633A3C7A',
    symbol: 'fUSDT',
    decimals: 6,
    chainId: 250,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
    isToken: true,
  },
];

const spiritTokens = [
  {
    name: 'REAPER',
    address: '0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb',
    symbol: 'REAPER',
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
];

const spookyTokens = [
  {
    name: 'BOO',
    address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
    symbol: 'BOO',
    decimals: 18,
    chainId: 250,
    logoURI: '',
  },
  {
    name: 'TOMB',
    address: '0x6c021ae822bea943b2e66552bde1d2696a53fbb7',
    symbol: 'TOMB',
    decimals: 18,
    chainId: 250,
    logoURI: '',
  },
  {
    name: 'MIM',
    address: '0x82f0B8B456c1A451378467398982d4834b6829c1',
    symbol: 'MIM',
    decimals: 18,
    chainId: 250,
    logoURI: '',
  },
  {
    name: 'Dai Stablecoin',
    address: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
    symbol: 'DAI',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/MCDDai_32.png',
    isToken: true,
  },
  {
    name: 'SPELL',
    address: '0x468003B688943977e6130F4F68F23aad939a1040',
    symbol: 'SPELL',
    decimals: 18,
    chainId: 250,
    logoURI: '',
  },
];

const wakaTokens = [
  {
    name: 'WAKA',
    address: '0xf61ccde1d4bb76ced1daa9d4c429cca83022b08b',
    symbol: 'WAKA',
    decimals: 18,
    chainId: 250,
    logoURI: '',
  },
  {
    name: 'Dai Stablecoin',
    address: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
    symbol: 'DAI',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/MCDDai_32.png',
    isToken: true,
  },
];


const zooTokens = [
  {
    name: 'WILD',
    address: '0xae0c241ec740309c2cbdc27456eb3c1a2ad74737',
    symbol: 'WILD',
    decimals: 18,
    chainId: 250,
    logoURI: '',
  },
];

const paintTokens = [
  {
    name: 'Fantom',
    address: '',
    symbol: 'FTM',
    wrappedSymbol: 'WFTM',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/WFTM_32.png',
    isToken: true,
  },
  {
    name: 'BRUSH',
    address: '0x85dec8c4b2680793661bca91a8f129607571863d',
    symbol: 'BRUSH',
    decimals: 18,
    chainId: 250,
    logoURI: '',
  },
];

const bombTokens = [
  {
    name: 'Fantom',
    address: '',
    symbol: 'FTM',
    wrappedSymbol: 'WFTM',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/WFTM_32.png',
    isToken: true,
  },
  {
    name: 'SHRAP',
    address: '0xbf4906762c38f50bc7be0a11bb452c944f6c72e1',
    symbol: 'SHRAP',
    decimals: 18,
    chainId: 250,
    logoURI: '',
  },
];


const pools = [

  {
    id: 'soul-usdc-btc-v2',
    logo: 'fantom/USDC-BTC.png',
    name: 'USDC-BTC LP (SoulSwap)',
    token: 'USDC-BTC LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0xE2d39F7f0c8517Ca2058Fa97eB3D8d4928F7C6D6',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-8-USD-BTC',
    earnedTokenAddress: '0xeAEE70DD024bAd8fcBe070b32B4F4bc2e655Cb50',
    earnContractAddress: '0xeAEE70DD024bAd8fcBe070b32B4F4bc2e655Cb50',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-usdc-btc-v2',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SoulSwap',
    assets: ['DAI', 'USDC'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0xE2d39F7f0c8517Ca2058Fa97eB3D8d4928F7C6D6',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x321162Cd933E2Be498Cd2267a90534A804051b11/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  
  {
    id: 'soul-soul',
    logo: 'fantom/SOUL.png',
    name: 'SOUL',
    token: 'SOUL',
    tokenDescription: 'SoulSwap',
    tokenAddress: '0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-SOUL-Z',
    earnedTokenAddress: '0x613dcbc575034eB8dbBF3FD5AF90697C241F4C73',
    earnContractAddress: '0x613dcbc575034eB8dbBF3FD5AF90697C241F4C73',
    strategyAddress: '',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'SOUL',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['SOUL'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/tokens/0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-soul-ftm',
    logo: 'fantom/SOUL-FTM.png',
    name: 'SOUL-FTM LP (SoulSwap)',
    token: 'SOUL-FTM LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0xa2527Af9DABf3E3B4979d7E0493b5e2C6e63dC57',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-SOU-FTM-Z',
    earnedTokenAddress: '0x799F532F78F7Ff6c8C76Ae47B3D2B72bbC5658D8',
    earnContractAddress: '0x799F532F78F7Ff6c8C76Ae47B3D2B72bbC5658D8',
    strategyAddress: '0x90585e801415C37A68127969058e93D7316cdE7B',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-soul-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['FTM', 'SOUL'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0xa2527af9dabf3e3b4979d7e0493b5e2c6e63dc57',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/FTM/0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-usdc-ftm',
    logo: 'fantom/USDC-FTM.png',
    name: 'USDC-FTM LP (SoulSwap)',
    token: 'USDC-FTM LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x160653F02b6597E7Db00BA8cA826cf43D2f39556',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-USD-FTM-Z',
    earnedTokenAddress: '0x6391f2416c2DcC4181Fdbd8C17d01080941974F7',
    earnContractAddress: '0x6391f2416c2DcC4181Fdbd8C17d01080941974F7',
    strategyAddress: '0x458b16d49EA9966E475cc262f1FAEd6A5D8679EC',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-usdc-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['FTM', 'USDC'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x160653F02b6597E7Db00BA8cA826cf43D2f39556',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/FTM/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-fusd-soul',
    logo: 'fantom/SOUL-FUSD.png',
    name: 'FUSD-SOUL LP (SoulSwap)',
    token: 'FUSD-SOUL LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x9e7711eAeb652d0da577C1748844407f8Db44a10',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-FUS-SOU-Z',
    earnedTokenAddress: '0x66e700DD321E29C5CB909750A8519A014AF623bE',
    earnContractAddress: '0x66e700DD321E29C5CB909750A8519A014AF623bE',
    strategyAddress: '0xe361Cd417ACce1C7Ad96e08e6626833d4F37Ceb2',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-fusd-soul',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['FUSD', 'SOUL'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x9e7711eAeb652d0da577C1748844407f8Db44a10',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0xAd84341756Bf337f5a0164515b1f6F993D194E1f/0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-seance-soul',
    logo: 'fantom/SOUL-SEANCE.png',
    name: 'SEANCE-SOUL LP (SoulSwap)',
    token: 'SEANCE-SOUL LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x8f1E15cD3d5a0bb85B8189d5c6B61BB64398E19b',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-SEA-SOU-Z',
    earnedTokenAddress: '0x0A03d78CBb197e888C350a380377796553b5f2A6',
    earnContractAddress: '0x0A03d78CBb197e888C350a380377796553b5f2A6',
    strategyAddress: '0x0c256f47ed28eCc97E6f62698A650B8E9B4A315d',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-seance-soul',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['SEANCE', 'SOUL'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x8f1E15cD3d5a0bb85B8189d5c6B61BB64398E19b',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x124B06C5ce47De7A6e9EFDA71a946717130079E6/0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-eth-ftm',
    logo: 'fantom/ETH-FTM.png',
    name: 'ETH-FTM LP (SoulSwap)',
    token: 'ETH-FTM LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0xC615a5fd68265D9Ec6eF60805998fa5Bb71972Cb',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-ETH-FTM-Z',
    earnedTokenAddress: '0x149485B11fEc3A10dF6865baf91e61c8de0A637B',
    earnContractAddress: '0x149485B11fEc3A10dF6865baf91e61c8de0A637B',
    strategyAddress: '0x29142D06658f6fd1F304fFa2EE744C419376C951',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-eth-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['ETH', 'FTM'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0xC615a5fd68265D9Ec6eF60805998fa5Bb71972Cb',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/FTM/0x74b23882a30290451A17c44f4F05243b6b58C76d',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-usdc-seance',
    logo: 'fantom/SEANCE-USDC.png',
    name: 'USDC-SEANCE LP (SoulSwap)',
    token: 'USDC-SEANCE LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x98C678d3C7ebeD4a36B84666700d8b5b5Ddc1f79',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-USD-SEA-Z',
    earnedTokenAddress: '0x2f84a4316cEfeB843fD9fc5EB1BA33EEf08e055A',
    earnContractAddress: '0x2f84a4316cEfeB843fD9fc5EB1BA33EEf08e055A',
    strategyAddress: '0x405251049aE79A95a4972Ea6f6CdfC99b631cB44',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-usdc-seance',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['USDC', 'SEANCE'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x98C678d3C7ebeD4a36B84666700d8b5b5Ddc1f79',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/0x124B06C5ce47De7A6e9EFDA71a946717130079E6',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-seance-ftm',
    logo: 'fantom/SEANCE-FTM.png',
    name: 'SEANCE-FTM LP (SoulSwap)',
    token: 'SEANCE-FTM LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x8542bEAC34282aFe5Bb6951Eb6DCE0B3783b7faB',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-SEA-FTM-Z',
    earnedTokenAddress: '0xD45a118f554e1f39C9484d24f8541F1Fb2865A09',
    earnContractAddress: '0xD45a118f554e1f39C9484d24f8541F1Fb2865A09',
    strategyAddress: '0xd626FAe9FCc84B1621a9f4B9C927d58042358CF0',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-seance-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['FTM', 'SEANCE'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x8542bEAC34282aFe5Bb6951Eb6DCE0B3783b7faB',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83/0x124B06C5ce47De7A6e9EFDA71a946717130079E6',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-usdc-fusd',
    logo: 'fantom/USDC-FUSD.png',
    name: 'USDC-FUSD LP (SoulSwap)',
    token: 'USDC-FUSD LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0xD5F5E2638d636A98eD4aAEBfd2045441316e0c08',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-USD-FUS-Z',
    earnedTokenAddress: '0xB7679d38e71b034C582CD34B2032dB423fc08264',
    earnContractAddress: '0xB7679d38e71b034C582CD34B2032dB423fc08264',
    strategyAddress: '0x55Cf94681660579A60F3a7Fa08dDE5f8A0D9E77e',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-usdc-fusd',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['USDC', 'FUSD'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0xD5F5E2638d636A98eD4aAEBfd2045441316e0c08',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/0xAd84341756Bf337f5a0164515b1f6F993D194E1f',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-fusdt-usdc',
    logo: 'fantom/USDC-FUSDT.png',
    name: 'FUSDT-USDC LP (SoulSwap)',
    token: 'FUSDT-USDC LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x298c12D6d9D6746Dd0ef0A89421288F52D5566eF',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-FUS-USD-Z',
    earnedTokenAddress: '0xD41bbe09CabC3fA4C7f836E62C3f9cF01036289e',
    earnContractAddress: '0xD41bbe09CabC3fA4C7f836E62C3f9cF01036289e',
    strategyAddress: '0xd4E480E8Bd698291b6a7D77c01A2f097577B7ebF',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-fusdt-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['USDC', 'fUSDT'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x298c12D6d9D6746Dd0ef0A89421288F52D5566eF',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/0x049d68029688eAbF473097a2fC38ef61633A3C7A',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-btc-eth',
    logo: 'fantom/BTC-ETH.png',
    name: 'BTC-ETH LP (SoulSwap)',
    token: 'BTC-ETH LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x1FC954d3484bC21E0Ce53A6648a35BBfc03DC9D0',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-BTC-ETH-Z',
    earnedTokenAddress: '0xD16Bcd732DbE373198a6CaaC58547E7Fad1a7c57',
    earnContractAddress: '0xD16Bcd732DbE373198a6CaaC58547E7Fad1a7c57',
    strategyAddress: '0x41d4d5DFE2Df16a4c01590b3B300C891d09231d6',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-btc-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['BTC', 'ETH'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x1FC954d3484bC21E0Ce53A6648a35BBfc03DC9D0',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x321162Cd933E2Be498Cd2267a90534A804051b11/0x74b23882a30290451A17c44f4F05243b6b58C76d',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-btc-ftm',
    logo: 'fantom/BTC-FTM.png',
    name: 'BTC-FTM LP (SoulSwap)',
    token: 'BTC-FTM LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0xecB41D6B5885E75a149EDA173e92267aa271D895',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-BTC-FTM-Z',
    earnedTokenAddress: '0xC2a1e42dcb2dfA408397FEc1729a39C9469b1F53',
    earnContractAddress: '0xC2a1e42dcb2dfA408397FEc1729a39C9469b1F53',
    strategyAddress: '0x36D7141dBeaF7Ea9bfc7b015ADE15Ab8a748A21E',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-btc-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['BTC', 'FTM'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0xecB41D6B5885E75a149EDA173e92267aa271D895',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x321162Cd933E2Be498Cd2267a90534A804051b11/0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-fusdt-ftm',
    logo: 'fantom/FUSDT-FTM.png',
    name: 'fUSDT-FTM LP (SoulSwap)',
    token: 'fUSDT-FTM LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0xdC24814AD654986928F8E4aec48D37fa30bBC5BB',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-FUS-FTM-Z',
    earnedTokenAddress: '0x1DBcf5846E1c1a7F6483F2258caE836C0C891e0f',
    earnContractAddress: '0x1DBcf5846E1c1a7F6483F2258caE836C0C891e0f',
    strategyAddress: '0x60e6c97767a693AEF9EcEca94C521741F90DC7Ff',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-fusdt-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['fUSDT', 'FTM'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0xdC24814AD654986928F8E4aec48D37fa30bBC5BB',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x049d68029688eAbF473097a2fC38ef61633A3C7A/0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-eth-usdc',
    logo: 'fantom/ETH-USDC.png',
    name: 'ETH-USDC LP (SoulSwap)',
    token: 'ETH-USDC LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x5b181BBc3Cc18C66B6f36f584866a1ff09865630',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-ETH-USD-Z',
    earnedTokenAddress: '0x8fefd302C4880Dd1E06d269ADa99Dd3EBC6F9978',
    earnContractAddress: '0x8fefd302C4880Dd1E06d269ADa99Dd3EBC6F9978',
    strategyAddress: '0xbCbE7668281eb87DEaBfbbC63d860cbA68B5E58B',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-eth-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['ETH', 'USDC'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x5b181BBc3Cc18C66B6f36f584866a1ff09865630',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x74b23882a30290451A17c44f4F05243b6b58C76d/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-mim-ftm',
    logo: 'fantom/MIM-FTM.png',
    name: 'MIM-FTM LP (SoulSwap)',
    token: 'MIM-FTM LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x34990FC1e6e3169DCf23624049be29782AFc81bd',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-MIM-FTM-Z',
    earnedTokenAddress: '0xBAd805C2D8eBe3B69338fe3Ccad0C33f277d2D20',
    earnContractAddress: '0xBAd805C2D8eBe3B69338fe3Ccad0C33f277d2D20',
    strategyAddress: '0x27d90D9544415c1aA08A10ddA312233C8d2bf349',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-mim-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['MIM', 'FTM'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x34990FC1e6e3169DCf23624049be29782AFc81bd',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x82f0B8B456c1A451378467398982d4834b6829c1/0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-bnb-ftm',
    logo: 'fantom/BNB-FTM.png',
    name: 'BNB-FTM LP (SoulSwap)',
    token: 'BNB-FTM LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x52966a12e3211c92909C28603ca3df8465c06c82',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-BNB-FTM-Z',
    earnedTokenAddress: '0xfa899d09411c5DbB1eC7ee746236a9dd841Ea05C',
    earnContractAddress: '0xfa899d09411c5DbB1eC7ee746236a9dd841Ea05C',
    strategyAddress: '0xC92840946Ed7c187A6Be68b10Ca5377cea2E72fb',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-bnb-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['BNB', 'FTM'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x52966a12e3211c92909C28603ca3df8465c06c82',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454/0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-bnb-dai',
    logo: 'fantom/BNB-DAI.png',
    name: 'BNB-DAI LP (SoulSwap)',
    token: 'BNB-DAI LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0xC1EdFbA9811B696bDFd07d31eD5FF702e031364E',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-BNB-DAI-Z',
    earnedTokenAddress: '0x91b2691F705453952A93C6b4f6DDd4CD36809B1a',
    earnContractAddress: '0x91b2691F705453952A93C6b4f6DDd4CD36809B1a',
    strategyAddress: '0x5974907a854099462B8c63906050e4b98A20EC79',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-bnb-dai',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['BNB', 'DAI'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0xC1EdFbA9811B696bDFd07d31eD5FF702e031364E',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },
  
  {
    id: 'soul-lux-dai',
    logo: 'fantom/LUX-DAI.png',
    name: 'LUX-DAI LP (SoulSwap)',
    token: 'LUX-DAI LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x46729c2AeeabE7774a0E710867df80a6E19Ef851',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-LUX-DAI-Z',
    earnedTokenAddress: '0x40ACd0A5d5a63F6001f499259cbD2bc9207abD0e',
    earnContractAddress: '0x40ACd0A5d5a63F6001f499259cbD2bc9207abD0e',
    strategyAddress: '0xC1ef84213Cf0D8A6014Bd785a50382139Fe9c57C',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-lux-dai',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['LUX', 'DAI'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x46729c2AeeabE7774a0E710867df80a6E19Ef851',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x6671E20b83Ba463F270c8c75dAe57e3Cc246cB2b/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-lux-ftm',
    logo: 'fantom/LUX-FTM.png',
    name: 'LUX-FTM LP (SoulSwap)',
    token: 'LUX-FTM LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x951BBB838e49F7081072895947735b0892cCcbCD',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-LUX-FTM-Z',
    earnedTokenAddress: '0x0Da4b0DA6847Bc1D4F03769336f9cDE558fdB743',
    earnContractAddress: '0x0Da4b0DA6847Bc1D4F03769336f9cDE558fdB743',
    strategyAddress: '0x4A87798CEC1D4f36A5FA96810f5798FEa84eB287',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-lux-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['LUX', 'FTM'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x951BBB838e49F7081072895947735b0892cCcbCD',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x6671E20b83Ba463F270c8c75dAe57e3Cc246cB2b/ETH',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-dai-fusdt',
    logo: 'fantom/DAI-FUSDT.png',
    name: 'DAI-fUSDT LP (SoulSwap)',
    token: 'DAI-fUSDT LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0xB38508Ed92C4878daE7652d8d46cAE46eEa8aA9A',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-DAI-FUS-Z',
    earnedTokenAddress: '0x2EF187212BC66512031c90A91184bE79Fbc15154',
    earnContractAddress: '0x2EF187212BC66512031c90A91184bE79Fbc15154',
    strategyAddress: '0x33c625FBDF0B3F30266146E1Bc5b53Aa824774Ea',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-dai-fusdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['DAI', 'fUSDT'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0xB38508Ed92C4878daE7652d8d46cAE46eEa8aA9A',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E/0x049d68029688eAbF473097a2fC38ef61633A3C7A',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-spell-ftm',
    logo: 'fantom/SPELL-FTM.png',
    name: 'SPELL-FTM LP (SoulSwap)',
    token: 'SPELL-FTM LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x3d24C65201566f17d3Ac48C746919788d27Ee743',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-SPE-FTM-Z',
    earnedTokenAddress: '0x0b9e3344EA8f5dC777461bd3611F46540d282Ca2',
    earnContractAddress: '0x0b9e3344EA8f5dC777461bd3611F46540d282Ca2',
    strategyAddress: '0x25Fa9a92eECBC56703021D713d14bC3CbB5ec3d5',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-spell-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['SPELL', 'FTM'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x3d24C65201566f17d3Ac48C746919788d27Ee743',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x468003B688943977e6130F4F68F23aad939a1040/ETH',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-crv-ftm',
    logo: 'fantom/CRV-FTM.png',
    name: 'CRV-FTM LP (SoulSwap)',
    token: 'CRV-FTM LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x1C9A342A615E8CAB4d21A2ACA7E40a48b2F8747F',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-CRV-FTM-Z',
    earnedTokenAddress: '0x8FE1237636D0971d33aE39A17fE13b6E312E3a0C',
    earnContractAddress: '0x8FE1237636D0971d33aE39A17fE13b6E312E3a0C',
    strategyAddress: '0x22379a4373472F791979995Fb3925492F2324c85',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-crv-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['CRV', 'FTM'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x1C9A342A615E8CAB4d21A2ACA7E40a48b2F8747F',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x1E4F97b9f9F913c46F1632781732927B9019C68b/ETH',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-any-ftm',
    logo: 'fantom/ANY-FTM.png',
    name: 'ANY-FTM LP (SoulSwap)',
    token: 'ANY-FTM LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0xf4199594986E35c49f20beaaCD0f3529D18BF08E',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-ANY-FTM-Z',
    earnedTokenAddress: '0x5825411b17A7E4d4b7403d0a158f18d88E0Fea9A',
    earnContractAddress: '0x5825411b17A7E4d4b7403d0a158f18d88E0Fea9A',
    strategyAddress: '0x6e2745Fa129E26d37684019398480DA58730Be38',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-any-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['ANY', 'FTM'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0xf4199594986E35c49f20beaaCD0f3529D18BF08E',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0xdDcb3fFD12750B45d32E084887fdf1aABAb34239/ETH',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-ice-ftm',
    logo: 'fantom/ICE-FTM.png',
    name: 'ICE-FTM LP (SoulSwap)',
    token: 'ICE-FTM LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x944Aa704eDaF75dAD30832C6d0f111506a48b1c8',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-ICE-FTM-Z',
    earnedTokenAddress: '0xEFd1cbEe031B99e77fd3208d44fDf18f28d45f47',
    earnContractAddress: '0xEFd1cbEe031B99e77fd3208d44fDf18f28d45f47',
    strategyAddress: '0x29715a5dc2e69A75EbB6cf378e373d5552a211D3',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-ice-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['ICE', 'FTM'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x944Aa704eDaF75dAD30832C6d0f111506a48b1c8',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0xf16e81dce15B08F326220742020379B855B87DF9/ETH',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-soul-btc',
    logo: 'fantom/SOUL-BTC.png',
    name: 'SOUL-BTC LP (SoulSwap)',
    token: 'SOUL-BTC LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0xDA9D9CB5482EFD10839A676Fe99f05E41F57D885',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-SOU-BTC-Z',
    earnedTokenAddress: '0xf94E4D314B1B5BFD0Ce67E01c1de329324c8AA2C',
    earnContractAddress: '0xf94E4D314B1B5BFD0Ce67E01c1de329324c8AA2C',
    strategyAddress: '0x4350fBA4Eb02b683271371b5d1B88C245E6Ab564',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-soul-btc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['SOUL', 'BTC'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0xDA9D9CB5482EFD10839A676Fe99f05E41F57D885',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07/0x321162Cd933E2Be498Cd2267a90534A804051b11',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-soul-eth',
    logo: 'fantom/SOUL-ETH.png',
    name: 'SOUL-ETH LP (SoulSwap)',
    token: 'SOUL-ETH LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x778F0d5515A3E78D1DD191f30835420c0275bde1',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-SOU-ETH-Z',
    earnedTokenAddress: '0x4210334f7418B74e40Fb276140Ed243DC86AaE96',
    earnContractAddress: '0x4210334f7418B74e40Fb276140Ed243DC86AaE96',
    strategyAddress: '0xe2eDcCD67974b09122BC8f1F85be64BF24c7e91d',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-soul-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['SOUL', 'ETH'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x778F0d5515A3E78D1DD191f30835420c0275bde1',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07/0x74b23882a30290451A17c44f4F05243b6b58C76d',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-enchant-usdc',
    logo: 'fantom/ENCHANT-USDC.png',
    name: 'ENCHANT-USDC LP (SoulSwap)',
    token: 'ENCHANT-USDC LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x6c6f32008262666CA4acEd0a824c4945AB96e5F3',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-ENC-USD-Z',
    earnedTokenAddress: '0x2231a8400a69782F8216211B9D7Fa586DDbdeEa1',
    earnContractAddress: '0x2231a8400a69782F8216211B9D7Fa586DDbdeEa1',
    strategyAddress: '0x6e7C445658666698eCe43033410bc41a7cbA2c83',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-enchant-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['ENCHANT', 'USDC'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x6c6f32008262666CA4acEd0a824c4945AB96e5F3',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x6a1a8368D607c7a808F7BbA4F7aEd1D9EbDE147a/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-soul-fusdt',
    logo: 'fantom/SOUL-FUSDT.png',
    name: 'SOUL-fUSDT LP (SoulSwap)',
    token: 'SOUL-fUSDT LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0xE27Cc06a7F34892BC17a5474303b91b2C9F3F21A',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-SOU-FUS-Z',
    earnedTokenAddress: '0x1FBba0a2370733b79bA782D43eB8b54fa2D3242F',
    earnContractAddress: '0x1FBba0a2370733b79bA782D43eB8b54fa2D3242F',
    strategyAddress: '0xa4517b6a917bD6084E3B13524f7Fe4F4cEFd02B0',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-soul-fusdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['SOUL', 'fUSDT'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0xE27Cc06a7F34892BC17a5474303b91b2C9F3F21A',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07/0x049d68029688eAbF473097a2fC38ef61633A3C7A',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-unidx-seance',
    logo: 'fantom/UNIDX-SEANCE.png',
    name: 'UNIDX-SEANCE LP (SoulSwap)',
    token: 'UNIDX-SEANCE LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x578c7B9A45D9e55246d3036D48db262b9B3CA48e',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-UNI-SEA-Z',
    earnedTokenAddress: '0x5c43B10e12F4e638847433282231d8347bE221Ef',
    earnContractAddress: '0x5c43B10e12F4e638847433282231d8347bE221Ef',
    strategyAddress: '0x30942018c8F87e8B697a6c1e87858Fe7f1C2516F',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-unidx-seance',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['UNIDX', 'SEANCE'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x578c7B9A45D9e55246d3036D48db262b9B3CA48e',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x124B06C5ce47De7A6e9EFDA71a946717130079E6/0x2130d2a1e51112D349cCF78D2a1EE65843ba36e0',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-enchant-seance',
    logo: 'fantom/ENCHANT-SEANCE.png',
    name: 'ENCHANT-SEANCE LP (SoulSwap)',
    token: 'ENCHANT-SEANCE LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x5695176D085F8f7320507495066FFeC940da244C',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-ENC-SEA-Z',
    earnedTokenAddress: '0x1B5269088b7B67C22121F1b80D2331987Db37051',
    earnContractAddress: '0x1B5269088b7B67C22121F1b80D2331987Db37051',
    strategyAddress: '0x888cF5d88870d4AFbb3553e18536B94a003D2072',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-enchant-seance',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['ENCHANT', 'SEANCE'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x5695176D085F8f7320507495066FFeC940da244C',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x124B06C5ce47De7A6e9EFDA71a946717130079E6/0x6a1a8368D607c7a808F7BbA4F7aEd1D9EbDE147a',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-enchant-soul',
    logo: 'fantom/ENCHANT-SOUL.png',
    name: 'ENCHANT-SOUL LP (SoulSwap)',
    token: 'ENCHANT-SOUL LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x9acc8F23680B6d7e295166277e2fb9c88A26cce6',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-ENC-SOU-Z',
    earnedTokenAddress: '0xE429232cb02f0dFAf0AB57e1EfC766B7FC516d15',
    earnContractAddress: '0xE429232cb02f0dFAf0AB57e1EfC766B7FC516d15',
    strategyAddress: '0xE36D13d3DB5af7F7326A77B50EFC16E3151f674B',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-enchant-soul',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['ENCHANT', 'SOUL'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x9acc8F23680B6d7e295166277e2fb9c88A26cce6',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07/0x6a1a8368D607c7a808F7BbA4F7aEd1D9EbDE147a',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-enchant-ftm',
    logo: 'fantom/ENCHANT-FTM.png',
    name: 'ENCHANT-FTM LP (SoulSwap)',
    token: 'ENCHANT-FTM LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0xb4d6Ff768F409e4D102BAD80f9A8ac105453ccdD',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-ENC-FTM-Z',
    earnedTokenAddress: '0x6110a5e9A31bc0C338b46a1a47dA79a73C5748BD',
    earnContractAddress: '0x6110a5e9A31bc0C338b46a1a47dA79a73C5748BD',
    strategyAddress: '0x8c888CeA6139357A0974C9c415b7F6580Cfd4B91',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-enchant-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['ENCHANT', 'FTM'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0xb4d6Ff768F409e4D102BAD80f9A8ac105453ccdD',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/ETH/0x6a1a8368D607c7a808F7BbA4F7aEd1D9EbDE147a',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-dai-ftm',
    logo: 'fantom/DAI-FTM.png',
    name: 'DAI-FTM LP (SoulSwap)',
    token: 'DAI-FTM LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0xF3d6E8Ecece8647B456d57375Ce0B51B8F0cD40b',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-DAI-FTM-Z',
    earnedTokenAddress: '0x53DF1a4b2CE1965f052c6c059C44f6C17F23B8Cf',
    earnContractAddress: '0x53DF1a4b2CE1965f052c6c059C44f6C17F23B8Cf',
    strategyAddress: '0x3119336ae04fcD0D788D63Ec9cC563beaFa24B5E',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-dai-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['DAI', 'FTM'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0xF3d6E8Ecece8647B456d57375Ce0B51B8F0cD40b',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/ETH/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-soul-usdc',
    logo: 'fantom/SOUL-USDC.png',
    name: 'SOUL-USDC LP (SoulSwap)',
    token: 'SOUL-USDC LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0xC0A301f1E5E0Fe37a31657e8F60a41b14d01B0Ef',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-SOU-USD-Z',
    earnedTokenAddress: '0xBFa618eaeCbF5De086c80d1B175442baA11CA0D6',
    earnContractAddress: '0xBFa618eaeCbF5De086c80d1B175442baA11CA0D6',
    strategyAddress: '0x87856AFbEC54400E7891B5D1D7C4D490b55957cB',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-soul-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['SOUL', 'USDC'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0xC0A301f1E5E0Fe37a31657e8F60a41b14d01B0Ef',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-dai-usdc',
    logo: 'fantom/DAI-USDC.png',
    name: 'DAI-USDC LP (SoulSwap)',
    token: 'DAI-USDC LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0x406dE3A93f6B4179E3B21a3d81226B43e1918fd9',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-DAI-USD-Z',
    earnedTokenAddress: '0x5e4338171F9Dc17996771206c5AeF9f873b4dd19',
    earnContractAddress: '0x5e4338171F9Dc17996771206c5AeF9f873b4dd19',
    strategyAddress: '0xac26E580c56a881dAEA515c053e92E56A4d4afa7',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-dai-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['DAI', 'USDC'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0x406dE3A93f6B4179E3B21a3d81226B43e1918fd9',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  {
    id: 'soul-usdc-btc',
    logo: 'fantom/USDC-BTC.png',
    name: 'USDC-BTC LP (SoulSwap)',
    token: 'USDC-BTC LP (SoulSwap)',
    tokenDescription:
      'SoulSwap',
    tokenAddress: '0xE2d39F7f0c8517Ca2058Fa97eB3D8d4928F7C6D6',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'G-USD-BTC-Z',
    earnedTokenAddress: '0xeAEE70DD024bAd8fcBe070b32B4F4bc2e655Cb50',
    earnContractAddress: '0xeAEE70DD024bAd8fcBe070b32B4F4bc2e655Cb50',
    strategyAddress: '0x6FcC87714925e117b692D74C97182aAf194B5996',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'soul-usdc-btc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'eol',
    platform: 'SoulSwap',
    assets: ['DAI', 'USDC'],
    callFee: 0.5,
    priceChart:
      'https://analytics.soulswap.finance/pairs/0xE2d39F7f0c8517Ca2058Fa97eB3D8d4928F7C6D6',
    addLiquidityUrl:
      'https://exchange.soulswap.finance/exchange/add/0x321162Cd933E2Be498Cd2267a90534A804051b11/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    buyTokenUrl: 'https://exchange.soulswap.finance/swap',
    zap: {
      zapAddress: VAULT_ZAP,
      router: SOUL_ROUTER,

      tokens: [
        // ...soulTokens,
        // ...zapTokens,
      ],
    },
  },

  
];

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
  p.zap.tokens = [...p.zap.tokens];
  //p.zap.tokens = [...p.zap.tokens, ...lpTokens, ...vaultTokens];
  return p;
});
