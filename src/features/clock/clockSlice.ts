import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import type { AppState, AppThunk } from "@/app/store";

export interface ClockState {
	lastUpdate: number;
	light: boolean;
}

const initialState: ClockState = {
	lastUpdate: 0,
	light: false,
};

export const clockSlice = createSlice({
	name: "clock",
	initialState,
	reducers: {
		tick: (state, action: PayloadAction<ClockState>) => {
			state.lastUpdate = action.payload.lastUpdate;
			state.light = !!action.payload.light;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(HYDRATE, (state, action: any) => {
			return { ...state, ...action.payload.clock };
		});
	},
});

export const { tick } = clockSlice.actions;

export const selectClock = (state: AppState) => state.clock;

export const serverRenderClock =
	(isServer: boolean): AppThunk =>
	(dispatch) => {
		dispatch(
			tick({
				light: !isServer,
				lastUpdate: Date.now(),
			})
		);
	};
export const startClock = (): AppThunk => (dispatch) => {
	dispatch(tick({ light: true, lastUpdate: Date.now() }));
};

export default clockSlice.reducer;
