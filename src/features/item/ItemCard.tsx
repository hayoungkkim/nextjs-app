import { AspectRatio, Box, Button, HStack, Link as ChakraLink, Stack, StackProps, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { PriceTag } from "./PriceTag";
import { IItem } from "@/entities/item";
interface Props {
	item: IItem;
	rootProps?: StackProps;
}

export const ItemCard = (props: Props) => {
	const { item, rootProps } = props;
	const { brandName, itemName, itemLink, ItemImages, strikeOutPrice, displayPrice } = item;
	return (
		<Stack spacing={{ base: "4", md: "5" }} {...rootProps}>
			<Box position="relative">
				{ItemImages && (
					<AspectRatio ratio={1}>
						<Image src={ItemImages[0].src} layout="fill" alt={itemName} />
					</AspectRatio>
				)}
			</Box>
			<Stack>
				<Stack spacing="1">
					<Text fontWeight="semibold" color={useColorModeValue("gray.700", "gray.400")}>
						{brandName}
					</Text>
					<Text fontWeight="medium" color={useColorModeValue("gray.700", "gray.400")}>
						{itemName}
					</Text>
					<PriceTag price={strikeOutPrice} salePrice={displayPrice} currency="KRW" />
				</Stack>
				<HStack>
					<Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
						12 Reviews
					</Text>
				</HStack>
			</Stack>
			<Stack align="center">
				<Button colorScheme="blue" isFullWidth>
					Add to cart
				</Button>
				<Link href={itemLink ?? "#"} passHref>
					<ChakraLink textDecoration="underline" fontWeight="medium" color={useColorModeValue("gray.600", "gray.400")}>
						Quick shop
					</ChakraLink>
				</Link>
			</Stack>
		</Stack>
	);
};
