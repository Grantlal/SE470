import React from 'react';
import {chai} from 'meteor/practicalmeteor:chai';
import {shallow} from 'enzyme';
import unitTest from './unitTest';
//import sum from './unitTest';

describe("unitTest", function () {
    it("sum", function () {
        // chai.expect(2 + 2).to.equal(4);
        // var result = sum(2+2);
        // chai.assert.equal(result,'4','FeelsGoodMan');
    });
});

//Grant's Attempt
 describe( 'Add an athlete', function() {
     it( 'should create a new athlete @watch', function () {
         browser.url( 'http://localhost:3000/app/masterReport')
             .setValue('[name="name")', 'Grant')
             .setValue('[name="baseWeight"]', '175')
             .setValue('[name="height"]', '70')
             .submitForm('form');
     })

     var getAthlete = server.execute(function(){
         const {AthletesOld} = require('../../imports/api/athletes.jsx');
         return AthletesOld.findOne({name:'Grant'});
     })

     expect(getAthlete.name).to.equal('Grant');

     afterEach( function() {
         server.execute( function() {
             const {AthletesOld} = require('../../imports/api/athletes.jsx');
             var athlete = AthletesOld.findOne( {name: 'Grant', baseWeight: '175', height:'70' });
             if (athlete) {
                 AthletesOld.remove( athlete._id );
             }
         })
     })
 });