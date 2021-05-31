export default class MyFetch {
  static baseUrl = '/api/blog';

  constructor() {}

  static async getPosts() {
    const res = await fetch(MyFetch.baseUrl);
    const data = await res.json();
    // console.log(data)
    return data;
  }

  static async createPost(data, Method, id = null) {}
}
