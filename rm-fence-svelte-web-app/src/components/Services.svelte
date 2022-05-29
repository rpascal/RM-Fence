<script lang="ts">
	import Button,{ Label } from '@smui/button';
	import Card,{ ActionButtons,Actions,Content } from '@smui/card';
</script>

<section id="service-section" class="home-section bg-gray-50 py-20">
	<div class="container my-0 mx-auto px-4 max-w-6xl">
		<div class="section-header section-header-long mb-16">
			<h2 class="text-5xl mb-4 font-bold">Our Services</h2>
			<p class="text-base max-w-3xl">
				There is no job too big or too small for R&M to handle! Call us for all of your commercial
				fencing needs. We offer high quality fencing solutions for your home or business.
			</p>
		</div>
		<div class="flex flex-col md:flex-row flex-nowrap gap-4 items-stretch">
			<div class="md:w-1/3 flex flex-col">
				<Card padded class="flex-1 border-t-2 border-t-gray-700">
					<Content>
						<div class="flex-col space-y-4">
							<div class="text-center">
								<i class="material-icons  text-7xl" aria-hidden="true">house</i>
							</div>

							<h3 class="text-3xl">Residential Fences</h3>

							<p class="">
								The professionals with R&M Fence can help you add privacy, security and elegance to
								your home with our quality fences.
							</p>
						</div>
					</Content>
					<Actions>
						<ActionButtons>
							<Button>
								<Label>Read more</Label>
							</Button>
						</ActionButtons>
					</Actions>
				</Card>
			</div>
			<div class="md:w-1/3 flex flex-col">
				<Card padded class="flex-1  border-t-2 border-t-gray-700">
					<Content>
						<div class="flex-col space-y-4">
							<div class="text-center">
								<i class="material-icons  text-7xl" aria-hidden="true">corporate_fare</i>
							</div>

							<h3 class="text-3xl">Commercial Fencing</h3>

							<p class="">
								There is no job too big or too small for R&M to handle! Call us for all of your
								commercial fencing needs.
							</p>
						</div>
					</Content>
					<Actions>
						<ActionButtons>
							<Button>
								<Label>Read more</Label>
							</Button>
						</ActionButtons>
					</Actions>
				</Card>
			</div>
			<div class="md:w-1/3 flex flex-col">
				<Card padded class="flex-1  border-t-2 border-t-gray-700">
					<Content>
						<div class="flex-col space-y-4">
							<div class="text-center">
								<i class="material-icons  text-7xl" aria-hidden="true">build</i>
							</div>

							<h3 class="text-3xl">Fence Repair</h3>

							<p class="">
								We can fix all types of fences from wood to wrought iron. Call and speak to one of
								our staff members today.
							</p>
						</div>
					</Content>
					<Actions>
						<ActionButtons>
							<Button>
								<Label>Read more</Label>
							</Button>
						</ActionButtons>
					</Actions>
				</Card>
			</div>
		</div>
	</div>
</section>
