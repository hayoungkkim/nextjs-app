import { withRouter } from "next/router";
import Image from "next/image";
import { AspectRatio, Box } from "@chakra-ui/react";

interface Props {
	router: any;
}

const Detail = ({ router: { query } }: Props) => {
	const item = JSON.parse(query.item);
	const { brandName, itemName, itemLink, ItemImages, strikeOutPrice, displayPrice } = item;

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

export default withRouter(Detail);
