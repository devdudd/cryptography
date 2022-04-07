var btn = document.querySelector('#btn-enviar')
btn.addEventListener('click', function (event) {
  event.preventDefault();
  codificaBase64()
})
var tipo = document.querySelector('input[name="metodo"]:checked').value;
var shift = document.querySelector('#incrementoCifra')
var incremento = shift.value
var texto = document.querySelector('#textoInicial')
var capturado = texto.value

function codificaBase64() {
  var tipo = document.querySelector('input[name="metodo"]:checked').value;
  var op = document.querySelector('input[name="criptografia"]:checked').value;

  if (tipo == 1) {
    if (op == 'codificar') {
      
    } else {
      console.log('Decodificar');
    }
  }
  if (tipo == 2) {
    if (op == 'codificar') {
      var valorCodificado = btoa(document.querySelector("#textoInicial").value);
      document.querySelector("#textoFinal").value = valorCodificado;
      return valorCodificado
    } else {
      var valorDecodificado = atob(document.querySelector("#textoInicial").value);
      // console.log(valorDecodificado);
      document.querySelector("#textoFinal").value = valorDecodificado;
      return valorDecodificado
    }
  }
}









