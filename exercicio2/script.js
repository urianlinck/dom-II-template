// Neste template, temos um formulário de login. Ao lado do campo de senha temos um botão para esconder a senha. 

//1 - Implemente no onclick deste botão uma função para alterar o type do input para password.
function escondeSenha(event){
    event.preventDefault()
    const input = document.getElementById("password")
    input.setAttribute("type","password")
    console.log(input)
}

//2 - Além disso, altere a classe CSS do elemento form na página, removendo a classe “light” 

// const form = document.getElementsByClassName("light") *OU*
const form = document.querySelector(".light")
form.classList.remove("light")
form.classList.add("dark")

console.log(form.classList)

//3 - e adicionando a classe “dark”