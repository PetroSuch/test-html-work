

	$(".btn-group, .dropdown").hover(
	function () {
		console.log($('>.dropdown-menu', this))
	    $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
	    $(this).addClass('open');
	},
	function () {
	    $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
	    $(this).removeClass('open');
	});
if($(window).width() > 1024){
	$(".dropdown-item").hover(
	function(){
		$(this).find('i').addClass('fa-angle-double-right').removeClass('fa-angle-right');
	},
	function(){
		$(this).find('i').addClass('fa-angle-right').removeClass('fa-angle-double-right');
	})
}
