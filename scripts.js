
var baralho = [
    {
      carta: {
        nome: 'Homem Aranha',
        imagem: 'https://infinitasvidas.files.wordpress.com/2019/01/homem-aranha-no-aranhaverso-4.png',
        atributos: {
          ataque: 8,
          defesa: 7,
          magia: 3
        }
      }
    },
    
    
      {
      carta: {
        nome: 'Doutor Estranho',
        imagem: 'https://static.quizur.com/i/b/58dfce16a57fb5.75660322DoutorEstranho.jpg',
        atributos: {
          ataque: 7,
          defesa: 8,
          magia: 10
        }
      }
    },
    
    
      {
      carta: {
        nome: 'Homem de Ferro',
        imagem: 'https://www.cinehero.com.br/wp-content/uploads/2021/01/gggggg.jpg',
        atributos: {
          ataque: 9,
          defesa: 9,
          magia: 5
        }
      }
    },
        
        
          {
      carta: {
        nome: 'Thor',
        imagem: 'https://i.pinimg.com/736x/e1/53/06/e1530680e1a018cb2a659b0e248f447e.jpg',
        atributos: {
          ataque: 8,
          defesa: 8,
          magia: 9
        }
      }
    },
            
            
              {
      carta: {
        nome: 'Feiticeira Escarlate',
        imagem: 'https://www.baraonerd.com.br/img/noticias/73.jpg',
        atributos: {
          ataque: 9,
          defesa: 9,
          magia: 10
        }
      }
    },
                
                
                  {
      carta: {
        nome: 'Homem Formiga',
        imagem: 'https://ultimatodobacon.com/static/0d93e6b51b4c4b1ebbbe15df8d535196/4dc95/As-melhores-HQs-do-Homem-Formiga-2.png',
        atributos: {
          ataque: 7,
          defesa: 7,
          magia: 3
        }
      }
    },
    
    
                    {
      carta: {
        nome: 'Loki',
        imagem: 'https://2.bp.blogspot.com/-079ElQJJ4sA/W_Ws9Zm4v4I/AAAAAAACHKo/pObN95r6HqIBpZlnjGM2lOXzyL3q7kLAgCLcBGAs/s320/tumblr_pclwqdq7He1s2lswpo2_500.jpg',
        atributos: {
          ataque: 5,
          defesa: 2,
          magia: 8
        }
      }
    }
  
  ]
  
  //variaveis globais
  
  var cartaJogador;
  var cartaMaquina;
  var sortearButton = document.querySelector('#btnSortear');
  var jogarButton = document.querySelector('#btnJogar');
  
  function sortearCarta(){
    // Sorteia as cartas, jogador e maquina
    var iJogador = parseInt(Math.random() * baralho.length);
    cartaJogador = baralho[iJogador];
    
    var iMaquina = parseInt(Math.random() * baralho.length);
    while(iMaquina == iJogador){
      iMaquina = parseInt(Math.random() * baralho.length);
    }
    cartaMaquina = baralho[iMaquina];
  
    sortearButton.disabled = true;
    jogarButton.disabled = false;
    
    exibeCartas();
  }
  
  function exibeCartas(){
    var divCartaJogador = document.querySelector('#carta-jogador')
    var divOpcoes = document.querySelector('#opcoes')
    var nomePersonagem = document.querySelector('#nome-jogador')
    
    //Obtem atributos dinamicamente
    var inputsAtributos = ''
    for(let i in cartaJogador.carta.atributos){
        inputsAtributos += `<input type="radio" name="atributo" value="${i}" id="${i}"> <label for="${i}"><strong>${i} ${cartaJogador.carta.atributos[i]}</strong></label> <br>`
    }
    
    //Exibe nome, atributos e imagem da carta.
    divOpcoes.innerHTML = inputsAtributos;
    nomePersonagem.innerHTML = cartaJogador.carta.nome;
    divCartaJogador.style.backgroundImage = `url("${cartaJogador.carta.imagem}")`
  }
  
  function jogar(){
    //Obtem atributo selecionado do jogador
    var atributos = document.getElementsByName('atributo');
    var atributoSelecionado;
    for(let i in atributos){
        if(atributos[i].checked){
           atributoSelecionado = atributos[i].value
        }
    }
    
    console.log(atributoSelecionado);

    if(atributoSelecionado == undefined){
        alert('Selecione algum atributo para jogar!')
    }else{
    //Exibe a carta e status da maquina
    var divCartaMaquina = document.querySelector('#carta-maquina');
    var nomeMaquina = document.querySelector('#nome-maquina')
    var opcoesMaquina = document.querySelector('#opcoes-maquina')
    var inputsAtributos = ''
    
    for(let i in cartaMaquina.carta.atributos){
        inputsAtributos += `<p><strong>${i} ${cartaMaquina.carta.atributos[i]}</strong></p>`
    }
    
    nomeMaquina.innerHTML = `${cartaMaquina.carta.nome}`
    divCartaMaquina.style.backgroundImage = `url("${cartaMaquina.carta.imagem}")`
    opcoesMaquina.innerHTML = inputsAtributos;
    
    
    //comparação entre jogador e maquina
    
    var resultado = document.querySelector('#resultado');
    var numeroJogador = cartaJogador.carta.atributos[atributoSelecionado]; 
    var numeroMaquina = cartaMaquina.carta.atributos[atributoSelecionado];
    //resultado.innerHTML = `<p class="resultado-final">TESTANDO RESULTADO!</p>`
    
    if(numeroJogador > numeroMaquina){
      resultado.innerHTML = '<p class="resultado-final">Você ganhou da maquina</p>'
    }else if(numeroJogador == numeroMaquina){
      resultado.innerHTML = '<p class="resultado-final">Vish...Você empatou com a maquina</p>'
    }else{
      resultado.innerHTML = '<p class="resultado-final">KKKKKKK Você perdeu, tenta de novo!</p>'
    }
    
    console.log(numeroJogador, numeroMaquina)
    
    var resetDiv = document.querySelector('#reset');
    jogarButton.disabled = true;
    resetDiv.innerHTML =  '<button class="button-jogar" type="button" id="btnReset" onclick="resetar()">Tentar novamente</button>'
    
  }

}

  function resetar(){
    location.reload();
  }