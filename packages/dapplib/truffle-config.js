require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth oven exchange grid clinic swift gas'; 
let testAccounts = [
"0x391b4123452f6a5a41e1ea17d7054fdb134db5d9727ee72186b3d82438a19670",
"0xacaabc0c70eb03df00fe9ecbabcdfdda7270976f3d9617feb55ed4e60b3d64d7",
"0xb76ab816b0124ca2a1fb8e00b40af20949b8a78bbfedd1dc8762040bce07f546",
"0x031840a42eae50689e6015c8d74f229cc50c8ece3465b5d0740df53f8ae9f64c",
"0x878dbca062ae0065119fbe9a48a86ddbbb43138a8588b95f6e7ed2698b29ff12",
"0xea9bbcbdae0859d58b94288cdbe3e28ac1ea9a9e9726a290a51256df7bfd1500",
"0x741d92904eeddc8b90b683e9f7073a4db23f85ad8bc21ae4fd342e276b3ce576",
"0x8c4a522de02872eb38f891851f7ac5bc8395820e8ae7e5a3adfb64435d8a52c4",
"0x4b4ad4d39aad0eab6aa20eb5ab5c0dfb3c6e2efade69b9442d4eef56dde18e4c",
"0xae5d3cb4b4380ba38dc5eeab9aacbbfc1ee99cd5fa1f1c056ff5a560842590a0"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
