import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";
import { allApis } from "../Services/allApi";

const reducers = combineReducers({
    [allApis.reducerPath]: allApis.reducer,
});

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware({ serializableCheck: false })
            .concat(allApis.middleware);

        return middlewares;
    },
});

setupListeners(store.dispatch);
export { store };
