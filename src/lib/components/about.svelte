<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';

	import {
		HeartIcon,
		SparklesIcon,
		CalendarIcon,
		ShieldCheckIcon,
		ClockIcon
	} from '@lucide/svelte';
	import { fly, fade, scale } from 'svelte/transition';
	import { cubicOut, elasticOut } from 'svelte/easing';

	const highlights = [
		// 24/7 moved to the top of the list
		{
			icon: ClockIcon,
			label: 'Always Open',
			description: '24/7 Premium beauty services',
			featured: true
		},
		{
			icon: ShieldCheckIcon,
			label: 'Certified Experts',
			description: 'Licensed professional therapists'
		},
		{ icon: SparklesIcon, label: 'Premium Products', description: 'Organic skincare' },
		{ icon: HeartIcon, label: 'Client Centric', description: 'Personalized journeys' }
	];

	const services = ['Hair Styling', 'Skincare', 'Massage', 'Nail Art', 'Bridal', 'Wellness'];

	const subBrands = [
		{ name: 'Glam Luxe', description: 'Exclusive high-end cosmetic line' },
		{ name: 'Radiance Academy', description: 'Professional training for aspiring stylists' }
	];
</script>

<section class="glam-section relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div in:fly={{ y: 50, duration: 1000, easing: cubicOut }} class="mb-20 text-center">
			<div
				class="inline-block"
				in:scale={{ start: 0.5, duration: 800, delay: 200, easing: elasticOut }}
			>
				<span class="label-chip mx-auto">Available 24/7</span>
			</div>

			<h2 class="glam-title mt-6 text-5xl font-black tracking-tighter sm:text-7xl">
				Beauty Without Borders
			</h2>

			<p
				class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed font-medium text-muted-foreground/80"
			>
				Glam Beauty defines the new standard of luxury: <span class="text-primary italic"
					>Your time is our time</span
				>. Experience world-class artistry at any hour of the day or night.
			</p>
		</div>

		<div class="mb-12 grid gap-8 lg:grid-cols-3">
			<div in:fly={{ x: -50, duration: 800, delay: 300, easing: cubicOut }} class="lg:col-span-2">
				<Card class="glam-glass h-full overflow-hidden border-white/10 shadow-2xl">
					<CardHeader class="relative z-10">
						<CardTitle class="text-3xl font-bold tracking-tight">Our Philosophy</CardTitle>
						<CardDescription class="font-semibold tracking-widest text-primary uppercase"
							>Excellence Around the Clock</CardDescription
						>
					</CardHeader>

					<CardContent
						class="relative z-10 space-y-6 text-base leading-relaxed text-muted-foreground"
					>
						<p>
							We realized that true beauty doesn't follow a 9-to-5 schedule. Whether it's a
							<strong class="text-foreground">midnight rejuvenation</strong> or a
							<strong class="text-foreground">sunrise styling session</strong>, we are here.
						</p>

						<p>
							By offering 24-hour services, we cater to the modern high-flyer, the late-night
							dreamer, and everyone in between. Our commitment to accessibility is as deep as our
							commitment to quality.
						</p>

						<div class="shimmer-bar h-1 w-32 rounded-full"></div>
					</CardContent>
				</Card>
			</div>

			<div class="flex flex-col gap-4">
				{#each highlights as highlight, i}
					<div in:fly={{ x: 50, duration: 600, delay: 400 + i * 100 }}>
						<Card
							class="group highlight-card-3d overflow-hidden border-border/40 {highlight.featured
								? 'border-primary/30 bg-primary/10'
								: 'bg-card/40'} backdrop-blur-md transition-all"
						>
							<CardContent class="flex items-center gap-4 p-5">
								<div
									class="icon-box relative flex size-12 items-center justify-center rounded-2xl {highlight.featured
										? 'bg-primary text-white'
										: 'bg-primary/20'} transition-all duration-500"
								>
									<svelte:component this={highlight.icon} class="size-6" />
								</div>

								<div>
									<p class="text-xs font-black tracking-widest text-primary uppercase">
										{highlight.label}
									</p>
									<p class="text-sm font-medium text-muted-foreground group-hover:text-foreground">
										{highlight.description}
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	/* Keep your existing CSS animations */
	/* Add this small tweak to the 'featured' 24/7 card pulse */
	.bg-primary\/10 {
		animation: pulseGlow 4s infinite ease-in-out;
	}
</style>
