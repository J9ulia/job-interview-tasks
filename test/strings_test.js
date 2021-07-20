const strings = require('../src/strings');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("#checkForPalindrome", function () {

    it("should return true if string is a palindrome", function () {
        assert.isTrue(strings.checkForPalindrome('Tenet'));
    });

    it("should return false if string is not a palindrome", function () {
        assert.isFalse(strings.checkForPalindrome('Hello'));
    });

    it("should return error if string is empty", function () {
        expect(()=> strings.checkForPalindrome([])).to.throw('Error, enter not empty string');
        }
    );
});