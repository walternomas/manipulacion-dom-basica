const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

h1.innerHTML = 'Patito <br>Feo';
console.info(h1.getAttribute('pantalla'));
console.info(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');
//h1.classList.add('rojo');
h1.classList.toggle('rojo');
h1.classList.contains('verde');

input.value = "456";

const imagen = document.createElement('img');

imagen.setAttribute('src', 'https://2.bp.blogspot.com/-evGq3lx7YtI/VBnlMfhZV4I/AAAAAAACUFY/31hvE9rD9rg/s1600/imagenes%2Bgratis%2Bpara%2Bfondos%2C%2Bpublicidad%2C%2Bdise%C3%B1o%2Bgr%C3%A1fico%2By%2Btareas%2Bescolares%2B(8).jpg');

imagen.setAttribute('width', 450);

pid.append(imagen);