import { db } from '$lib/server/db';
import {
	products,
	productCategories,
	prices,
	discounts,
	orderItems,
	homeImages,
	youtubeUrl
} from '$lib/server/db/schema';
import { eq, min, sql, desc, sum, count } from 'drizzle-orm';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const bestSelling = await db
		.select({
			id: products.id
		})
		.from(products)
		// Join products to orderItems, not orders
		.innerJoin(orderItems, eq(orderItems.productId, products.id))
		.groupBy(products.id)
		.orderBy(desc(sum(orderItems.quantity)))
		.limit(10);

	const discountedProducts = await db
		.select({
			id: products.id,
			name: discounts.name,
			description: discounts.description
		})
		.from(discounts)
		.leftJoin(products, eq(discounts.productId, products.id))
		.groupBy(products.id);

	const productsData = await db
		.select({
			productId: products.id,
			productName: products.name,
			price: sql<number>`MIN(${prices.price}) * (1 - COALESCE(${discounts.amount}, 0) / 100)`,
			amount: min(prices.amount),
			image: products.featuredImage,
			category: productCategories.name,
			discountPercentage: discounts.amount,
			discountName: discounts.name,
			discountDescription: discounts.description
		})
		.from(products)
		.leftJoin(productCategories, eq(productCategories.id, products.categoryId))
		.innerJoin(prices, eq(prices.productId, products.id))
		.leftJoin(discounts, eq(discounts.productId, products.id))
		.where(eq(products.isActive, true))
		.groupBy(products.id, productCategories.name);

	const allPrices = await db.select().from(prices);

	const rows = await db.select().from(youtubeUrl).limit(1); // Good practice to limit(1) if you only want one

	// 2. Check if a row actually exists before accessing properties
	const video = rows.length > 0 ? rows[0].videoUrl : null;

	// Then filter in memory

	const productList = productsData.map((p) => ({
		...p,
		priceList: allPrices
			.filter((price) => price.productId === p.productId)
			.map((price) => {
				// Ensure discount is a number, default to 0 if null/undefined
				const discount = p.discountPercentage ?? 0;

				return {
					amount: price.amount,
					// Original price if discount is 0, otherwise the reduced price
					price: Number(price.price) * (1 - Number(discount) / 100)
				};
			})
	}));

	const images = await db.select().from(homeImages);

	const gallery = images.map((img) => img.imageUrl);

	// 3. Return everything at once
	return {
		productList,
		bestSelling,
		discountedProducts,
		gallery,
		video
	};
};
