import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* fetchItem(action) {
    try {
        // passes the username and password from the payload to the server
        const response = yield axios.get('/api/shelf', action.payload);
        yield put({ type: 'SET_ITEM', payload: response.data });
    } catch (error) {
        console.log('Error with user registration:', error);
    }
}

// POST shelfForm
function* postShelfForm(action) {
    try {
        const item = yield axios.post('/api/shelf', action.payload);
        yield put({ type: 'FETCH_ITEM', payload: item.data });
    } catch (error) {
        console.log('ERR with shelfForm:', error);
    }
}

function* itemSaga() {
    yield takeEvery('FETCH_ITEM', fetchItem);
    yield takeEvery('POST_ITEM', postShelfForm);
}

export default itemSaga;
