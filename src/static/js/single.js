import MyFetch from './class/MyFetch.class.js';
console.log('single');
// isitraukti myFetch klase

// pasiimti mygtuka
const delBtn = document.querySelector('#delete');
const delId = delBtn.dataset.postId;
// pasiimam id
console.log(' delId', delId);

// fetch to delete
delBtn.addEventListener('click', () => {
  MyFetch.deletePost(delId, (ats) => {
    console.log(' ats', ats);
  });
});

// atsakyme gavus redirect nunaviguoti i blogs puslapi
