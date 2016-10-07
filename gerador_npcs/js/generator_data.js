function getRandomElementFromArray(items) {
    return items[Math.floor(Math.random()*items.length)];
}

var GenderedWord = {
    getWord: function(word,gender) {

        if (gender == "F") {
            if (!this.hasOwnProperty(word)) {
                return word;
            } else {
                return this[word];
            }
        } 
        return word;

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

var Nomes = {
    getArrayNomes: function (race, sexo) {
        if (!this.hasOwnProperty(race)) {
            return this.generico[sexo];
        } else {
            if (this[race].hasOwnProperty("sobrenome")) {
                var array_nomes = this[race][sexo].slice(0);
                var sobrenome = getRandomElementFromArray(this[race]["sobrenome"]);

                for(var i=0;i<array_nomes.length;i++){
                    array_nomes[i]=array_nomes[i] + " " + sobrenome;
                }
                return array_nomes;
            }
            return this[race][sexo];
        }

    },

    generico: {"F": ["Mary"],
               "M": ["John"]
            },
    "humano": {"M": ["Darvin","Dorn","Evendur","Gorstag","Grim","Helm","Malark","Morn","Randal","Stedd"],
               "F": ["Arveene","Esvele","Jhessail","Kerri","Lureene","Miri","Rowan","Shandri","Tessele"],
               "sobrenome": ["Amblecrown","Buckman","Dundragon","Evenwood","Greycastle","Tallstag"]},
}

