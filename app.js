// Navbar background starts here
function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 750) {
        navbar.classList.remove('bgcolor');
    } else {
        navbar.classList.add('bgcolor');
    }
}

window.addEventListener('scroll', scrollValue);




// Navbar background ends here

// Scroll to top button Starts here
const scrbtn= document.querySelector('.scrbtn')
const showhide = document.getElementById('top')
const scrollFunc = () => {
const scroll = window.scrollY;


if (scroll > 300) {
    showhide.className = "scrbtn show";
  } else {
    showhide.className = "scrbtn hide";
  }
};
window.addEventListener("scroll", scrollFunc);

scrbtn.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})
// Scroll to top button Ends here


// Typewriter Starts here

var app = document.getElementById('heading');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter 
  .typeString('Welcome to GetLinked')
  .pauseFor(500)
  .deleteAll(100)
  .typeString('Connect. Communicate. Collaborate')
  .deleteAll(100)
  .pauseFor(500)
 // .typeString('G')
  //.pauseFor(500)
  .start();


// Typewriter Ends here

// Particle js starts here

var particles = Particles.init({
	selector: '.bg',
  sizeVariations: 10,
  color: ['#00bbdd', '#404B69', '#DBEDF3'],
  connectParticles: true,
  speed: 0.5,
  maxParticles: 100,
});

// Particle js starts here


// Menu section starts here
const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const icon = document.querySelector('.burger span')

burger.addEventListener('click', () => {
  navbar.classList.toggle('open')
  if (navbar.classList.contains('open')) {
       icon.innerHTML = 'close'
  }
  else {
       icon.innerHTML = 'menu'
  }
})

// Menu section ends here 