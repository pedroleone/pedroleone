'use strict';
$(function () {
    var display = [];
    $(".calc").click(function () {
        var id = "";
        switch ($(this).attr("id")) {
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
        pushButton(id);
    });
/*
    function displayNumbers() {
        $(".calc-result").text(displayArray.join(""));
    }
*/
    function displayNumbers(val) {
        $(".calc-result").text(val);
    }

    var displayArray = [];
    var numberArray = [];
    var operator, firstNumber,secondNumber;


    function pushButton(id) {
        if (id === 'ce') {
            numberArray = [];
            displayNumbers('0');
            return;
        }

        if (id === 'ac') {
            firstNumber = null;
            secondNumber = null;
            operator = null;
            displayNumbers('0');
            return;            
        }

        if (operator === "" && isNaN(id) && id !== ".") {
            return;
        }

        if (id === "." && numberArray.indexOf(id) > -1) {
            return; // don't add new "."
        }

        if (!isNaN(id) || id === ".") {
            numberArray.push(id);
        }

        
        
        if (secondNumber && id === "=") {
            var result = calculate(firstNumber, secondNumber, operator);
            numberArray = [];
            firstNumber = null;
            secondNumber = null;
            operator = null;
            displayNumbers(result);
            return;
        }
        
        if (firstNumber && isNaN(id) && id !== "=" && !operator) {
            numberArray = [];
            operator = id;
            console.log(operator);
        }

        if (operator === "" || !operator) { 
            firstNumber = parseFloat(numberArray.join(""));
        } else {
            secondNumber = parseFloat(numberArray.join(""));
        }
        
        displayNumbers(numberArray.join(""));
    }

    function calculate(fst, snd, op) {
        switch(op) {
            case "+":
                return fst + snd;
            case "-":
                return fst - snd;
            case "*":
                return fst * snd;
            case "/":
                return fst/snd;

        }
    }

});