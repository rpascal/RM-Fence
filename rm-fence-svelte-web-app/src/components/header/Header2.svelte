<script lang="ts">
	import '../../app.css';

	// import Button, { Label } from '@smui/button';
	// import IconButton from '@smui/icon-button';

	const src = '/logo-thin.png';

	let scrollYAmount: number;
	let menuOpened: boolean = false;
</script>

<svelte:window bind:scrollY={scrollYAmount} />

<!-- <header class:menu-opened={menuOpened}> -->
<header id="home-header" class={scrollYAmount > 10 ? 'header-fixed' : ''}>
	<div
		class="max-w-6xl mx-auto my-0 px-auto py-0 flex flex-row flex-wrap justify-start items-center content-center h-auto"
	>
		<div class="header-mobile-top">
			<div class="home-logo mr-4">
				<a href="/"><img {src} alt="logo" /></a>
			</div>
			<div id="menu-toggle">
				<!-- <IconButton class="material-icons" on:click={() => (menuOpened = !menuOpened)}
						>menu</IconButton
					> -->
			</div>
		</div>

		<div class="top-menu flex flex-row flex-1 grow">
			<button class="btn btn-blue h-8"> Button </button>
			<!-- <div class="flex space-x-2 justify-center">
					<button
						type="button"
						class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>Click me</button
					>
				</div> -->

			<!-- <Button class="hometop-btn">
					<Label><strong>Home</strong></Label>
				</Button>

				<Button class="hometop-btn">
					<Label><strong>Services</strong></Label>
				</Button>

				<Button class="hometop-btn">
					<Label><strong>Why Us</strong></Label>
				</Button>

				<Button class="hometop-btn">
					<Label><strong>About</strong></Label>
				</Button> -->

			<span id="spanSpacer" />

			<!-- <div class="action-icon-button-wrapper">
					<IconButton href="https://www.facebook.com/Rmfenceohio/" target="_blank" class="material-icons hometop-btn" size="button">facebook</IconButton>
					<IconButton href="tel:+4402365758" target="_blank" class="material-icons hometop-btn" size="button">phone</IconButton>
				</div> -->
		</div>
	</div>
</header>

<!-- </header> -->
<style>
	.btn {
		/* // py-2 px-4 */
		@apply font-bold bg-gray-500  rounded;
	}
	.btn-blue {
		@apply text-black bg-red-300;
	}
	.btn-blue:hover {
		@apply bg-gray-200;
	}

	* :global(.hometop-btn) {
		color: #000000 !important;
		text-transform: initial;
		text-decoration: none;
	}

	/* // .action-icon-button-wrapper {
	// 	.mat-icon {
	// 		font-size: 20px;
	// 	}
	// 	.mdc-icon-button {
	// 		height: 36px !important;
	// 	}
	// } */

	/* .mr-1 {
		margin-right: 1rem !important;
	} */

	#spanSpacer {
		flex: 1 1 0%;
		display: flex;
		flex-direction: row;
	}

	/* .top-menu {
		flex: 1 1 0%;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
	} */

	#home-header {
		position: absolute;
		width: 100%;
		background: #fff;
		top: 0;
		left: 0;
		right: 0;
		padding: 12px 0;
		transition: padding 0.3s linear;
		-webkit-transition: padding 0.3s linear;
		z-index: 999;
	}

	/* #home-header > .container {
		height: auto;
		flex-flow: row wrap;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		box-sizing: border-box;

		max-width: 1170px;
		margin: 0 auto;
		padding: 0 15px;
	} */

	/* // .hometop-btn:hover .mat-button-focus-overlay {
	// 	display: none;
	// }

	// #home-header:not(.header-fixed) .hometop-btn .mat-button-ripple {
	// 	top: -12px;
	// 	bottom: -12px;
	// } */

	.header-fixed {
		position: fixed !important;
		left: 0;
		right: 0;
		top: 0;
		background: #fff;
		padding: 0 !important;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
		animation: 0.6s slideDown forwards;
	}
	.header-fixed .container {
		height: 60px !important;
	}
	/* // .header-fixed .hometop-btn {
	// 	line-height: 60px !important;
	// } */

	.home-logo {
		display: flex;
		align-items: center;
	}

	.home-logo a {
		display: inherit;
	}

	.home-logo img {
		height: 38px;
		width: auto;
	}

	#menu-toggle {
		display: none;
		position: absolute;
		right: 5px;
		top: 10px;
	}

	@media (max-width: 991px) {
		#home-header {
			padding: 0;
		}
		#home-header > .container {
			height: 60px;
			padding: 0;
		}
		.menu-opened .header-mobile-top {
			padding: 13px 0;
		}
		#menu-toggle {
			display: block;
		}
		.menu-opened .container {
			height: auto !important;
		}
		.home-logo {
			margin-left: 15px;
		}
		.top-menu {
			display: none !important;
		}
		.menu-opened .top-menu {
			display: block !important;
			width: 100% !important;
			flex: none !important;
			background: #f3f3f3;
		}

		:global(.menu-opened .top-menu .hometop-btn) {
			display: block;
			width: 100%;
			line-height: 56px !important;
			text-align: center;
			height: 100%;
		}
	}
</style>
