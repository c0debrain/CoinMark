import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

Coins = new Mongo.Collection('coins');
Meteor.startup(function() {
  if (Coins.find().count() === 0) {
    var coinTypes = ['Bitcoin', 'Bitcoin Cash', 'Ethereum', 'Litecoin'];
    _.each(coinTypes, function(coinType) {
      Coins.insert({
        coinType: coinType,
        coinAmount: 0,
        createdAt: new Date('<YYYY-MM-DD hh:mm>'),
        ownerId: this.userId
      });
    });
  }
});

export const Cryptos = new Mongo.Collection('cryptos');
