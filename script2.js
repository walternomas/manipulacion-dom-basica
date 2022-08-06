const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')
const form = document.querySelector('#form')

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(e) {
  e.preventDefault();
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
  pResult.innerText = "Resultado: " + sumaInputs;
}

// btn.addEventListener('click', btnOnClick);

// function btnOnClick() {
//   const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
//   pResult.innerHTML = "Resultado: " + sumaInputs;
// }