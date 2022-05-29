<script lang="ts">
	import Card,{ Content } from '@smui/card';
</script>

<section id="service-section" class="home-section bg-neutral-100 py-20">
	<div class="container my-0 mx-auto px-4 max-w-6xl">
		<div class="section-header section-header-long mb-16">
			<h2 class="text-5xl mb-4 font-bold">Why Us</h2>
			<p class="text-base max-w-3xl">
				Our fences are affordable and add to the security and elegance of your property.
			</p>
		</div>
		<div class="flex flex-col md:flex-row flex-nowrap gap-4 items-stretch">
			<div class="md:w-1/3 flex flex-col">
				<Card class="flex-1">
					<div class="bg-gray-100 p-4">
						<h2 class="text-base font-medium">Quality Craftsmentship</h2>
					</div>

					<Content>
						<div class="flex-col space-y-4">
							<p class="text-base">
								We have experience with both residential and commercial fencing. Our professional
								staff can install your new Aluminum, Vinyl, Steel, Composite, Wood or Chain Link
								fence today!
							</p>
						</div>
					</Content>
				</Card>
			</div>
			<div class="md:w-1/3 flex flex-col">
				<Card class="flex-1">
					<div class="bg-gray-100 p-4">
						<h2 class="text-base font-medium">Quality Materials</h2>
					</div>

					<Content>
						<div class="flex-col space-y-4">
							<p class="">
                                We use quality, American made products from Elite Fence Products,
                                Inc. and Bufftech&reg; Vinyl Fence Products.
							</p>
						</div>
					</Content>
				</Card>
			</div>
			<div class="md:w-1/3 flex flex-col">
				<Card class="flex-1">
					<div class="bg-gray-100 p-4">
						<h2 class="text-base font-medium">Owner Operated</h2>
					</div>

					<Content>
						<div class="flex-col space-y-4">
							<p class="">
                                We keep our prices low by performing the work ourselves, and
                                not hiring any subcontractors.
							</p>
						</div>
					</Content>
				</Card>
			</div>
		</div>
	</div>
</section>
