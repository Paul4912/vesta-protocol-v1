const externalAddrs = {
  // https://data.chain.link/eth-usd
  CHAINLINK_ETHUSD_PROXY: "0x5f0423B1a6935dc5596e7A24d98532b67A0AeFd8",
  CHAINLINK_BTCUSD_PROXY: "0x6ce185860a4963106506C203335A2910413708e9",
  CHAINLINK_OHM_PROXY: "0x761aaeBf021F19F198D325D7979965D0c7C9e53b",
  CHAINLINK_OHM_INDEX_PROXY: "0x48C4721354A3B29D80EF03C65E6644A37338a0B1",
  CHAINLINK_FLAG_HEALTH: "0x3C14e07Edd0dC67442FA96f1Ec6999c57E810a83",
  // https://docs.tellor.io/tellor/integration/reference-page
  TELLOR_MASTER: "0xbc2f9E092ac5CED686440E5062D11D6543202B24",
  // https://uniswap.org/docs/v2/smart-contracts/factory/
  // https://github.com/Uniswap/v3-periphery/blob/main/deploys.md
  // UNISWAP_V3_FACTORY: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
  // UNISWAP_V3_POSITION_MANAGER: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  SUSHISWAP_V2_FACTORY: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
  SUSHISWAP_V2_ROUTER02: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  WETH_ERC20: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
  REN_BTC: "0xdbf31df14b66535af65aac99c32e9ea844e14501",
}

const vestaAddresses = {
  ADMIN_MULTI: "0x87209dc4B76b14B67BC5E5e5c0737E7d002a219c",
  VSTA_SAFE: "0xb8a9faDA75c6d891fB77a7988Ff9BaD9e485Ca1C", // to be passed to VSTAToken as the VSTA multisig address
  DEPLOYER: "0xa850535D3628CD4dFEB528dC85cfA93051Ff2984" // Mainnet REAL deployment address
}

// Beneficiaries for lockup contracts. 
const beneficiaries = {
  ACCOUNT_1: "0xBBdc88676759D09617C288E29f2Eb7Ce94592f25",
  ACCOUNT_2: "0x77616b3a57C9ACf018E87c92ae187C8Cc0B112D6",
  ACCOUNT_3: "0x32c761138aD9Ff95D8595aa9A79208F19b01d8E7",
  ACCOUNT_4: "0x0eBBC1c8B634b775D14b24E6428C9386A1B6C74D",
  ACCOUNT_5: "0xf7d74a3E2295A860CDD88b901940B367737E8A8F",
  ACCOUNT_6: "0xb2bc4E23225433A2Bc3b671445eAD111044C6054",
  ACCOUNT_7: "0xdca192b98bb4ea03076b3b52845519c30d68524d",
  ACCOUNT_8: "0x6cb0c6FAe64085D5F0E42a30e5788c2c048AaEb2",
  ACCOUNT_9: "0x67E3ea119E141406c37e2CA783b749Fe1437673f",
  ACCOUNT_10: "0x3e8c0CBd2a59D2d4b7d8396aCc04aB349a169286",
  ACCOUNT_11: "0x1277934A71b9D61611dA7BF657A6c814abEA9F03",
  ACCOUNT_12: "0x280ebd63C05776BA19a6a0f6497D5237635065Fb",
  ACCOUNT_13: "0x6b7Ac46d09d2ADF4CeBe2995EbF9d97E13E9E257",
  ACCOUNT_14: "0x2d2d2a1f9bfda0d2364b4d517f862e52fefc2703",
  ACCOUNT_15: "0x46EEA8D5b37D2Db51f35c1bC8C50CBf80fb0fFE5",
  ACCOUNT_16: "0xe5D0Ef77AED07C302634dC370537126A2CD26590",
  ACCOUNT_17: "0xdd488450758D7934F5160eb17d388a4Be0161D1c",
  ACCOUNT_18: "0xF9fe05eA33742FA32caFb347920b7d53277A73DD",
  ACCOUNT_19: "0xC263894D648c3b56d690C7f8e55908e22e526e78",
  ACCOUNT_20: "0xffd57a89B2bDeC0AA7e29add0C977c2e72ba3d7c",
  ACCOUNT_21: "0x59D62467DaADCf8f9a56CFb33095cff72999b4b6",
  ACCOUNT_22: "0x5a57dD9C623e1403AF1D810673183D89724a4e0c",
  ACCOUNT_23: "0x6be85603322df6DC66163eF5f82A9c6ffBC5e894",
  ACCOUNT_24: "0xD45b8EC05dD7620eeceed3D3aCABC95957622bB7",
  ACCOUNT_25: "0x2fcfCAbCBb314A82f70415113169dE0C1D781250",
  ACCOUNT_26: "0x491C730298C9EBDA7B0dEC8aE1f973e34874059c",
  ACCOUNT_27: "0x8b5195876c95E65dBD6948092a610Ee8D7b721aA",
  ACCOUNT_28: "0x4962caC8B4E22c3DA9e4AD9f3515Ad7c186E451c",
  ACCOUNT_29: "0x1824ffB249cD510573840155b3DefBbdb4ABB916",
  ACCOUNT_30: "0x4CA75a1B3ABFb97Cee6C87BB15eF5b5609eCAad3",
  ACCOUNT_31: "0x994668f7B05B30996BB7F2B87140D0A761D9f292",
  ACCOUNT_32: "0xd89852fA2F66B54F485bCa0CcE3Af4e67015597E",
  ACCOUNT_33: "0xF6451cCdC8D47a26Ec6535cA8DEa90E6696A3aDC",
  ACCOUNT_34: "0x895870D281E4761237f4465AFb51D16c3e124EFC"
}

const REDEMPTION_SAFETY = 14;

const OUTPUT_FILE = './mainnetDeployment/mainnetDeploymentOutput.json'

const delay = ms => new Promise(res => setTimeout(res, ms));
const waitFunction = async () => {
  return delay(90000) // wait 90s
}

const GAS_PRICE = 25000000000
const TX_CONFIRMATIONS = 3 // for mainnet

const ETHERSCAN_BASE_URL = 'https://arbiscan.io/address'

module.exports = {
  externalAddrs,
  vestaAddresses,
  beneficiaries,
  OUTPUT_FILE,
  waitFunction,
  GAS_PRICE,
  TX_CONFIRMATIONS,
  ETHERSCAN_BASE_URL,
  REDEMPTION_SAFETY
};
