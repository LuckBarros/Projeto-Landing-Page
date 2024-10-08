var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita(){
    leonardo.style= "display:none"
    samantha.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top: 50%"
}

function RolarParaEsquerda(){
    leonardo.style = "display:flex"
    samantha.style = "display:none"
    setaDireita.style = "display:flex;"
    setaEsquerda.style = "display:none"
}