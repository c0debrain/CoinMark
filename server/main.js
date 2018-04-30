import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Buys } from '../imports/collections/buys';
//import { Coins } from '../imports/collections/coins';

export const Cryptos = new Mongo.Collection('cryptos');

Coins = new Mongo.Collection('coins');
if (Meteor.isServer) {
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
}

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('buys', function() {
    return Buys.find({ ownerId: this.userId });
  });
});

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('coins', function() {
    return Coins.find({ ownerId: this.userId });
  });
});
