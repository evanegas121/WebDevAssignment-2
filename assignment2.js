
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

//const array1 = [1, 4, 9, 16];

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
            filter[filter.length]=(this[i])
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
//expected output: Array ["exuberant", "destruction", "present"]

// // SOME //
 Array.prototype.mySome = function(callbackFn) {
    for(let i =0 ; i < this.length; i++){
        if (this[i] == undefined) continue;
        if (this[i] && callbackFn(this[i],i, this)){
            return true;
        }
    }
    return false;


 };
//  const fruits = ['apple', 'banana', 'mango', 'guava'];

//  function checkAvailability(arr, val) {
//    return arr.mySome(function(arrVal) {
//      return val === arrVal;
//    });
//  }
 
//  console.log(checkAvailability(fruits, 'kela'))  // false
//  console.log(checkAvailability(fruits, 'banana'))

// // EVERY //
Array.prototype.myEvery = function(callbackFn) {
    for(let i =0 ; i < this.length; i++){
        if (this[i] == undefined) continue;
        if (!callbackFn(this[i],i, this)){
            return false;
        }
    }
    return true;
};
// const isBelowThreshold = (currentValue) => currentValue >= 40;
// const array1 = [40, 50, 70, 10, 80, 90];
// console.log(array1.myEvery(isBelowThreshold)); 

// // REDUCE //
Array.prototype.myReduce = function(callbackFn,value) {
    for (let i =0 ; i < this.length; i++) {
        if (value == undefined) {value = this[i];}
        else { value = callbackFn.call(undefined, value,this[i],i,this);}
      }
      return value;
};

// // INCLUDES //
Array.prototype.myIncludes = function(array) {
    for(let i =0 ; i < this.length; i++){
        if (this[i] == undefined) continue;
        if (this[i]) return true;
    }
    return false;
};

// // INDEXOF //
Array.prototype.myIndexOf = function(arg,index) {
    for(let i = index || 0 ; i < this.length; i++){
        if (this[i] == undefined) continue;
        if (this[i]=== arg) {return i;}
    }
    return -1;
};

// // PUSH //
Array.prototype.myPush = function() {
    const array = [];
    for(let i =0 ; i < this.length; i++){
        if (this[i] == undefined) continue;
        array[array.length]=(this[i])
    } 
    return (array.length + 1);
};

// // LASTINDEXOF //
Array.prototype.myLastIndexOf = function(arg, index) {
    for(let i = index || this.length - 1 ; i > -1; i--){
        if (this[i] == undefined) continue;
        if (this[i] === arg) {return i;}
    }
    return -1;
};

// // KEYS // 
Object.grabKeys = function(object) {
    var keys = [];
    for (let i in object) {
    keys[keys.length] = i;
    }
    return keys;
};

// // VALUES //
Object.grabValues = function(object) {
    var keys = [];
    for (let i in object) {
    keys[keys.length] = object[i];
    }
    return keys;
};