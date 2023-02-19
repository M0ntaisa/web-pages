<script>
  import "../app.css";
  import { page } from "$app/stores";

  const navs = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "About",
      href: "/about"
    },
    {
      title: "Services",
      href: "/services"
    },
    {
      title: "Contact",
      href: "/contact"
    },
    {
      title: "Blog",
      href: "/blog"
    },
  ];

  $: routeId = $page.route.id;
  $: url = $page.url.href;
</script>

<nav class="bg-blue-900 p-4">
  <div class="container flex items-center">
    <h1 class="m-0 text-lg text-amber-400 font-bold">Link Start</h1>
    <ul class="flex m-0 ml-auto list-none text-base">
      {#each navs as { title, href }}
      <li>
        <a {href} class:active={href === "/" ? routeId === href : url.includes(href)}>{title}</a>
      </li>
      {/each}
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