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
        $(".calc-result").html(val);

        $("#fst").text(firstNumber);
        $("#snd").text(secondNumber);
        $("#op").text(operator);
        $("#arr").text(numberArray);
    }

    var displayArray = [];
    var numberArray = [];
    var operator, firstNumber,secondNumber;
    var valueForChain;
    

    function pushButton(id) {
        

        if (id === 'ce') {
            numberArray = [];
            if (firstNumber && operator & !secondNumber) {
                return;
            }

            if (secondNumber) {
                secondNumber = null;
            } else {
                firstNumber = null;
            }
            displayNumbers('0');
            return;
        }
        /*
        if(id === '0' && numberArray.length === 0) {
            numberArray.push(id);
        }*/

        if (id === 'ac') {
            firstNumber = null;
            secondNumber = null;
            operator = null;
            displayNumbers('0');
            return;            
        }

        if (valueForChain && !firstNumber && !secondNumber && numberArray.length === 0 && isNaN(id) && id !== ".") {
            firstNumber = valueForChain;
            valueForChain = null;
            operator = id;
        }

        if (operator === "" && isNaN(id) && id !== ".") {
            return;
        }

        if (id === ".") {
            if (numberArray.indexOf(id) === -1) {
                if (numberArray.length === 0) {
                    numberArray.push('0');
                }
                
                numberArray.push(id);
            }
            
            //return;
        }

        if (!isNaN(id)) {
            numberArray.push(id);
        }

        
        
        if (secondNumber !== null && id === "=") {
            if (secondNumber === 0 && operator === "/") {
                // division by zero
                displayNumbers("Error!");
                numberArray = [];
                firstNumber = null;
                secondNumber = null;
                operator = null;

                return;
            }
            
            var result = calculate(firstNumber, secondNumber, operator);
            valueForChain = result;
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
            if (operator === "*") {
                displayNumbers('X');
            } else if (operator === "/") {
                displayNumbers('&#247;'); 
            } else {
                displayNumbers(operator);
            }
            
            return;
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