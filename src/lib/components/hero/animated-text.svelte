<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { Snippet } from 'svelte';

	interface Props {
		delay?: number;
		duration?: number;
		y?: number;
		children: Snippet;
	}

	let { delay = 0, duration = 800, y = 30, children }: Props = $props();
	let visible = $state(false);

	$effect(() => {
		const timer = setTimeout(() => {
			visible = true;
		}, delay);
		return () => clearTimeout(timer);
	});
</script>

{#if visible}
	<div in:fly={{ y, duration, easing: cubicOut }} class="will-change-transform">
		{@render children()}
	</div>
{/if}
