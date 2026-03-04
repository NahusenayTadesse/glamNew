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
		ScissorsIcon
	} from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	const highlights = [
		{
			icon: ShieldCheckIcon,
			label: 'Certified Experts',
			description: 'Licensed professional therapists'
		},
		{
			icon: SparklesIcon,
			label: 'Premium Products',
			description: 'Organic & high-end skincare'
		},
		{ icon: CalendarIcon, label: 'Since 2011', description: 'A decade of beauty excellence' },
		{ icon: HeartIcon, label: 'Client Centric', description: 'Personalized beauty journeys' }
	];

	const services = ['Hair Styling', 'Skincare', 'Massage', 'Nail Art', 'Bridal', 'Wellness'];

	const subBrands = [
		{ name: 'Glam Luxe', description: 'Exclusive high-end cosmetic line' },
		{
			name: 'Radiance Academy',
			description: 'Professional training for aspiring stylists'
		}
	];
</script>

<section
	class="relative bg-linear-to-b from-background via-rose-50/20 to-background px-4 py-16 sm:px-6 lg:px-8"
>
	<div class="mx-auto max-w-5xl">
		<div transition:fly={{ y: 20, duration: 600 }} class="mb-12 flex flex-col gap-3 text-center">
			<h2 class="text-3xl font-bold text-foreground sm:text-4xl">The Glam Beauty Story</h2>
			<p class="mx-auto max-w-2xl text-base text-foreground/70">
				Founded in 2011, we have evolved from a boutique salon into a sanctuary for wellness,
				offering bespoke beauty services that rejuvenate both body and soul.
			</p>
		</div>

		<div class="mb-12 grid gap-6 lg:grid-cols-3">
			<div transition:fly={{ y: 20, duration: 600, delay: 100 }} class="lg:col-span-2">
				<Card class="h-full border-rose-100 shadow-sm">
					<CardHeader class="pb-3">
						<CardTitle class="text-xl">Our Philosophy</CardTitle>
						<CardDescription>Beauty as an Experience</CardDescription>
					</CardHeader>
					<CardContent class="flex flex-col gap-3 text-sm sm:text-base">
						<p class="leading-relaxed text-foreground/80">
							Originally a single-chair studio, Glam Beauty was born from a passion for empowering
							individuals through self-care. Today, we offer a curated selection of world-class
							treatments, from precision hair design to advanced aesthetic skincare.
						</p>
						<p class="leading-relaxed text-foreground/80">
							We believe that beauty isn't just about the results—it's about the feeling of being
							cared for. Our team stays at the forefront of global trends to ensure you always
							receive the most innovative care available.
						</p>
					</CardContent>
				</Card>
			</div>

			<div transition:fly={{ y: 20, duration: 600, delay: 200 }} class="flex flex-col gap-3">
				{#each highlights as highlight (highlight.label)}
					<Card class="border-rose-100 bg-white/50 transition-all hover:bg-white">
						<CardContent class="flex items-center gap-3 p-4">
							<div class="shrink-0">
								<div class="flex size-9 items-center justify-center rounded-full bg-rose-100">
									<svelte:component this={highlight.icon} class="size-5 text-rose-500" />
								</div>
							</div>
							<div class="min-w-0 flex-1">
								<p class="text-xs font-bold tracking-wide text-foreground uppercase">
									{highlight.label}
								</p>
								<p class="text-xs text-foreground/60">{highlight.description}</p>
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>

		<div transition:fly={{ y: 20, duration: 600, delay: 300 }} class="mb-12">
			<Card class="border-rose-100 shadow-sm">
				<CardHeader class="pb-4">
					<CardTitle class="text-center text-lg">Our Signature Services</CardTitle>
				</CardHeader>
				<CardContent>
					<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
						{#each services as service (service)}
							<div
								class="flex flex-col items-center gap-2 rounded-xl border border-rose-50 bg-rose-50/30 p-4 text-center transition-all hover:border-rose-200"
							>
								<span class="text-sm font-semibold text-foreground">{service}</span>
							</div>
						{/each}
					</div>
				</CardContent>
			</Card>
		</div>

		<div transition:fly={{ y: 20, duration: 600, delay: 400 }}>
			<div class="rounded-2xl bg-linear-to-r from-rose-50 to-purple-50 p-6 sm:p-8">
				<div class="mb-6 text-center">
					<h3 class="text-xl font-bold">The Glam Collection</h3>
					<p class="text-sm text-foreground/70">Expanding the boundaries of beauty</p>
				</div>
				<div class="grid gap-4 md:grid-cols-2">
					{#each subBrands as brand (brand.name)}
						<div class="rounded-xl bg-white/80 p-5 shadow-sm backdrop-blur-sm">
							<h4 class="mb-1 text-sm font-bold text-rose-600">{brand.name}</h4>
							<p class="text-xs text-foreground/70">{brand.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
