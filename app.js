(function($) {
	$(document).ready(function() {
		$('.site-menu-btn').on('click', function(e) {
			e.preventDefault();
			$(this).parent().find('.site-menu').toggleClass('show');
		});
	});
})(jQuery);