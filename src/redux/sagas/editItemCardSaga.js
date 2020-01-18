import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateItem(action) {
  try {
    const response = yield axios.put(`api/closet/+${action.payload.id}`, action.payload);
    yield put({ type: 'SET_CLOSET', payload: response.data });
  } catch (error) {
    console.log('closet update failed', error);
  }
}

function* editItemCardSaga() {
  yield takeLatest('SEND_UPDATE', updateItem);
}

export default editItemCardSaga;