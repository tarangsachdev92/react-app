import { all, call, delay, put, takeEvery } from 'redux-saga/effects'
import { increment } from './counterState'

// eslint-disable-next-line require-yield
export function* helloSaga() {
    console.log('Hello Saga!');
}

export function* incrementAsync() {
    yield delay(1000)
    yield put(increment())
}

export function* watchIncrementAsync() {
    yield takeEvery('counter/incrementByAmountAsync', incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        call(helloSaga),
        call(watchIncrementAsync),
    ])
}