import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });
    console.log('CLEAR REGISTRATION ERROR------------------');
    
    // passes the username and password from the payload to the server
    yield axios.post('/api/user/register', action.payload);
    console.log('POST ERROR------------------');

    // automatically log a user in after registration
    yield put({ type: 'LOGIN', payload: action.payload });
    console.log('AUTO LOGIN FAIL ERROR------------------');

    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({type: 'SET_TO_LOGIN_MODE'});
    console.log('SET TO LOGIN MODE ERROR------------------');

  } catch (error) {
      console.log('Error with user registration:', error);
      yield put({type: 'REGISTRATION_FAILED'});
  }
}

function* registrationSaga() {
  yield takeLatest('REGISTER', registerUser);
}

export default registrationSaga;
