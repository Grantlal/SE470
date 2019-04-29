import React from 'react';
import {chai} from 'meteor/practicalmeteor:chai';
import {shallow} from 'enzyme';
import unitTest from './unitTest';
//import sum from './unitTest';


describe( 'Remove an Athlete', function() {
    it( 'should remove an athlete @watch', function () {
        browser.url( 'http://localhost:3000/app/athlete/s5DH3N5zSbWCf5Pkr')
            .setValue('[name="name")', 'Grant')
            .setValue('[name="baseWeight"]', '175')
            .setValue('[name="height"]', '70')
            .submitForm('form');
    })

    var getAthlete = server.execute(function(){
        const {AthletesOld} = require('../../imports/api/athletes.jsx');
        return AthletesOld.removeOne({name:'Grant'});
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