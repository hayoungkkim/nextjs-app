import { wrapper } from "@/app/store";
import { getItem } from "@/features/item/itemSlice";
import Image from "next/image";
import { AspectRatio, Box } from "@chakra-ui/react";
import type { GetServerSidePropsContext } from "next";

const Detail = ({ data }) => {
	const { brandName, itemName, itemLink, ItemImages, strikeOutPrice, displayPrice } = data.payload.data;
	console.log(data);

	return (
		<Box maxW="7xl" mx="auto" px={{ base: "4", md: "8", lg: "12" }} py={{ base: "6", md: "8", lg: "12" }}>
			브랜드명 : {brandName}
			<br />
			상품명 : {itemName}
			<br />
			판매가 : {strikeOutPrice}
			<br />
			최적가 : {displayPrice}
			<AspectRatio ratio={1}>
				<Image src={ItemImages[0].src} layout="fill" alt={itemName} />
			</AspectRatio>
		</Box>
	);
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (params: GetServerSidePropsContext) => {
	const { id } = params.query;
	const data = await store.dispatch(getItem(id));

	return {
		props: { data },
	};
});

export default Detail;
