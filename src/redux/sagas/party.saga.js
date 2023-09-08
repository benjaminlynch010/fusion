import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addToParty(action) {
  yield axios.post('/api/party/addPersona', action.payload)
}