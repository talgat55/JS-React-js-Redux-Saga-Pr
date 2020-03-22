import {CREATE_POST, FETCH_POST} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetchPost() {
    return  async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1');
        const json = await response.json();
        dispatch({type: FETCH_POST, payload: json})
    }
}