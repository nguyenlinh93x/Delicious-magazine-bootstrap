$(document).ready(function(){
	$('a.thumbnail').on('click', function() {
		$('#chineseFood').modal();
	})

	$('.dynamic-pill #popular > ul > li:last-of-type').find('hr').remove();

	$('#horizon-menu li').on('mouseenter',  function(event) {
		$(this).find('div.carousel-caption').hide();
		$(this).find('a').css({
			opacity: '1',
			filter: 'Alpha(opacity=100)'
		});
	});

	$('#horizon-menu li').on('mouseleave',  function(event) {
		$(this).find('div.carousel-caption').show();
		$(this).find('a').css({
			opacity: '0.5',
			filter: 'Alpha(opacity=0.5)'
		});

	});

	$("#carousel-main").carousel({interval: 4000});

	$('#carousel-main').on('slide.bs.carousel', function(event) {
		$(this).find('.carousel-caption').effect('drop', 500).slideDown(1000);
	});
});