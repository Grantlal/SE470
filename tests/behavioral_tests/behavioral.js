//Logs in the user and verifies the user made it to the home page
//Input invalid data
//Expect user to stay on login page
describe('Login bad data', function () {
    it('should login @watch', function () {
        browser.url('http://localhost:3000/login')
        browser.pause(3000);
        browser.setValue('.email>input', 'GRant is StoO0P1d');
        browser.setValue('.password>input', 'Grant is stoopid');
        browser.click('.login');
        browser.pause(3000);
        expect(browser.getUrl()).to.equal('http://localhost:3000/login');
    })
});

//Logs in the user and verifies success
//Input is admin and password
//Expect failure
describe('Login with "admin credentials" ', function () {
    it('should login @watch', function () {
        browser.url('http://localhost:3000/login')
        browser.pause(3000);
        browser.setValue('.email>input', 'admin');
        browser.setValue('.password>input', 'password');
        browser.click('.login');
        browser.pause(3000);
        expect(browser.getUrl()).to.equal('http://localhost:3000/login');
    })
});

//Logs in the user and verifies the user made it to the home page
//Input valid username and password
//Expects user to be navigated to home page
describe('Login', function () {
    it('should login @watch', function () {
        browser.url('http://localhost:3000/login')
        browser.pause(3000);
        browser.setValue('.email>input', 'hydration@usc.com');
        browser.setValue('.password>input', 'password');
        browser.click('.login');
        browser.pause(3000);
        expect(browser.getUrl()).to.equal('http://localhost:3000/login');
    })
});

//Once Logged in, user can navigate to team page if clicked
//Expect navigation to teams
describe('Navigate to Team Page', function () {
    it("should navigate to the team's master report page after clicking on team @watch", function () {
        browser.url('http://localhost:3000/app/');
        browser.pause(3000);
        browser.click('#TeamsLink');
        browser.pause(1000);
        expect(browser.getUrl()).to.equal('http://localhost:3000/app/yourTeams');
    })
});

//Once Logged in, user can navigate to weight page if clicked
//Expect navigations to Weights :)
describe('Navigate to Weight Entry', function () {
    it("should navigate to the weight entry page  @watch", function () {
        browser.url('http://localhost:3000/app/');
        browser.pause(3000);
        browser.click('#WeightLink');
        browser.pause(1000);
        expect(browser.getUrl()).to.equal('http://localhost:3000/app/weightEntry');
    })
});
/*
describe('Create and Delete an Athlete', function () {
    it('should create and delete an athlete @watch', function () {
        browser.url('http://localhost:3000/app/masterReport');
        browser.pause(5000);
        browser.click('#createAthleteButton');
        browser.setValue('#createAthleteName', 'TESTING');
        browser.setValue('#createAthleteWeight', '100');
        browser.click('#createAthleteModalButton');
        browser.url('http://localhost:3000/app/masterReport');
        browser.pause(5000);
        expect(browser.getText('.athleteTESTING')).to.equal('TESTING');
        browser.url('http://localhost:3000/app/masterReport');
        browser.pause(5000);
        browser.click('.athleteTESTING');
        browser.pause(5000);
        browser.click('.editAthleteButton');
        browser.click('#openDelete');
        browser.click('#confirmDelete');
        browser.pause(5000);
        expect(browser.getUrl()).to.equal('http://localhost:3000/app/masterReport/');
    })
});*/
/*
describe('Enter Weights', function () {
    it('should enter a weight and confirm that it shows up in the master report @watch', function () {
        browser.url('http://localhost:3000/app/weightEntry');
        browser.pause(5000);
        browser.click('#PreButton');
        browser.setValue('.dataEntrydZFEDH2GY6aM3i3Lm>input', 200);
        browser.pause(5000);
        browser.url('http://localhost:3000/app/masterReport');
        browser.pause(5000);
        expect(browser.getText('#dZFEDH2GY6aM3i3LmPreWeight')).to.equal('200.0');
    })
});*/
/*
describe('Edit Athlete Information', function () {
    it('should edit an athlete @watch', function () {
        browser.url('http://localhost:3000/app/athlete/dZFEDH2GY6aM3i3Lm');
        browser.pause(5000);
        browser.click('.editAthleteButton');
        browser.setValue('.athleteNameInput', 'Sample Guy');
        browser.setValue('.athleteBaseInput', '205.0');
        browser.pause(5000);
        browser.click('.modalEditButton');
        browser.pause(2000);
        expect(browser.getText('.athleteInfo')).to.equal('Sample Guy - Football 2018 - 205.0');
    })
});*/

/*describe('Create a team', function () {
    it("should create a team @watch", function () {
        browser.url('http://localhost:3000/app/yourTeams');
        browser.pause(2000);
        browser.click('#CreateTeam');
        browser.pause(3000);
        browser.setValue('.Team>input', 'hydration@usc.com');
        browser.setValue('.Season>input', 'GRant is StoO0P1d');
        browser.pause(2000);
        expect(browser.getUrl()).to.equal('http://localhost:3000/app/yourTeams');
    })
});*/