
import createSagaMiddleware from 'redux-saga'
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './features/counter/counterSaga'
import counterSlice from './features/counter/counterState';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        counter: counterSlice
    },
    middleware: [sagaMiddleware]
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false,
    //     thunk: false
    //   }).concat(sagaMiddleware)
    // middleware: [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

export default store;
