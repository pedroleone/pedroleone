function getRandomElementFromArray(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomD100() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}

function generateElementFromJSON(item) {
    var commonValue = 70;
    var uncommonValue = 25;
    var rareValue = 5;
    var generatedValue = getRandomD100();
    
    if(Array.isArray(item)) {
        return getRandomElementFromArray(item);
    } else if (!item.hasOwnProperty("common")) {
        return "ERROR / JSON INVALIDO - deve ser um Array ou possuir pelo menos propriedade  common";
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
    var sexo_gerado = "M";
    if (getRandomD100() > 50) {
        sexo_gerado = "F"
    }
    raca_gerada = generateElementFromJSON(Racas);
    nome_gerado =  generateElementFromJSON(Nomes.getArrayNomes(raca_gerada,sexo_gerado));
    return nome_gerado + " é " + GenderedWord.getWord("um",sexo_gerado) + " " + GenderedWord.getWord(raca_gerada,sexo_gerado) + ".";
}

$(document).ready(function(){
    $('#npc').text(generateNPC());

    $('#gerar').click(function(){
        $('#npc').text(generateNPC());
    });


});