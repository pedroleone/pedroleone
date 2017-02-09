'use strict';
$(function() {
    var display = [];
    $(".calc").click(function (){
        var id = "";
        //var id = $(this).attr("id");
        //console.log(id);
        switch($(this).attr("id")) {
            case 'plus':
                id = "+";
                break;
            case 'point':
                id = ".";
                break;
            case 'minus':
                id = "-";
                break;
            case 'division':
                id = '/';
                break;
            case 'mult':
                id = '*';
                break;
            case 'eq':
                id = '=';
                break;
            default:
                id = $(this).attr("id");


        }
        display.push(id);
        displayNumbers();
    }); 

    function displayNumbers(){
        $(".calc-result").text(display.join(""));
    }


});