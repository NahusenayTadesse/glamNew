<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRightIcon, ShoppingBag, SparklesIcon } from '@lucide/svelte';
	import { fly, fade, scale } from 'svelte/transition';
	import { MenuIcon, XIcon } from '@lucide/svelte';
	import DarkMode from './DarkMode.svelte';
	import { onMount } from 'svelte';

	import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
	let isOpen = $state(false);

	const handleMenuClick = (href: string) => {
		isOpen = false;
	};
	import { page } from '$app/state';

	const menuItems = [
		{ label: 'Home', href: '/' },

		{ label: 'About Us', href: '/about-us' },

		{ label: 'Shop', href: '/shop' },
		{ label: 'Contact Us', href: '/contact-us' }
	];

	let offset = 0;

	onMount(() => {
		const handleScroll = () => {
			offset = window.scrollY;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	// Create 15 random particles
	const particles = Array.from({ length: 15 }).map(() => ({
		top: Math.random() * 100,
		left: Math.random() * 100,
		duration: 5 + Math.random() * 10,
		delay: Math.random() * 5
	}));
</script>

<section class="relative min-h-dvh w-full overflow-hidden bg-black text-white">
	<!-- Background Image -->
	{#each particles as p (p)}
		<div
			class="absolute size-1 rounded-full bg-pink-200/40 blur-sm"
			style="top: {p.top}%; left: {p.left}%; animation: float {p.duration}s infinite linear {p.delay}s"
		></div>
	{/each}
	<header
		class="sticky top-0 z-50 w-full px-2 py-2 transition-all duration-300 lg:px-16
    {offset > 50 ? 'border-b border-white/10 bg-black/80 backdrop-blur-md' : 'bg-transparent'}"
	>
		<div class="flex h-14 items-center justify-between px-4 md:px-6">
			<!-- Logo/Title -->
			<div class="flex shrink-0 items-center gap-2">
				<a href="/" class="inline-block">
					<img
						src="/logo.webp"
						width="128"
						height="96"
						class="h-16 w-auto object-contain"
						alt="Amy Bakes Home"
						fetchpriority="high"
					/>
				</a>

				<!-- <span class="text-xl font-bold text-foreground">Lalo Bakery Solution</span> -->
			</div>

			<!-- Desktop Menu -->
			<nav class="hidden items-center gap-1 md:flex">
				{#each menuItems as item (item.href)}
					<Button
						variant={page.url.pathname === item.href ? 'default' : 'ghost'}
						size="sm"
						href={item.href}
						onclick={() => handleMenuClick(item.href)}
					>
						{item.label}
					</Button>
				{/each}
			</nav>

			<div class="flex flex-row items-center justify-end">
				<div class="m-2">
					<!-- Search and Auth -->
				</div>
				<DarkMode />
			</div>

			<!-- Mobile Menu -->
			<div class="md:hidden">
				<Sheet bind:open={isOpen}>
					<SheetTrigger>
						{#snippet child({ props: triggerProps })}
							<Button variant="default" size="icon" {...triggerProps}>
								{#if isOpen}
									<XIcon class="size-5" />
								{:else}
									<MenuIcon class="size-5" />
								{/if}
							</Button>
						{/snippet}
					</SheetTrigger>
					<SheetContent side="right" class="w-64">
						<nav class="mt-8 flex flex-col gap-2">
							{#each menuItems as item (item.href)}
								<Button
									variant="ghost"
									href={item.href}
									class="justify-start"
									onclick={() => handleMenuClick(item.href)}
								>
									{item.label}
								</Button>
							{/each}
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	</header>
	<div
		class="absolute top-10 left-10 h-72 w-72 animate-pulse rounded-full bg-pink-500/30 blur-[120px]"
		style="transform: translateY({offset * 0.2}px)"
	></div>
	<div
		class="absolute right-10 bottom-10 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 blur-[140px]"
		style="transform: translateY({offset * -0.1}px)"
	></div>
	<div class="absolute inset-0">
		<img
			src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070"
			alt="Beauty Salon"
			class="h-full w-full object-cover opacity-40"
		/>
	</div>

	<!-- Glow Effects -->
	<div class="pointer-events-none absolute inset-0">
		<div
			class="absolute top-10 left-10 h-72 w-72 animate-pulse rounded-full bg-pink-500/30 blur-[120px]"
		></div>
		<div
			class="absolute right-10 bottom-10 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 blur-[140px]"
		></div>
		<div
			class="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-400/10 blur-[160px]"
		></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 text-center">
		<div class="max-w-5xl space-y-8">
			<!-- Badge -->
			<div
				transition:fade={{ duration: 600 }}
				class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
			>
				<SparklesIcon class="size-4 text-pink-400" />
				<span class="text-sm font-medium text-pink-300">Luxury Beauty Experience</span>
			</div>

			<!-- Heading -->
			<div transition:fly={{ y: 40, duration: 700 }}>
				<h1 class="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
					<span
						class="animate-shimmer bg-gradient-to-r from-pink-400 via-white to-purple-400 bg-clip-text text-transparent"
					>
						Glam Beauty
					</span>
					<br />
					<span class="text-white/90">Salon & Spa</span>
				</h1>
			</div>

			<!-- Subtitle -->
			<div transition:fade={{ delay: 200, duration: 600 }} class="space-y-4">
				<p class="text-xl font-semibold text-pink-300 sm:text-2xl">Glow Beyond Expectations</p>
				<p class="mx-auto max-w-2xl text-lg text-white/70">
					Indulge in premium hair, skin, and spa treatments designed to elevate your natural beauty.
					Experience elegance, relaxation, and transformation in every visit.
				</p>
			</div>

			<!-- Buttons -->
			<div
				transition:scale={{ delay: 300, duration: 500 }}
				class="flex flex-col justify-center gap-4 sm:flex-row"
			>
				<Button
					size="lg"
					href="/contact-us"
					class="group bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/40 transition hover:scale-105"
				>
					Book Appointment
					<ArrowRightIcon class="ml-2 size-5 transition-transform group-hover:translate-x-1" />
				</Button>
				<Button size="lg" href="/shop" variant="secondary"><ShoppingBag /> Shop</Button>
			</div>

			<!-- Image Cards -->
			<div class="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-3">
				{#each ['https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800', 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800', 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=800'] as img, i (img)}
					<div
						transition:fly={{ y: 40, delay: 400 + i * 150, duration: 600 }}
						class="group relative overflow-hidden rounded-2xl"
					>
						<img
							src={img}
							class="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
						/>
						<div class="absolute inset-0 bg-black/30 transition group-hover:bg-black/10"></div>
					</div>
				{/each}
			</div>

			<!-- Stats -->
			<div class="grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
				{#each [{ label: 'Stylists', value: '20+' }, { label: 'Clients', value: '5K+' }, { label: 'Treatments', value: '30+' }] as stat}
					<div transition:fade={{ delay: 600 }} class="space-y-1">
						<p class="text-2xl font-bold text-pink-400">{stat.value}</p>
						<p class="text-sm text-white/60">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
		<div class="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-2">
			<div class="h-2 w-1 rounded-full bg-white/60"></div>
		</div>
	</div>
</section>

<style>
	@keyframes shimmer {
		0% {
			background-position: -200% center;
		}
		100% {
			background-position: 200% center;
		}
	}
	.animate-shimmer {
		background-size: 200% auto;
		animation: shimmer 5s linear infinite;
	}
</style>
