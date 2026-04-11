<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button';
	import { XIcon, ChevronLeftIcon, ChevronRightIcon } from '@lucide/svelte';

	// Props
	let {
		images,
		currentIndex = $bindable(0),
		isOpen = $bindable(false),
		title = 'Gallery'
	}: {
		images: string[];
		currentIndex?: number;
		isOpen?: boolean;
		title?: string;
	} = $props();

	// Derived values
	let currentImage = $derived(images[currentIndex]);
	let hasNext = $derived(currentIndex < images.length - 1);
	let hasPrev = $derived(currentIndex > 0);

	/** Close the lightbox */
	const close = () => {
		isOpen = false;
	};

	/** Go to next image */
	const next = () => {
		if (hasNext) currentIndex++;
	};

	/** Go to previous image */
	const prev = () => {
		if (hasPrev) currentIndex--;
	};

	/** Handle keyboard navigation */
	const handleKeydown = (e: KeyboardEvent) => {
		if (!isOpen) return;
		switch (e.key) {
			case 'Escape':
				close();
				break;
			case 'ArrowRight':
				next();
				break;
			case 'ArrowLeft':
				prev();
				break;
		}
	};

	/** Handle backdrop click */
	const handleBackdropClick = (e: MouseEvent) => {
		if (e.target === e.currentTarget) close();
	};
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<!-- Backdrop -->
	<div
		class="lb-backdrop"
		role="dialog"
		aria-modal="true"
		aria-label="Image lightbox"
		transition:fade={{ duration: 300 }}
		onclick={handleBackdropClick}
		tabindex="-1"
	>
		<!-- Bokeh orbs for ambiance -->
		<div class="lb-orb lb-orb-1" aria-hidden="true"></div>
		<div class="lb-orb lb-orb-2" aria-hidden="true"></div>
		<div class="lb-orb lb-orb-3" aria-hidden="true"></div>

		<!-- Close button -->
		<button class="lb-close" onclick={close} aria-label="Close lightbox">
			<XIcon size={18} />
		</button>

		<!-- Image counter + title -->
		<div class="lb-header">
			<span class="lb-title">{title}</span>
			<span class="lb-divider">✦</span>
			<span class="lb-counter">{currentIndex + 1} of {images.length}</span>
		</div>

		<!-- Previous button -->
		{#if hasPrev}
			<button class="lb-nav lb-nav-prev" onclick={prev} aria-label="Previous image">
				<ChevronLeftIcon size={22} />
			</button>
		{/if}

		<!-- Next button -->
		{#if hasNext}
			<button class="lb-nav lb-nav-next" onclick={next} aria-label="Next image">
				<ChevronRightIcon size={22} />
			</button>
		{/if}

		<!-- Image container -->
		<div class="lb-image-wrap">
			<!-- Decorative corner accents -->
			<div class="lb-corner lb-corner-tl" aria-hidden="true"></div>
			<div class="lb-corner lb-corner-tr" aria-hidden="true"></div>
			<div class="lb-corner lb-corner-bl" aria-hidden="true"></div>
			<div class="lb-corner lb-corner-br" aria-hidden="true"></div>

			{#key currentIndex}
				<img
					src="/files/{currentImage}"
					alt="{title} - Image {currentIndex + 1}"
					class="lb-image"
					transition:scale={{ duration: 250, start: 0.96 }}
				/>
			{/key}
		</div>

		<!-- Thumbnail strip -->
		{#if images.length > 1}
			<div class="lb-thumbs">
				{#each images as image, index (index)}
					<button
						class="lb-thumb {index === currentIndex ? 'lb-thumb-active' : ''}"
						onclick={() => (currentIndex = index)}
						aria-label="Go to image {index + 1}"
					>
						<img src="/files/{image}" alt="Thumbnail {index + 1}" />
					</button>
				{/each}
			</div>
		{/if}
	</div>
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Cormorant+Garamond:wght@300;400&display=swap');

	/* ── Backdrop ── */
	.lb-backdrop {
		position: fixed;
		inset: 0;
		z-index: 50;
		display: flex;
		align-items: center;
		justify-content: center;
		background:
			radial-gradient(ellipse at 20% 50%, rgba(214, 168, 160, 0.18) 0%, transparent 60%),
			radial-gradient(ellipse at 80% 30%, rgba(196, 155, 175, 0.15) 0%, transparent 55%),
			rgba(18, 12, 16, 0.96);
		backdrop-filter: blur(6px);
	}

	/* ── Bokeh orbs ── */
	.lb-orb {
		position: absolute;
		border-radius: 50%;
		pointer-events: none;
		animation: drift 8s ease-in-out infinite alternate;
	}
	.lb-orb-1 {
		width: 320px;
		height: 320px;
		top: -80px;
		left: -60px;
		background: radial-gradient(circle, rgba(212, 165, 155, 0.22) 0%, transparent 70%);
		animation-delay: 0s;
	}
	.lb-orb-2 {
		width: 260px;
		height: 260px;
		bottom: 40px;
		right: -40px;
		background: radial-gradient(circle, rgba(190, 145, 175, 0.2) 0%, transparent 70%);
		animation-delay: -3s;
	}
	.lb-orb-3 {
		width: 180px;
		height: 180px;
		top: 40%;
		left: 50%;
		transform: translateX(-50%);
		background: radial-gradient(circle, rgba(232, 200, 190, 0.1) 0%, transparent 70%);
		animation-delay: -5s;
	}

	@keyframes drift {
		from {
			transform: translate(0, 0) scale(1);
		}
		to {
			transform: translate(20px, -15px) scale(1.06);
		}
	}

	/* ── Close button ── */
	.lb-close {
		position: absolute;
		top: 1.25rem;
		right: 1.25rem;
		z-index: 10;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		border: 1px solid rgba(212, 175, 165, 0.45);
		background: rgba(255, 240, 235, 0.07);
		color: rgba(242, 220, 215, 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition:
			background 0.25s,
			border-color 0.25s,
			transform 0.2s;
		backdrop-filter: blur(4px);
	}
	.lb-close:hover {
		background: rgba(212, 160, 150, 0.2);
		border-color: rgba(212, 160, 150, 0.7);
		transform: rotate(90deg);
	}

	/* ── Header ── */
	.lb-header {
		position: absolute;
		top: 1.35rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
		display: flex;
		align-items: center;
		gap: 0.6rem;
		background: rgba(255, 240, 235, 0.06);
		border: 1px solid rgba(212, 175, 165, 0.3);
		backdrop-filter: blur(6px);
		padding: 0.4rem 1.1rem;
		border-radius: 999px;
		white-space: nowrap;
	}
	.lb-title {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 0.8rem;
		font-style: italic;
		letter-spacing: 0.04em;
		color: rgba(242, 215, 205, 0.95);
	}
	.lb-divider {
		font-size: 0.55rem;
		color: rgba(212, 160, 148, 0.7);
	}
	.lb-counter {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: 0.75rem;
		font-weight: 300;
		letter-spacing: 0.08em;
		color: rgba(220, 190, 185, 0.75);
	}

	/* ── Nav buttons ── */
	.lb-nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		border: 1px solid rgba(212, 175, 165, 0.35);
		background: rgba(255, 240, 235, 0.06);
		color: rgba(242, 220, 215, 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition:
			background 0.25s,
			border-color 0.25s,
			transform 0.25s;
		backdrop-filter: blur(4px);
	}
	.lb-nav-prev {
		left: 1.25rem;
	}
	.lb-nav-next {
		right: 1.25rem;
	}

	.lb-nav:hover {
		background: rgba(212, 155, 145, 0.18);
		border-color: rgba(212, 155, 145, 0.65);
	}
	.lb-nav-prev:hover {
		transform: translateY(-50%) translateX(-2px);
	}
	.lb-nav-next:hover {
		transform: translateY(-50%) translateX(2px);
	}

	/* ── Image wrapper ── */
	.lb-image-wrap {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		max-height: 80vh;
		max-width: 88vw;
		padding: 14px;
	}

	/* Decorative corners */
	.lb-corner {
		position: absolute;
		width: 22px;
		height: 22px;
		pointer-events: none;
		opacity: 0.65;
	}
	.lb-corner::before,
	.lb-corner::after {
		content: '';
		position: absolute;
		background: rgba(212, 165, 150, 0.75);
	}
	.lb-corner::before {
		width: 100%;
		height: 1.5px;
	}
	.lb-corner::after {
		width: 1.5px;
		height: 100%;
	}

	.lb-corner-tl {
		top: 0;
		left: 0;
	}
	.lb-corner-tl::before {
		top: 0;
		left: 0;
	}
	.lb-corner-tl::after {
		top: 0;
		left: 0;
	}

	.lb-corner-tr {
		top: 0;
		right: 0;
	}
	.lb-corner-tr::before {
		top: 0;
		right: 0;
	}
	.lb-corner-tr::after {
		top: 0;
		right: 0;
	}

	.lb-corner-bl {
		bottom: 0;
		left: 0;
	}
	.lb-corner-bl::before {
		bottom: 0;
		left: 0;
	}
	.lb-corner-bl::after {
		bottom: 0;
		left: 0;
	}

	.lb-corner-br {
		bottom: 0;
		right: 0;
	}
	.lb-corner-br::before {
		bottom: 0;
		right: 0;
	}
	.lb-corner-br::after {
		bottom: 0;
		right: 0;
	}

	/* ── Main image ── */
	.lb-image {
		max-height: 80vh;
		max-width: 88vw;
		border-radius: 6px;
		object-fit: contain;
		box-shadow:
			0 0 0 1px rgba(212, 175, 165, 0.2),
			0 20px 60px rgba(0, 0, 0, 0.55),
			0 0 80px rgba(212, 145, 135, 0.08);
		display: block;
	}

	/* ── Thumbnail strip ── */
	.lb-thumbs {
		position: absolute;
		bottom: 1.25rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
		display: flex;
		gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		background: rgba(18, 10, 14, 0.6);
		border: 1px solid rgba(212, 175, 165, 0.2);
		border-radius: 999px;
		backdrop-filter: blur(8px);
		max-width: calc(100vw - 2.5rem);
		overflow-x: auto;
		scrollbar-width: none;
	}
	.lb-thumbs::-webkit-scrollbar {
		display: none;
	}

	.lb-thumb {
		flex-shrink: 0;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 4px;
		overflow: hidden;
		border: 1.5px solid transparent;
		opacity: 0.45;
		transition:
			opacity 0.25s,
			border-color 0.25s,
			transform 0.2s;
		cursor: pointer;
		background: none;
		padding: 0;
	}
	.lb-thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.lb-thumb:hover {
		opacity: 0.75;
		transform: translateY(-1px);
	}
	.lb-thumb-active {
		opacity: 1 !important;
		border-color: rgba(212, 165, 150, 0.85);
		box-shadow: 0 0 10px rgba(212, 145, 130, 0.3);
	}
</style>
