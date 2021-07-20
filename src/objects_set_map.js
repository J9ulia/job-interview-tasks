const objects_set_map = {
    indexationSalaries : function (salaries, persent) {
        if ( persent < 0 ) {
            throw 'You can not decrease salary, enter a positive value';
        }

        for (let key in salaries) {
            salaries[key] = salaries[key] + salaries[key]*persent/100;
        }
        return salaries;
    },

    returnArrayWithUniqueItems : function (arr) {
        let set = new Set(arr);
        return Array.from(set);
    },

    getDuplicateSymbols: function (str) {
        return Array.from(str.split('').reduce((acc, el) => {
            acc.set( el, ((acc.get(el) || 0) + 1) );
            return acc;
        }, new Map()));

    },

    getDuplicateSymbolsUsingObject : function (str) {
        return Object.entries([...str].reduce((obj, el) => (obj[el] = (obj[el] || 0) + 1, obj), {}));
    },

};

module.exports = objects_set_map;



/* object
To walk over all keys of an object, there exists a special form of the loop: for..in
    for (key in object) {
      // executes the body for each key among object properties
    }
Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.
Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them
*/

/* Map
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn't exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.

map.keys(), map.values(), map.entries() like for objects
map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

Map has a built-in forEach method, similar to Array
*/


/* Set
Use Set to store unique values
new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

We can loop over a set either with for..of or using forEach

set.keys() – returns an iterable object for values,
set.values() – same as set.keys(), for compatibility with Map,
set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.
*/

