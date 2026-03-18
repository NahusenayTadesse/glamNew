<script lang="ts">
	import {
		MailIcon,
		PhoneIcon,
		MapPinIcon,
		Send,
		Instagram,
		Facebook,
		MapPin
	} from '@lucide/svelte';

	const socialLinks = [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/lalobakerysolution?igsh=MTZ1eDNldHl3OW9iNw%3D%3D&utm_source=qr',
			icon: Instagram,
			color: 'hover:text-pink-500'
		},

		{
			name: 'Facebook',
			url: 'https://facebook.com',
			icon: Facebook,
			color: 'hover:text-blue-600'
		},
		{
			name: 'Telegram',
			url: 'https://t.me/LaloBakery',
			icon: Send,
			color: 'hover:text-blue-400'
		}
	];
</script>

<footer class="border-t bg-card text-card-foreground">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Newsletter Section -->

		<!-- Footer Links Grid -->
		<div
			class="align-center mb-8 grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-3"
		>
			<!-- Company Info -->
			<div>
				<img src="/logo.webp" class="w-30" alt="Glam Logo" />
				<h4 class="mb-4 font-semibold">Glam Beauty and Spa</h4>

				<div class="flex flex-col gap-3 pt-2 text-sm">
					<a
						href="https://maps.app.goo.gl/Gb3TJqADaZMvxJ7v6"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-start gap-2 text-foreground/70 transition-colors hover:text-primary"
					>
						<MapPinIcon class="mt-0.5 size-4 shrink-0" />
						<span>22 Mazoria, Addis Ababa, Ethiopia</span>
					</a>
					<a
						href="tel:0996983244"
						class="flex items-center gap-2 text-foreground/70 transition-colors hover:text-primary"
					>
						<PhoneIcon class="size-4 shrink-0" />
						<span>+251 996983244</span>
					</a>
					<a
						href="mailto:hello@glambeautyspa.com"
						class="flex items-center gap-2 text-foreground/70 transition-colors hover:text-primary"
					>
						<MailIcon class="size-4 shrink-0" />
						<span>hello@glambeautyspa.com</span>
					</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div class="lg:w-lg">
				<h4 class="mb-4 font-semibold">Quick Links</h4>
				<ul class="flex flex-col gap-2 text-sm">
					<li>
						<a href="/" class="text-foreground/70 transition-colors hover:text-foreground">Home</a>
					</li>
					<li>
						<a href="/shop" class="text-foreground/70 transition-colors hover:text-foreground"
							>Shop</a
						>
					</li>
					<li>
						<a href="/about-us" class="text-foreground/70 transition-colors hover:text-foreground"
							>About Us</a
						>
					</li>

					<li>
						<a href="/contact-us" class="text-foreground/70 transition-colors hover:text-foreground"
							>Contact Us</a
						>
					</li>
				</ul>
			</div>

			<!-- Customer Service -->
			<div>
				<h4 class="mb-4 flex gap-2 font-semibold"><MapPin /> Location</h4>
				<section class="relative h-32 w-full">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6200139503017!2d38.785857210079854!3d9.00706778929564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b851326f26c6d%3A0x5a311bfbc53bab46!2sGlam%20Beauty%20and%20Spa!5e0!3m2!1sen!2set!4v1772619451901!5m2!1sen!2set"
						style="border:0;"
						class="h-40 w-full opacity-80 contrast-125 grayscale transition-all hover:opacity-100 hover:grayscale-0"
						loading="lazy"
						title="Spa Location Map"
					></iframe>
				</section>
			</div>

			<!-- Legal -->
			<!-- <div>
				<h4 class="mb-4 font-semibold">Legal</h4>
				<ul class="flex flex-col gap-2 text-sm">
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground"
							>Privacy Policy</a
						>
					</li>
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground"
							>Terms of Service</a
						>
					</li>
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground"
							>Cookie Policy</a
						>
					</li>
					<li>
						<a href="#" class="text-foreground/70 transition-colors hover:text-foreground"
							>Accessibility</a
						>
					</li>
				</ul>
			</div>
		</div> -->

			<!-- Social Links -->
			<div class="flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
				<p class="text-sm text-foreground/70">Follow us on social media</p>
				<div class="grid grid-cols-4 gap-3">
					{#each socialLinks as social (social.url)}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							class={[
								'flex flex-col items-center gap-2 rounded-lg border p-4 transition-all hover:border-primary hover:shadow-lg',
								social.color
							]}
							title={social.name}
						>
							<social.icon class="h-6 w-6" />
						</a>
					{/each}
				</div>
			</div>

			<!-- Copyright -->
			<div class="mt-8 border-t pt-8 text-center text-sm text-foreground/70">
				<p>&copy; {new Date().getFullYear()} Glam Beauty and Spa. All rights reserved.</p>
			</div>
		</div>
	</div>
</footer>
