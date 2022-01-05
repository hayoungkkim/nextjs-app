import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import clockReducer from "../features/clock/clockSlice";

import { createWrapper } from "next-redux-wrapper";

const rootReducer = combineReducers({
	counter: counterReducer,
	clock: clockReducer,
});

export const makeStore = () => {
	return configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV !== "production",
	});
};

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
