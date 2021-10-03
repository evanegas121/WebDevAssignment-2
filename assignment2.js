
// const arr = [1,2];
// FOR EACH // executes a provided function once per array element.
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

const array1 = [1, 4, 9, 16];

// // MAP // 
// creates a new array populated with the results of calling a provided function on every element in the calling array.
Array.prototype.myMap = function(callbackFn) {
    for(let i =0 ; i < this.length; i++){
        if (this[i] == undefined) continue;
        const map1 = (this[i],i, this)
        callbackFn(map1);
    }

};

//Test
// array1.map((x,i) => console.log(x*2,i));
// // const map1 = array1.map(x => x * 2);
// // console.log(map1);
// console.log("Map: ")
// array1.map((x,i) => console.log(x*2,i))

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
