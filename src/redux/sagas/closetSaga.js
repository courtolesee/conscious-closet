import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* fetchCloset() {
  try {
    const response = yield axios.get('api/closet');
    yield put({ type: 'SET_CLOSET', payload: response.data });
  } catch (error) {
    console.log('closet get request failed', error);
  }
}

function* addNewItem(action) {
  try{
    yield axios.post(`/api/closet/new`, action.payload);
    yield axios.put(`/api/closet/afterAdd`, {data: action.payload.typeId});
    yield put({ type: 'FETCH_CLOSET'});
    yield put ({type: 'FETCH_USER'});
  }
  catch (error){
    console.log('adding new item failed', error);
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
    console.log('the changeItemType saga action.payload is', action.payload);
    console.log('the changeItemType saga response.data is', response.data);
    } catch (error) {
    console.log('changing item name put failed', error);
  }
}

function* deleteItem(action) {
  try {
    yield axios.delete(`/api/closet/delete/${action.payload.closet.item_id}`);
    yield axios.put('api/closet/afterDelete', {data: {type_id: action.payload.closet.type_id, deleteType: action.payload.deleteType}});
    yield put({type: 'FETCH_CLOSET'});
    yield put ({type: 'FETCH_USER'});
    }
  catch (error){
    console.log(error);
  }
} 

function* closetSaga() {
  yield takeLatest('FETCH_CLOSET', fetchCloset);
  yield takeLatest('UPDATE_NAME', changeItemName);
  yield takeLatest('UPDATE_TYPE_NAME', changeItemType);
  yield takeEvery('DELETE_ITEM', deleteItem);
  yield takeEvery('ADD_NEW', addNewItem)
}

export default closetSaga;
