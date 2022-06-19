<script>
import Footer from '../components/Footer.svelte';

	import '../app.css';
	import Header from '../components/header/Header.svelte';
</script>



<Header />

<!--  container mx-auto px-4 py-16 -->
<div class="">
	<slot />
</div>

<Footer />

