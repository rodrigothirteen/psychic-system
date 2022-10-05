const botoes = document.getElementsByTagName('button')
const cores = ['#d94e33', '#2c5697', '#ed9b33', '#8a9b8e', '#dde5ed']

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener('click', function () {
    document.body.style.background = cores[i]
  })
}
