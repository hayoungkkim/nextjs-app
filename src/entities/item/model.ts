import { IItem, IItemImages } from "./types";

export function mapItem(data: any): IItem {
	return {
		itemId: data.itemId,
		itemName: data.itemName,
		brandName: data.brandName,
		itemLink: data.itemLink,
		strikeOutPrice: data.strikeOutPrice,
		displayPrice: data.displayPrice,
		isAdultItem: data.isAdultItem,
		ItemImages: data.ItemImages.map(mapItemImages),
	};
}

export function mapItemImages(data: any): IItemImages {
	return {
		itemId: data.itemId,
		src: data.src,
	};
}
