
/*SELECIONA TODAS AS IMAGENS E BOTÕES ATRAVÉS DAS CLASSES CSS*/ 
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

/*
VARIAVEL QUE RECEBE A 1° IMAGEM E FUNCIONARÁ COMO UM CONTADOR INICIANDO EM ZERO  
SENDO ACRESCIDA DE +1 PARA PASSAR P/ A PRÓXIMA IMAGEM E -1 P/ VOLTAR P/ PRÓXIMA
*/ 
let currentSlide = 0;



/*REMOVE O SLIDE*/ 
function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}
/*MOSTRA  O SLIDE*/ 
function showSlider() {
  slider[currentSlide].classList.add('on')
}

/*FUNÇÃO  DE AVANÇAR SLIDE */ 
function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0 /*VOLTA P/ O 1°  SLIDE SE TIVER NO ULTIMO SLIDES*/ 
  } else {
    currentSlide++ /*SENÃO ELE AVANÇA PARA O PRÓXIMO*/ 
  }
  showSlider()
}

/*FUNÇÃO  DE VOLTAR SLIDE */ 
function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}


/*ADICIONA AS FUNÇÕES AOS BOTÕES*/
btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)