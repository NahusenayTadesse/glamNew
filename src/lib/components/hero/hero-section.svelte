<script lang="ts">
	import { fly, fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import AnimatedText from './animated-text.svelte';
	import FloatingCard from './floating-card.svelte';
	import DecorativeElements from './decorative-elements.svelte';
	import StatsCounter from './stats-counter.svelte';
	import {
		SparklesIcon,
		ScissorsIcon,
		HeartIcon,
		StarIcon,
		PlayIcon,
		CalendarIcon,
		AwardIcon
	} from '@lucide/svelte';

	let videoLoaded = $state(false);
	let isVideoPlaying = $state(true);

	const stats = [
		{ value: 15, suffix: '+', label: 'Years Experience' },
		{ value: 50, suffix: 'K+', label: 'Happy Clients' },
		{ value: 100, suffix: '+', label: 'Expert Stylists' },
		{ value: 4.9, suffix: '★', label: 'Average Rating' }
	];
</script>

<section class="relative min-h-screen overflow-hidden bg-background">
	<!-- Video Background -->
	<div class="absolute inset-0 z-0">
		<video
			autoplay
			muted
			loop
			playsinline
			class={[
				'h-full w-full object-cover transition-opacity duration-1000',
				videoLoaded ? 'opacity-100' : 'opacity-0'
			]}
			onloadeddata={() => (videoLoaded = true)}
			poster="$staticServer/placeholder.svg?size=wide"
		>
			<source src="https://youtu.be/Hf6abfL1la4" />
		</video>
		<!-- Gradient Overlay -->
		<div
			class="absolute inset-0 bg-linear-to-r from-background via-background/90 to-background/60"
		></div>
		<div
			class="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/30"
		></div>
	</div>

	<!-- Decorative Elements -->
	<DecorativeElements />

	<!-- Floating Service Cards -->
	<FloatingCard icon={ScissorsIcon} label="Hair Styling" delay={1200} position="top-right" />
	<FloatingCard icon={SparklesIcon} label="Spa & Wellness" delay={1400} position="bottom-right" />
	<FloatingCard icon={HeartIcon} label="Nail Art" delay={1600} position="bottom-left" />
	<FloatingCard icon={AwardIcon} label="Award Winning" delay={1800} position="top-left" />

	<!-- Main Content -->
	<div
		class="relative z-10 container mx-auto flex min-h-screen flex-col justify-center px-4 py-20 lg:py-32"
	>
		<div class="max-w-3xl">
			<!-- Badge -->
			<AnimatedText delay={200}>
				<Badge
					variant="secondary"
					class="mb-6 border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
				>
					<SparklesIcon class="mr-2 size-4" />
					Premium Beauty Experience
				</Badge>
			</AnimatedText>

			<!-- Main Headline -->
			<AnimatedText delay={400}>
				<h1 class="mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-7xl">
					<span class="block">Discover Your</span>
					<span
						class="animate-gradient block bg-linear-to-r from-primary via-accent to-primary bg-size-[200%_auto] bg-clip-text text-transparent"
						>Inner Glamour</span
					>
				</h1>
			</AnimatedText>

			<!-- Subheadline -->
			<AnimatedText delay={600}>
				<p class="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
					Experience luxury beauty services that transform and rejuvenate. Our expert stylists
					create personalized looks that bring out your natural radiance.
				</p>
			</AnimatedText>

			<!-- CTA Buttons -->
			<AnimatedText delay={800}>
				<div class="mb-12 flex flex-wrap gap-4">
					<Button
						size="lg"
						class="group shadow-lg-lg shadow-lg-primary/25 hover:shadow-lg-xl hover:shadow-lg-primary/30 px-8 py-6 text-lg transition-all duration-300"
					>
						<CalendarIcon class="mr-2 size-5 transition-transform group-hover:scale-110" />
						Book Appointment
					</Button>
					<Button
						size="lg"
						variant="outline"
						class="group border-primary/30 px-8 py-6 text-lg transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
					>
						<PlayIcon class="mr-2 size-5 transition-transform group-hover:scale-125" />
						Watch Our Story
					</Button>
				</div>
			</AnimatedText>

			<!-- Social Proof -->
			<AnimatedText delay={1000}>
				<div class="mb-12 flex items-center gap-4">
					<div class="flex -space-x-3">
						{#each Array(4) as _, i (_)}
							<div
								class="shadow-lg-md flex size-10 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary/80 to-accent/80 text-xs font-bold text-primary-foreground transition-transform hover:z-10 hover:scale-110"
								style="animation-delay: {i * 100}ms"
							>
								{String.fromCharCode(65 + i)}
							</div>
						{/each}
					</div>
					<div class="text-sm">
						<div class="flex items-center gap-1 text-accent">
							{#each Array(5) as _ (_)}
								<StarIcon class="size-4 fill-current" />
							{/each}
						</div>
						<span class="text-muted-foreground">
							Loved by <strong class="text-foreground">50,000+</strong>
							clients
						</span>
					</div>
				</div>
			</AnimatedText>
		</div>

		<!-- Stats Section -->
		<div class="mt-auto border-t border-border/50 pt-12">
			<StatsCounter {stats} delay={1200} />
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
		<div class="flex h-10 w-6 justify-center rounded-full border-2 border-primary/50 pt-2">
			<div class="animate-scroll h-3 w-1.5 rounded-full bg-primary"></div>
		</div>
	</div>
</section>

<style>
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@keyframes scroll {
		0% {
			opacity: 1;
			transform: translateY(0);
		}
		100% {
			opacity: 0;
			transform: translateY(8px);
		}
	}
	:global(.animate-gradient) {
		animation: gradient 4s ease infinite;
	}
	:global(.animate-scroll) {
		animation: scroll 1.5s ease-in-out infinite;
	}
</style>
