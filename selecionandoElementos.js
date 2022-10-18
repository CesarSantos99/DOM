const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')

input.addEventListener('focus', () => {
    console.log('Dei um foco');
})

select.addEventListener('change', () => {
    console.log(select.value);
})

button.addEventListener('click', () => {
    alert('olá mundo')
})

// input.addEventListener('focus', () => {
//     console.log('Dei um foco');
// }) da um foco


// const element = document.querySelector('input')
// element.onkeypress = (evento) => {
//     console.log(evento.key)
//   console.log(evento.target.value) da pra ver o valor do meu input
// } da pra saber qual tecla eu to digitando no input

// onkeypress o evento de crecionar alguma tecla

// const element = document.querySelector('button')
// const myFunction = () => {
//     alert('Fui precionado')
// } colocando a função no html ele aparece um alert
// element.onclick = ( ) => {
//     alert('Fui precionado')
// } isso faz a mesma coisa mais resumidamente

// const element = document.querySelector('h1')
// element.style.color = 'red' isso muda a cor

// const element = document.querySelector('h1')
// element.innerText = "Hello Word" isso muda o texto para hello word
// textContent faz a mesma coisa
//innerHTML tambem faz a mesma coisa mais pode colocar tags html



// getElementsByTagName seleciona por tags 

// document.getElementsByClassName seleciona as classes 

// document.getElementById seleciona por id 

// querySelector  retorna o que ele ve primeiro 

// querySelectorAll seleciona todos elementos 