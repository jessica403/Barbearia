/*
por tag:     getElementByIdName('nome')
por id:      getElementById ('') <--nos getbay...ñ funciona o (#alguma coisa)
por nome:    getElementsByName()
por clase:   getElementsByClassName() <--
por seletor: querySelector() <--melhor pratica p/usar o DOM no js|tambem ñ funciona sem #.
 */
let nome = window.Document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'nome invalido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'nome valido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'black'
    } else {
        txtEmail.innerHTML = 'nome valido'
        txtEmail.style.color = 'blue'
        emailOk = true
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'digite ate 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}
function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('formulario enviado com sucesso')
    } else {
        alert('preencha o formulario corretamente antes de enviar...')
    }
}
function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}
function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}