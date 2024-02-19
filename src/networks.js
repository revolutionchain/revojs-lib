module.exports = {
    revo: {
        messagePrefix: '\x15Revo Signed Message:\n',
        bech32: 'rv',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x3c,
        scriptHash: 0x32,
        wif: 0x80
    },
    revo_testnet: {
        messagePrefix: '\x15Revo Signed Message:\n',
        bech32: 'tr',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x41,
        scriptHash: 0x32,
        wif: 0x80
    }
}
