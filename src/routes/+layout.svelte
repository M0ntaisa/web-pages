<script>
  import "../../static/style.css";
	import Footer from "./Footer.svelte";
  import Navbar from "./Navbar.svelte";
	import Hero from "./Hero.svelte";

</script>

<Navbar />
<Hero />
<slot />
<Footer />
