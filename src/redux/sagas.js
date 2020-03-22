import {put, takeEvery, call} from 'redux-saga/effects'
import {FETCH_POST, REQUEST_POSTS} from "./types";
import {hideLoader, showLoader} from "./actions";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker);
};

function* sagaWorker() {
    try{
        yield put(showLoader());
        const payload   = yield call(fetchPosts);
        yield put({type: FETCH_POST, payload});
        yield put(hideLoader());
    } catch (e) {
        console.log(e);
    }
}

async function fetchPosts(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1');
        const json = await response.json();
        return json;
}