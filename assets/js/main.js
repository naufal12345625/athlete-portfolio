/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

const text = "Archery Athlete";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 90);
  }
}
typing();

ScrollReveal({
  distance: '60px',
  duration: 1200,
  delay: 150,
  reset: false
});

ScrollReveal().reveal('.home__data, .section-title', {origin:'top'});
ScrollReveal().reveal('.home__img, .about__img, .skills__img', {origin:'bottom'});
ScrollReveal().reveal('.skills__data, .slide', {origin:'left', interval:150});

showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}

/* ===== VIDEO SLIDER ===== */
let vIndex = 0;
const vSlides = document.querySelector(".video-slides");
const vTotal = document.querySelectorAll(".video-slides video").length;

document.querySelector(".video-btn.next").onclick = () => {
  vIndex = (vIndex + 1) % vTotal;
  vSlides.style.transform = `translateX(${-vIndex * 100}%)`;
}

document.querySelector(".video-btn.prev").onclick = () => {
  vIndex = (vIndex - 1 + vTotal) % vTotal;
  vSlides.style.transform = `translateX(${-vIndex * 100}%)`;
}

/* ===== LOADER ===== */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 600);
});

window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

/* ===== SLIDER ===== */
let index = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const total = dots.length;

function showSlide(i) {
  if (i >= total) index = 0;
  if (i < 0) index = total - 1;

  slides.style.transform = `translateX(${-index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {
  index++;
  showSlide(index);
});

document.querySelector(".prev").addEventListener("click", () => {
  index--;
  showSlide(index);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});

setInterval(() => {
  index++;
  showSlide(index);
}, 4000);

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
