let timer = function() {
		let start = new Date();
		return {
				let stop: function() {
						let end = new Date();
						let time = end.getTime() - start.getTime();
						console.log(time);
				}
		};
};
let getRandom = function(min , max) {
		return Math.random() * (max - min) + min;
}
let lastNames = [ 'SMITH', 'JOHNSON', 'BALDWIN', 'HAIRYWIN', 'GOODWIN'];
function genName = function() {
		return lastNames[Math.round(getRandom(0, lastNames.length - 1))];
}
let sex = ['Male', 'Female'];
function genSex() {
		return sex[Math.round(getRandom(0, sex.length - 1))];
};
let Person = function() {
		this.name = genName();
		this.sex = genSex();
		this.age = Math.round(getRandom(0, 100));
}
let genPersons = function() {
		for (let i = 0; i < 20; i++) {
				personsArray.push(new Person());
		}
};
function changeSex() {
		for (let i = 0; i < personsArray; i++) {
				personsArray[i].sex = genSex();
		};
}

function one() {
		let that = 
}

let one = function() {
		let that = 123;
}
