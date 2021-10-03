
// const arr = [1,2];
//Without using the native “Array.prototype.forEach” method of JavaScript, compose a function titled “myEach” that will take in an array of elements and execute any callback function on each of those elements.
// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for(let i =0 ; i < this.length; i++){
        if (this[i] == undefined) continue;
        
        callbackFn(this[i],i, this);
    }
};
//Test
// console.log("myEach: ")
// arr.myEach((x,i) => console.log(x,i));

// console.log("forEach: ")
// arr.forEach((x,i) => console.log(x,i))

// // MAP //
// Array.prototype.myMap = function() {

// };

// // FILTER //
// Array.prototype.myFilter = function() {

// };

// // SOME //
// Array.prototype.mySome = function() {

// };

// // EVERY //
// Array.prototype.myEvery = function() {

// };

// // REDUCE //
// Array.prototype.myReduce = function() {

// };

// // INCLUDES //
// Array.prototype.myIncludes = function() {

// };

// // INDEXOF //
// Array.prototype.myIndexOf = function() {

// };

// // PUSH //
// Array.prototype.myPush = function() {

// };

// // LASTINDEXOF //
// Array.prototype.myLastIndexOf = function() {

// };

// // KEYS //
// Object.grabKeys = function() {

// };

// // VALUES //
// Object.grabValues = function() {

// };
