$(window).scroll(function() {
var theta = $(window).scrollTop() / 10 % Math.PI;
$('#rightgear').css({ transform: 'rotate(-' + theta + 'rad)' });
});
