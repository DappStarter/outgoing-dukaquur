require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remain modify hidden argue front tumble'; 
let testAccounts = [
"0x1dd7ca7be2feacee152757b333585e7d388b3d7c92468e6a4246213fbf22bfec",
"0x74fbb0545ea1f87ade30373cce1fb2452f8002a5c52928831f7aa3a9c844dc2d",
"0x7b621304b3811db4f26c0f8ef86f39653620a8c9d1cd5ea07df8239ee3e2d402",
"0xe0ee3596a950265cc9bbe89e3ab03bcf684b566a797dc7ee964907f11feec856",
"0x6bb98c503e40390660a9f435446e65d1f5ccf20e454736add99d742deb916166",
"0x4771482a4ca97909e9aad32fe4392b8d5031d46b49073763af6fc8cc34bc988d",
"0x9263a1c3a0ca9df1160dffdde9c843280b14398490fd679ae6266ccf47632f8c",
"0xdae8417921f34fe3be8d48204dc3f105f84b9e9831900fd081643e359b8d6196",
"0x2d005da37eca8f99c556b92453dc30eda415c7fa1bd6f913cefb85939f12bd05",
"0x5cbff989d175ef7e9f0bc630dac5edb8bee330a25c05687418b2322f9cc1234c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
