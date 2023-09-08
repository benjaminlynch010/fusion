import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPersonas() {
  try {
    const response = yield axios.get('/api/personas')

    yield put({ type: 'SET_PERSONAS', payload: response.data })
  } catch (error) {
    console.log('Cannot retrieve Persona list.', error)
  }
}

function* personaSaga() {
  yield takeLatest('FETCH_PERSONAS', fetchPersonas)
}

export default personaSaga