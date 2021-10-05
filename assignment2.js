
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
    const map1 = [];
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
//The filter() method creates a new array with all elements that pass the test implemented by the provided function
Array.prototype.myFilter = function(callbackFn) {
    const filter = [];
    for(let i =0 ; i < this.length; i++){
        if (this[i] == undefined) continue;
        if (callbackFn(this[i],i, this)){
            filter.push(this[i])
        }
    }
    return filter;

};
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.myFilter(word => word.length > 6);
// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

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
