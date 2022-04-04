$('document').ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}
	ibg();

	var br = $('.text-block__desc-br');
	$(window).resize(function(event){
		if($(window).width() >= 479.98){
			br.css('display','block');
		} else {
			br.css('display','none');
		}
	});

	$('.footer__label').click(function(event){
		if($('.footer__row').hasClass('one')){
			$('.footer__label').not($(this)).removeClass('dynamic');
			$('.footer__holder').not($(this).next()).slideUp(400);
		}
		$(this).toggleClass('dynamic').next().slideToggle(400);
	});

	var btn = $('.button-up');
	$(window).scroll(function(){
		if ($(window).scrollTop() > 600) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});
	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});

});