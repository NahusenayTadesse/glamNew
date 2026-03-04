<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRightIcon } from '@lucide/svelte';
	import { CheckCircleIcon, ShieldCheckIcon, HeartHandshakeIcon } from '@lucide/svelte';
	import { SparklesIcon, BadgeCheckIcon, Flower2Icon, ScissorsIcon } from '@lucide/svelte';
	import { BuildingIcon, CoffeeIcon, LeafIcon, BrushIcon } from '@lucide/svelte';
	import { PhoneIcon } from '@lucide/svelte';

	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
</script>

<section
	class="relative overflow-hidden bg-linear-to-br from-primary/20 via-accent/10 to-background px-4 py-20 sm:py-32"
>
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute -top-40 -right-40 size-80 rounded-full bg-primary/10 blur-3xl"></div>
		<div class="absolute -bottom-40 -left-40 size-80 rounded-full bg-accent/10 blur-3xl"></div>
	</div>

	<div class="relative mx-auto max-w-4xl">
		<div class="space-y-6 text-center">
			<div
				class="inline-block rounded-full bg-primary/30 px-4 py-2 text-sm font-medium text-foreground"
			>
				Since 2011 • Redefining Elegance & Wellness
			</div>

			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
				Reveal Your Inner Radiance
			</h1>

			<p class="mx-auto max-w-2xl text-lg text-foreground/70 sm:text-xl">
				Glam Beauty & Spa offers premium skincare, expert hair styling, and rejuvenating spa
				treatments designed to help you look and feel your absolute best.
			</p>

			<div class="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
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
						src="$staticServer/placeholder.svg?size=square"
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

<section class="bg-gradient-to-b from-transparent via-primary/5 to-transparent px-4 py-20 sm:py-32">
	<div class="mx-auto max-w-5xl">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold sm:text-4xl">Why Choose Glam?</h2>
			<p class="mx-auto max-w-2xl text-lg text-foreground/70">
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

<section class="px-4 py-20 sm:py-32">
	<div class="mx-auto max-w-5xl">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold sm:text-4xl">Our Service Menu</h2>
			<p class="mx-auto max-w-2xl text-lg text-foreground/70">
				A comprehensive suite of beauty and wellness treatments
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			<Card
				class="hover:shadow-lg-lg hover:shadow-lg-primary/10 border-primary/20 transition-all duration-300"
			>
				<CardHeader>
					<div class="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
						<ScissorsIcon class="size-6 text-primary" />
					</div>
					<CardTitle>Hair Artistry</CardTitle>
				</CardHeader>
				<CardContent class="space-y-3">
					<p class="text-foreground/70">Professional hair care services including:</p>
					<ul class="flex flex-col gap-2 text-sm text-foreground/70">
						<li class="flex gap-2">
							<span class="font-bold text-primary">•</span>
							<span>Precision cuts and bespoke styling</span>
						</li>
						<li class="flex gap-2">
							<span class="font-bold text-primary">•</span>
							<span>Advanced coloring & balayage</span>
						</li>
						<li class="flex gap-2">
							<span class="font-bold text-primary">•</span>
							<span>Keratin and restorative treatments</span>
						</li>
						<li class="flex gap-2">
							<span class="font-bold text-primary">•</span>
							<span>Bridal and special event styling</span>
						</li>
					</ul>
				</CardContent>
			</Card>

			<Card
				class="hover:shadow-lg-lg hover:shadow-lg-primary/10 border-primary/20 transition-all duration-300"
			>
				<CardHeader>
					<div class="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
						<Flower2Icon class="size-6 text-primary" />
					</div>
					<CardTitle>Spa & Wellness</CardTitle>
				</CardHeader>
				<CardContent class="space-y-3">
					<p class="text-foreground/70">Escape the stress of daily life with:</p>
					<ul class="flex flex-col gap-2 text-sm text-foreground/70">
						<li class="flex gap-2">
							<span class="font-bold text-accent">•</span>
							<span>Deep tissue and Swedish massage</span>
						</li>
						<li class="flex gap-2">
							<span class="font-bold text-accent">•</span>
							<span>Organic body scrubs and wraps</span>
						</li>
						<li class="flex gap-2">
							<span class="font-bold text-accent">•</span>
							<span>Aromatherapy sessions</span>
						</li>
						<li class="flex gap-2">
							<span class="font-bold text-accent">•</span>
							<span>Steam room and relaxation lounge</span>
						</li>
					</ul>
				</CardContent>
			</Card>

			<Card
				class="hover:shadow-lg-lg hover:shadow-lg-primary/10 border-primary/20 transition-all duration-300"
			>
				<CardHeader>
					<div class="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
						<SparklesIcon class="size-6 text-primary" />
					</div>
					<CardTitle>Advanced Skincare</CardTitle>
				</CardHeader>
				<CardContent class="space-y-3">
					<p class="text-foreground/70">Science-backed facial treatments:</p>
					<ul class="flex flex-col gap-2 text-sm text-foreground/70">
						<li class="flex gap-2">
							<span class="font-bold text-primary">•</span>
							<span>Hydrating and anti-aging facials</span>
						</li>
						<li class="flex gap-2">
							<span class="font-bold text-primary">•</span>
							<span>Microdermabrasion & chemical peels</span>
						</li>
						<li class="flex gap-2">
							<span class="font-bold text-primary">•</span>
							<span>Acne and hyperpigmentation therapy</span>
						</li>
						<li class="flex gap-2">
							<span class="font-bold text-primary">•</span>
							<span>Dermatologist-approved products</span>
						</li>
					</ul>
				</CardContent>
			</Card>

			<Card
				class="hover:shadow-lg-lg hover:shadow-lg-primary/10 border-primary/20 transition-all duration-300"
			>
				<CardHeader>
					<div class="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
						<BrushIcon class="size-6 text-primary" />
					</div>
					<CardTitle>Nails & Makeup</CardTitle>
				</CardHeader>
				<CardContent class="space-y-3">
					<p class="text-foreground/70">The finishing touches for your look:</p>
					<ul class="flex flex-col gap-2 text-sm text-foreground/70">
						<li class="flex gap-2">
							<span class="font-bold text-accent">•</span>
							<span>Luxury manicures and pedicures</span>
						</li>
						<li class="flex gap-2">
							<span class="font-bold text-accent">•</span>
							<span>Gel and acrylic nail extensions</span>
						</li>
						<li class="flex gap-2">
							<span class="font-bold text-accent">•</span>
							<span>Professional HD makeup</span>
						</li>
						<li class="flex gap-2">
							<span class="font-bold text-accent">•</span>
							<span>Eyelash extensions & brow shaping</span>
						</li>
					</ul>
				</CardContent>
			</Card>
		</div>
	</div>
</section>

<section class="bg-gradient-to-b from-transparent via-accent/5 to-transparent px-4 py-20 sm:py-32">
	<div class="mx-auto max-w-5xl">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold sm:text-4xl">Quality Assurance</h2>
			<p class="mx-auto max-w-2xl text-lg text-foreground/70">
				We only use the world's most trusted beauty brands
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
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

<section class="px-4 py-20 sm:py-32">
	<div class="mx-auto max-w-5xl">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold sm:text-4xl">Part of the Lalo Family</h2>
			<p class="mx-auto max-w-2xl text-lg text-foreground/70">
				Excellence across industries, united by a commitment to service
			</p>
		</div>

		<div class="mb-8">
			<p class="mb-12 text-center text-foreground/70">
				Glam Beauty & Spa is proud to be a member of a diversified group, allowing us to maintain
				superior operational standards and shared values of customer dedication.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			<Card
				class="hover:shadow-lg-lg hover:shadow-lg-primary/10 border-primary/20 transition-all duration-300"
			>
				<CardHeader>
					<div class="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
						<BuildingIcon class="size-6 text-primary" />
					</div>
					<CardTitle>Lalo General Trading</CardTitle>
					<CardDescription>Parent Company</CardDescription>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-foreground/70">
						The strategic foundation of our group, ensuring Glam Beauty & Spa has the resources to
						provide world-class service.
					</p>
				</CardContent>
			</Card>

			<Card
				class="hover:shadow-lg-lg hover:shadow-lg-primary/10 border-primary/20 transition-all duration-300"
			>
				<CardHeader>
					<div class="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
						<BuildingIcon class="size-6 text-primary" />
					</div>
					<CardTitle>Fixtec</CardTitle>
					<CardDescription>Professional Tools</CardDescription>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-foreground/70">
						Supplying precision equipment and tools across various industries, maintaining the
						group's high standard for hardware.
					</p>
				</CardContent>
			</Card>

			<Card
				class="hover:shadow-lg-lg hover:shadow-lg-primary/10 border-primary/20 transition-all duration-300"
			>
				<CardHeader>
					<div class="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
						<CoffeeIcon class="size-6 text-primary" />
					</div>
					<CardTitle>Fahem General Trading</CardTitle>
					<CardDescription>Luxury Imports</CardDescription>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-foreground/70">
						A leader in premium coffee export and high-quality imports, sharing our passion for
						quality and lifestyle.
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
