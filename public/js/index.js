
const nextPageBtn = document.querySelector('#next-btn');
const previousPageBtn = document.querySelector('#previous-btn');
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

