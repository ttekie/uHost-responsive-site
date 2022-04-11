let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let planSelectButton = document.querySelectorAll('.plan button');
let modalNoButton = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

for(let i = 0; i < planSelectButton.length; i++) {
   planSelectButton[i].addEventListener('click', function() {
      // backdrop.style.display = 'block';
      // modal.style.display = 'block';
      modal.classList.add('open');
      backdrop.classList.add('open');
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
}
toggleButton.addEventListener('click', function(){
   // mobileNav.style.display = 'block';
   // backdrop.style.display = 'block';
   mobileNav.classList.add('open');
   backdrop.classList.add('open');
});


