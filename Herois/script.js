$(document).ready(function(){
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: false,
        pager: false,
        adaptiveHeight: true,
        onSliderLoad: function(){
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});