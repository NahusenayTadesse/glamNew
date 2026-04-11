<script lang="ts">
	import { onMount } from 'svelte';
	import Gallery from '$lib/components/gallery.svelte';

	let { images, title }: { images: string[]; title: string } = $props();

	let visible = $state(false);
	let sectionRef = $state<HTMLElement | null>(null);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) visible = true;
			},
			{ threshold: 0.15 }
		);
		if (sectionRef) observer.observe(sectionRef);
		return () => observer.disconnect();
	});
</script>

<section bind:this={sectionRef} class="relative overflow-hidden bg-stone-50 px-4 py-24">
	<!-- Ambient background blobs -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div class="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-rose-100/60 blur-3xl"></div>
		<div class="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-pink-100/50 blur-3xl"></div>
		<div
			class="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-200/40 blur-2xl"
		></div>
	</div>

	<!-- Subtle grid texture -->
	<div
		class="pointer-events-none absolute inset-0"
		style="background-image: radial-gradient(circle, #d6d3d1 1px, transparent 1px); background-size: 32px 32px; opacity: 0.25;"
	></div>

	<div class="relative mx-auto max-w-6xl">
		<!-- Section header -->
		<div
			class="mb-16 flex flex-col items-center text-center transition-all duration-700 ease-out"
			style="opacity: {visible ? 1 : 0}; transform: translateY({visible ? 0 : 28}px);"
		>
			<!-- Eyebrow label -->
			<div class="mb-5 flex items-center gap-3">
				<span class="h-px w-12 bg-rose-300"></span>
				<span class="font-mono text-xs tracking-[0.25em] text-rose-400 uppercase">
					Trusted by many
				</span>
				<span class="h-px w-12 bg-rose-300"></span>
			</div>

			<!-- Main heading -->
			<h2
				class="font-serif text-5xl leading-tight font-light tracking-tight text-zinc-800 sm:text-6xl"
				style="font-family: 'Playfair Display', 'Georgia', serif;"
			>
				Our
				<em class="text-rose-400 italic not-italic" style="font-style: italic;">Clients</em>
			</h2>

			<!-- Ornamental divider -->
			<div class="mt-6 flex items-center gap-2">
				<span class="h-px w-16 bg-zinc-300"></span>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="text-rose-300">
					<path
						d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z"
						fill="currentColor"
					/>
				</svg>
				<span class="h-px w-16 bg-zinc-300"></span>
			</div>

			<!-- Subline -->
			<p class="mt-5 max-w-md text-base leading-relaxed text-zinc-500">
				Moments of beauty, captured. A glimpse into the transformations we create every day.
			</p>
		</div>

		<!-- Gallery wrapper -->
		<div
			class="transition-all delay-200 duration-700 ease-out"
			style="opacity: {visible ? 1 : 0}; transform: translateY({visible ? 0 : 20}px);"
		>
			<!-- Decorative corner accents -->
			<div class="relative rounded-2xl">
				<span
					class="absolute -top-2 -left-2 h-6 w-6 rounded-tl-md border-t-2 border-l-2 border-rose-300"
				></span>
				<span
					class="absolute -top-2 -right-2 h-6 w-6 rounded-tr-md border-t-2 border-r-2 border-rose-300"
				></span>
				<span
					class="absolute -bottom-2 -left-2 h-6 w-6 rounded-bl-md border-b-2 border-l-2 border-rose-300"
				></span>
				<span
					class="absolute -right-2 -bottom-2 h-6 w-6 rounded-br-md border-r-2 border-b-2 border-rose-300"
				></span>

				<Gallery {images} {title} />
			</div>
		</div>

		<!-- Footer flourish -->
		<div
			class="mt-16 flex flex-col items-center gap-4 transition-all delay-300 duration-700 ease-out"
			style="opacity: {visible ? 1 : 0}; transform: translateY({visible ? 0 : 16}px);"
		>
			<div class="flex items-center gap-2 text-zinc-400">
				<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
					<path
						d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z"
						fill="currentColor"
						opacity="0.4"
					/>
				</svg>
				<span class="font-mono text-xs tracking-widest text-zinc-400 uppercase">Est. 2018</span>
				<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
					<path
						d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z"
						fill="currentColor"
						opacity="0.4"
					/>
				</svg>
			</div>
		</div>
	</div>
</section>

<!-- Load Playfair Display from Google Fonts -->
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
