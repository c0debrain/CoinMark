import { Mongo } from 'meteor/mongo';

Meteor.methods({
  buyCoin(coinType, coinAmount) {
    return Buys.insert({
      coinType: coinType,
      coinAmount: coinAmount,
      createdAt: new Date('<YYYY-MM-DD hh:mm>'),
      ownerId: this.userId
    });
  },

  updateCoin(coinAmount) {
    return Buys.update(buy, { $inc: { coinAmount } });
  },

  'buys.remove': function(buy) {
    return Buys.remove(buy);
  },

  'buys.purchase': function(buy, coinAmount) {
    return Buys.update(buy._id, { $inc: { coinAmount } });
  },

  'buys.wallet': function(buy, coinAmount) {
    return Buys.update(buy.coinType, { $inc: { coinAmount } });
  }
});

export const Buys = new Mongo.Collection('buys');
