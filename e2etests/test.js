/* global describe, it, browser */
const expect = require('chai').expect;

describe('Last Letter Game App', () => {
    it('Should load with the right title', () => {
        browser.url('http://localhost:3000/');
        const actualTitle = browser.getTitle();

        expect(actualTitle).to.eql('Last Letter Game');
    });
    it('Should allow me to submit an animal', () => {
        const wordText = 'Zebra';
        browser.url('http://localhost:3000/');
        browser.element('.word-input').setValue(wordText);
        browser.click('.word-submit');
        const actual = browser.element('.word-text').getText();

        expect(actual).to.equal(wordText);
    });
});