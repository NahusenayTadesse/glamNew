<script>
	import { onMount } from 'svelte';

	// Svelte 5 runes
	let canvas = $state(null);
	let animationId = $state(null);

	const PETAL_COUNT = 28;
	const SPARKLE_COUNT = 18;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		let width = 0;
		let height = 0;
		let isDark = false;

		// ── Detect Tailwind dark mode ──────────────────────────────────────────
		const checkDark = () =>
			document.documentElement.classList.contains('dark') ||
			window.matchMedia('(prefers-color-scheme: dark)').matches;

		// ── Colour palettes ────────────────────────────────────────────────────
		const palette = {
			light: {
				bg: null, // transparent — let Tailwind bg show through
				petal: ['#f9c8d9', '#f5a7c7', '#fde8f0', '#e8b4cb', '#fcd5e5'],
				sparkle: '#c9a96e', // warm gold
				stem: 'rgba(180,140,160,0.35)'
			},
			dark: {
				bg: null,
				petal: ['#7b3f5e', '#9b4f76', '#5c2d4a', '#b06090', '#8a4568'],
				sparkle: '#e8c97a', // brighter gold on dark
				stem: 'rgba(220,160,200,0.2)'
			}
		};

		// ── Resize ─────────────────────────────────────────────────────────────
		const resize = () => {
			width = canvas.width = canvas.offsetWidth;
			height = canvas.height = canvas.offsetHeight;
		};

		window.addEventListener('resize', resize);
		resize();

		// ── Petal class ────────────────────────────────────────────────────────
		class Petal {
			constructor() {
				this.reset(true);
			}

			reset(init = false) {
				this.x = Math.random() * width;
				this.y = init ? Math.random() * height : -60;
				this.size = 6 + Math.random() * 14;
				this.speed = 0.3 + Math.random() * 0.55;
				this.drift = (Math.random() - 0.5) * 0.4;
				this.angle = Math.random() * Math.PI * 2;
				this.spin = (Math.random() - 0.5) * 0.018;
				this.sway = Math.random() * Math.PI * 2;
				this.swaySpeed = 0.008 + Math.random() * 0.012;
				this.swayAmp = 0.6 + Math.random() * 1.2;
				this.opacity = 0.55 + Math.random() * 0.45;
				const c = isDark ? palette.dark.petal : palette.light.petal;
				this.color = c[Math.floor(Math.random() * c.length)];
			}

			update() {
				this.sway += this.swaySpeed;
				this.x += this.drift + Math.sin(this.sway) * this.swayAmp;
				this.y += this.speed;
				this.angle += this.spin;
				if (this.y > height + 60) this.reset();
			}

			draw(ctx) {
				ctx.save();
				ctx.translate(this.x, this.y);
				ctx.rotate(this.angle);
				ctx.globalAlpha = this.opacity;

				// Oval petal shape
				ctx.beginPath();
				ctx.ellipse(0, 0, this.size * 0.42, this.size, 0, 0, Math.PI * 2);
				ctx.fillStyle = this.color;
				ctx.fill();

				// Subtle vein
				ctx.beginPath();
				ctx.moveTo(0, -this.size * 0.75);
				ctx.lineTo(0, this.size * 0.75);
				const stemC = isDark ? palette.dark.stem : palette.light.stem;
				ctx.strokeStyle = stemC;
				ctx.lineWidth = 0.6;
				ctx.stroke();

				ctx.restore();
			}
		}

		// ── Sparkle class ──────────────────────────────────────────────────────
		class Sparkle {
			constructor() {
				this.reset(true);
			}

			reset(init = false) {
				this.x = Math.random() * width;
				this.y = init ? Math.random() * height : Math.random() * height;
				this.size = 1.2 + Math.random() * 2.5;
				this.life = 0;
				this.maxLife = 120 + Math.random() * 180;
				this.phase = Math.random() * Math.PI * 2;
			}

			update() {
				this.life++;
				if (this.life > this.maxLife) {
					this.reset();
					this.life = 0;
				}
			}

			draw(ctx) {
				const t = this.life / this.maxLife;
				const alpha = Math.sin(t * Math.PI) * 0.75;
				const pulse = 1 + 0.35 * Math.sin(this.phase + this.life * 0.06);
				const r = this.size * pulse;
				const color = isDark ? palette.dark.sparkle : palette.light.sparkle;

				ctx.save();
				ctx.globalAlpha = alpha;
				ctx.translate(this.x, this.y);

				// 4-point star
				for (let i = 0; i < 4; i++) {
					ctx.beginPath();
					ctx.moveTo(0, 0);
					const a = (i / 4) * Math.PI * 2;
					ctx.lineTo(Math.cos(a) * r * 3, Math.sin(a) * r * 3);
					ctx.strokeStyle = color;
					ctx.lineWidth = r * 0.55;
					ctx.lineCap = 'round';
					ctx.stroke();
				}

				ctx.beginPath();
				ctx.arc(0, 0, r * 0.7, 0, Math.PI * 2);
				ctx.fillStyle = color;
				ctx.fill();

				ctx.restore();
			}
		}

		// ── Populate ───────────────────────────────────────────────────────────
		const petals = Array.from({ length: PETAL_COUNT }, () => new Petal());
		const sparkles = Array.from({ length: SPARKLE_COUNT }, () => new Sparkle());

		// ── Render loop ────────────────────────────────────────────────────────
		const loop = () => {
			isDark = checkDark();

			ctx.clearRect(0, 0, width, height);

			petals.forEach((p) => {
				p.update();
				p.draw(ctx);
			});
			sparkles.forEach((s) => {
				s.update();
				s.draw(ctx);
			});

			animationId = requestAnimationFrame(loop);
		};

		animationId = requestAnimationFrame(loop);

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener('resize', resize);
		};
	});
</script>

<!--
  Drop this anywhere in your layout. It sits behind all content.
  Parent must have `position: relative` (or be the full viewport).

  Tailwind dark mode: add `dark` class to <html> or use media strategy.
-->
<canvas
	bind:this={canvas}
	class="
    pointer-events-none
    fixed inset-0
    z-0 h-full
    w-full
  "
	aria-hidden="true"
></canvas>
