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
    common: ["humano", "humano", "humano", "humano", "humano","elfo","anão","halfling"],
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
    "halfling": {"M": ["Alton","Ander","Cade","Corrin","Eldon","Errich","Finnan","Garret","Lindal","Lyle","Merric","Milo","Osborn","Perrin","Reed","Roscoe","Wellby"],
               "F": ["Andry","Bree","Callie","Cora","Euphemia","Jillian","Kithri","Lavinia","Lidda","Merla","Nedda","Paela","Portia","Seraphina","Shaena","Trym","Vani","Verna"],
               "sobrenome": ["Brushgather","Goodbarrel","Greenbottle","High-hill","Hilltopple","Leagalow","Tealeaf","Thorngage","Tosscobble","Underbough"]},
    "elfo": {"M": ["Adran","Aelar","Aramil","Arannis","Aust","Beiro","Berrian","Carric","Enialis","Erdan","Erevan","Galinndan","Hadarai","Heian","Himo","Immeral","Ivellios","Laucian","Mindartis","Paelias","Peren","Quarion","Riardon","Rolen","Soveliss","Thamior","Theren","Varis"],
               "F": ["Adrie","Althaea","Anastrianna","Andraste","Antinua","Bethrynna","Birel","Caelynn","Drusilia","Enna","Felosial","Ielenia","Jelenneth","Keyleth","Leshanna","Lia","Meriele","Mialee","Naivara","Quelenna","Quillathe","Sariel","Shanairra","Shava","Silaqui","Theirastra","Thia","Vadania","Valanthe","Xanaphia"],
               "sobrenome": ["Amakiir (Gemflower)", "Amastacia (Starflower)", "Galanodel (Moonwhisper)", "Holimion (Oiamonddew)", "IIphelkiir (Gemblossom)", "Liadon (Silverfrond)", "Meliamne (Oakenheel)", "Nailo (Nightbreeze)", "Siannodel (Moonbrook)", "Xiloscient (Goldpetal)"]},
/*
    "_": {"M": [""],
               "F": [""],
               "sobrenome": [""]},
*/
}

