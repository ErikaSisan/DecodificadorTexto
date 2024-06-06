// Pegando os dados do HTML
let inputTexto = document.querySelector("#input-texto");
let outputResultado = document.querySelector("#resultado");

let btnCriptografar = document.querySelector("#botaoCriptografar");
let btnDescriptografar = document.querySelector("#botaoDesincriptografar");
let btnCopiar = document.querySelector("#botaoCopia");

// Lógica
// Não aceitar números, caracteres especiais e letras com acentos
inputTexto.addEventListener("keypress", function (event) {
  if (!validarCaracter(event.key)) {
    event.preventDefault();
    alert("Digite apenas letras");
  }
});

function validarCaracter(caractere) {
  // Permitir apenas letras minúsculas e maiúsculas
  const regex = /^[a-zA-Z\s]$/;
  return regex.test(caractere);
}

// Funções dos botões
function criptografarTexto() {
  let textoOriginal = inputTexto.value;
  let textoCriptografado = textoOriginal
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")
    .replaceAll("o", "ober");

  outputResultado.value = textoCriptografado.toLowerCase();
}

function descriptografarTexto() {
  let textoOriginal = inputTexto.value;
  let textoDescriptografado = textoOriginal
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u")
    .replaceAll("ober", "o");

  outputResultado.value = textoDescriptografado.toLowerCase();
}

function limparTela() {
  inputTexto.value = "";
  outputResultado.value = "";
}

function copiarTexto() {
  let textoParaCopiar = outputResultado.value;
  navigator.clipboard.writeText(textoParaCopiar).then(() => {
    limparTela();
    alert("Texto copiado para a área de transferência");
  }).catch(err => {
    alert("Falha ao copiar o texto: " + err);
  });
}

// Associando funções aos botões
btnCriptografar.onclick = criptografarTexto;
btnDescriptografar.onclick = descriptografarTexto;
btnCopiar.onclick = copiarTexto;


