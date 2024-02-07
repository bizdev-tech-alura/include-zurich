/* Quando eu clicar no botão de lua, o fundo deve ficar escuro
  Quando eu clicar no botão de sol, o fundo deve ficar claro
*/
const botaoSol = document.querySelector('#botaoDia') //Armazena o botãozinho de sol na constante = acessa o html e com a função querySelector pega o elemento botão com o id passado dentro dela
const botaoLua = document.querySelector('#botaoNoite') //Faz o mesmo que o botão sol, mas com o botão lua
const body = document.querySelector('body') //Pega a tag body

//Ao clicar na lua, o fundo deve ficar escuro
//
function mudarProModoEscuro() {
  //body -> que está com cor branca passa a ter cor cinza escuro
  body.classList.remove('body-claro') //classList é uma propriedade para manipularmos classes CSS via JavaScript
  body.classList.add('body-escuro') //pegamos o body e add ou removemos determinada classe que deve estar escrita no CSS, no caso o fundo escuro, e acima removemos o fundo claro

  //sol fique com fundo cinza, e lua com fundo azul
  botaoSol.classList.add('icone-tema-inativo') //adiciona fundo cinza no ícone sol
  botaoLua.classList.remove('icone-tema-inativo') //remove fundo cinza no ícone lua
  botaoLua.classList.add('icone-tema-ativo') //adiciona fundo azul no ícone lua
}

function mudaProModoClaro() {
  body.classList.remove('body-escuro') //remove fundo escuro no body
  body.classList.add('body-claro') //add fundo claro no body

  botaoSol.classList.remove('icone-tema-inativo') //remove fundo cinza no ícone sol
  botaoSol.classList.add('icone-tema-ativo') //adiciona fundo azul no ícone sol
  botaoLua.classList.add('icone-tema-inativo') //adiciona fundo cinza no ícone lua
}

botaoLua.addEventListener('click', mudarProModoEscuro)
botaoSol.addEventListener('click', mudaProModoClaro)