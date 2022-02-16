import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IItem } from "@/entities/item";

import type { AppState } from "@/app/store";
import network from "@/network";

export interface ItemsState {
	itemList?: IItem[];
	status: "idle" | "loading" | "failed";
}

const initialState: ItemsState = {
	itemList: [],
	status: "idle",
};

export const getItems = createAsyncThunk("item/getItems", async () => {
	const itemData = await network.item().fetchItems();
	return itemData;
});
export const getItem = createAsyncThunk("item/getItem", async (itemId: number) => {
	const itemData = await network.item().fetchItem(itemId);
	return itemData;
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
