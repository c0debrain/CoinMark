import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'buys.insert': function() {
    return Buys.insert({
      createdAt: new Date(),
      coinType: '',
      coinAmount: 0.0,
      ownerId: this.userId
    });
  },

  'buys.remove': function(buy) {
    return Buys.remove(buy);
  },

  'buys.purchase': function(buy, coinAmount) {
    return Buys.update(buy._id, { $inc: { coinAmount } });
  },

  'buys.share': function(buy, email) {
    return Buys.update(buy._id, { $push: { sharedWith: email } });
  }
});

export const Buys = new Mongo.Collection('buys');
