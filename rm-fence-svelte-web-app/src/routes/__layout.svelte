<script>
	import '../app.css';
	import Header from '../components/header/Header.svelte';
</script>

<svelte:head>
	<title>R&M Fence - Professional fences at a great price</title>
	<meta
		name="description"
		content="We offer high quality fencing solutions for your home
	or business. Our fences are affordable and add to the security and
	elegance of your property."
	/>
</svelte:head>

<Header />

<!--  container mx-auto px-4 py-16 -->
<div class="">
	<slot />
</div>
