import React from 'react';
import {shallow} from "enzyme";
//import {Teams} from './Teams';
/*import { TeamsMethods } from '../Teams/methods.js';*/
import {Random} from 'meteor/random';
import teams from './Teams.js';
const userID = Random.id();
//var teams = require('./Teams');
var assert = require('assert');

/* By default the test will run as both a server and client,
    I set the test report as a server */
if (Meteor.isClient) return false;

/*Teams Collection Testing*/
describe('Team Server Test', function () {
    //Initial Checks
    describe('Running the basics', function () {
        //Check to see if Server is running
        it('Server Running', function () {
        });
        //Check to see if Teams collection exists
        it('Can See Teams Collection', function () {
            assert(teams);
        });
    });

    //For Testing Database Methods
    describe('Testing Methods...', function () {
        //Testing the addition of a new team
        it(' Team Insert function', function () {
            assert(teams.insert({
                name: 'Huskies',
                season: 'Spring 2019',
                user: userID,
                createdAt: new Date(),
            }));
        });
        it(' Team break Insert function', function () {
            assert(teams.insert({
                name: 'Huskies',
                season: 'Spring 2019',
                user: userID,
                createdAt: sdflkwen,
            }));
        });
        //Testing the edit of a team
        it(' Team Edit function', function () {
            assert(!teams.update({
                _id: userID
            }, {
                $set: {
                    name: 'Bulldogs',
                    season: 'Fall 2019'
                }
            }));
        });
        //Testing the removal of a team
        it(' Team Remove function', function () {
            assert(!teams.remove({ 
                team: userID,
                //id: this.props.team._id,
            }))
        });
    });
});
