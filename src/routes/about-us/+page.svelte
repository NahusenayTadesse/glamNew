<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRightIcon } from '@lucide/svelte';
	import { CheckCircleIcon, ShieldCheckIcon, HeartHandshakeIcon } from '@lucide/svelte';
	import { SparklesIcon, BadgeCheckIcon, Flower2Icon, ScissorsIcon } from '@lucide/svelte';
	import { BuildingIcon, CoffeeIcon, LeafIcon, BrushIcon } from '@lucide/svelte';
	import { PhoneIcon } from '@lucide/svelte';

	let { data } = $props();

	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import UniqueGallery from '$lib/components/uniqueGallery.svelte';

	const services = [
		{
			title: 'Hair Artistry',
			icon: ScissorsIcon,
			description: 'Transform your look with expert precision and modern styling.',
			items: [
				'Precision cuts and bespoke styling',
				'Advanced coloring & balayage',
				'Keratin and restorative treatments',
				'Bridal and special event styling'
			]
		},
		{
			title: 'Spa & Wellness',
			icon: Flower2Icon,
			description: 'Relax, restore, and reconnect with your inner calm.',
			items: [
				'Deep tissue and Swedish massage',
				'Organic body scrubs and wraps',
				'Aromatherapy sessions',
				'Steam room and relaxation lounge'
			]
		},
		{
			title: 'Advanced Skincare',
			icon: SparklesIcon,
			description: 'Glow with treatments backed by science and care.',
			items: [
				'Hydrating and anti-aging facials',
				'Microdermabrasion & chemical peels',
				'Acne and hyperpigmentation therapy',
				'Dermatologist-approved products'
			]
		},
		{
			title: 'Nails & Makeup',
			icon: BrushIcon,
			description: 'Perfect the details that complete your look.',
			items: [
				'Luxury manicures and pedicures',
				'Gel and acrylic nail extensions',
				'Professional HD makeup',
				'Eyelash extensions & brow shaping'
			]
		}
	];
</script>

<section
	class="relative h-9/10 overflow-hidden bg-primary bg-cover bg-center px-4 py-20 sm:py-32"
	style="background-image: url('/files/{data?.gallery[
		Math.floor(Math.random() * data?.gallery?.length)
	]}')"
>
	<div class="absolute inset-0 bg-black/60 backdrop-brightness-75 dark:bg-black/60"></div>

	<!-- <div class="absolute inset-0 overflow-hidden">
		<div class="absolute -top-40 -right-40 size-80 rounded-full bg-primary/10 blur-3xl"></div>
		<div class="absolute -bottom-40 -left-40 size-80 rounded-full bg-accent/10 blur-3xl"></div>
	</div> -->

	<div class="relative mx-auto max-w-4xl">
		<div class="space-y-6 text-center">
			<div class="inline-block rounded-full bg-primary/30 px-4 py-2 text-sm font-medium text-white">
				Since 2011 • Redefining Elegance & Wellness
			</div>

			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
				Reveal Your Inner Radiance
			</h1>

			<p class="mx-auto max-w-2xl text-lg text-white/70 sm:text-xl">
				Glam Beauty & Spa offers premium skincare, expert hair styling, and rejuvenating spa
				treatments designed to help you look and feel your absolute best.
			</p>

			<div
				class="flex w-64 flex-col justify-center gap-4 justify-self-center pt-4 sm:flex-row lg:w-full"
			>
				<Button size="lg" href="/shop" class="gap-2">
					Explore Our Products
					<ArrowRightIcon class="size-4" />
				</Button>
				<Button href="/contact-us" size="lg" variant="outline">Book an Appointment</Button>
			</div>
		</div>
	</div>
</section>

<section class="px-4 py-20 sm:py-32">
	<div class="mx-auto max-w-5xl">
		<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<div class="relative">
				<div
					class="aspect-square overflow-hidden rounded-2xl bg-linear-to-br from-primary/20 to-accent/20"
				>
					<img
						src="/files/{data?.gallery[Math.floor(Math.random() * data?.gallery?.length)]}"
						alt="Glam Beauty and Spa Interior"
						class="h-full w-full object-cover"
					/>
				</div>
				<div
					class="shadow-lg-lg absolute -right-6 -bottom-6 max-w-xs rounded-xl bg-primary p-6 text-primary-foreground"
				>
					<p class="text-sm font-semibold">The region's premier sanctuary for beauty since 2011</p>
				</div>
			</div>

			<div class="space-y-6">
				<div>
					<h2 class="mb-4 text-3xl font-bold sm:text-4xl">Our Story</h2>
					<p class="mb-4 text-lg leading-relaxed text-foreground/70">
						Glam Beauty & Spa began in 2011 as a boutique salon under Lalo General Trading. Our
						evolution into a full-service spa reflects our commitment to holistic beauty—combining
						advanced aesthetic techniques with deep relaxation.
					</p>
					<p class="text-lg leading-relaxed text-foreground/70">
						Today, we are a destination for those seeking high-quality hair care, dermatological
						treatments, and world-class spa therapies tailored to your unique lifestyle.
					</p>
				</div>

				<Card class="border-primary/20 bg-primary/5">
					<CardHeader>
						<CardTitle class="text-lg">Our Philosophy</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-foreground/70">
							Guided by our passion for excellence and well-being, we provide personalized
							treatments that empower our clients to embrace their confidence.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</section>

<section
	class="relative z-1 bg-cover bg-center px-4 py-20 sm:py-32"
	style="background-image: url('/files/{data?.gallery[
		Math.floor(Math.random() * data?.gallery?.length)
	]}')"
>
	<div class="absolute inset-0 -z-1 bg-black/60 backdrop-brightness-75 dark:bg-black/60"></div>
	<div class="mx-auto max-w-5xl">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl">Why Choose Glam?</h2>
			<p class="mx-auto max-w-2xl text-lg text-white/70">
				We pride ourselves on the three pillars of the Glam experience
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			<Card
				class="hover:shadow-lg-lg hover:shadow-lg-primary/10 border-primary/20 transition-all duration-300"
			>
				<CardHeader>
					<div class="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
						<CheckCircleIcon class="size-6 text-primary" />
					</div>
					<CardTitle>Expertise</CardTitle>
				</CardHeader>
				<CardContent>
					<p class="text-foreground/70">
						Our stylists and therapists are internationally trained, ensuring you receive the latest
						techniques in beauty and wellness.
					</p>
				</CardContent>
			</Card>

			<Card
				class="hover:shadow-lg-lg hover:shadow-lg-primary/10 border-primary/20 transition-all duration-300"
			>
				<CardHeader>
					<div class="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
						<ShieldCheckIcon class="size-6 text-primary" />
					</div>
					<CardTitle>Sanitation</CardTitle>
				</CardHeader>
				<CardContent>
					<p class="text-foreground/70">
						We uphold medical-grade hygiene standards across all our tools and facilities for your
						safety and peace of mind.
					</p>
				</CardContent>
			</Card>

			<Card
				class="hover:shadow-lg-lg hover:shadow-lg-primary/10 border-primary/20 transition-all duration-300"
			>
				<CardHeader>
					<div class="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
						<HeartHandshakeIcon class="size-6 text-primary" />
					</div>
					<CardTitle>Personalization</CardTitle>
				</CardHeader>
				<CardContent>
					<p class="text-foreground/70">
						No two faces or bodies are the same. We tailor every service to meet your specific goals
						and preferences.
					</p>
				</CardContent>
			</Card>
		</div>
	</div>
</section>

<section class="relative overflow-hidden px-4 py-24 sm:py-32">
	<!-- Background Glow -->
	<div class="absolute inset-0 -z-10">
		<div
			class="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
		></div>
		<div
			class="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl"
		></div>
	</div>

	<div class="mx-auto max-w-5xl">
		<!-- Header -->
		<div class="mb-20 text-center">
			<h2 class="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
				<span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
					Our Service Menu
				</span>
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-foreground/70">
				Indulge in a curated collection of beauty and wellness experiences crafted to elevate your
				confidence and glow.
			</p>
		</div>

		<!-- Grid -->
		<div class="grid gap-10 md:grid-cols-2">
			{#each services as service}
				<Card
					class="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
				>
					<!-- Glow on hover -->
					<div
						class="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					>
						<div
							class="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
						></div>
					</div>

					<CardHeader>
						<div
							class="mb-4 inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
						>
							<svelte:component this={service.icon} class="size-6 text-primary" />
						</div>

						<CardTitle class="text-xl font-semibold tracking-wide">
							{service.title}
						</CardTitle>
					</CardHeader>

					<CardContent class="space-y-4">
						<p class="text-foreground/70">{service.description}</p>

						<ul class="flex flex-col gap-2 text-sm text-foreground/70">
							{#each service.items as item}
								<li
									class="flex items-start gap-3 transition-transform duration-300 group-hover:translate-x-1"
								>
									<span class="mt-1 text-primary">✦</span>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
<div class="mb-16 text-center">
	<h2 class="mb-4 text-3xl font-bold sm:text-4xl">Quality Assurance</h2>
	<p class="mx-auto max-w-2xl text-lg text-foreground/70">
		We only use the world's most trusted beauty brands
	</p>
</div>
<section
	class="grid grid-cols-1 bg-gradient-to-b from-transparent via-accent/5 to-transparent px-4 py-20 sm:py-32 lg:grid-cols-2"
>
	<div class="p-6 lg:p-1">
		<UniqueGallery {data} />
	</div>

	<div class="mx-auto max-w-5xl">
		<div class="grid gap-8 md:grid-cols-1">
			<Card
				class="hover:shadow-lg-lg hover:shadow-lg-accent/10 border-accent/20 transition-all duration-300"
			>
				<CardHeader>
					<div class="flex items-center gap-4">
						<div class="rounded-lg bg-accent/10 p-3">
							<BadgeCheckIcon class="size-6 text-primary" />
						</div>
						<div>
							<CardTitle>Premium Products</CardTitle>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<p class="text-foreground/70">
						Our backbar features high-end brands like L'Oréal Professionnel, Dermalogica, and OPI,
						ensuring long-lasting and effective results.
					</p>
				</CardContent>
			</Card>

			<Card
				class="hover:shadow-lg-lg hover:shadow-lg-accent/10 border-accent/20 transition-all duration-300"
			>
				<CardHeader>
					<div class="flex items-center gap-4">
						<div class="rounded-lg bg-accent/10 p-3">
							<LeafIcon class="size-6 text-primary" />
						</div>
						<div>
							<CardTitle>Eco-Friendly Options</CardTitle>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<p class="text-foreground/70">
						We offer a curated selection of vegan, cruelty-free, and organic treatments for our
						environmentally conscious clients.
					</p>
				</CardContent>
			</Card>
		</div>
	</div>
</section>

<section class="bg-linear-to-r from-primary/15 via-accent/10 to-primary/15 px-4 py-20 sm:py-32">
	<div class="mx-auto max-w-4xl">
		<div
			class="space-y-8 rounded-2xl bg-linear-to-br from-primary to-accent p-8 text-center sm:p-12"
		>
			<div class="flex flex-col gap-4">
				<h2 class="text-3xl font-bold text-primary-foreground sm:text-4xl">
					Ready for Your Glow Up?
				</h2>
				<p class="mx-auto max-w-2xl text-lg text-primary-foreground/90">
					Experience the ultimate in relaxation and beauty. Book your transformation today.
				</p>
			</div>

			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<Button href="/booking" size="lg" variant="secondary" class="gap-2">
					Book Online
					<ArrowRightIcon class="size-4" />
				</Button>
				<Button href="tel:+251908454545" size="lg" variant="outline">
					<PhoneIcon class="size-4" />
					Call the Spa
				</Button>
			</div>

			<div class="border-t border-primary-foreground/20 pt-4">
				<p class="text-sm text-primary-foreground/80">
					Gift vouchers are available! Give the gift of relaxation to someone special.
				</p>
			</div>
		</div>
	</div>
</section>
