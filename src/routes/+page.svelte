<script lang="ts">
	import { setCart } from '$lib/hooks/cart.svelte.js';

	import ProductCard from '$lib/components/product-card.svelte';

	// Set app and cart hooks
	setCart();
	let { data } = $props();

	let product = $derived(data?.productList);
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import HeroSection from '$lib/components/heroSection.svelte';
	import About from '$lib/components/about.svelte';
	import Accordion from '$lib/components/accordion.svelte';
	import Gallery from '$lib/components/ShowGallery.svelte';

	let src = $derived.by(() => {
		const regex =
			/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
		const match = data?.video?.match(regex);
		return match ? match[1] : '';
	});
</script>

<svelte:head>
	<title>Glam Beauty | 24/7 Premium Spa & Beauty Salon in Addis Ababa</title>
	<meta name="title" content="Glam Beauty | 24/7 Premium Spa & Beauty Salon in Addis Ababa" />
	<meta
		name="description"
		content="Addis Ababa's premier 24-hour beauty salon and spa. Professional hair styling, organic skincare, and wellness massage available anytime. Visit us in Addis for luxury care."
	/>
	<meta
		name="keywords"
		content="spa in Addis Ababa, 24 hour spa Addis, beauty salon Addis Ababa, massage Addis Ababa, hair salon Addis, best spa Ethiopia, late night beauty services"
	/>

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://yourwebsite.com/" />
	<meta property="og:title" content="Glam Beauty | 24/7 Luxury Spa & Salon Addis Ababa" />
	<meta
		property="og:description"
		content="Open 24 hours. Experience world-class beauty treatments and wellness in the heart of Addis Ababa. Book your midnight glow-up today."
	/>
	<meta property="og:image" content="https://yourwebsite.com/glam-preview.jpg" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="Glam Beauty | 24/7 Spa & Salon Addis Ababa" />
	<meta
		property="twitter:description"
		content="Premium beauty services 24/7. The best hair, skin, and massage experts in Addis Ababa."
	/>
</svelte:head>

<HeroSection {src} images={data?.gallery} />
<About />

<Gallery images={data?.gallery} title="Our Clients" />

<!-- Main Content -->

{#if data?.productList.length}
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
{/if}

<Accordion />
