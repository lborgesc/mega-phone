function limpar() {

    location.reload();
}
function saudacao() {

    event.preventDefault();

    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let assunto = document.getElementById('subject').value;
    let mensagem = document.getElementById('message').value;

    if (
        nome == '' || email == '' || assunto == '' || mensagem == ''
    ) {
        alert('Preencha todos os campos');
    } else {
        alert('Postando os dados ...');
    }
}
function clearlogin() {

    document.getElementById("username").value = '';
    document.getElementById("password").value = '';
}

function clearcadastro() {

    document.getElementById("nome-usuario").value = '';
    document.getElementById("email").value = '';
    document.getElementById("senha").value = '';

}