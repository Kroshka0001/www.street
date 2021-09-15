$(document).ready(function(){ 	
						   
	$('ul.list li').each(function() {
	  var a = $(this).children('a');
	  var aClass = a.attr('rel');
	  if (a.hasClass('active')) {     
	   $('.'+aClass).css({'display':'block'});
	  } else {
	   $('.'+aClass).css({'display':'none'});
	  }
	 });
	 
	 $('ul.list li a').click(function () {             
	  var thisaClass = $(this).attr('rel');
	  $(this).parent('li').parent('ul').children('li').each(function() {
	   var a = $(this).children('a');
	   var aClass = a.attr('rel');
	   if (thisaClass == aClass) {
		$('.'+aClass).show();
		a.attr('class','active');
	   } else {
		$('.'+aClass).hide();
		a.attr('class','');
	   }
	  });
	  return false;
	});
	 
	 $("#slider").easySlider({
		controlsBefore:	'<p id="controls">',
		controlsAfter:	'</p>',
		auto: true, 
		continuous: true
	});	
	 
	 
});	