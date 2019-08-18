import { all } from 'redux-saga/effects';

import loginSaga from '../components/login/saga'

export default function* () {
    yield all([
        loginSaga()
   ]);
}
