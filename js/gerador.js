
var local = ['Uma aldeia', 'Uma vila', 'Uma cidade', 'Uma metrópole','Uma fortaleza','Um castelo'];

var local_m = ['Um castelo'];

var background_images = [
    ['Uma aldeia','./img/hamtlet.jpg'], 
    ['Uma vila','./img/village.jpg'], 
    ['Uma cidade','./img/city.jpg'], 
    ['Uma metrópole','./img/metropolis.jpg'],
    ['Uma fortaleza','./img/keep.jpg'],
    ['Um castelo','./img/castle.jpg']];

var adjetivo = ['rica','entediante','encantadora','movimentada','bela','cara','compacta','espalhafatosa',
'mística','pitoresca','poluída','antiga','acidentada','fontanhosa','fértil','estéril','turística','jovem',
'silenciosa','cosmopolita','suja','tranquila','inquietante','fedorenta','coberta','costeira','amadeirada',
'arrepiante','feia','misteriosa','quase-incinerada','perigosa','isolada','selvagem','imaculada','sombria'];

var adjetivo_m = [
    ['rica','rico'],
    ['encantadora','encantador'],
    ['movimentada','movimentado'],
    ['bela','belo'],
    ['cara','caro'],
    ['compacta','compacto'],
    ['espalhafatosa','espalhafatoso'],
    ['mística','místico'],
    ['pitoresca','pitoresco'],
    ['poluída','poluído'],
    ['antiga','antigo'],
    ['acidentada','acidentado'],
    ['fontanhosa','fontanhoso'],
    ['turística','turístico'],
    ['silenciosa','silencioso'],
    ['suja','sujo'],
    ['tranquila','tranquilo'],
    ['fedorenta','fedorento'],
    ['coberta','coberto'],
    ['costeira','costeiro'],
    ['amadeirada','amadeirado'],
    ['feia','feio'],
    ['misteriosa','misterioso'],
    ['quase-incinerada','quase-incinerado'],
    ['perigosa','perigoso'],
    ['isolada','isolado'],
    ['imaculada','imaculado'],
    ['sombria','sombrio']    
];

var caracterisica1 = ['dá uma primeira impressão de abandonada',
'dá uma primeira impressão de pacífica',
'dá uma primeira impressão de violenta',
'dá uma primeira impressão de próspera',
'dá uma primeira impressão de devota',
'dá uma primeira impressão de hospitaleira',
'é especializada em mineração',
'é especializada em pesca',
'é especializada em metalurgia',
'é especializada em agricultura',
'é especializada em tecelagem',
'tem um mercado público',
'tem uma catedral',
'tem um teatro',
'tem um colégio',
'tem um porto',
'tem uma torre',
'tem de bizarro sua arquitetura',
'tem de bizarro seus habitantes',
'tem de bizarro seus costumes',
'tem de bizarro suas mercadorias',
'tem de bizarro sua história',
'tem de bizarro suas crenças religiosas',
'é próximo de um rio',
'é próximo do mar',
'é próximo de um vulcão',
'é próximo da fronteira',
'é próximo de uma caverna gigante',
'é próximo de uma árvore antiga',
'é ameaçada por bestas vorazes',
'é ameaçada por terremotos',
'é ameaçada por praga animal',
'é ameaçada por bandidos',
'é ameaçada por seca',
'é ameaçada por alagamento'];

var caracterisica2 = ['tem um culto que promete a vida eterna',
'tem um culto que sequestra viajantes',
'tem um culto que sacrifica virgens',
'tem um culto que invoca um Lorde das Trevas',
'tem um culto que pratica bruxaria',
'tem um culto que venera a natureza',
'tem um monstro oculto que todos protegem',
'tem um monstro oculto que ninguém ouviu falar',
'tem um monstro oculto que está disfarçado de alguém',
'tem um monstro oculto que exige vingança',
'tem um monstro oculto que deseja nenhum mal',
'tem um monstro oculto que só mata pessoas ruins',
'tem uma maldição que os mortos caminham a noite',
'tem uma maldição que ninguém pode sair',
'tem uma maldição que dá pesadelos vívidos',
'tem uma maldição em que o amanhecer nunca chega',
'tem uma maldição que dá extrema má sorte',
'tem uma maldição de tempestade eterna',
'fez um pacto diabólico por colheita abundante',
'fez um pacto diabólico por clima favorável',
'fez um pacto diabólico por riqueza',
'fez um pacto diabólico por proteção',
'fez um pacto diabólico por prosperidade',
'fez um pacto diabólico por fertilidade',
'tem uma feitiçaria estranha em que ninguém envelhece',
'tem uma feitiçaria estranha em que mentira não pode ser falada aqui',
'tem uma feitiçaria estranha em que plantas crescem 10x mais rápido',
'tem uma feitiçaria estranha em que chove ouro',
'tem uma feitiçaria estranha em que agir com violência é impossível',
'tem uma feitiçaria estranha em que ferimentos curam-se durante a noite',
'tem alguém especial que é um profeta',
'tem alguém especial que é um anjo caído',
'tem alguém especial que é imortal',
'tem alguém especial que é um general infame',
'tem alguém especial que é um parente do PJ desaparecido há muito tempo',
'tem alguém especial que é o inimigo jurado de um PJ']

function random_element(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function set_background(local_gerado) {
    var background_image = "./img/gerador_background.jpg"
    for (var i = 0; i < background_images.length; i++) {
        if (local_gerado ===  background_images[i][0]) {
            background_image = background_images[i][1];
        }
    }
    $('body').css('background-image','url('+background_image+')');
/*
    $('body').css('background-image', function () {
        $('#fullpage').animate({
            backgroundColor: 'transparent'
        }, 1000, function () {
            setTimeout(function () {
                $('#fullpage').animate({
                    backgroundColor: 'rgb(255,255,255)'
                }, 1000);
            }, 3000);
        });
        return 'url('+background_image+')';
    });
*/

}

function get_local_adjetivo(){
    var local_gerado = random_element(local);
    var adjetivo_gerado = random_element(adjetivo);
    var local_masc = false;
    for (var i = 0; i < local_m.length; i++) {
        if (local_gerado ===  local_m[i]) {
            local_masc = true;
        }
    }
    if (local_masc == true) {
    for (var i = 0; i < adjetivo_m.length; i++) {
        if (adjetivo_gerado === adjetivo_m[i][0]) {
            adjetivo_gerado = adjetivo_m[i][1];
        }
    }        
    } 
    set_background(local_gerado);
    return local_gerado + " " + adjetivo_gerado;
    
}

function gera_local() {
    return get_local_adjetivo() + " que " + random_element(caracterisica1) + " e também " + random_element(caracterisica2) + ".";

}


$(document).ready(function(){
    $('#local').text(gera_local());
    $('#gerar').click(function(){
      $('#local').text(gera_local());
    });
});