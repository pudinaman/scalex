const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define sub-schema for baseToken and quoteToken
const tokenSchema = new Schema({
    address: String,
    name: String,
    symbol: String
}, { _id: false });

// Define sub-schema for transactions
const txnSchema = new Schema({
    buys: Number,
    sells: Number
}, { _id: false });

// Define sub-schema for information
const infoSchema = new Schema({
    imageUrl: String,
    websites: [{
        label: String,
        url: String
    }],
    socials: [{
        type: String,
        url: String
    }]
}, { _id: false });

// Define the main schema for a pair
const pairSchema = new Schema({
    chainId: String,
    dexId: String,
    url: String,
    pairAddress: String,
    baseToken: tokenSchema,
    quoteToken: tokenSchema,
    priceNative: String,
    priceUsd: String,
    txns: {
        m5: txnSchema,
        h1: txnSchema,
        h6: txnSchema,
        h24: txnSchema
    },
    volume: {
        h24: Number,
        h6: Number,
        h1: Number,
        m5: Number
    },
    priceChange: {
        m5: Number,
        h1: Number,
        h6: Number,
        h24: Number
    },
    liquidity: {
        usd: Number,
        base: Number,
        quote: Number
    },
    pairCreatedAt: Number,
    info: infoSchema
});

// Create the model
const Pair = mongoose.model('Pair', pairSchema);

module.exports = Pair;
