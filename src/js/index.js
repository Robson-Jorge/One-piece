const personagens = document.querySelectorAll(".personagem")
const botoes = document.querySelectorAll(".botao")

for (let i = 0; i < botoes.length; i++) {
    
    botoes[i].addEventListener("click", () =>{
        const contain = botoes[i].classList.contains("selecionado")
        
        if(contain){
            return
        } else{
            remove()
            removeImage()
        }
        botoes[i].classList.add('selecionado')
        personagens[i].classList.add('selecionado')
    })
    
}

function removeImage() {
    personagens.forEach(personagem =>{
        personagem.classList.remove("selecionado") 
    })
}

function remove() {
    botoes.forEach(botao =>{
        botao.classList.remove("selecionado")
    })
}