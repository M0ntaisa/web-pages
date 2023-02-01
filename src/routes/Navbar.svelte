<script>
  import "../app.css";
  import { page } from "$app/stores";

  $: routeId = $page.route.id;
</script>

<nav class="bg-blue-900 p-4">
  <div class="container flex">
    <h1 class="m-0 text-lg text-amber-400 font-bold">Link Start</h1>
    <ul class="flex m-0 ml-auto list-none text-base">
      <li>
        <a href="/" class:active={routeId == "/"}>Home</a>
      </li>
      <li>
        <a href="/about" class:active={routeId == "/about"}>About</a>
      </li>
      <li>
        <a href="/services" class:active={routeId == "/services"}>Services</a>
      </li>
      <li>
        <a href="/contact" class:active={routeId == "/contact"}>Contact</a>
      </li>
    </ul>
  </div>
</nav>


<style>
  li {
    margin-right: 20px;
  }
  a {
    text-decoration: none;
    color: aliceblue;
  }
  .active {
    color: azure;
    font-weight: 900;
  }
</style>