

var rightCode = "parallax.speed = 2000;\n\nparallax.gi1.right();";
var topCode = "parallax.scaling = 'linear';\n\nparallax.gi1.top();"
var leftCode ="parallax.scaling = 0.9;\n\nparallax.gi1.left();";
var bottomCode ="parallax.gi1.onload = function(){\n\talert('Awesome alert buddy. Truly spectacular.');\n});\n\nparallax.gi1.bottom();";
var lastCode="parallax.last.bottom();"
var currentCode="parallax.current.ackbar(); ////What is it? "

/*
we need to make this class reusable by creating the tags for the g1+number
*/

$(document).ready(function () {

	$("#gi1").click(function(){
		//clear away all the modifers
		parallax.speed = 800;
		parallax.easing = 'swing';
		parallax.scaling = 0.15;
		parallax.gi1.onload = function(){};
		parallax.galley.top();
	});

	$("#fromLast").click(function(){
		parallax.last.bottom();
	}).hover(function(){
		$("#codebox").html(lastCode);
	});

	$("#fromCurrent").click(function(){
		parallax.current.ackbar();
	}).hover(function(){
		$("#codebox").html(currentCode);
	});

	$("#fromRight").click(function(){
		parallax.speed = 2000;
		parallax.gi1.right();
	}).hover(function(){
		$("#codebox").html(rightCode);
	});

	$("#fromTop").click(function(){
		parallax.scaling = 'linear';
		parallax.gi1.top();
	}).hover(function(){
		$("#codebox").html(topCode);
	});

	$("#fromLeft").click(function(){
		parallax.scaling = 0.9;
		parallax.gi1.left();
	}).hover(function(){
		$("#codebox").html(leftCode);
	});

	$("#fromBottom").click(function(){
		parallax.gi1.onload = function(){
			alert("Alert me.");
		};
		parallax.gi1.bottom();
	}).hover(function(){
		$("#codebox").html(bottomCode);
	});
});