<script lang="ts">
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<!-- Animated gradient orbs -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none" in:fade={{ duration: 1000 }}>
		<!-- Large pink orb -->
		<div class="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl animate-pulse-slow"></div>

		<!-- Gold accent orb -->
		<div class="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/25 to-primary/15 blur-3xl animate-pulse-slower"></div>

		<!-- Small floating sparkles -->
		{#each Array(6) as _, i}
			<div
				class="absolute size-2 rounded-full bg-primary/60 animate-sparkle"
				style="
					top: {15 + i * 15}%;
					left: {10 + i * 14}%;
					animation-delay: {i * 0.5}s;
				"
			></div>
		{/each}

		<!-- Decorative lines -->
		<svg class="absolute top-0 left-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" style="stop-color: oklch(var(--primary)); stop-opacity: 0" />
					<stop offset="50%" style="stop-color: oklch(var(--primary)); stop-opacity: 1" />
					<stop offset="100%" style="stop-color: oklch(var(--primary)); stop-opacity: 0" />
				</linearGradient>
			</defs>
			<line x1="0" y1="30%" x2="100%" y2="70%" stroke="url(#lineGradient)" stroke-width="1" class="animate-draw" />
			<line x1="100%" y1="20%" x2="0" y2="80%" stroke="url(#lineGradient)" stroke-width="1" class="animate-draw-reverse" />
		</svg>
	</div>
{/if}

<style>
	@keyframes pulse-slow {
		0%,
		100% {
			opacity: 0.4;
			transform: scale(1);
		}
		50% {
			opacity: 0.6;
			transform: scale(1.05);
		}
	}
	@keyframes pulse-slower {
		0%,
		100% {
			opacity: 0.3;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(1.08);
		}
	}
	@keyframes sparkle {
		0%,
		100% {
			opacity: 0.3;
			transform: scale(1);
		}
		50% {
			opacity: 1;
			transform: scale(1.5);
		}
	}
	@keyframes draw {
		0% {
			stroke-dasharray: 1000;
			stroke-dashoffset: 1000;
		}
		100% {
			stroke-dasharray: 1000;
			stroke-dashoffset: 0;
		}
	}
	:global(.animate-pulse-slow) {
		animation: pulse-slow 6s ease-in-out infinite;
	}
	:global(.animate-pulse-slower) {
		animation: pulse-slower 8s ease-in-out infinite;
	}
	:global(.animate-sparkle) {
		animation: sparkle 3s ease-in-out infinite;
	}
	:global(.animate-draw) {
		animation: draw 3s ease-out forwards;
	}
	:global(.animate-draw-reverse) {
		animation: draw 3s ease-out 0.5s forwards;
	}
</style>
