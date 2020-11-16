import { FETCH_POSTS, NEW_POSTS} from './types.js';

export const fetchPost = () => (dispatch) => {
  let origin = window.location.origin;
        fetch(origin + "/api/members")
      .then(res => res.json())
      .then(data => {
          dispatch({
          type: FETCH_POSTS,
          payload: data
      })});
};

export const createPost = (postData) => (dispatch) => { 
  fetch(origin + "api/members", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res=>res.json())
        .then(data=>dispatch({
          type: NEW_POSTS,
          payload: data
        }));
};