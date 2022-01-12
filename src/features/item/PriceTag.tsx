import { HStack, StackProps, Text, TextProps, useColorModeValue as mode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PriceTagProps {
	currency: string;
	price?: number;
	salePrice?: number;
	rootProps?: StackProps;
	priceProps?: TextProps;
	salePriceProps?: TextProps;
}

export type FormatPriceOptions = { locale?: string; currency?: string };

export function formatPrice(value: number, opts: { locale?: string; currency?: string } = {}) {
	const { locale = "ko-KR", currency = "KRW" } = opts;
	const formatter = new Intl.NumberFormat(locale, {
		currency,
		style: "currency",
		maximumFractionDigits: 2,
	});
	return formatter.format(value);
}

export const PriceTag = (props: PriceTagProps) => {
	const { price, currency, salePrice, rootProps, priceProps, salePriceProps } = props;
	return (
		<HStack spacing="1" {...rootProps}>
			{price && <Price textProps={priceProps}>{formatPrice(price, { currency })}</Price>}
			{salePrice && <SalePrice {...salePriceProps}>{formatPrice(salePrice, { currency })}</SalePrice>}
		</HStack>
	);
};

interface PriceProps {
	children?: ReactNode;
	textProps?: TextProps;
}

const Price = (props: PriceProps) => {
	const { children, textProps } = props;
	return (
		<Text as="span" fontWeight="medium" color={mode("gray.400", "gray.700")} textDecoration="line-through" {...textProps}>
			{children}
		</Text>
	);
};

const SalePrice = (props: TextProps) => <Text as="span" fontWeight="semibold" color={mode("gray.800", "gray.100")} {...props} />;
