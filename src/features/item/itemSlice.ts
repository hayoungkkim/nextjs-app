import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import type { AppState } from "@/app/store";

export interface ItemState {
	itemId: string;
	itemName: string;
	brandName?: string;
	itemLink?: string;
	strikeOutPrice?: string;
	displayPrice?: string;
	isAdultItem?: boolean;
	ItemImages?: [
		{
			itemId: number;
			src: string;
		}
	];
}

export interface ItemsState {
	itemList?: ItemState[];
	status: "idle" | "loading" | "failed";
}

const initialState: ItemsState = {
	itemList: [],
	status: "idle",
};

export const getItems = createAsyncThunk("item/getItems", async () => {
	const response = await axios.get("http://localhost:3065/api/items");
	return response.data;
});

export const itemSlice = createSlice({
	name: "item",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(HYDRATE, (state, action: any) => {
				const nextState = {
					...state,
					...action.payload.item,
				};
				return nextState;
			})
			.addCase(getItems.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getItems.fulfilled, (state, action) => {
				state.status = "idle";
				state.itemList = action.payload.itemList;
			})
			.addCase(getItems.rejected, (state, action) => {
				state.status = "failed";
			});
	},
});

export const selectItem = (state: AppState) => state.item;

export default itemSlice.reducer;
