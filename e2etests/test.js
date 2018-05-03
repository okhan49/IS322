const expect = require('chai').expect;

describe('Last Letter Game App', () => {
    it('Should load with the right title', () => {
        browser.url('http://localhost:3000/');
        const actualTitle = browser.getTitle();

        expect(actualTitle).to.eql('Last Letter Game');
    });
});