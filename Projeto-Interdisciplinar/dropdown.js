$(document).ready(function(){
    var botao = $('.consoles');
    var dropdown = $('.submenu');

    botao.on('click',function(event){
    dropdown.stop(true,true).slideToggle();
    event.stopPropagation();
    });
});

$(document).ready(function(){
    var botao = $('.login');
    var dropdown = $('.inputLog');

    botao.on('click',function(event){
    dropdown.stop(true,true).slideToggle();
    event.stopPropagation();
    });
});

const carrinho = document.querySelector('.carrinho')
var contador = 1

newFunction();

function newFunction() {
    const compras = document.querySelector('.btnCarrinho');
    compras.addEventListener('click', () => {
        carrinho.innerHTML = contador++;
    });

    const compras2 = document.querySelector('.btnCarrinho2');
    compras2.addEventListener('click', () => {
        carrinho.innerHTML = contador++;
    });

    const compras3 = document.querySelector('.btnCarrinho3');
    compras3.addEventListener('click', () => {
        carrinho.innerHTML = contador++;
    });
}

