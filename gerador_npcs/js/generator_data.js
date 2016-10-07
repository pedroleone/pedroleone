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
    "meio-elfo criado por ":"meio-elfa criado por ",
    "idoso":"idosa",
    "adulto":"adulta",
    "velho":"velha",
    "é excepcionalmente bonito":"é excepcionalmente bonita",
    "é excepcionalmente feio":"é excepcionalmente feia",
    "ele":"ela",
    "é um excelente malabarista":"é uma excelente malabarista",
    "é um ator excelente":"é uma atriz excelente",
    "é um dançarino excepcional":"é uma dançarina excepcional",
    "é um excelente carpinteiro":"é uma excelente carpinteira",
    "é um cozinheiro excelente":"é uma cozinheira excelente",
    "ótimo em resolver quebra-cabeças":"é ótima em resolver quebra-cabeças",
    "ótimo em um jogo específico":"ótima em um jogo específico",
    "ótimo em imitar outras pessoas":"ótima em imitar outras pessoas",
    "inacreditavelmente sortudo":"inacreditavelmente sortuda",
    "gagueja quando está nervoso":"gagueja quando está nervosa",
    "é estrábico":"é estrábica",
    "não consegue ficar parado":"não consegue ficar parada",
    
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

var Subracas = {
    "anão": ["da montanha", "da colina"],
    "elfo": ["alto", "da floresta"],
    "halfling": ["pés leves","robusto"],
    "gnomo": ["das rochas", "da floresta"]
}

var Caracteristicas = {
    "idade": ["muito jovem","jovem", "adulto", "de meia-idade", "velho", "idoso"],
    "interacao": [],
    "aparencia": [
        "usa jóias que chamam atenção",
        "tem vários piercings",
        "usa roupas espalhafatosas",
        "usa roupas formais impecáveis",
        "usa roupas rasgadas e sujas",
        "tem uma cicatriz pronunciada",
        "tem vários dentes faltando",
        "tem vários dedos faltando",
        "tem olhos de uma cor incomum",
        "tem tatuagens pelo corpo",
        "tem uma marca de nascença",
        "tem uma cor de pele incomum",
        "é careca",
        "tem seu cabelo trançado",
        "tem um tique nervoso nos olhos",
        "tem um nariz pronunciado",
        "tem uma postura pronunciada",
        "é excepcionalmente bonito",
        "é excepcionalmente feio"
    ],
    "talento": [
        "toca um instrumento musical",
        "fala várias línguas fluentemente",
        "inacreditavelmente sortudo",
        "tem uma memória fotográfica",
        "adora crianças",
        "adora animais",
        "é ótimo em resolver quebra-cabeças",
        "ótimo em um jogo específico",
        "ótimo em imitar outras pessoas",
        "desenha muito bem",
        "pinta muito bem",
        "canta muito bem",
        "bebe mais que qualquer um",
        "é um excelente carpinteiro",
        "é um cozinheiro excelente",
        "é ótimo em atirar dardos",
        "é um excelente malabarista",
        "é um ator excelente",
        "é um dançarino excepcional",
        "conhece a língua dos ladrões"
    ],
    "maneirismo": [
        "fica cantarolando ou assobiando o tempo inteiro",
        "fala em rimas",
        "tem uma voz particularmente grave",
        "tem uma voz particularmente aguda",
        "gagueja quando está nervoso",
        "fala muito alto",
        "fala sussurrando",
        "fala usando palavras difíceis e fazendo discursos floridos",
        "frequentemente usa palavras erradas",
        "faz piadas e trocadilhos o tempo inteiro",
        "é pessimista e sempre prevê o pior",
        "é estrábico",
        "fica olhando para o horizonte",
        "está sempre mastigando alguma coisa",
        "não consegue ficar parado",
        "estrala os dedos",
        "morde as unhas",
        "enrola os cabelos ou barba"
    ],
    "vinculo": [],
    "defeitos": [],

}

var Tendencias = {
    common: ["leal e bom","neutro e bom","caótico bom","neutro","neutro e mau"],
    uncommon: ["leal e neutro","leal e mau","caótico e mau","caótico neutro"],
  
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
    "anão": {"M": ["Adrik","Alberich","Baern","Barendd","Brottor","Bruenor","Oain","Oarrak","Oelg","Eberk","Einkil","Fargrim","Flint","Gardain","Harbek","Kildrak","Morgran","Orsik","Oskar","Rangrim","Rurik","Taklinn","Thoradin","Thorin","Tordek","Traubon","Travok","Ulfgar","Veit","Vondal"],
               "F": ["Amber","Artin","Audhild","Bardryn","Oagnal","Oiesa","Eldeth","Falkrunn","Finellen","Gunnloda","Gurdis","Helja","Hlin","Kathra","Kristryd","lide","Liftrasa","Mardred","Riswynn","Sannl","Torbera","Torgga","Vistra"],
               "sobrenome": ["Balderk","Battlehammer","Brawnanvil","Oankil","Fireforge","Frostbeard","Gorunn","Holderhek","Ironfist","Loderr","Lutgehr","Rumnaheim","Strakeln","Torunn","Ungart"]},               
    "draconato": {"M": ["Arjhan","Balasar","Bharash","Donaar","Ghesh","Heskan","Kriv","Medrash","Mehen","Nadarr","Pandjed","Patrin","Rhogar","Shamash","Shedinn","Tarhun","Torinn"],
               "F": ["Akra","Biri","Daar","Farideh","Harann","HaviJar","Jheri","Kava","Korinn","Mishann","Nala","Perra","Raiann","Sora","Surina","Thava","Uadjit"],
               "sobrenome": ["Clethtinthiallor","Daardendrian","Delmirev","Drachedandion","Fenkenkabradon","Kepeshkmolik","Kerrhylon","Kimbatuul","Linxakasendalor","Myastan","Nemmonis","Norixius","Ophinshtalajiir","Prexijandilin","Shestendeliath","Turnuroth","Verthisathurgiesh","Yarjerit"]},
    "aarakocra": {"M": ["Aera","Aial","Aur","Deekek","Errk","Heehk","Ikki","Kleeck","Oorr","Ouss","Quaf","Quierk","Salleek","Urreek","Zeed"],
                  "F": ["Aera","Aial","Aur","Deekek","Errk","Heehk","Ikki","Kleeck","Oorr","Ouss","Quaf","Quierk","Salleek","Urreek","Zeed"]},
    "gnomo": {"M": ["Alston","Alvyn","Boddynock","Brocc","Burgell","Dimble","Eldon","Erky","Fonkin","Frug","Gerbo","Gimble","Glim,Jebeddo","Kellen","Namfoodle","Orryn","Roondar","Seebo","Sindri","Warryn","Wrenn","Zook"],
               "F": ["Bimpnollin","Breena","Caramip","Carlin","Donella","Duvamil","ElIa","ElIyjobell","ElIywick","Lilli","Loopmottin","Lorilla","Mardnab","Nissa","Nyx","Oda","Orla","Roywyn","Shamil","Tana","Waywocket","Zanna"],
               "sobrenome": ["Beren","Daergel","Folkor","Garrick","Nackle","Murnig","Ningel","Raulnor","Scheppen","Timbers","Turen"]},
    "meio-orc": {"M": ["Dench","Feng","Gell","Henk","Holg","Imsh","Kelh","Krusk","Mhurren","Ront","Shump","Thokk"],
               "F": ["Baggi","Emen","Engong","Kansif","Myev","Neega","Ovak","Ownka","Shaulha","Sulha","Vola","Volen","Yevelda"]},
    "tiefling": {"M": ["Akmenos","Amnon","Barakas","Damakos","Ekemon","lados","Kairon","Leucis","Melech","Mordai","Morthos","Pelaios","Skamos","Therai"],
               "F": ["Akta","Anakis","Bryseis","Criella","Damaia","Ea","Kallista","Lerissa","Makaria","Nemeia","Orianna","Phelaia","Rieta"]},                                             
    "gnomo das profundezas": {"M": ["Belwar","Brickers","Durthmeck","Firble","Krieger","Kronthud","Schneltheck","Schnicktick","Thulwar","Walschud"],
               "F": ["Beliss","Durthee","Fricknarti","Ivridda","Krivi","Lulthiss","Nalvarti","Schnella","Thulmarra","Wirsidda"],
               "sobrenome": ["Crystalfist","Gemcutter","Ironfoot","Rockhewer","Seamfinder","Stonecutter"]},         
/*  
    "_": {"M": [""],
               "F": [""],
               "sobrenome": [""]},
*/
}

