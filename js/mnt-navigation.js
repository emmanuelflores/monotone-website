var rightKey, leftKey, topKey, bottomKey;

$(document).ready(function () {

	//Set up the triggers for the arrow keys
	$(document).keydown(function(e){
		if (e.keyCode == 37 && typeof leftKey === 'function') {
			leftKey();
		} else if(e.keyCode == 38 && typeof topKey === 'function') {
			topKey();
		} else if(e.keyCode == 39 && typeof rightKey === 'function') {
			rightKey();
		} else if(e.keyCode == 40 && typeof bottomKey === 'function') {
			bottomKey();
		}
	});

	parallax.add($("#blog"))
			.add($("#home"))
			.add($("#boo"))
			.add($("#is"))
			.add($("#about"))
			.add($("#gallery"))
			//gallery items, this needs to be optimized gi = gallery item
			.add($("#gi1"))
			.add($("#gi2"))
			.add($("#monotree"))
			.add($("#glass_scene"));

	parallax.background = $("body");

	//Clears each page navigation on load
	parallax.preload = function(){
		rightKey = leftKey = topKey = bottomKey = "";
		$(".control").hide();
	};


	//Setting up page navigation
	parallax.home.onload=function(){
		setRight("blog", "Blog");
		setTop("is", "Mono Lab");
		setLeft("about","About");
		setBottom("gallery","Projects");
	};

	parallax.is.onload=function(){
		setBottom("home","monotone");
	};

	parallax.blog.onload=function(){
		setLeft("home", "monotone");
		setRight("about", "about");
	};

	parallax.about.onload=function(){
		setLeft("blog", "about");
		setRight("home","monotone");
	};

	parallax.gallery.onload=function(){
		setTop("home", "monotone");
	};


	//Sets the correct triggers for the arrows, plus arrow keys
	function setRight(page, text){
		$("#rightText").text(text);
		$("#rightControl").show().unbind('click').click(function(){
			parallax[page].right();
		});
		rightKey = function(){
			parallax[page].right();
		};
	}

	function setLeft(page, text){
		$("#leftText").text(text);
		$("#leftControl").show().unbind('click').click(function(){
			parallax[page].left();
		});
		leftKey = function(){
			parallax[page].left();
		};
	}

	function setTop(page, text){
		$("#topText").text(text);
		$("#topControl").show().unbind('click').click(function(){
			parallax[page].top();
		});
		topKey = function(){
			parallax[page].top();
		};
	}

	function setBottom(page, text){
		$("#bottomText").text(text);
		$("#bottomControl").show().unbind('click').click(function(){
			parallax[page].bottom();
		});
		bottomKey = function(){
			parallax[page].bottom();
		};
	}

	//The fadey bits
	$("#bottomControl").mouseenter(function(){
		$("#bottomArrow").fadeTo(500,1);
		$("#bottomText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#bottomArrow").stop().fadeTo(500,0.2);
		$("#bottomText").stop().fadeTo(500,0);
	});

	$("#leftControl").mouseenter(function(){
		$("#leftArrow").fadeTo(500,1);
		$("#leftText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#leftArrow").stop().fadeTo(500, 0.2);
		$("#leftText").stop().fadeTo(500,0);
	});

	$("#rightControl").mouseenter(function(){
		$("#rightArrow").fadeTo(500,1);
		$("#rightText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#rightArrow").stop().fadeTo(500, 0.2);
		$("#rightText").stop().fadeTo(500,0);
	});

	$("#topControl").mouseenter(function(){
		$("#topArrow").fadeTo(500,1);
		$("#topText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#topArrow").stop().fadeTo(500, 0.2);
		$("#topText").stop().fadeTo(500,0);
	});


	$(".control").hide();
	parallax.home.show();

	$("#galleryItem1").click(function(){
		//console.log("hello");

		parallax.gi1.bottom();

		var iframe = $("#sonicPaintingsGallery")[0];
		setTimeout(function() {
			iframe.contentWindow.focus();
		},20);
	})

	$("#galleryItem2").click(function(){
		//console.log("hello");

		parallax.gi2.bottom();

		var iframe = $("#TGGDGallery")[0];
		setTimeout(function() {
			iframe.contentWindow.focus();
		},20);
	})

	$("#labGalleryItem1").click(function() {
		parallax.monotree.top();
		var iframe = $("#monotonetree")[0];
		iframe.src = "http://www.monotonestudio.nl/monotree";
		setTimeout(function() {
			iframe.contentWindow.focus();
		},20);
	})

	$("#labGalleryItem2").click(function() {
		parallax.glass_scene.top();
		var myBody = $("body");
		myBody.toggleClass("whitebackground");  
	})

	// $("#galleryItem3").click(function(){
	// 	//console.log("hello");

	// 	parallax.gi1.bottom();

	// })

	// $("#galleryItem4").click(function(){
	// 	//console.log("hello");

	// 	parallax.gi1.bottom();

	// })

	// $("#galleryItem5").click(function(){
	// 	//console.log("hello");

	// 	parallax.gi1.bottom();

	// })

   $(".returnFromGallery").click(function(){
		//clear away all the modifers
		parallax.speed = 800;
		parallax.easing = 'swing';
		parallax.scaling = 0.15;
		// parallax.boo.onload = function(){};
		//Randomly picks a direction to head back too
		parallax.gallery.top();
	});

    $(".returnFromLabGallery").click(function(){
		//clear away all the modifers
		parallax.speed = 800;
		parallax.easing = 'swing';
		parallax.scaling = 0.15;
		// parallax.boo.onload = function(){};
		//Randomly picks a direction to head back too
		parallax.is.bottom();
		var body = $('body');
		body.toggleClass("whitebackground")
	});

	$(".returnFromTree").click(function(){
		//clear away all the modifers
		parallax.speed = 800;
		parallax.easing = 'swing';
		parallax.scaling = 0.15;
		// parallax.boo.onload = function(){};
		//Randomly picks a direction to head back too
		setTimeout(function() {
			var iframe = $("#monotonetree")[0];
			iframe.src = null;
		}, 800);
		parallax.is.bottom();
	});

});
