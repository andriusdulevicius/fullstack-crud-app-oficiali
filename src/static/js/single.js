import MyFetch from './class/MyFetch.class.js';
console.log('single');
// isitraukti myFetch klase

// pasiimti mygtuka
const delBtn = document.querySelector('#delete');
const currentPostId = delBtn.dataset.postId;
// pasiimam id

// fetch to delete
delBtn.addEventListener('click', () => {
  MyFetch.deletePost(currentPostId, ({ redirect }) => {
    if (redirect) {
      window.location = redirect;
    }
  });
});

// atsakyme gavus redirect nunaviguoti i blogs puslapi
