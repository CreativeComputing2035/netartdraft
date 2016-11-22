$(document).ready(function(){
    var factor = 4;

$('#idkwhat').click(function() {
    $(this).animate({
        top: +=150px + $(this).height() / factor,
        left: +=150px+ $(this).width() / factor,
        width: $(this).width() * factor
    });
});

