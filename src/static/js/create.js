console.log('create');

import MyFetch from './class/MyFetch.class.js';

// MyFetch.getPosts()
//   .then((posts) => console.log('posts posts', posts))
//   .catch((err) => console.error(err.message));

// get all form data into json object
//and send it to back end via fetch

// const newPostData = {
//   title: 'New post about Birds',
//   author: 'James Cameron',
//   body: 'This is essential to know.....',
// };

// const jsonData = JSON.stringify(newPostData);
// MyFetch.createPost(jsonData, (data) => {
//   if (data.redirect) {
//     console.log('redirecting to ', data.redirect);
//     // window.location = data.redirect;
//   }
// });

const mainForm = document.getElementById('create-post-form');

mainForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Stop right there, dont you dare to send it, I swear to God');

  // supakuojam formos duomenis
  const fd = new FormData(mainForm);
  // form data to json conversija
  const fdJsonFormat = JSON.stringify(Object.fromEntries(fd));

  MyFetch.createPost(fdJsonFormat, (ats) => {
    console.log(ats);
  });
});
