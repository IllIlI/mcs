function Lecture(name, lecture) {
    this.name = name;
    this.lecture = lecture;
}
Lecture.prototype.display = function() {
    return this.name + " is teaching " + this.lecture;
}
function Schedule(lectures) {
    this.lectures = lectures;
}
Schedule.prototype.display = function() {
    var str = "";
    for (var i = 0; i < this.lectures.length; i++)
        str += (i + 1) + this.lectures[i].display() + "\n";
    return str;
}
var mySchedule = new Schedule([
    new Lecture("Smith", "Math"),
    new Lecture("Adams", "Something else.")
]);
console.log(mySchedule.display());

// Early Binding vs Late Binding
// Early Binding

var sum = function(a, b) {
    return a + b;
}

var x = 5, y = 6;
var sum5n6 = sum.bind(null, x, y);

x = 10;
y = 5;
console.log("with Early Binding -->",sum5n6());

// Late Binding

var sum2 = function(p) {
    return p.x + p.y;
}

var x = 5, y = 6;
var n = {x: x, y: y};
var sumLate = sum2.bind(null, n);

n.x = 10;
n.y = 5;

console.log("Late Binding -->", sumLate());

let one = function() {
		let das = "this";
		let ist = "is";
		let gut = "good";
		console.log(das, ist, gut);
};
