const arrays = {
    checkArgumentIsArray: function (argument) {
        if (!Array.isArray(argument)) {
            throw 'Error, enter array';
        }
    },

    checkArrayForEmptiness: function (arr) {
        if ( arr.length === 0 ) {
            throw 'Error, enter not empty array';
        }
    },

    checkArrayItemsIsNumbers: function (arr) {
        arr.forEach(item=> {
            if (typeof item != 'number') {
                throw 'Error, enter array contains only of numbers';
            }
        });
    },
    
    getMaxItemUsingMath: function (arr) {
        this.checkArgumentIsArray(arr);
        this.checkArrayForEmptiness(arr);
        this.checkArrayItemsIsNumbers(arr);
        return Math.max(...arr);
    },

    getMinItemUsingMath: function (arr) {
        this.checkArgumentIsArray(arr);
        this.checkArrayForEmptiness(arr);
        this.checkArrayItemsIsNumbers(arr);
        return Math.min(...arr);
    },

    getMaxItemUsingLoop: function (arr) {
        this.checkArgumentIsArray(arr);
        this.checkArrayForEmptiness(arr);
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        return max;
    },

    getMinItemUsingLoop: function (arr) {
        this.checkArgumentIsArray(arr);
        this.checkArrayForEmptiness(arr);
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
            }
        }
        return min;
    },

    sortItemsByDesc: function (arr) {
        this.checkArgumentIsArray(arr);
        this.checkArrayForEmptiness(arr);
        return arr.sort( (a, b) => b - a );
    },

    returnArrayWithUniqueItems: function (arr) {
        this.checkArgumentIsArray(arr);
        let uniqueArr = [];
        for ( let i = 0; i < arr.length; i++ ) {
            if ( !uniqueArr.includes(arr[i]) ) {
                uniqueArr.push(arr[i]);
            }
        }
        return uniqueArr;
    },

    // The arr.forEach method allows to run a function for every element of the array.
    doSmthWithArray: function (arr) {
        arr.forEach(function(item, index, array) {
            // ... do something with item
            console.log((`${item} is at index ${index} in ${array}`));
        });
    },

    // The arr.map method calls the function for each element of the array and returns the array of results.
    getItemLengthOfArr: function (arr) {
        return arr.map(item => item.length);
    },

    /* Quadratic sorting algorithm.
    It’s best case run time is O(n), or linear, which occurs if the input array is already sorted.
    Because insertion sort sorts your list in-place, it only uses O(1) (constant) space.
    */
    sortItemsUsingInsertionAlgorithm: function (arr) {
        this.checkArgumentIsArray(arr);
        this.checkArrayForEmptiness(arr);
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j]>key ) {
                arr[j+1] = arr[j];
                j = j - 1;
            }
            arr[j+1] = key;
        }
        return arr;
    },

    sortItemsUsingBubbleAlgorithm : function (arr) {
        this.checkArgumentIsArray(arr);
        this.checkArrayForEmptiness(arr);
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < arr.length; i++) {
                if ( arr[i] > arr[i+1] ) {
                    let temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        return arr;
    },

    sortItemsUsingSelectionAlgorithm : function (arr) {
        this.checkArgumentIsArray(arr);
        this.checkArrayForEmptiness(arr);
        for (let i = 0; i < arr.length; i++) {
            let min = i;
            for (let j = i+1; j < arr.length; j++) {
                if ( arr[min] > arr[j] ) {
                    min = j;
                }
            }
            if ( min !== i ) {
                let temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;

            }
        }
        return arr;
    },

    getMaxSubSumOfItems : function (arr) {
        this.checkArgumentIsArray(arr);
        this.checkArrayForEmptiness(arr);
        this.checkArrayItemsIsNumbers(arr);
        let maxSum = 0;
        let partialSum = 0;
        for ( let item of arr ) {
            partialSum += item;
            maxSum = Math.max( maxSum, partialSum );
            if ( partialSum < 0 ) {
                partialSum = 0;
            }
        }
        return maxSum;
    },

    copyAndSorted : function (arr) {
        this.checkArgumentIsArray(arr);
        this.checkArrayItemsIsNumbers(arr);
        // arr.slice() creates a copy of arr
        return arr.slice().sort(( a,b ) => a-b );
    },

    copyArrayUsingForEach : function (arr) {
        this.checkArgumentIsArray(arr);
        let copyArr = [];
        arr.forEach((item) => copyArr.push(item));
        return copyArr;
    },
};


module.exports = arrays;