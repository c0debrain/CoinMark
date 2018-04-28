import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';

Meteor.methods({
  //add tip function later
  'servers.insert': function (name) {
    check(name, Match.Where((name) => {
    check(name, String);
    return name.length > 0;
  }));
    const randomTip = 100;
    var tips = Math.floor(Math.random() * Math.floor(randomTip));
    const token = Math.random().toString(36).slice(-5);
    Servers.insert({ name, token, tips: tips });
  },
  'servers.remove': function(server) {
    return Servers.remove(server);
  },
  'servers.update': function(server) {
    var tip = 1;
    Servers.update(server, { $inc: { tips: tip }});
  },
  'servers.update2': function(server) {
  var tip = 5;
  Servers.update(server, { $inc: { tips: tip }});
  },
  'servers.update3': function(server) {
  var tip = 10;
  Servers.update(server, { $inc: { tips: tip }});
  },
  'servers.update4': function(server) {
  var tip = 20;
  Servers.update(server, { $inc: { tips: tip }});
  },
  'servers.update5': function(server) {
  var tip = 100;
  Servers.update(server, { $inc: { tips: tip }});
  },
});
export const Servers = new Mongo.Collection('servers');
