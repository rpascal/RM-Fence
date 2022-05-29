<script lang="ts">
	import Button, { Label } from '@smui/button';
	import IconButton from '@smui/icon-button';

	const src = '/logo-thin.png';

	let scrollYAmount: number;
	let menuOpened: boolean = false;
</script>

<svelte:window bind:scrollY={scrollYAmount} />

<header
	id="home-header"
	class:menu-opened={menuOpened}
	class={scrollYAmount > 10 ? 'header-fixed' : ''}
>
	<div class="container max-w-6xl mx-auto my-0 px-auto py-0">
		<div class="header-mobile-top">
			<div class="home-logo mr-4">
				<a href="/"><img {src} alt="logo" /></a>
			</div>
			<div id="menu-toggle">
				<IconButton class="material-icons" on:click={() => (menuOpened = !menuOpened)}
					>menu</IconButton
				>
			</div>
		</div>

		<div class="top-menu flex flex-row flex-1 grow">
			<Button class="hometop-btn hover:bg-gray-100">
				<Label><strong>Home</strong></Label>
			</Button>

			<Button class="hometop-btn hover:bg-gray-100">
				<Label><strong>Services</strong></Label>
			</Button>

			<Button class="hometop-btn hover:bg-gray-100">
				<Label><strong>Why Us</strong></Label>
			</Button>

			<Button class="hometop-btn hover:bg-gray-100">
				<Label><strong>About</strong></Label>
			</Button>

			<span class="flex flex-1 flex-row" />

			<IconButton
				href="https://www.facebook.com/Rmfenceohio/"
				target="_blank"
				class="material-icons hometop-btn"
				size="button">facebook</IconButton
			>
			<IconButton
				href="tel:+4402365758"
				target="_blank"
				class="material-icons hometop-btn"
				size="button">phone</IconButton
			>
		</div>
	</div>
</header>

<style lang="scss">
	* :global(.hometop-btn) {
		color: #000000 !important;
		text-transform: initial;
		text-decoration: none;
	}

	// 	.mat-icon {
	// 		font-size: 20px;
	// 	}
	// 	.mdc-icon-button {
	// 		height: 36px !important;
	// 	}

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
	#home-header > .container {
		height: auto;
		flex-flow: row wrap;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		box-sizing: border-box;
	}

	// .hometop-btn:hover .mat-button-focus-overlay {
	// 	display: none;
	// }

	// #home-header:not(.header-fixed) .hometop-btn .mat-button-ripple {
	// 	top: -12px;
	// 	bottom: -12px;
	// }

	// Helps with expanding the ripple
	// * :global(#home-header:not(.header-fixed) .hometop-btn .mdc-button__ripple) {
	// 	top: -12px !important;
	// 	bottom: -12px !important;
	// }

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
	// .header-fixed .hometop-btn {
	// 	line-height: 60px !important;
	// }

	.home-logo {
		display: flex;
		align-items: center;
		img {
			height: 38px;
			width: auto;
		}
		a {
			display: inherit;
		}
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
