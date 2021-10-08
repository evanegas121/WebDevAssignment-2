
// FOR EACH // 
Array.prototype.myEach = function(callbackFn) {
    for(let i =0 ; i < this.length; i++){
        if (this[i] == undefined) continue;

        callbackFn(this[i],i, this);
    }
};


// // MAP // 
Array.prototype.myMap = function(callbackFn) {
    const map1 = [];
    for(let i =0 ; i < this.length; i++){
        if (this[i] == undefined) continue;
        map1[map1.length] = (this[i],i, this)
        callbackFn(map1);
    }
};


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


// // REDUCE //
Array.prototype.myReduce = function(callbackFn,value) {
    for (let i =0 ; i < this.length; i++) {
        if (value == undefined) {value = this[i];}
        else { value = callbackFn.call(undefined, value,this[i],i,this);}
      }
      return value;
};

// // INCLUDES //
Array.prototype.myIncludes = function(search,index) {
    var obj = search
    for(let i = index || 0 ; i < this.length ; i++){
       // if (this[i] == undefined) continue;
        if (this[i] === obj) return true;
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
Array.prototype.myPush = function(...arg) {
    for(let i = 0 ; i < arg.length; i++){
        if (this[i] == undefined) continue;
        this[this.length]=(arg[i])
    } 
    return (this.length);
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

