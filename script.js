const card = document.getElementById("card")
const displaymagem = document.getElementById("card-imagem")
const descricao = document.getElementById("card-descricao")

let cardImageIndex = 0
let componenteSelecionado = "Processador"

let computadores = {
    computador0: {
        Componentes: {
            Processador: {
                Descricao: "aaaaaa",
                Fotos: [
                    "Assets/Computador0/Processador/0.webp"
                ]
            },
            HDD: {
                Descricao: "aaaaaa",
                Fotos: []
            },
            RAM: {
                Descricao: "aaaaaa",
                Fotos: []
            },
            Fonte: {
                Descricao: "aaaaaa",
                Fotos: []
            },
            Drive: {
                Descricao: "aaaaaa",
                Fotos: []
            },
            PlacaDeVideo: {
                Descricao: "aaaaaa",
                Fotos: []
            },    
            SO: {
                Descricao: "aaaaaa",
                Fotos: []
            },            
            
        }
    },
}

function computadorEscaneado(idComputador) {

}


function bindarImagens() {
    for (indexImagem = 0; indexImagem < computadores.length; indexImagem++) {
        let idImagem = "computador" + indexImagem
        document.getElementById(idImagem).addEventListener("targetFound", event => {
            computadorEscaneado(idImagem)
        })
    }
}

descricao.style.display = "block"
descricao.textContent = computadores.computador0.Componentes.Processador.Descricao
displaymagem.src = computadores.computador0.Componentes.Processador.Fotos[0]

bindarImagens()


let ladoTexto = true
function flipCard() {
    cardImageIndex = 0
    if (ladoTexto) {
        ladoTexto = false
        descricao.style.display = "none"
        displaymagem.style.display = "block"
    }else {
        ladoTexto = true
        descricao.style.display = "block"
        displaymagem.style.display = "none"
    }
}

card.addEventListener("click", function(){
    flipCard()
}) 

