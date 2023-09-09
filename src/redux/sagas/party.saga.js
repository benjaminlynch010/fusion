import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchParty() {
  try {
    const response = yield axios.get('/api/party')
    yield put({ type: 'SET_PARTY', payload: response.data })
  }
  catch (err) {
    console.log('Cannot retrieve party.', err)
  }
}

function* addToParty(action) {
  console.log(`adding ${action.payload} to party`)
  try {
    yield axios.post('/api/party/add', action.payload)
  } catch (err) {
    console.log('Cannot add new Persona', err)
  }
}

function* deleteFromParty(action) {
  console.log(`removing ${action.payload.name} from party`)
  try {
    yield axios.delete(`/api/party/del/${action.payload.id}`)
    yield put({ type: 'FETCH_PARTY' })
  } catch (err) {
    console.log('Cannot delete Persona', err)
  }
}

function* partySaga() {
  yield takeLatest('FETCH_PARTY', fetchParty)
  yield takeLatest('ADD_TO_PARTY', addToParty)
  yield takeLatest('DELETE_FROM_PARTY', deleteFromParty)
}


export default partySaga