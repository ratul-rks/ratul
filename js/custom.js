

//back to top part
$(window).scroll(function(){
	var scrolling = $(this).scrollTop();
	if(scrolling > 150){
		$(".back_to_top") .fadeIn(500);
	  }else{
		$(".back_to_top") .fadeOut(500);
	  }
	if(scrolling > 100){
		$(".main_menu").addClass("menu_remove")
	}else{
		$(".main_menu").removeClass("menu_remove")
	}
});

$(".back_to_top").click(function(){
	$('html,body').animate({
		scrollTop:0

	}, 2000)
});



$(function(){
	$(".typed").typed({
		strings: ["Developers.", "Designers.", "Freelancher."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
