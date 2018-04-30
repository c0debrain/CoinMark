import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

Meteor.methods({
  CoinInsert: function(teamOneId, teamTwoId, teamOneId, teamTwoId) {
    var teamOne = Teams.findOne({ _id: teamOneId });
    var teamTwo = Teams.findOne({ _id: teamTwoId });
    var teamOne = Teams.findOne({ _id: teamOneId });
    var teamTwo = Teams.findOne({ _id: teamTwoId });

    var teamOneData = {
      _id: teamOne._id,
      name: teamOne.name,
      score: 0
    };

    var teamTwoData = {
      _id: teamTwo._id,
      name: teamTwo.name,
      score: 0
    };

    var game = {
      ownerId: Meteor.userId(),
      createdAt: new Date(),
      teams: [teamOneData, teamTwoData],
      completed: false
    };

    var gameId = Games.insert(game);

    // Update each team's cached array of game ids
    Teams.update({ _id: teamOneData._id }, { $addToSet: { gameIds: gameId } });
    Teams.update({ _id: teamTwoData._id }, { $addToSet: { gameIds: gameId } });

    // Copy Meteor.insert(), which just returns the _id
    return gameId;
  }
});
