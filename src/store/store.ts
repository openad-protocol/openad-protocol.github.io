import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore } from 'redux-persist';

import { bannersPersistReducer, bannersSlice } from 'modules/banners';
import { dashboardPersistReducer, dashboardSlice } from 'modules/dashboard';
import { dialogSlice } from 'modules/dialogs';
import { web3Api } from './web3Api';

const rootReducer = combineReducers({
  [web3Api.reducerPath]: web3Api.reducer,
  [dialogSlice.name]: dialogSlice.reducer,
  [dashboardSlice.name]: dashboardPersistReducer,
  [bannersSlice.name]: bannersPersistReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // TODO: fix serializable error
      // https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
      serializableCheck: false,
    }).concat(web3Api.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
