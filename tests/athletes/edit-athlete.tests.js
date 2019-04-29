import React from 'react';
import {chai} from 'meteor/practicalmeteor:chai';
import {shallow} from 'enzyme';
import unitTest from './unitTest';
//import sum from './unitTest';


describe( 'Edit an Athlete', function() {
    it( 'should edit athlete @watch', function () {
        browser.url( 'http://localhost:3000/app/athlete/s5DH3N5zSbWCf5Pkr')
            .setValue('[name="name")', 'Ronald McDonald')
            .submitForm('form');
    })

    var getAthlete = server.execute(function(){
        const {AthletesOld} = require('../../imports/api/athletes.jsx');
        return AthletesOld.findOne({name:'Ronald McDonald'});
    })

    expect(getAthlete.name).to.equal('Ronald Mcdonald');

    afterEach( function() {
        server.execute( function() {
            const {AthletesOld} = require('../../imports/api/athletes.jsx');
            var athlete = AthletesOld.findOne( {name: 'Jamie'});
            if (athlete) {
                AthletesOld.remove( athlete._id );
            }
        })
    })
});