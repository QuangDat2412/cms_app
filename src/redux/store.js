import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import loginReducer from './auth/auth.slice';
import othersSlice from './others/slice';
import loginSaga from './auth/auth.saga';
const rootReducer = combineReducers({ login: loginReducer, others: othersSlice });
const composeEnhancer =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              shouldHotReload: false,
          })
        : compose;
function* rootSaga() {
    console.log('rootSaga');
    try {
        yield all([loginSaga()]);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.trace(err);
    }
}
const sagaMiddleware = createSagaMiddleware();
const configStore = () => {
    const middleWares = [sagaMiddleware];
    const enhancers = [applyMiddleware(...middleWares)];
    const store = createStore(rootReducer, composeEnhancer(...enhancers));
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configStore;
