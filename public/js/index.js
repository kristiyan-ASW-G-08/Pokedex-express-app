const nextPageBtn = document.querySelector('#next-btn');
const previousPageBtn = document.querySelector('#previous-btn');
const pokemonBtn = document.querySelector('#pokemon-form');
if (nextPageBtn) {
  nextPageBtn.addEventListener('click', e => {
    e.preventDefault();
    const nextPageForm = document.querySelector('#next-form');
    nextPageForm.submit();
  });
}
if (previousPageBtn) {
  previousPageBtn.addEventListener('click', e => {
    e.preventDefault();
    const previousPageForm = document.querySelector('#previous-form');
    previousPageForm.submit();
  });
}
if(pokemonBtn){
  pokemonBtn.addEventListener('click',e => {
    e.preventDefault()
    const pokemonForm = document.querySelector('#pokemon-form')
  pokemonForm.submit()
  })
  
}

const navbar = () => {
  const navbarButton  = document.querySelector('.navbar-button')
  const navbarMenu = document.querySelector('.navbar-menu')
  let menuState;
const toggleNavbarButton = () => {
  if (menuState) {
    navbarButton.classList.remove('close');
    navbarMenu.classList.remove('is-active');
    // Set Menu State
    console.log('nani')
    menuState = false;
  } else if (!menuState) {
    navbarButton.classList.add('close');
    navbarMenu.classList.add('is-active');
    // Set Menu State
    menuState = true;
  }
};
navbarButton.addEventListener('click',e => {
  toggleNavbarButton()
})
  
  
}

navbar()