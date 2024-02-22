//Tudo o que eu add // é pq n altera nada (talvez n)

//GERAL (não lembro mais oq isso faz, possivelmente inutil)
/*function botaoHandler(event){
  event.preventDefault()
  console.log("Botão Clicado!")
}*/

//Fazer funcionar o notão de REGISTRO
function Login(event) {
  event.preventDefault();
  var usuario = document.getElementsByName('username')[0].value;
  //usuario = usuario.toLowerCase();
  var senha = document.getElementsByName('password')[0].value;
  //senha = senha.toLowerCase();

  if (usuario == "arkery" && senha == "007") {
    alert("CONCLUIDO");
    window.location = "/Aenigma1/Aenigma1.html";
  }else{
    alert("░▒▓█ E҉R҉R҉O҉R҉ ҉E҉R҉R҉O҉R҉ ҉E҉R҉R҉O҉R҉ █▓▒░");
  }
}

//transformar as letras maiusculas em minusculas
function lowerCase(input) {
    input.value = input.value.toLowerCase();
  }

