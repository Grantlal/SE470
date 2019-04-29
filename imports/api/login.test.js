/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

describe('Log In', function () {
    it('should allow us to login', function () {
        server.execute(function () {
            Accounts.createUser({
                email: 'john.doe@site.com',
                password: 'pswd',
                profile: {
                    name: {
                        first: 'John',
                        last: 'Doe'
                    },
                },
            });
        });

        browser.url('http://localhost:3000/login')
            .setValue('[name="emailAddress"]', 'john.doe@site.com')
            .setValue('[name="password"]', 'pswd')
            .submitForm('form');

        // Note: example wait code below (for jumbotron)
        //browser.waitForExist('.jumbotron');
        expect(browser.getUrl()).to.equal('http://localhost:3000/app');
    });
});