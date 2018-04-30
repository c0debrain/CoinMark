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
  },

  'buys.update': function(buy, coinAmount) {
    return Bins.update(buy._id, { $set: { coinAmount } });
  },

  Bitcoinupdate(coinAmount) {
    return Buys.update({
      coinAmount: coinAmount,
      coinType: 'Bitcoin',
      ownerId: this.userId
    });
  },

  /*incrementCoin: function(coinType) {
    check(coinType, Meteor.Collection.ObjectID);

    Buys.update(
      {
        _id: coinType
      },
      {
        $inc: {
          coinAmount: 1
        }
      },
      function(error, affectedDocs) {
        if (error) {
          throw new Meteor.Error(500, error.message);
        } else {
          return 'Update Successful';
        }
      }
    );
  },*/

  incrementCoin: function(coinType) {
    Buys.update({ ownerId: this.userId }, { $inc: { coinAmount: 1 } });
  },

  'buys.update': function(coinAmount) {
    Buys.update(buy, { $inc: { coinAmount: coinAmount } });
  },

  'buys.purchase': function(buy, coinAmount) {
    return Buys.update(buy._id, { $inc: { coinAmount } });
  },

  'buys.wallet': function(buy, coinAmount) {
    return Buys.update(buy.coinType, { $inc: { coinAmount } });
  }
});

export const Buys = new Mongo.Collection('buys');
