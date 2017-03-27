//jQuery(function($){
$(function(){
	$('head').append(
	'<style type="text/css">body {display:none;}</style>'
	);
$(document).ready(function() {
				$('body').delay(600).fadeIn("1000");
			});
//	$(window).load(function() {
//	$('body').delay(600).fadeIn("1000");
//	});
	$(window).on("beforeunload",function(e){
		$('body').fadeOut();
	});
});
//});