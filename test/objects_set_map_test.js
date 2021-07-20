const objects_set_map = require('../src/objects_set_map.js');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("#indexationSalaries", function () {

    it("should return object with indexed salaries increased by the given percentage", function () {
        assert.deepStrictEqual(objects_set_map.indexationSalaries(
            { Jon: 100, Marry: 300, Max: 400, Li: 200, June: 300 }, 2),
            { Jon: 102, Marry: 306, Max: 408, Li: 204, June: 306 }
        );
    });

    it("should return object with initial salaries if percentage is equivalent to 0", function () {
        assert.deepStrictEqual(objects_set_map.indexationSalaries(
                { Jon: 100, Marry: 300, Max: 400, Li: 200, June: 300 }, 0),
            { Jon: 100, Marry: 300, Max: 400, Li: 200, June: 300 }
        );
    });

    it("should return empty object if original objet is empty", function () {
        assert.deepStrictEqual(objects_set_map.indexationSalaries({},9), {});
    });

    it("should return error if string is empty", function () {
            expect(()=> objects_set_map.indexationSalaries(
                { Jon: 100, Marry: 300, Max: 400, Li: 200, June: 300 }, -8))
                .to.throw('You can not decrease salary, enter a positive value');
        }
    );
});

describe("#returnArrayWithUniqueItems", function () {

    it("should return array only with unique items, array of strings", function () {
        assert.deepStrictEqual(objects_set_map.returnArrayWithUniqueItems(['q','q','ww','q','r','ron','ww','hui','']),
            ['q','ww','r','ron','hui',''], "Items in your new array is not unique");
    });

    it("should return array only with unique items, array of digits", function () {
        assert.deepStrictEqual(objects_set_map.returnArrayWithUniqueItems([1,,3,-9,0,888,0,3,55.111,888]),
            [1,undefined,3,-9,0,888,55.111], "Items in your new array is not unique or lost item");
    });

    it("should return array only with unique items, array of mix", function () {
        assert.deepStrictEqual(objects_set_map.returnArrayWithUniqueItems([1,3,'qq',-9,0,888,'qq',0,3,55.111,'',888]),
            [1,3,'qq',-9,0,888,55.111,''], "Items in your new array is not unique or lost item");
    });

    it("should return empty array if original array is empty", function() {
        assert.deepStrictEqual(objects_set_map.returnArrayWithUniqueItems([]),
            []);
    });
});

describe("#getDuplicateSymbols", function () {

    it("should return array with items length", function () {
        assert.deepStrictEqual(objects_set_map.getDuplicateSymbols('Hello, hello!'),
            [
                [ 'H', 1 ],
                [ 'e', 2 ],
                [ 'l', 4 ],
                [ 'o', 2 ],
                [ ',', 1 ],
                [ ' ', 1 ],
                [ 'h', 1 ],
                [ '!', 1 ]
            ]
        );
    });

    it("should return empty array if original string is empty", function () {
        assert.deepStrictEqual(objects_set_map.getDuplicateSymbols(''), []);
    });
});

describe("#getDuplicateSymbolsUsingObject", function () {

    it("should return array with items length", function () {
        assert.deepStrictEqual(objects_set_map.getDuplicateSymbolsUsingObject('Hello, hello!'),
            [
                [ 'H', 1 ],
                [ 'e', 2 ],
                [ 'l', 4 ],
                [ 'o', 2 ],
                [ ',', 1 ],
                [ ' ', 1 ],
                [ 'h', 1 ],
                [ '!', 1 ]
            ]
        );
    });

    it("should return empty array if original string is empty", function () {
        assert.deepStrictEqual(objects_set_map.getDuplicateSymbolsUsingObject(''), []);
    });
});