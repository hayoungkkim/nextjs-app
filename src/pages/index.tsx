import type { NextPage } from "next";
import { wrapper } from "@/app/store";
import { useAppSelector } from "@/app/hook";
import { getItems, selectItem } from "@/features/item/itemSlice";
import { Box } from "@chakra-ui/react";
import { ItemGrid } from "@/features/item/ItemGrid";
import { ItemCard } from "@/features/item/ItemCard";
import { mapItem } from "@/entities/item";

const Home: NextPage = () => {
	const { itemList } = useAppSelector(selectItem);

	return (
		<Box maxW="7xl" mx="auto" px={{ base: "4", md: "8", lg: "12" }} py={{ base: "6", md: "8", lg: "12" }}>
			<ItemGrid>
				{itemList?.map(mapItem).map((item) => (
					<ItemCard key={item.itemId} item={item} />
				))}
			</ItemGrid>
		</Box>
	);
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
	await store.dispatch(getItems());

	return {
		props: {},
	};
});

export default Home;
