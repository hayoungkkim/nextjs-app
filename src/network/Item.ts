import Base from "./Base";
import { IItem, IItemList } from "@/entities/item";

export default class Item extends Base {
	public async fetchItem(itemId: number): Promise<IItem> {
		const response = await this.ajaxGet(`/item/${itemId}`);
		return response.data;
	}

	public async fetchItems(): Promise<IItemList> {
		const response = await this.ajaxGet("/items");
		return response.data;
	}
}
