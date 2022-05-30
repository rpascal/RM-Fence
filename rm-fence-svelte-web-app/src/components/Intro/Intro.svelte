<script lang="ts">
	import Button, { Label } from '@smui/button';
	// import backgroundImage from ''
</script>

<!--  bg-stone-500 -->
<section id="intro-section" class="home-intro-section text-center">
	<div class="flex flex-col flex-nowrap">
		<div class="home-intro-subtitle text-xl font-bold">Professional fences at a great price</div>
		<h1 class="home-intro-title  text-6xl font-black">R&M Fence</h1>

		<p class="home-intro-text text-md font-medium">
			Are you looking to add more security to your home or business? Let R&M Fence help you out. We
			offer high quality fencing solutions for your home or business. Our fences are affordable and
			add to the security and elegance of your property. We keep our prices low by performing the
			work ourselves, and not hiring any subcontractors.
		</p>

		<p class="home-intro-text text-md font-medium">
			Call <a href="tel:+4402365758">(440) 236-5758</a> For a FREE No Obligation Consultation
		</p>

		<Button href="tel:+4402365758" target="_blank" class="my-0 mx-auto" variant="raised">
			<Label><strong>Call Now</strong></Label>
		</Button>
	</div>
</section>

<style lang="scss">
	.home-intro-section {
		background: url('/intro-bg-md-min.jpg') no-repeat center center;
		
		overflow: visible;
		color: #ffffff;
		overflow: hidden;

		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		padding: 120px 0 80px;
	}

	.home-intro-title {
		margin: 0 0 24px;
		text-shadow: 0 4px 4px rgba(0, 0, 0, 0.22);
	}

	.home-intro-subtitle {
		margin: 0 0 22px;
	}
	.home-intro-text {
		max-width: 570px;
		margin: 0 auto 24px;
	}

	@media (max-width: 767px) {
		.home-intro-section {
			padding: 100px 0 20px;
		}
		.home-intro-title {
			margin: 0 0 24px;
			text-shadow: 0 4px 4px rgba(0, 0, 0, 0.22);
		}
		.home-intro-subtitle {
			margin: 0 0 22px;
		}
	}
</style>
