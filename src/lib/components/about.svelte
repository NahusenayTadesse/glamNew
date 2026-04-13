<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';

	import { HeartIcon, SparklesIcon, CalendarIcon, ShieldCheckIcon } from '@lucide/svelte';
	import { fly, fade, scale } from 'svelte/transition';
	import { cubicOut, elasticOut } from 'svelte/easing';

	const highlights = [
		{
			icon: ShieldCheckIcon,
			label: 'Certified Experts',
			description: 'Licensed professional therapists'
		},
		{ icon: SparklesIcon, label: 'Premium Products', description: 'Organic & high-end skincare' },
		{ icon: CalendarIcon, label: 'Since 2011', description: 'A decade of beauty excellence' },
		{ icon: HeartIcon, label: 'Client Centric', description: 'Personalized beauty journeys' }
	];

	const services = ['Hair Styling', 'Skincare', 'Massage', 'Nail Art', 'Bridal', 'Wellness'];

	const subBrands = [
		{ name: 'Glam Luxe', description: 'Exclusive high-end cosmetic line' },
		{ name: 'Radiance Academy', description: 'Professional training for aspiring stylists' }
	];
</script>

<section class="glam-section relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
	<div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
		<div class="bg-mesh absolute inset-0"></div>
		{#each Array(6) as _, i}
			<div class="particle particle-{i}"></div>
		{/each}
	</div>

	<div class="mx-auto max-w-5xl">
		<div in:fly={{ y: 50, duration: 1000, easing: cubicOut }} class="mb-20 text-center">
			<div
				class="inline-block"
				in:scale={{ start: 0.5, duration: 800, delay: 200, easing: elasticOut }}
			>
				<span class="label-chip mx-auto">Est. 2011</span>
			</div>

			<h2 class="glam-title mt-6 text-5xl font-black tracking-tighter sm:text-7xl">
				The Glam Beauty Story
			</h2>

			<p
				class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed font-medium text-muted-foreground/80"
			>
				Step into a realm where <span class="text-primary italic">artistry meets soul</span>. We
				don't just provide services; we craft personal transformations.
			</p>
		</div>

		<div class="mb-12 grid gap-8 lg:grid-cols-3">
			<div in:fly={{ x: -50, duration: 800, delay: 300, easing: cubicOut }} class="lg:col-span-2">
				<Card class="glam-glass h-full overflow-hidden border-white/10 shadow-2xl">
					<CardHeader class="relative z-10">
						<CardTitle class="text-3xl font-bold tracking-tight">Our Philosophy</CardTitle>
						<CardDescription class="font-semibold tracking-widest text-primary uppercase"
							>Beauty as an Experience</CardDescription
						>
					</CardHeader>

					<CardContent
						class="relative z-10 space-y-6 text-base leading-relaxed text-muted-foreground"
					>
						<p>
							Originally a single-chair studio, <strong class="text-foreground">Glam Beauty</strong> was
							born from a passion for empowering individuals through self-care. Today, we offer a curated
							selection of world-class treatments.
						</p>

						<p>
							We believe beauty is not just about results — it’s about how you feel. Our team stays
							ahead of global trends to deliver innovative, deeply personalized care.
						</p>

						<div class="shimmer-bar h-1 w-32 rounded-full"></div>
					</CardContent>
				</Card>
			</div>

			<div class="flex flex-col gap-4">
				{#each highlights as highlight, i}
					<div in:fly={{ x: 50, duration: 600, delay: 400 + i * 100 }}>
						<Card
							class="group highlight-card-3d overflow-hidden border-border/40 bg-card/40 backdrop-blur-md transition-all"
						>
							<CardContent class="flex items-center gap-4 p-5">
								<div
									class="icon-box relative flex size-12 items-center justify-center rounded-2xl bg-primary/20 transition-all duration-500 group-hover:bg-primary group-hover:text-white"
								>
									<svelte:component
										this={highlight.icon}
										class="size-6 transition-transform duration-500 group-hover:scale-125"
									/>
									<div
										class="absolute inset-0 rounded-2xl bg-primary/50 opacity-0 blur-lg transition-opacity group-hover:opacity-100"
									></div>
								</div>

								<div>
									<p class="text-xs font-black tracking-widest text-primary uppercase">
										{highlight.label}
									</p>
									<p class="text-sm font-medium text-muted-foreground group-hover:text-foreground">
										{highlight.description}
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				{/each}
			</div>
		</div>

		<div in:fly={{ y: 40, duration: 800, delay: 700 }}>
			<Card class="glam-glass border-none shadow-2xl">
				<CardHeader>
					<CardTitle
						class="text-center text-xs font-black tracking-[0.3em] text-muted-foreground uppercase"
					>
						Signature Services
					</CardTitle>
				</CardHeader>

				<CardContent>
					<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
						{#each services as service, i}
							<div
								in:scale={{ start: 0.8, duration: 400, delay: 800 + i * 70 }}
								class="service-orb group cursor-default rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-500 hover:z-20"
							>
								<span
									class="text-sm font-bold tracking-tight transition-colors group-hover:text-primary"
									>{service}</span
								>
							</div>
						{/each}
					</div>
				</CardContent>
			</Card>
		</div>

		<div in:fly={{ y: 40, duration: 800, delay: 1000 }} class="mt-12">
			<div class="sub-brands-wrap relative overflow-hidden rounded-[2rem] p-1 shadow-2xl">
				<div class="h-full w-full rounded-[1.9rem] bg-card/90 p-8 backdrop-blur-xl">
					<div class="mb-8 text-center">
						<h3 class="text-2xl font-black tracking-tighter uppercase">The Glam Collection</h3>
						<div class="mx-auto mt-2 h-1 w-12 rounded-full bg-primary"></div>
					</div>

					<div class="grid gap-6 md:grid-cols-2">
						{#each subBrands as brand, i}
							<div
								class="brand-card-3d group relative rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-6 transition-all hover:bg-white/20"
							>
								<h4
									class="mb-2 text-lg font-bold text-primary transition-transform group-hover:translate-x-2"
								>
									{brand.name}
								</h4>
								<p class="text-sm leading-relaxed text-muted-foreground">{brand.description}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* --- BACKGROUND & PARTICLES --- */
	.glam-section {
		background-color: hsl(var(--background));
		perspective: 1000px;
	}

	.bg-mesh {
		background-image:
			radial-gradient(circle at 10% 10%, hsl(var(--primary) / 0.15), transparent 50%),
			radial-gradient(circle at 90% 90%, hsl(var(--accent) / 0.2), transparent 50%),
			radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.05), transparent 80%);
		filter: blur(60px);
		animation: meshMove 15s ease-in-out infinite alternate;
	}

	.particle {
		position: absolute;
		width: 4px;
		height: 4px;
		background: hsl(var(--primary) / 0.4);
		border-radius: 50%;
		filter: blur(1px);
		animation: float 20s infinite linear;
	}

	/* Particle placement & animation offsets */
	.particle-0 {
		top: 20%;
		left: 10%;
		animation-duration: 18s;
	}
	.particle-1 {
		top: 60%;
		left: 80%;
		width: 8px;
		height: 8px;
		animation-duration: 25s;
	}
	.particle-2 {
		top: 40%;
		left: 40%;
		animation-delay: -5s;
	}
	.particle-3 {
		top: 80%;
		left: 20%;
		width: 6px;
		height: 6px;
	}
	.particle-4 {
		top: 10%;
		left: 70%;
		animation-duration: 22s;
	}
	.particle-5 {
		top: 90%;
		left: 50%;
		opacity: 0.3;
	}

	/* --- TYPOGRAPHY --- */
	.glam-title {
		background: linear-gradient(
			to right,
			hsl(var(--foreground)) 20%,
			hsl(var(--primary)) 50%,
			hsl(var(--foreground)) 80%
		);
		background-size: 200% auto;
		-webkit-background-clip: text;
		text-fill-color: transparent;
		animation: textShimmer 4s linear infinite;
		filter: drop-shadow(0 0 15px hsl(var(--primary) / 0.3));
	}

	/* --- CARDS & EFFECTS --- */
	.glam-glass {
		background: linear-gradient(135deg, hsl(var(--card) / 0.8), hsl(var(--card) / 0.5));
		backdrop-filter: blur(12px);
		border: 1px solid hsl(var(--white) / 0.1);
	}

	.label-chip {
		padding: 0.5rem 1.5rem;
		border-radius: 9999px;
		font-size: 0.8rem;
		font-weight: 800;
		letter-spacing: 0.2em;
		background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)));
		color: white;
		box-shadow: 0 0 30px hsl(var(--primary) / 0.5);
		animation: pulseGlow 2s infinite ease-in-out;
	}

	.highlight-card-3d {
		transform-style: preserve-3d;
		transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.highlight-card-3d:hover {
		transform: translateZ(20px) rotateX(5deg) rotateY(-5deg);
		box-shadow: -10px 20px 40px rgba(0, 0, 0, 0.2);
	}

	.service-orb {
		transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
		border: 1px solid transparent;
	}

	.service-orb:hover {
		transform: scale(1.2) translateY(-10px);
		background: hsl(var(--primary));
		color: white;
		box-shadow: 0 15px 30px hsl(var(--primary) / 0.4);
		border-color: hsl(var(--primary) / 0.5);
	}

	.brand-card-3d:hover {
		transform: scale(1.02);
		box-shadow: inset 0 0 20px hsl(var(--primary) / 0.1);
	}

	.shimmer-bar {
		background: linear-gradient(
			90deg,
			hsl(var(--primary)),
			hsl(var(--accent)),
			hsl(var(--primary))
		);
		background-size: 200% 100%;
		animation: gradientMove 3s infinite linear;
	}

	.sub-brands-wrap {
		background: linear-gradient(
			45deg,
			hsl(var(--primary)),
			hsl(var(--accent)),
			hsl(var(--primary))
		);
		background-size: 300% 300%;
		animation: gradientMove 8s infinite alternate;
	}

	/* --- KEYFRAMES --- */
	@keyframes meshMove {
		0% {
			transform: scale(1) translate(0, 0);
		}
		100% {
			transform: scale(1.2) translate(5%, 5%);
		}
	}

	@keyframes float {
		from {
			transform: translateY(100vh) translateX(0);
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		to {
			transform: translateY(-10vh) translateX(50px);
			opacity: 0;
		}
	}

	@keyframes textShimmer {
		to {
			background-position: 200% center;
		}
	}

	@keyframes gradientMove {
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

	@keyframes pulseGlow {
		0%,
		100% {
			transform: scale(1);
			box-shadow: 0 0 20px hsl(var(--primary) / 0.4);
		}
		50% {
			transform: scale(1.05);
			box-shadow: 0 0 40px hsl(var(--primary) / 0.7);
		}
	}
</style>
