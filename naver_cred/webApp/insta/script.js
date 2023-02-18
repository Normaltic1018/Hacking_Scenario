const btn = document.querySelector('#entrar')

btn.addEventListener("click", function(e) {

    e.preventDefault()

    const  email = document.querySelector('#email')
    const valorEmail = email.value 

    console.log(typeof(valorEmail)) 

})

function verificarEmail() {
    
    const  email = document.querySelector('#email')
    const valorEmail = email.value 

    if(valorEmail.length > 0) {
        return true
    }
}

function verificarSenha() {
    

    const senha = document.querySelector('#senha')
    const valorSenha = senha.value

    if(verificarEmail && valorSenha.length > 5) {
        console.log('okay')
        document.querySelector('#entrar').style.backgroundColor = '#0095F6'
        document.querySelector('#entrar').style.cursor = 'pointer'
    } else {
        document.querySelector('#entrar').style.backgroundColor = '#B2DFFC'
        document.querySelector('#entrar').style.cursor = ''
    }
}



