$(document).ready(function(){
	var operation;
	var clearScreenOnNext = false;

	$("span").click(function(){
		if(clearScreenOnNext) {
			clearScreen();
			clearScreenOnNext = false;
		}
		var num = this.innerHTML;
		$("#screen").append(num);
	});

	$(".operator").click(function(){
		operation = this.innerHTML;
		console.log(operation);
	});
	$("#calc").click(function(){
		var screenText = $("#screen").text();
		var calcArray = screenText.split(operation);

		var a = calcArray[0];
		var b = calcArray[1].split("=")[0];
		a = parseInt(a);
		b = parseInt(b);

		console.log(calcArray);
		switch(operation) {
			case "+":
				$("#screen").text(add(a,b));
			break;

			case "-":
				$("#screen").text(subtract(a,b));
			break;

			case "x":
				$("#screen").text(multiply(a,b));
			break;

			case "/":
				$("#screen").text(divide(a,b));
			break;
		}

		clearScreenOnNext = true;
	});

	$("#cancel").click(function(){
		clearScreen();
	});

	var add = function(a, b) {
		return a + b;
	};

	var subtract = function(a, b) {
		return a - b;
	};

	var multiply = function(a, b) {
		return a*b;
	};

	var divide = function(a, b) {
		return a/b;
	};

	var clearScreen = function() {
		$("#screen").text("");
	};

});