import { Meteor } from 'meteor/meteor';
import { Buys } from '../imports/collections/buys';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('buys', function() {
    return buys.find({});
  });
});
