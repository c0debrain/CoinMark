import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'buys.insert': function() {
    return Buys.insert({
      //createdAt: new Date('<YYYY-MM-DD hh:mm>'),
      coinType: (name = ''),
      coinAmount: (amount = 0.0),
      ownerId: this.userId
    });
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
