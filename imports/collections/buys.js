import { Mongo } from 'meteor/mongo';

Meteor.methods({
  /*buyCoin(coinType, coinAmount) {
    return Buys.insert({
      coinType: coinType,
      coinAmount: coinAmount,
      createdAt: new Date('<YYYY-MM-DD hh:mm>'),
      ownerId: this.userId
    });
  },*/

  Bitcoin(coinAmount) {
    return Buys.insert({
      coinAmount: coinAmount,
      coinType: 'Bitcoin',
      createdAt: new Date('<YYYY-MM-DD hh:mm>'),
      ownerId: this.userId
    });
  },
  'Bitcoin Cash'(coinAmount) {
    return Buys.insert({
      coinAmount: coinAmount,
      coinType: 'Bitcoin Cash',
      createdAt: new Date('<YYYY-MM-DD hh:mm>'),
      ownerId: this.userId
    });
  },
  Ethereum(coinAmount) {
    return Buys.insert({
      coinAmount: coinAmount,
      coinType: 'Ethereum',
      createdAt: new Date('<YYYY-MM-DD hh:mm>'),
      ownerId: this.userId
    });
  },
  Litecoin(coinAmount) {
    return Buys.insert({
      coinAmount: coinAmount,
      coinType: 'Litecoin',
      createdAt: new Date('<YYYY-MM-DD hh:mm>'),
      ownerId: this.userId
    });
  },

  'buys.remove': function(buy) {
    return Buys.remove(buy);
  },

  Bitcoinupdate(coinAmount) {
    return Buys.update({
      coinAmount: coinAmount,
      coinType: 'Bitcoin',
      ownerId: this.userId
    });
  },

  'buys.update': function(coinAmount) {
    buys.update(buy, { $inc: { coinAmount: coinAmount } });
  },

  'buys.purchase': function(buy, coinAmount) {
    return Buys.update(buy._id, { $inc: { coinAmount } });
  },

  'buys.wallet': function(buy, coinAmount) {
    return Buys.update(buy.coinType, { $inc: { coinAmount } });
  }
});

export const Buys = new Mongo.Collection('buys');
