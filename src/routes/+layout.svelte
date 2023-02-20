<script>
  import "../../static/style.css";
	import Footer from "$lib/Footer.svelte";
  import Navbar from "$lib/Navbar.svelte";

</script>

<div class="app flex flex-col min-h-screen">
  <Navbar />
  <slot />
  <Footer />
</div>
