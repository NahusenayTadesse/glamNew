<script lang="ts">
	import { fly } from "svelte/transition";
	import { cubicOut } from "svelte/easing";

	interface Stat {
		value: number;
		suffix: string;
		label: string;
	}

	interface Props {
		stats: Stat[];
		delay?: number;
	}

	let { stats, delay = 0 }: Props = $props();
	let visible = $state(false);
	let counters = $state<number[]>(stats.map(() => 0));

	$effect(() => {
		const timer = setTimeout(() => {
			visible = true;
			// Animate counters
			stats.forEach((stat, index) => {
				const duration = 2000;
				const steps = 60;
				const increment = stat.value / steps;
				let current = 0;
				const interval = setInterval(() => {
					current += increment;
					if (current >= stat.value) {
						counters[index] = stat.value;
						clearInterval(interval);
					} else {
						counters[index] = Math.floor(current);
					}
				}, duration / steps);
			});
		}, delay);
		return () => clearTimeout(timer);
	});
</script>

{#if visible}
	<div class="flex flex-wrap justify-center gap-8 lg:gap-12" in:fly={{ y: 30, duration: 800, easing: cubicOut }}>
		{#each stats as stat, index}
			<div class="text-center group cursor-default">
				<div class="text-3xl lg:text-4xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">
					{counters[index]}{stat.suffix}
				</div>
				<div class="text-sm text-muted-foreground mt-1">{stat.label}</div>
			</div>
		{/each}
	</div>
{/if}
