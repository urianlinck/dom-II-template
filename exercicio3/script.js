// Neste template, temos um input para o usuário digitar um texto, e um parágrafo em branco. 
// 1 - Utilizando eventos, verifique se o usuário está segurando Shift enquanto digita. 
//3 - Caso esteja, altere o valor do parágrafo para: ATENÇÃO: SEGURANDO SHIFT. Caso não esteja, o parágrafo volta a estar vazio

function checaCaps(event){
    const paragrafo = document.getElementById("mensagem")
    console.log(paragrafo)
    
    if(event.key === "Shift"){
        paragrafo.innerHTML = "ATENÇÃO: SEGURANDO SHIFT"
        
    }else{
        paragrafo.innerHTML = ""
    }
}