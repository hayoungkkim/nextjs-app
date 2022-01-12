import type { NextPage } from "next";
import { wrapper } from "@/app/store";
import { useAppSelector } from "@/app/hook";
import { getItems, selectItem } from "@/features/item/itemSlice";
import { ItemCard } from "@/features/item/ItemCard";

import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
	const { itemList } = useAppSelector(selectItem);

	return (
		<>
			{itemList?.map((item) => (
				<ItemCard key={item.itemId} item={item} />
			))}
			<Box>123</Box>
		</>
	);
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
	await store.dispatch(getItems());

	return {
		props: {},
	};
});

export default Home;
