function getRandomElementFromArray(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function getRandomD100() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}

function generateElementFromJSON(item) {
    var commonValue = 70;
    var uncommonValue = 25;
    var rareValue = 5;
    var generatedValue = getRandomD100();

    if (!item.hasOwnProperty("common")) {
        return "ERROR / JSON INVALIDO - deve possuir pelo menos atributo common";
    } 
    if (!item.hasOwnProperty("uncommon")) {
        commonValue += uncommonValue;
        uncommonValue = 0;
    }
    if (!item.hasOwnProperty("rare")) {
        commonValue += rareValue;
        rareValue = 0;
    }

    if (generatedValue <= commonValue) {
        return getRandomElementFromArray(item.common);
    } else if (generatedValue <= commonValue + uncommonValue) {
        return getRandomElementFromArray(item.uncommon);
    } else if (generatedValue <= commonValue + uncommonValue + rareValue) {
        return getRandomElementFromArray(item.rare);
    }
}


function generateNPC() {
    return generateElementFromJSON(Test);
}

$(document).ready(function(){
    $('#npc').text(generateNPC());

    $('#gerar').click(function(){
        $('#npc').text("");
        for (var i = 0; i < 20; i++){
            $('#npc').append(generateNPC() + " - ");
        }
    });


});