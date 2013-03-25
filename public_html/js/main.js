
jQuery(function($){
	/* Mode strict */
	
	"use strict";
	var first = true;
	$(window).on("popstate",function(event){
		
		if(!first)		update(location.href);
		else 			first = false;
		
		
	});
	
	
	
	// lors d'un clique sur un liin
	$('#menu').on('click','a', function(event){
		event.preventDefault();
		console.log('click')
		var $this = $(this);
		console.log($this.attr("href"));
		history.pushState(null,null,$this.attr("href"));
		update($this.attr("href"));
	});
	
	
	//charge la page demandé dans l'url
	function update(url){
		console.log('url ', url);
		console.log('charge par AJAX : ' , url);
		
		$.when(
			$.ajax({url:url,datatype:'html'}),
			$('.container').fadeOut()
		).done(function(argsAJAX,elem){
			var data = argsAJAX[0];
			console.log('param' ,data,elem);
			
			var contenu = $(data).find('#page');
			$('.container').html(contenu);
			$('.container').fadeIn();
			
		});
		
	};
	
	
});
