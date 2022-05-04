let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let planSelectButton = document.querySelectorAll('.plan button');
let modalNoButton = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
// let ctaButton = document.querySelector('main-nav__item--cta');

for(let i = 0; i < planSelectButton.length; i++) {
   planSelectButton[i].addEventListener('click', function() {
      // backdrop.style.display = 'block';
      // modal.style.display = 'block';
      modal.classList.add('open');
      backdrop.style.display = "block";
      setTimeout(function() {
         backdrop.classList.add('open');
      }, 10); 
   });
}
backdrop.addEventListener('click', function() {
   // mobileNav.style.display = 'none';
   mobileNav.classList.remove('open');
   closeModal();
});

// it only return true if it finds a valid reference to the button
if(modalNoButton) {
   modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
   // modal.style.display = 'none';
   // backdrop.style.display = 'none';
   if(modal) {
      modal.classList.remove('open');
   }
   backdrop.classList.remove('open');
   setTimeout(function() {
      backdrop.style.display = "none"; 
   }, 200); 
}
toggleButton.addEventListener('click', function(){
   // mobileNav.style.display = 'block';
   // backdrop.style.display = 'block';
   mobileNav.classList.add('open');
   backdrop.style.display = "block";
   setTimeout(function() {
      backdrop.classList.add('open');
   }, 10);
});

// ctaButton.addEventListener('animationstart', function(event) {
//    console.log('Animation start', event);
// });
// ctaButton.addEventListener('animationend', function(event) {
//    console.log('Animation end', event);
// });
// ctaButton.addEventListener('animationiteration', function(event) {
//    console.log('Animation iteration', event);
// });


