$('a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	let id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 30
	}, 600);
});