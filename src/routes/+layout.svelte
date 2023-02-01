<script>
  import Navbar from "./Navbar.svelte";
</script>

<Navbar />
<div class="container">
  <h1 class="text-3xl font-bold underline">
    <slot />
  </h1>
</div>