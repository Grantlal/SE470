import React from 'react';
import {shallow} from "enzyme";
//import {Teams} from './Teams';
/*import { TeamsMethods } from '../Teams/methods.js';*/
import {Random} from 'meteor/random';
import teams from './Teams.js';
const userID = Random.id();
//var teams = require('./Teams');
var assert = require('assert');
let dummy = 10;


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
        it(' Fail Team Insert function', function () {
            assert(teams.insert({
                name: parseFloat(Random.id()),
                season: parseInt(dummy),
                user: userID,
                createdAt: parseInt(dummy),
            }));
        });
        it(' Absurdly long Team name Insert function', function () {
            assert(teams.insert({
                name: 'Huskies Showcase multimedia bologna I am filling this out alot to test how many characters it can contain orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est sit amet facilisis magna etiam. Pellentesque habitant morbi tristique senectus. Senectus et netus et malesuada fames ac turpis. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Morbi quis commodo odio aenean. Volutpat sed cras ornare arcu. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Metus aliquam eleifend mi in nulla posuere sollicitudin. Ultricies tristique nulla aliquet enim. Pharetra sit amet aliquam id Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. At erat pellentesque adipiscing commodo. Sagittis id consectetur purus ut faucibus pulvinar. Fusce id velit ut tortor pretium. Mattis rhoncus urna neque viverra justo nec. Mattis molestie a iaculis at erat. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Volutpat odio facilisis mauris sit amet massa. Ultrices gravida dictum fusce ut. Id aliquet risus feugiat in ante metus. Aliquet nec ullamcorper sit amet risus nullam. Ac feugiat sed lectus vestibulum mattis. Viverra maecenas accumsan lacus vel facilisis volutpat. Integer eget aliquet nibh praesent tristique magna sit amet. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Quisque egestas diam in arcu cursus euismod quis viverra. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Maecenas sed enim ut sem viverra aliquet eget sit amet              Feugiat nisl pretium fusce id velit ut tortor pretium. Placerat in egestas erat imperdiet. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Ante in nibh mauris cursus. Feugiat in fermentum posuere urna. Lorem sed risus ultricies tristique. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Elementum sagittis vitae et leo duis ut diam quam nulla. Massa vitae tortor condimentum lacinia quis. Erat nam at lectus urna duis. Mi bibendum neque egestas congue quisque egestas diam in. Orci eu lobortis elementum nibh tellus molestie nunc non. Diam vulputate ut pharetra sit amet aliquam. Tortor pretium viverra suspendisse potenti nullam ac. Nibh praesent tristique magna sit amet purus gravida quis. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Adipiscing tristique risus nec feugiat in fermentum posuere. Consequat id porta nibh venenatis cras seUrna nunc id cursus metus aliquam eleifend. Ut tellus elementum sagittis vitae et. Nullam eget felis eget nunc lobortis mattis. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Lacus vel facilisis volutpat est velit egestas. Metus aliquam eleifend mi in nulla posuere. Aliquam sem et tortor consequat. Et pharetra pharetra massa massa ultricies mi. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Nulla facilisi morbi tempus iaculis urna id. Bibendum neque egestas congue quisque egestas diam. Tempus imperdiet nulla malesuada pellentesque elit. Aliquet enim tortor at auctor urna nunc id cursus. Lacinia at quis risus sed. Tristique senectus et netus et malesuada fames ac turpis egestas. Lacinia quis vel eros donec ac odio. Viverra accumsan in nisl nisi scelerisque eu. In mollis nunc sed id semper risus in.Nunc sed augue lacus viverra vitae. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Integer feugiat scelerisque varius morbi enim nunc. Eu tincidunt tortor aliquam nulla facilisi cras. Ut ornare lectus sit amet est placerat. Fermentum dui faucibus in ornare quam viverra. Feugiat vivamus at augue eget. Sed id semper risus in hendrerit gravida rutrum. Nisi est sit amet facilisis magna etiam tempor orci. Arcu ac tortor dignissim convallis aenean. Nam libero justo laoreet sit amet cursus sit amet. Tristique senectus et netus et malesuada fames. Libero justo laoreet sit amet cursus. Et molestie ac feugiat sed. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit.',
                season: 'Spring 2019',
                user: userID^1000,
                createdAt: new Date(),
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

        it(' Team Remove function', function () {
            assert(!teams.remove({ 
                team: String(userID),
                //id: this.props.team._id,
            }))
        });
    });
});
