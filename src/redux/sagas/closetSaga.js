import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* fetchCloset() {
  try {
    const response = yield axios.get('api/closet');
    console.log('FETH CLOSET RESPONSE IS', response);
    yield put({ type: 'SET_CLOSET', payload: response.data });
  } catch (error) {
    console.log('closet get request failed', error);
  }
}

function* changeItemName(action) {
  try {
    const response = yield axios.put(`/api/closet/name/${action.payload}`, {data: action.payload});
    yield put({ type: `FETCH_CLOSET`, payload: response.data });
    } catch (error) {
    console.log('changing item name put failed', error);
  }
}

function* changeItemType(action) {
  try {
    const response = yield axios.put(`/api/closet/type/${action.payload}`, {data: action.payload});
    yield put({ type: `FETCH_CLOSET`, payload: response.data });
    } catch (error) {
    console.log('changing item name put failed', error);
  }
}

function* deleteItem(action) {
  try {
    yield axios.delete(`/api/closet/delete/${action.payload}`);
    yield put({type: 'FETCH_CLOSET'});
  }
  catch (error){
    console.log(error);
  }
} 

function* closetSaga() {
  yield takeLatest('FETCH_CLOSET', fetchCloset);
  yield takeLatest('UPDATE_NAME', changeItemName);
  yield takeLatest('UPDATE_TYPE_NAME', changeItemType)
  yield takeEvery('DELETE_ITEM', deleteItem)
}

export default closetSaga;
