import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCloset() {
  try {
    const response = yield axios.get('api/closet');
    console.log('FETH CLOSET RESPONSE IS', response);
    yield put({ type: 'SET_CLOSET', payload: response.data });
  } catch (error) {
    console.log('closet get request failed', error);
  }
}

function* closetSaga() {
  yield takeLatest('FETCH_CLOSET', fetchCloset);
}

export default closetSaga;