/*	Name: theme-options.js
	Written by: Iwthemes - (http://www.iwthemes.com)
	Email: jdrendon@imaginacionweb.net
	Version: 1.0

*/
 var $;
  $(document).ready(function($) {
	//=================================== Theme Options ====================================//

	$('.wide').click(function() {
		$('.boxed').removeClass('active');
		$('.boxed-margin').removeClass('active');
		$(this).addClass('active');
		$('.patterns').css('display' , 'none');
		$('#layout').removeClass('layout-boxed').removeClass('layout-boxed-margin').addClass('layout-wide');
	});
	$('.boxed').click(function() {
		$('.wide').removeClass('active');
		$('.boxed-margin').removeClass('active');
		$(this).addClass('active');
		$('.patterns').css('display' , 'block');
		$('#layout').removeClass('layout-boxed-margin').removeClass('layout-wide').addClass('layout-boxed');
	});
	$('.boxed-margin').click(function() {
		$('.boxed').removeClass('active');
		$('.wide').removeClass('active');
		$(this).addClass('active');
		$('.patterns').css('display' , 'block');
		$('#layout').removeClass('layout-wide').removeClass('layout-boxed').addClass('layout-boxed-margin');
	});

	//=================================== Skins Changer ====================================//

	google.setOnLoadCallback(function(){

		'use strict';

	    // Color changer 
	    $(".green").click(function(){
	        $(".skin").attr("href", "css/skins/green/green.css");
	        return false;
	    });

	    $(".orange").click(function(){
	        $(".skin").attr("href", "css/skins/orange/orange.css");
	        return false;
	    });

	    $(".red").click(function(){
	        $(".skin").attr("href", "css/skins/red/red.css");
	        return false;
	    });

	    $(".blue").click(function(){
	        $(".skin").attr("href", "css/skins/blue/blue.css");
	        return false;
	    });

	    $(".cyan").click(function(){
	        $(".skin").attr("href", "css/skins/cyan/cyan.css");
	        return false;
	    });

	    $(".beige").click(function(){
	        $(".skin").attr("href", "css/skins/beige/beige.css");
	        return false;
	    });
	    
	});

	//=================================== Background Options ====================================//
	
	$('#theme-options ul.backgrounds li').click(function(){
		$bgSrc = $(this).css('background-image');
		if ($(this).attr('class') == 'bgnone')
			$bgSrc = "none";

		$('body').css('background-image',$bgSrc);
		$.cookie('background', $bgSrc);
		$.cookie('backgroundclass', $(this).attr('class').replace('active',''));
		$(this).addClass('active').siblings().removeClass('active');
	});

	//=================================== Panel Options ====================================//

	$('#theme-options .title').click(function(){
		if ($('#theme-options').css('left') == "-180px")
		{
			$left = "0px";
			$.cookie('displayoptions', "0");
		} else {
			$left = "-180px";
			$.cookie('displayoptions', "1");
		}
		$('#theme-options').animate({
			left: $left
		},{
			duration: 500,
			easing: "easeInOutExpo"
		});

	});

	$(function(){
		$('#theme-options').fadeIn();
		$bgSrc = $.cookie('background');
		$('body').css('background-image',$bgSrc);

		if ($.cookie('displayoptions') == "1")
		{
			$('#theme-options').css('left','-180px');
		} else if ($.cookie('displayoptions') == "0") {
			$('#theme-options').css('left','0');
		} else {
			$('#theme-options').delay(800).animate({
				left: "-180px"
			},{
				duration: 500,
				easing: "easeInOutExpo"
			});
			$.cookie('displayoptions', "1");
		}
		$('#theme-options ul.backgrounds').find('li.' + $.cookie('backgroundclass')).addClass('active');

	});

});