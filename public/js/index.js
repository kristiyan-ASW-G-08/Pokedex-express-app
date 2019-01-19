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
