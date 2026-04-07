<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { SparklesIcon, ArrowRightIcon, ShoppingBag } from '@lucide/svelte';

	import { fly, fade, scale } from 'svelte/transition';

	let { src }: { src: string } = $props();
</script>

<section class="relative min-h-dvh w-full overflow-hidden bg-primary">
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div
			class="absolute top-20 right-1/3 size-72 rounded-full bg-primary-foreground/10 blur-3xl"
		></div>
		<div
			class="absolute bottom-20 left-10 size-96 rounded-full bg-primary-foreground/5 blur-3xl"
		></div>
	</div>

	<div
		class="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col items-center justify-center px-4 py-10 sm:px-6 lg:px-8"
	>
		<div class="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<div class="order-2 space-y-8 lg:order-1">
				<div
					transition:fade={{ duration: 600 }}
					class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
				>
					<SparklesIcon class="size-4 text-gray-800" />
					<span class="text-sm font-medium text-gray-800">Luxury Beauty Experience</span>
				</div>

				<!-- Heading -->
				<div transition:fly={{ y: 40, duration: 700 }}>
					<h1 class="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
						<span
							class="animate-shimmer bg-linear-to-r from-pink-400 via-gray-900 to-purple-400 bg-clip-text text-transparent"
						>
							Glam Beauty
						</span>
						<br />
						<span class="text-white/90">Salon & Spa</span>
					</h1>
				</div>

				<!-- Subtitle -->
				<div transition:fade={{ delay: 200, duration: 600 }} class="space-y-4">
					<p class="text-xl font-semibold text-gray-700 sm:text-2xl">Glow Beyond Expectations</p>
					<p class="mx-auto max-w-2xl text-lg text-gray-700">
						Indulge in premium hair, skin, and spa treatments designed to elevate your natural
						beauty. Experience elegance, relaxation, and transformation in every visit.
					</p>
				</div>

				<!-- Buttons -->
				<div
					transition:scale={{ delay: 300, duration: 500 }}
					class="flex flex-col justify-start gap-4 sm:flex-row"
				>
					<Button
						size="lg"
						href="/contact-us"
						class="group bg-linear-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/40 transition hover:scale-105"
					>
						Contact Us
						<ArrowRightIcon class="ml-2 size-5 transition-transform group-hover:translate-x-1" />
					</Button>
					<Button size="lg" href="/shop" variant="secondary"><ShoppingBag /> Shop</Button>
				</div>

				<div
					transition:fly={{ y: 20, duration: 600, delay: 500 }}
					class="grid grid-cols-3 gap-4 border-t border-primary-foreground/20 pt-8 sm:gap-8"
				>
					{#each [{ label: 'Stylists', value: '20+' }, { label: 'Clients', value: '5k+' }, { label: 'Treatments', value: '30%' }] as stat (stat.label)}
						<div class="flex flex-col gap-2">
							<p class="text-2xl font-bold text-primary-foreground sm:text-3xl">{stat.value}</p>
							<p class="text-sm text-primary-foreground/60">{stat.label}</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="order-1 lg:order-2" transition:fly={{ x: 20, duration: 600, delay: 200 }}>
				<div
					class="relative aspect-video w-full overflow-hidden rounded-2xl border-4 border-primary-foreground/20 shadow-2xl"
				>
					<iframe
						class="absolute inset-0 h-full w-full"
						src="https://www.youtube.com/embed/{src}"
						title="How To Make Perfect Chocolate Chip Cookies"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
	</div>
</section>
