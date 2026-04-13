<script>
	let { data } = $props();

	let activeIndex = $state(null);
	let current = $state(0);

	const getUrl = (img) => `/files/${img}`;

	const open = (i) => (activeIndex = i);
	const close = () => (activeIndex = null);
</script>

<!-- Mobile-first scroll carousel -->
<div class="wrapper">
	{#each data.gallery as img, i}
		<div class="card" style="--i: {i - data.gallery.length}" onclick={() => open(i)}>
			<img src={getUrl(img)} alt="gallery image" />
		</div>
	{/each}
</div>

<!-- Fullscreen view -->
{#if activeIndex !== null}
	<div class="overlay" onclick={close}>
		<img src={getUrl(data.gallery[activeIndex])} />
	</div>
{/if}

<style>
	.wrapper {
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		display: flex;
		gap: 16px;
		padding: 20px;
	}

	.card {
		flex: 0 0 70%;
		scroll-snap-align: center;
		border-radius: 16px;
		overflow: hidden;
		position: relative;
		transition:
			transform 0.3s ease,
			opacity 0.3s ease;
	}

	.card img {
		width: 100%;
		height: 260px;
		object-fit: cover;
	}

	/* Desktop enhancement */
	@media (min-width: 768px) {
		.wrapper {
			justify-content: center;
			overflow: visible;
			perspective: 1200px;
		}

		.card {
			position: absolute;
			width: 260px;
			height: 180px;
		}

		.wrapper:hover .card {
			transform: translateX(calc(var(--i) * 50px)) rotateY(calc(var(--i) * 12deg)) scale(0.9);
		}

		.card:hover {
			transform: scale(1.1) translateZ(80px) !important;
			z-index: 10;
		}
	}
	.card {
		filter: brightness(0.9);
	}
	.card:has(img:hover) {
		filter: brightness(1);
	}
	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.9);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.overlay img {
		max-width: 95%;
		max-height: 90%;
		border-radius: 12px;
	}

	/* Desktop enhancement */
	@media (min-width: 768px) {
		.wrapper {
			justify-content: center;
			overflow: visible;
			perspective: 1200px;
			min-height: 380px; /* ← was implicit, now explicit */
		}
		.card {
			position: absolute;
			width: 380px; /* ← was 260px */
			height: 360px; /* ← was 180px */
		}
		.wrapper:hover .card {
			transform: translateX(calc(var(--i) * 70px)) rotateY(calc(var(--i) * 12deg)) scale(0.9); /* ← spacing bump from 50px → 70px */
		}
		.card:hover {
			transform: scale(1.1) translateZ(80px) !important;
			z-index: 10;
		}
	}
</style>
