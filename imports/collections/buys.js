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

  'buys.remove': function(buy) {
    return Buys.remove(buy);
  }
});

export const Buys = new Mongo.Collection('buys');
