
var local = ['Uma aldeia', 'Uma vila', 'Uma cidade', 'Uma metrópole','Uma fortaleza','Um castelo'];

var adjetivo = ['rica','entediante','encantadora','movimentada','bela','cara','compacta','espalhafatosa',
'mística','pitoresca','poluída','antiga','acidentada','fontanhosa','fértil','estéril','turística','jovem',
'silenciosa','cosmopolita','suja','tranquila','inquietante','fedorenta','coberta','costeira','amadeirada',
'arrepiante','feia','misteriosa','quase-incinerada','perigosa','isolada','selvagem','imaculada','sombria'];

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
'tem uma feitiçaria estranha em que ferimentos curam-se durante a noite.',
'tem alguém especial que é um profeta',
'tem alguém especial que é um anjo caído',
'tem alguém especial que é imortal',
'tem alguém especial que é um general infame',
'tem alguém especial que é um parente do PJ desaparecido há muito tempo',
'tem alguém especial que é o inimigo jurado de um PJ']

function random_element(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function gera_local() {
    return random_element(local) + " " + random_element(adjetivo) + " que " + random_element(caracterisica1) + " e também " + random_element(caracterisica2) + ".";

}


$(document).ready(function(){
    $('#local').text(gera_local());
    $('#gerar').click(function(){
      $('#local').text(gera_local());
    });
});