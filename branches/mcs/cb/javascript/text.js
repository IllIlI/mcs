function filter(array, test) {
    "use strict";
    var retarr = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i]))
            retarr.push(array[i]);
    }
    return retarr;
}

var arr = [1,2,3,4,5,6,7,8];
var func = function (n) {
    "use strict";
    return n > 4;
}
filter(arr,func);

// filter
// mapping
function mapping(array, test) {
    "use strict";
    var retar = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i])
                retar.push(array[i]);
    }
    return retar;
}
var barr = [1,2,3,4,5,6,7,8,9,0];
var bfunc = function (n) {function reducing(array,combine, start) {
    "use strict";
    var current = start;
    for (var i = 0; i < array.length; i++) {
            current = combine(current, array[i])
    }
    "use strict";
    return n + 2;
}

// reduce

function reducing(array, combine, start) {
    "use strict";
    var current = start;
    for (var i = 0; i < array.length; i++) {
            current = combine(current, array[i])
    }
    return current;
}

var carr = [1,2,3,4,5,6,7,8,9,0];
var cfunc = function(n) {
    "use strict";
    return n 
}

function loopy(numby) {
    for (var i = 0; i < numby; i++) {
        console.log('try number ' + i);
    }
}

const anobj = [
    {"name": "Adam", "surname":"Smith"},
    {"name": "John", "surname": "Hanlin"},
    {"name": "Sarah", "surname": "Palin"},
    {"name": "Tony", "surname": "Montana"}
]

function qwe() {
    "use strict";
    var one = 1;
    let two = 2;
    const three = 3;
    for (var four in anobj) {console.log(four)};        
}

function filter (array, action) {"use strict"; var returny = []; for (var i = 0; i < array.length; i++) {if (action(array[i])) returny.push(array[i]);}return returny;}

var act = function(p) {
    if (p > 3) {
        return p;
    }
}

console.log(filter([1,2,3,0,4,5,6,7,8,9,13], act));

// Object properties can be pushed and recalled via
// square brackets. Who knew?!
var ancestry = JSON.parse(ANCESTRY_FILE);
var myName = {};
ancestry.forEach(function(person){
    myName[person.name] = person;
});
//

// constructor-function example

function Px() {};
Px.prototype.another = function() {
    console.log("Px:another");
};
function Cx() {};
Cx.prototype = Object.create(Px.prototype);
Cx.prototype.something = function() {
    console.log("Cx:something");
};
Cx.prototype.another = function() {
    this.something();
    this.__proto__.__proto__.another.call(this);
};
var x = new Cx(); x.another();

// endconstructor
