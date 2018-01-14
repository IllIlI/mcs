var timer = function() {
		var start = new Date();
		return {
				stop: function() {
						var end = new Date();
						var time = end.getTime() - start.getTime();
						console.log(time, "ms");
				}
		};
};

var onne = timer("diner");
console.log(onne);
console.log(onne.stop());
