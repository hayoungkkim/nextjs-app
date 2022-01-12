import Base from "./Base";
import { IItemList } from "@/entities/item";

export default class Item extends Base {
	public async fetchItem(): Promise<IItemList> {
		const response = await this.ajaxGet("/items");
		return response.data;
	}
}
