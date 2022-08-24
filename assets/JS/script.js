/*
Case sensitive = reconhece letras maiúsculas e minúsculas

Acessar o DOM por:
por tag: getElementTagName()
por Id: getElementById()
por Nome: getEmentsByName()
por Classe: getElementsByClassName()
por Seletor: querySeletor()
*/

let nome = document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk= false
let emailOk= false
let assuntoOk= false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

function validaNome() {

    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = ""
        nomeOk = true
    }
}

function validaEmail(){

    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf(".")){
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = ""
        emailOk = true
    }

}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length > 300){
        txtAssunto.innerHTML = 'O texto é muito grande! Digite no máximo 300 caracteres.'
        txtAssunto.style.color = "red"
        
    }else {
        txtAssunto.innerHTML = ""
        assuntoOk = true
    }
}

function enviar (){
    
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulário enviado com sucesso!")
    }else{
        alert ("Algo deu errado! Revise e tente novamente...")
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'

}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}