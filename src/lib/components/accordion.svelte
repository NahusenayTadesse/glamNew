<script lang="ts">
	import {
		Accordion,
		AccordionItem,
		AccordionTrigger,
		AccordionContent
	} from '$lib/components/ui/accordion';
	import { AwardIcon, SparklesIcon, LeafIcon, ShieldCheckIcon, HeartIcon } from '@lucide/svelte';
	import Button from './ui/button/button.svelte';

	const features = [
		{
			id: 'therapists',
			title: 'Certified Master Therapists',
			description:
				'Our team consists of internationally licensed specialists with over 500 hours of advanced training in holistic wellness and modern aesthetics.',
			icon: AwardIcon
		},
		{
			id: 'products',
			title: 'Premium Organic Botanicals',
			description:
				'We exclusively use eco-certified, paraben-free, and cruelty-free products that deliver high-performance results without harsh chemicals.',
			icon: LeafIcon
		},
		{
			id: 'experience',
			title: 'Bespoke Wellness Journeys',
			description:
				'Every treatment is tailored to your unique skin type and stress profile, ensuring a personalized path to rejuvenation and radiance.',
			icon: SparklesIcon
		},
		{
			id: 'sanitation',
			title: 'Medical-Grade Sterilization',
			description:
				'Your safety is our priority. We adhere to rigorous hospital-grade sanitation protocols for all tools and treatment rooms.',
			icon: ShieldCheckIcon
		},
		{
			id: 'consultation',
			title: 'Complimentary Beauty Mapping',
			description:
				'Start your visit with a professional consultation and digital skin analysis to identify exactly what your body needs.',
			icon: HeartIcon
		}
	];
</script>

<div
	class="min-h-dvh bg-linear-to-br from-primary/5 via-background to-accent/5 px-4 py-12 sm:px-6 lg:px-8"
>
	<div class="mx-auto max-w-3xl">
		<!-- Header -->
		<div class="mb-12 text-center">
			<h1 class="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Why Choose Us</h1>
			<p class="text-lg text-muted-foreground">
				Discover what makes our bakery solutions exceptional
			</p>
		</div>

		<!-- Accordion -->
		<Accordion type="single" collapsible class="w-full space-y-3">
			{#each features as feature (feature.id)}
				<AccordionItem
					value={feature.id}
					class="hover:shadow-lg-md transition-shadow-lg overflow-hidden rounded-lg border border-border shadow-lg duration-200"
				>
					<AccordionTrigger
						class="px-6 py-4 transition-colors duration-200 hover:bg-accent/5 [&[data-state=open]]:bg-primary/5"
					>
						<div class="flex items-center gap-4 text-left">
							<div class="shrink-0 rounded-lg bg-primary/10 p-2">
								<svelte:component this={feature.icon} class="size-5 text-primary" />
							</div>
							<h3 class="text-lg font-semibold text-foreground">{feature.title}</h3>
						</div>
					</AccordionTrigger>
					<AccordionContent class="border-t border-border bg-card/50 px-6 py-4">
						<p class="leading-relaxed text-muted-foreground">{feature.description}</p>
					</AccordionContent>
				</AccordionItem>
			{/each}
		</Accordion>

		<!-- Footer CTA -->
		<div class="mt-12 text-center">
			<p class="mb-4 text-muted-foreground">Ready to elevate your bakery business?</p>
			<Button href="/contact-us">Get Started Today</Button>
		</div>
	</div>
</div>
