// Faq
function initAcordion() {
  const abrir = document.querySelectorAll(".perguntas dt");
const resposta = document.querySelectorAll(".perguntas dd");
abrir[0].classList.add("abrir");

abrir.forEach(eventoPerguntas);
function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", mostrarResposta);
}
function mostrarResposta(event) {
  const pergunta = event.currentTarget;
  pergunta.classList.toggle("abrir");
}
}
initAcordion();


// animais
function initActiveTab() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const activeClass = 'ativo';
  tabContent[0].classList.add(activeClass);

  function activeTab(index) {
    tabContent.forEach((itemAtivo) => {
      itemAtivo.classList.remove(activeClass);
    });
    tabContent[index].classList.add(activeClass);
  }
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", function () {
      activeTab(index);
    });
  });
}

initActiveTab();


// const linksInternos = document.querySelectorAll(".js-menu a[href^='#']")

// function scrollToSection(event) {
//   event.preventDefault();
//   const href = event.currentTarget.getAttribute('href');
//   const section = document.querySelector(href);
//   const topo = section.offsetTop
//   window.scrollTo({
//     top: topo,
//     behavior: 'smooth'
//   });

// }

// linksInternos.forEach((link) =>{
//   link.addEventListener('click', scrollToSection)
// })



function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll')


if(sections.length){


const sectionMetade = window.innerHeight * 0.6;


function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const inSectionVisible = (sectionTop - sectionMetade) < 0;
    if(inSectionVisible){
      section.classList.add('ativo')
    }else{
      section.classList.remove('ativo')
    }
  })
}
animaScroll();

window.addEventListener('scroll', animaScroll)
}
}
initAnimacaoScroll();

