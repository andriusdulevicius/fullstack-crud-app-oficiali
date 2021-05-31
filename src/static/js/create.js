console.log('create');

import MyFetch from './class/MyFetch.class.js'

MyFetch.getPosts()
    .then(posts => console.log('posts posts', posts))
    .catch(err => console.error(err.message))

