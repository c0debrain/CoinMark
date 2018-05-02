import { Mongo } from 'meteor/mongo';

Meteor.methods({
  buyCoin(coinType, coinAmount, coinUSD) {
    return Buys.insert({
      coinType: coinType,
      coinAmount: coinAmount,
      coinUSD: coinUSD,
      createdAt: new Date(),
      ownerId: this.userId
    });
  },

  'buys.remove': function(buy) {
    return Buys.remove(buy);
  }
});

export const Buys = new Mongo.Collection('buys');
