<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
	import { elasticOut, backOut } from 'svelte/easing';
	import Gallery from './gallery.svelte';

	let { title = 'The Masterpiece Collection', images = [] } = $props();

	// A little state for a "sparkle" effect on hover
	let isHovered = $state(false);
</script>

<div
	class="relative min-h-screen overflow-hidden bg-[#fffafa] px-6 py-24 transition-colors duration-700 dark:bg-[#0a0a0a]"
	onmouseenter={() => (isHovered = true)}
	onmouseleave={() => (isHovered = false)}
>
	<div
		class="pointer-events-none absolute top-[-10%] right-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-pink-200/40 blur-[120px] transition-transform duration-1000 dark:bg-pink-900/10"
		style:transform={isHovered ? 'scale(1.1) translate(-20px, 20px)' : 'scale(1)'}
	></div>
	<div
		class="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-rose-100/30 blur-[150px] dark:bg-rose-900/5"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl">
		<header class="relative mb-20 text-center">
			{#if isHovered}
				<div
					transition:scale={{ duration: 600, easing: elasticOut, start: 0.5 }}
					class="mb-4 flex items-center justify-center gap-4"
				>
					<div class="h-[2px] w-8 rounded-full bg-pink-300 dark:bg-pink-800"></div>
					<span class="text-[10px] font-black tracking-[0.4em] text-pink-400 uppercase"
						>✨ Lovely ✨</span
					>
					<div class="h-[2px] w-8 rounded-full bg-pink-300 dark:bg-pink-800"></div>
				</div>
			{:else}
				<div in:fade class="mb-4 flex items-center justify-center gap-4">
					<div class="h-[1px] w-12 bg-pink-200 dark:bg-pink-800"></div>
					<span class="text-xs font-bold tracking-[0.3em] text-pink-500 uppercase">Est. 2024</span>
					<div class="h-[1px] w-12 bg-pink-200 dark:bg-pink-800"></div>
				</div>
			{/if}

			<h1
				in:fly={{ y: 30, duration: 1000, easing: backOut }}
				class="mb-6 font-serif text-6xl font-extralight tracking-tight text-zinc-900 md:text-7xl dark:text-zinc-100"
			>
				{title}<span class="text-pink-400">.</span>
			</h1>

			<p
				in:fade={{ delay: 400, duration: 1000 }}
				class="mx-auto max-w-xl leading-relaxed font-light text-zinc-500 dark:text-zinc-400"
			>
				Where precision meets <span class="text-pink-400/80 italic">passion</span>. Explore our
				curated selection of signature transformations.
			</p>
		</header>

		<div in:fly={{ y: 40, delay: 600, duration: 1200, easing: cubicOut }} class="hover-float">
			<Gallery {images} {title} bento />
		</div>
	</div>
</div>

<style>
	/* A gentle floating animation for the whole gallery */
	.hover-float {
		transition: transform 0.5s ease-in-out;
	}
	.hover-float:hover {
		transform: translateY(-8px);
	}

	/* Soften the font if you have a serif import, otherwise standard serif is fine */
	h1 {
		text-wrap: balance;
	}
</style>
