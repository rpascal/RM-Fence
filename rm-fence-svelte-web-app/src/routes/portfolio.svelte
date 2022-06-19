<script lang="ts">
	let selectedImage = '';
	function updateImage(url: string) {
		selectedImage = url;
	}
</script>

<svelte:head>
	<title>R&M Fence - Portfolio</title>
	<meta name="description" content="R&M Fence - Portfoli pictures" />
</svelte:head>

<section id="portfolio-section" class="home-section bg-gray-50 py-20">
	<div class="container my-0 mx-auto px-4 max-w-6xl">
		<div class="flex items-center justify-center h-20">
			<h1 class="text-6xl title-text relative pb-1">Portfolio</h1>
		</div>

		<div class="grid gap-4 grid-flow-row sm:grid-cols-2 md:grid-cols-4 justify-center items-center">
			<label
				on:click={() => updateImage('/portfolio/portfolio_tall.jpg')}
				class="row-span-2 cursor-pointer"
				for="img-modal"
			>
				<img class="hover:scale-105" src="/portfolio/portfolio_tall.jpg" alt="portfolio 1" />
			</label>

			<label
				on:click={() => updateImage('/portfolio/portfolio_1.jpg')}
				class="cursor-pointer"
				for="img-modal"
			>
				<img class="hover:scale-105" src="/portfolio/portfolio_1.jpg" alt="portfolio 1" />
			</label>
			<label
				on:click={() => updateImage('/portfolio/portfolio_1.jpg')}
				class="cursor-pointer"
				for="img-modal"
			>
				<img class="hover:scale-105" src="/portfolio/portfolio_1.jpg" alt="portfolio 1" />
			</label>
			<label
				on:click={() => updateImage('/portfolio/portfolio_1.jpg')}
				class="cursor-pointer"
				for="img-modal"
			>
				<img class="hover:scale-105" src="/portfolio/portfolio_1.jpg" alt="portfolio 1" />
			</label>
			<label
				on:click={() => updateImage('/portfolio/portfolio_1.jpg')}
				class="cursor-pointer"
				for="img-modal"
			>
				<img class="hover:scale-105" src="/portfolio/portfolio_1.jpg" alt="portfolio 1" />
			</label>
			<label
				on:click={() => updateImage('/portfolio/portfolio_1.jpg')}
				class="cursor-pointer"
				for="img-modal"
			>
				<img class="hover:scale-105" src="/portfolio/portfolio_1.jpg" alt="portfolio 1" />
			</label>
			<label
				on:click={() => updateImage('/portfolio/portfolio_1.jpg')}
				class="cursor-pointer"
				for="img-modal"
			>
				<img class="hover:scale-105" src="/portfolio/portfolio_1.jpg" alt="portfolio 1" />
			</label>

			<label
				on:click={() => updateImage('/portfolio/portfolio_1.jpg')}
				class="cursor-pointer"
				for="img-modal"
			>
				<img class="hover:scale-105" src="/portfolio/portfolio_1.jpg" alt="portfolio 1" />
			</label>
		</div>
	</div>

	<input type="checkbox" id="img-modal" class="modal-toggle" />
	<label for="img-modal" class="modal cursor-pointer">
		<img class="modal-box  p-0" src={selectedImage} alt="portfolio 1" />
	</label>
</section>

<style>
	.title-text::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		height: 2px;
		width: 220px;
		background-color: #ffc107;
	}
</style>
