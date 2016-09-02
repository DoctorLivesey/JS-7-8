$(function(){
	var $container = $('.container');
	var $menu = $container.find('.menu');
	$menu.mousedown(function() {
	  $(this).css({
	    color: '#fff',
	    background: '#4682B4'
	  });
	  $(this).find('li').css({
	    color: '#fff',
	    background: 'linear-gradient(to top, #0000FF, #4682B4)'
	  });
	})
	$menu.mouseup(function(){
	  $(this).css({
	    color: 'black',
	    background: ''
	  });
	  $(this).find('li').css({
		color: 'black',
		background: ''
	  });
	  $(this).css('color', 'black');
	  $('li').removeClass('active');	
	  $(this).find('li').addClass('active');
	  $('ul').removeClass('active2');
	  $(this).addClass('active2');
	});

	var $button = $('#showHelp');
	$button.mousedown(function(){
	  $('.help').css('display', 'inline-block');
	});
	$button.mouseup(function(){
	  $('.help').animate({
	  	opacity: 0
	  },10000,
	  function(){
	  	$('.help').css('display', 'none');
	  });
	});
	var $input = $('.field');
	$input.hover(function(){
	  $(this).siblings('.help').css('display', 'inline-block');
	},function(){
	  $(this).siblings('.help').animate({
		opacity: 0
	  },10000,
	  function(){
	    $(this).siblings('.help').css('display', 'none');
	  });
	});
});
        