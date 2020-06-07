$(document).ready(function(){
    'use strict';
    
    $('.content-bar .head-bar').click(function(){
        $(this).next('.bar-content').slideToggle(250);
    });

    $('.popup-address').on('click', function(){
        $('#address').modal('show')
    });

    $('.finished').children('.step-logo').children('.fa-check-circle').css('display','inline-block');
    
});