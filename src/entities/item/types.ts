export interface IItemList {
	itemList: IItem[];
}

export interface IItem {
	itemId: number;
	itemName: string;
	brandName?: string;
	itemLink?: string;
	strikeOutPrice?: number;
	displayPrice?: number;
	isAdultItem?: boolean;
	ItemImages?: IItemImages[];
}

export interface IItemImages {
	itemId: number;
	src: string;
}
