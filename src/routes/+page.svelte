<script lang="ts">
	import { setCart } from '$lib/hooks/cart.svelte.js';

	import ProductCard from '$lib/components/product-card.svelte';

	// Set app and cart hooks
	setCart();
	let { data } = $props();

	let product = $derived(data?.productList);
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Hero from '$lib/components/hero.svelte';
	import HeroSection from '$lib/components/heroSection.svelte';
	import About from '$lib/components/about.svelte';
	import Accordion from '$lib/components/accordion.svelte';
	import Gallery from '$lib/components/gallery.svelte';

	let src = $derived.by(() => {
		const regex =
			/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
		const match = data?.video?.match(regex);
		return match ? match[1] : '';
	});
</script>

<svelte:head>
	<title>Home | Glam Beauty Salon</title>
</svelte:head>

<HeroSection {src} />
<About />

<!-- Main Content -->
<main class="container mx-auto px-4 py-8 pb-24">
	<div class="mb-8">
		<h2 class="mb-2 text-2xl font-bold">Products</h2>
		<p class="text-muted-foreground">Click on products to add them to your cart.</p>
	</div>

	<Carousel.Root
		opts={{
			align: 'start'
		}}
		class="w-full"
	>
		<Carousel.Content>
			{#each product as product (product.productId)}
				<Carousel.Item class="w-full md:basis-1/2 lg:basis-1/5">
					<ProductCard {...product} />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</main>
<Gallery images={data?.gallery} title="Our Team" />

<Accordion />
