<script>
	import { Icon, Label } from '@smui/button';
	import Button from '@smui/button/src/Button.svelte';
	import List, { Graphic, Item, PrimaryText, SecondaryText, Text } from '@smui/list';

	const src = '/greater-cleveland-service-area.png';
</script>

<footer id="footer-section" class="home-footer">
	<section class="home-footer-top">
		<div class="container my-0 mx-auto px-4 max-w-6xl">
			<!-- fxLayout="row" fxLayout.lt-md="column" fxLayoutWrap="nowrap" -->
			<div class="flex flex-col md:flex-row flex-nowrap">
				<div class="footer-box md:w-3/5">
					<h4 class="footer-box-title"><b>About Us</b></h4>
					<p class="text-sm mb-2">
						We offer high quality fencing solutions for your home or business. Our fences are
						affordable and add to the security and elegance of your property. We keep our prices low
						by performing the work ourselves, and not hiring any subcontractors.
					</p>
					<p class="text-sm mb-4">
						We are locally owned and operated and serve Columbia Station, OH and the surrounding
						area including Cuyahoga, Lorain, and Medina counties.
					</p>

					<Button href="tel:+4402365758" target="_blank" variant="raised">
						<Icon class="material-icons">phone</Icon>
						<Label>Contact Us</Label>
					</Button>
				</div>
				<div class="md:w-1/3 footer-box">
					<h4 class="footer-box-title"><b>Contact</b></h4>

					<List class="" twoLine>
						<Item>
							<a href="tel:+4402365758" target="_blank" class="absolute w-full h-full">&#32</a>
							<Graphic class="material-icons text-yellow-500">phone</Graphic>

							<Text>
								<PrimaryText class="text-white">Phone</PrimaryText>
								<SecondaryText class="text-white break-normal">(440) 236-5758</SecondaryText>
							</Text>
						</Item>
						<Item>
							<a href="mailto:rmfence2006@gmail.com" target="_blank" class="absolute w-full h-full"
								>&#32</a
							>
							<Graphic class="material-icons text-yellow-500">email</Graphic>

							<Text>
								<PrimaryText class="text-white">Email</PrimaryText>
								<SecondaryText class="text-white break-normal">rmfence2006@gmail.com</SecondaryText>
							</Text>
						</Item>
					</List>
				</div>

				<!-- fxLayoutAlign="center" -->
				<div class="md:w-1/3 footer-box m-auto">
					<img class="w-full h-auto" {src} alt="service area" />
				</div>
			</div>
		</div>
	</section>
</footer>

<style lang="scss">
	.home-footer-top {
		background-color: #212121;
		color: #ffffff !important;
	}

	.footer-box {
		padding: 30px;
		box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.2);
	}
	.footer-box:first-child {
		padding-left: 0;
	}
	.footer-box-title {
		position: relative;
		margin: 0 0 24px;
		padding-bottom: 12px;
	}

	@media (max-width: 959px) {
		.footer-box:first-child {
			padding-left: 30px;
		}
		.footer-box {
			box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
		}
	}
</style>
