import { call, put, takeLatest, all } from 'redux-saga/effects';

import {
    LOGIN_REQUEST,
    loginSuccess
} from './actions';

export function* login(action) {
    try {
        console.log('logged in successfully.')
        yield put(loginSuccess());
    }
    catch (e) {
        console.log('ERROR', e.message)
    }

}

export function* watcherLogin() {
    yield takeLatest(LOGIN_REQUEST, login)
}

export default function* () {
    yield all([
        watcherLogin()
    ]);
}