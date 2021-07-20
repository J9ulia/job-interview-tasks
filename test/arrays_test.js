const arrays = require('../src/arrays.js');
const assert = require('chai').assert;
const expect = require('chai').expect;


describe("#getMaxItemUsingMath", function() {

    it("should return max value from array", function() {
        assert.strictEqual(arrays.getMaxItemUsingMath([2,4,-1,0,-10,8.55,-99.3]), 8.55);
    });

    it("should return this element if array consists of one element", function() {
        assert.strictEqual(arrays.getMaxItemUsingMath([-999]), -999);
    });

    it("should throw error if array is empty", function() {
        expect(()=> arrays.getMaxItemUsingMath([])).to.throw('Error, enter not empty array');
    });

    it("should throw error if array doestn consist of only numbers", function() {
        expect(()=> arrays.getMaxItemUsingMath(['q',1,'5']))
            .to.throw('Error, enter array contains only of numbers');
    });
});

describe("#getMaxItemUsingLoop", function() {

    it("should return max value from array", function() {
        assert.strictEqual(arrays.getMaxItemUsingLoop([2,4,-1,0,-10,8.55,-99.3]), 8.55);
    });

    it("should return this element if array consists of one element", function() {
        assert.strictEqual(arrays.getMaxItemUsingLoop([-999]), -999);
    });

    it("should throw error if array is empty", function() {
        expect(()=> arrays.getMaxItemUsingLoop([])).to.throw('Error, enter not empty array');
    });
});

describe("#getMinItemUsingMath", function() {

    it("should return max value from array", function() {
        assert.strictEqual(arrays.getMinItemUsingMath([2,4,-1,0,-10,8.55,-99.3]), -99.3);
    });

    it("should return this element if array consists of one element", function() {
        assert.strictEqual(arrays.getMinItemUsingMath([-999]), -999);
    });

    it("should throw error if array is empty", function() {
        expect(()=> arrays.getMinItemUsingMath([])).to.throw('Error, enter not empty array');
    });
});

describe("#getMinItemUsingLoop", function() {

    it("should return max value from array", function() {
        assert.strictEqual(arrays.getMinItemUsingLoop([2,4,-1,0,-10,8.55,-99.3]), -99.3);
    });

    it("should return first item if array consists of one item", function() {
        assert.strictEqual(arrays.getMinItemUsingLoop([-999]), -999);
    });

    it("should throw error if array is empty", function() {
        expect(()=> arrays.getMinItemUsingLoop([])).to.throw('Error, enter not empty array');
    });
});

describe("#sortItemsByDesc", function () {

    it("should return sorted array by desc", function () {
            assert.deepStrictEqual(arrays.sortItemsByDesc([2,3,1,3,99,6.999,-9,0,-1.5]),
                [99,6.999,3,3,2,1,0,-1.5,-9], "Wrong sorting");
    });

    it("should return the same array if initial array contained one element", function () {
        assert.deepStrictEqual(arrays.sortItemsByDesc([2]),
            [2], "Wrong sorting");
    });

    it("should throw error if array is empty", function() {
        expect(()=> arrays.sortItemsByDesc([])).to.throw('Error, enter not empty array');
    });
});

describe("#sortItemsUsingInsertionAlgorithm", function () {

    it("should return sorted array", function () {
        assert.deepStrictEqual(arrays.sortItemsUsingInsertionAlgorithm([2,3,1,3,99,6.999,-9,0,-1.5]),
            [-9,-1.5,0,1,2,3,3,6.999,99], "Wrong sorting");
    });

    it("should return the same array if initial array contained one element", function () {
        assert.deepStrictEqual(arrays.sortItemsUsingInsertionAlgorithm([2]),
            [2], "Wrong sorting");
    });

    it("should throw error if array is empty", function() {
        expect(()=> arrays.sortItemsUsingInsertionAlgorithm([])).to.throw('Error, enter not empty array');
    });
});

describe("#sortItemsUsingBubbleAlgorithm", function () {

    it("should return sorted array", function () {
        assert.deepStrictEqual(arrays.sortItemsUsingBubbleAlgorithm([2,3,1,3,99,6.999,-9,0,-1.5]),
            [-9,-1.5,0,1,2,3,3,6.999,99], "Wrong sorting");
    });

    it("should return the same array if initial array contained one element", function () {
        assert.deepStrictEqual(arrays.sortItemsUsingBubbleAlgorithm([2]),
            [2], "Wrong sorting");
    });

    it("should throw error if array is empty", function() {
        expect(()=> arrays.sortItemsUsingBubbleAlgorithm([])).to.throw('Error, enter not empty array');
    });
});

describe("#sortItemsUsingSelectionAlgorithm", function () {

    it("should return sorted array", function () {
        assert.deepStrictEqual(arrays.sortItemsUsingSelectionAlgorithm([2,3,1,3,99,6.999,-9,0,-1.5]),
            [-9,-1.5,0,1,2,3,3,6.999,99], "Wrong sorting");
    });

    it("should return the same array if initial array contained one element", function () {
        assert.deepStrictEqual(arrays.sortItemsUsingSelectionAlgorithm([2]),
            [2], "Wrong sorting");
    });

    it("should throw error if array is empty", function() {
        expect(()=> arrays.sortItemsUsingSelectionAlgorithm([])).to.throw('Error, enter not empty array');
    });
});

describe("#returnArrayWithUniqueItems", function () {

    it("should return array only with unique items, array of strings", function () {
        assert.deepStrictEqual(arrays.returnArrayWithUniqueItems(['q','q','ww','q','r','ron','ww','hui','']),
            ['q','ww','r','ron','hui',''], "Items in your new array is not unique");
    });

    it("should return array only with unique items, array of digits", function () {
        assert.deepStrictEqual(arrays.returnArrayWithUniqueItems([1,,3,-9,0,888,0,3,55.111,888]),
            [1,undefined,3,-9,0,888,55.111], "Items in your new array is not unique or lost item");
    });

    it("should return array only with unique items, array of mix", function () {
        assert.deepStrictEqual(arrays.returnArrayWithUniqueItems([1,3,'qq',-9,0,888,'qq',0,3,55.111,'',888]),
            [1,3,'qq',-9,0,888,55.111,''], "Items in your new array is not unique or lost item");
    });

    it("should return empty array if original array is empty", function() {
        assert.deepStrictEqual(arrays.returnArrayWithUniqueItems([]),
            []);
    });
});

describe("#getItemLengthOfArr", function () {

    it("should return array with items length", function () {
        assert.deepStrictEqual(arrays.getItemLengthOfArr(['qwe','w','','3']), [3,1,0,1]);
    });

    it("should return empty array if original array is empty", function () {
        assert.deepStrictEqual(arrays.getItemLengthOfArr([]), []);
    });
});

describe("#getMaxSubSumOfItems", function () {

    it("should return max sub sum of items", function () {
        assert.equal(arrays.getMaxSubSumOfItems([4,-9,0,1,10,4,-90]), 15);
    });

    it("should return sum of all items if all items are positive or 0", function () {
        assert.equal(arrays.getMaxSubSumOfItems([4,9,0,1,10]), 24);
    });

    it("should return 0 if all items are negative", function () {
        assert.equal(arrays.getMaxSubSumOfItems([-1,-999,-5]), 0);
    });

    it("should return 0 if all items are 0", function () {
        assert.equal(arrays.getMaxSubSumOfItems([0,0,0,0,0]), 0);
    });

    it("should return 0 if arr contains of one 0 item", function () {
        assert.equal(arrays.getMaxSubSumOfItems([0]), 0);
    });

    it("should return 0 if arr contains of one negative item", function () {
        assert.equal(arrays.getMaxSubSumOfItems([-71]), 0);
    });

    it("should return value of item if arr contains of one positive item", function () {
        assert.equal(arrays.getMaxSubSumOfItems([71]), 71);
    });

    it("should throw error if array is empty", function () {
        expect(()=>arrays.getMaxSubSumOfItems([])).to.throw('Error, enter not empty array');
    });
});

describe("#copyAndSorted", function () {

    it("should return new sorted array", function () {
        assert.deepStrictEqual(arrays.copyAndSorted([9, 5, 0, -5, 1]), [-5, 0, 1, 5, 9 ]);
    });

    it("should return empty array if original array is empty", function () {
        assert.deepStrictEqual(arrays.copyAndSorted([]), []);
    });
})

describe("#copyArrayUsingForEach", function () {

    it("should return new identical array", function () {
        assert.deepStrictEqual(arrays.copyArrayUsingForEach([9, 5, 0, -5, 1]), [9, 5, 0, -5, 1]);
    });

    it("should return empty array if original array is empty", function () {
        assert.deepStrictEqual(arrays.copyArrayUsingForEach([]), []);
    });
});