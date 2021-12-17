var jogador = null
var jogadorSelecionado = document.getElementById("jogadorSelecionado")
var vencedorSelecionado = document.getElementById("vencedor")

mudarJogador('X')

function buttonClicked(id){
   if(vencedor == 'X'){
       return
   }
   if(vencedor == 'O'){
    return
}
    var quadrado = document.getElementById(id)
    if(quadrado.innerHTML !== '-'){
        return
    }

    quadrado.innerHTML = jogador
    quadrado.style.color= '#000'

    if(jogador === 'X'){
        jogador = "O"
    }else {
        jogador = "X"
    }
    mudarJogador(jogador)
    checkVencedor()

}
function mudarJogador(valor){
    jogador = valor; 
    jogadorSelecionado.innerHTML = jogador
}
function checkVencedor(){
    var quadrados1 = document.getElementById('1')
    var quadrados2 = document.getElementById('2')
    var quadrados3 = document.getElementById('3')
    var quadrados4 = document.getElementById('4')
    var quadrados5 = document.getElementById('5')
    var quadrados6 = document.getElementById('6')
    var quadrados7 = document.getElementById('7')
    var quadrados8 = document.getElementById('8')
    var quadrados9 = document.getElementById('9')
    
    if(checkSequencia(quadrados1,quadrados2,quadrados3)){
        mudaCorQuadrado(quadrados1,quadrados2,quadrados3)
        mudarVencedor(quadrados1)
        return
    }
    if(checkSequencia(quadrados4,quadrados5,quadrados6)){
        mudaCorQuadrado(quadrados4,quadrados5,quadrados6)
        mudarVencedor(quadrados4)
        return
    }
    if(checkSequencia(quadrados7,quadrados8,quadrados9)){
        mudaCorQuadrado(quadrados7,quadrados8,quadrados9)
        mudarVencedor(quadrados7)
        return
    }
    if(checkSequencia(quadrados1,quadrados4,quadrados7)){
        mudaCorQuadrado(quadrados1,quadrados4,quadrados7)
        mudarVencedor(quadrados1)
        return
    }
    if(checkSequencia(quadrados2,quadrados5,quadrados8)){
        mudaCorQuadrado(quadrados2,quadrados5,quadrados8)
        mudarVencedor(quadrados2)
        return
    }
    if(checkSequencia(quadrados3,quadrados6,quadrados9)){
        mudaCorQuadrado(quadrados3,quadrados6,quadrados9)
        mudarVencedor(quadrados3)
        return
    }
    if(checkSequencia(quadrados1,quadrados5,quadrados9)){
        mudaCorQuadrado(quadrados1,quadrados5,quadrados9)
        mudarVencedor(quadrados1)
        return
    }
    if(checkSequencia(quadrados3,quadrados5,quadrados7)){
        mudaCorQuadrado(quadrados3,quadrados5,quadrados7)
        mudarVencedor(quadrados3)
        return
    }
}
function mudaCorQuadrado(quadrados1,quadrados2,quadrados3){
    quadrados1.style.background= '#0f0'
    quadrados2.style.background= '#0f0'
    quadrados3.style.background= '#0f0'
}
function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML
    vencedorSelecionado.innerHTML = vencedor 
}
function checkSequencia(quadrado1,quadrado2,quadrado3){
    var eigual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML == quadrado2.innerHTML &&  quadrado2.innerHTML ===  quadrado3.innerHTML){
        return eigual = true; 
    }
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML='';

    for(var i = 1; i<= 9; i++){
        var quadrado = document.getElementById(i);

        quadrado.style.background = '#eee'
        quadrado.style.color = '#eee'
        quadrado.innerHTML = '-'

    }
}