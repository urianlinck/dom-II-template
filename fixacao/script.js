function insereItem(event){

    event.insertAdjacentElement

    const input = document.getElementById("meu-input")
    const conteudoInput = input.value 
    const lista = document.getElementById("lista")

    let novoItem = document.createElement("li")
    novoItem.innerHTML = conteudoInput 

    lista.insertAdjacentElement("beforeend", novoItem)
}