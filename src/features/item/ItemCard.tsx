import Image from "next/image";
import { ItemState } from "./itemSlice";

interface Props {
	item: ItemState;
}

export const ItemCard = (props: Props) => {
	const { item } = props;
	const { brandName, itemName, ItemImages, strikeOutPrice, displayPrice } = item;
	return (
		<div>
			<p>{brandName}</p>
			<p>{itemName}</p>
			{ItemImages && <Image src={ItemImages[0].src} width="300" height="300" layout="fixed" alt="" />}
			<p>{strikeOutPrice}</p>
			<p>{displayPrice}</p>
		</div>
	);
};
