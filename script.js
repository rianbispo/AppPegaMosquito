let height = 0;
let width = 0;
let life = 1;
let time = 10;

let criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '');

if (nivel === 'normal'){
  criaMosquitoTempo = 1500
} else if(nivel === 'dificil'){
  criaMosquitoTempo = 1000
}else{
  criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
  height = window.innerHeight;
  width = window.innerWidth;

  console.log(height, width)
}

ajustaTamanhoPalcoJogo()

let stopWatch = setInterval(function(){
  time -= 1;

  if(time < 0){
    clearInterval(stopWatch);
    clearInterval(criaMosquito);
    window.location.href = 'victory.html'
  }else {
    document.getElementById('stopWatch').innerHTML = time;
  }

}, 1000) 


function tamanhoAleatorio(){
  let classe = Math.floor(Math.random() * 3) ;
  
  switch(classe){
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'
  }
}

function ladoAleatorio() {
  let classe = Math.floor(Math.random() * 2) ;
  
  switch(classe){
    case 0:
      return 'ladoA'
    case 1:
    return 'ladoB'
  }
}

let criaMosquito = setInterval(function posicaoRandomica(){
  // Remoção do mosquito anterior, caso exista
  let mosquitoId = document.getElementById('mosquito');
  if(mosquitoId){
    mosquitoId.remove();
    if(life > 3){
      window.location.href = 'game-over.html'
    }else {
      document.getElementById('v' + life).src="images/coracao_vazio.png";
      life++;
    }
  }

  let posicaoX = Math.floor(Math.random() * width) -90;
  let posicaoY = Math.floor(Math.random() * height) -90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  console.log(posicaoX, posicaoY)

  // Criação do elemento HTML
  let mosquito = document.createElement('img');
  mosquito.src = 'images/mosca.png';
  mosquito.className = tamanhoAleatorio()+ " " + ladoAleatorio();
  mosquito.style.left = posicaoX  + 'px';
  mosquito.style.top = posicaoY + 'px';
  mosquito.style.position = 'absolute';
  mosquito.id = 'mosquito';
  mosquito.onclick = function(){
    this.remove()
  }

  document.body.appendChild(mosquito);
}, criaMosquitoTempo)