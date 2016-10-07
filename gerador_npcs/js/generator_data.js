var GenderedWord = {
    getWord: function(gender, word) {
        if (gender !== "F" || gender !== "M") {
            return "ERRO / Genero deve ser M ou F";
        }
    },
    /* 
      Armazenar palavras na seguinte forma: 
      "palavra em masculino": "palavra em feminino",
    */
    "anão":"anã",
    "humano":"humana",
    "elfo":"elfa",
    "um":"uma",
    "meio-elfo":"meio-elfa",
/*
    "":"",
    "":"",
    "":"",
    "":"",
    */            
}

/*
    Formato dos JSON de dados
    common: 70% chance
    uncommon: 25% chance
    rare: 5% chance

    se não houver alguma categoria, a porcentagem da categoria é adicionada a common 

*/


var Racas = {
    common: ["humano","elfo","anão","halfling"],
    uncommon: ["draconato","gnomo","meio-elfo","meio-orc","tiefling"],
    rare: ["goliath","gnomo das profundezas","aarakocra","genasi","drow"]
}

var Test = {
    common: ["common1","common2","common3"],
    uncommon: ["uncommon1","uncommon2","uncommon3"],
    rare: ["rare1","rare2","rare3"]
}