let perguntas = document.getElementById("perguntas");
let resposta = document.getElementById("resposta");

resposta.className = "respostaHidden";
resposta.style.transition = ".5s ease"
perguntas.addEventListener('click', function(){
    resposta.classList.toggle("respostaAparece")

})