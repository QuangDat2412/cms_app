import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import authReducer from './auth/auth.slice';
import courseReducer from './course/course.slice';
import userReducer from './user/user.slice';
import othersSlice from './others/slice';
import authSaga from './auth/auth.saga';
import courseSaga from './course/course.saga';
import userSaga from './user/user.saga';
import otherSaga from './others/saga';
const rootReducer = combineReducers({ auth: authReducer, others: othersSlice, courses: courseReducer, users: userReducer });
const composeEnhancer =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              shouldHotReload: false,
          })
        : compose;
function* rootSaga() {
    console.log('rootSaga');
    try {
        yield all([authSaga(), courseSaga(), userSaga(), otherSaga()]);
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
