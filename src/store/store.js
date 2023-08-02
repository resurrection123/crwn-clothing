import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk'
//create middleware
//intermediario,prima che raggiunga il riduttore
//create storec

//tutto avviene in sync

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean);
//permette di creare Enhancers da utilizzare in fase di creazione dello store
//possiamo aggiungere più middleware
//compose è un concetto della programmazione funzionale,è un modo per passare più funzioni
const composedEnhancers = compose(applyMiddleware(...middleware));
export const store = createStore(persistedReducer, undefined, composedEnhancers)
export const persistor = persistStore(store); 