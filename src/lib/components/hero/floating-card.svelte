<script lang="ts">
	import { fly, scale } from "svelte/transition";
	import { cubicOut, elasticOut } from "svelte/easing";
	import { Card } from "$lib/components/ui/card";
	import type { Component } from "svelte";

	interface Props {
		icon: Component;
		label: string;
		delay?: number;
		position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
	}

	let { icon: Icon, label, delay = 0, position = "top-left" }: Props = $props();
	let visible = $state(false);
	let isHovered = $state(false);

	const positionClasses: Record<string, string> = {
		"top-left": "top-[15%] left-[5%] lg:left-[10%]",
		"top-right": "top-[10%] right-[5%] lg:right-[8%]",
		"bottom-left": "bottom-[20%] left-[3%] lg:left-[12%]",
		"bottom-right": "bottom-[15%] right-[5%] lg:right-[10%]",
	};

	$effect(() => {
		const timer = setTimeout(() => {
			visible = true;
		}, delay);
		return () => clearTimeout(timer);
	});
</script>

{#if visible}
	<div class={["absolute z-20 hidden md:block", positionClasses[position]]} in:fly={{ y: 20, duration: 600, easing: cubicOut }} role="presentation" onmouseenter={() => (isHovered = true)} onmouseleave={() => (isHovered = false)}>
		<Card class={["px-4 py-3 backdrop-blur-md bg-card/80 border-primary/20 shadow-lg shadow-primary/10", "transition-all duration-300 cursor-default", "hover:scale-110 hover:shadow-xl hover:shadow-primary/20 hover:bg-card/90", "animate-float"]} style="animation-delay: {delay}ms">
			<div class="flex items-center gap-3">
				<div class={["p-2 rounded-full bg-primary/10 text-primary transition-transform duration-300", isHovered && "scale-110"]}>
					<Icon class="size-5" />
				</div>
				<span class="font-medium text-sm whitespace-nowrap">{label}</span>
			</div>
		</Card>
	</div>
{/if}

<style>
	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}
	:global(.animate-float) {
		animation: float 4s ease-in-out infinite;
	}
</style>
