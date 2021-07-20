const strings = {
    checkStringForEmptiness: function (str) {
        if (str.length === 0) {
            throw 'Error, enter not empty string';
        }
    },

    checkForPalindrome: function (str) {
        this.checkStringForEmptiness(str);
        let arr = str.toLowerCase().replace(/\s+/g, '').split('');
        let strLength = arr.length;
        for (let i = 0; i < strLength / 2; i++ ) {
            if (arr[i] != arr[strLength-1-i]) {
                return false
            }
        }
        return true
    }
};

// console.log(strings.checkForPalindrome(''));


module.exports = strings;