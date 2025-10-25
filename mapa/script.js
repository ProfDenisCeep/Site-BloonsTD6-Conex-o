$(document).ready(function(){
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: false,
        pager: false,
        adaptiveHeight: true,
        item: 1,
        onSliderLoad: function(){
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});
