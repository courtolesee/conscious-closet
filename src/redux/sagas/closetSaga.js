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

// function* addItem() {
//   try{
//     yield axios.post({ '/api/closet', action.payload });
//     yield put ({ type: `ADD_ITEM`});
//   }
//   catch (error) {
//     console.log('error posting new item', error);
//   }
// }

function* closetSaga() {
  yield takeLatest('FETCH_CLOSET', fetchCloset);
  // yield takeLatest('ADD_ITEM', addItem)
}

export default closetSaga;