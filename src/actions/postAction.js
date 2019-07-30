import { FETCH_POSTS, NEW_POSTS } from './types';

export const fetchPosts = () => dispatch => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => dispatch({
        type: FETCH_POSTS,
        payload: data
      }));
} 

export const createPost = (postData) => dispatch => {
  fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POSTS,
        payload: post
      }))
}