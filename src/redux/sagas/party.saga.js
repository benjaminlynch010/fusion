import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addToParty(action) {
  console.log(`adding ${action.payload} to party`)
  try {
    yield axios.post('/api/party/add', action.payload)
  } catch (err) {
    console.log('Cannot add new Persona', err)
  }
}

function* deleteFromParty(action) {
  console.log(`deleting ${action.payload} from party`)
}

function* partySaga() {
  yield takeLatest('ADD_TO_PARTY', addToParty)
  yield takeLatest('DEL_FROM_PARTY', )
}


export default partySaga