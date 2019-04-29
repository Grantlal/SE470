import {
    Meteor
} from 'meteor/meteor';

import {
    Random
} from 'meteor/random';

import Teams from './Teams.js';

/* By default the test will run as both a server and client,
    I set the test report as a server */
if (Meteor.isClient) return false;

const userID = Random.id();
const randTeamId = Random.id();

/*Teams Collection Testing*/
describe('Team Server Test', function () {
    //Initial Checks
    describe('Running the basics', function () {
        //Check to see if Server is running
        it('Server Running', function () {});
        //Check to see if Teams collection exists
        it('Can See Teams Collection', function () {});
    });

    //For Testing Database Methods
    describe('Testing Methods...', function () {
        //Testing the addition of a new team
        it(' Team Insert function', function () {
            Teams.insert({
                name: 'Team 430 is the best class to ever be created ever',
                season: 'Spring',
                whoCreated: userID,
                usersAccess: userID,
                createdAt: new Date(),
            })
        });
        //Testing the edit of a team
        it(' Team Edit function', function () {
            Teams.update({
                _id: userID
            }, {
                $set: {
                    name: 'Change the name to SE 480 because that is the best class ever',
                    season: 'Fall'
                }
            });

        });
        //Testing the removal of a team
        it(' Team Remove function', function () {
            Teams.remove(userID);
        });
    });
});