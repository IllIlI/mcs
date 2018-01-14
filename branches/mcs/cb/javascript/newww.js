let timer = function() {
	let start = new Date();
	return {
		stop: function() {
			let end = new Date();
			let time = end.getTime() - start.getTime();
		}
	}
}
let getRandom = function(min , max) {
	return Math.random() * (max - min) + min;
};

function random() {
		
}
