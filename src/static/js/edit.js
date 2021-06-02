console.log('edit');

import MyFetch from './class/MyFetch.class.js';

const editFrom = document.getElementById('edit-form');

editFrom.addEventListener('submit', (event) => {
  event.preventDefault();

  // supakuojam formos duomenis
  const fd = new FormData(editFrom);
  // form data to json conversija
  const fdJsonFormat = JSON.stringify(Object.fromEntries(fd));
});
