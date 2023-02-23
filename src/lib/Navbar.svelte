<script>
  import "../app.css";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
	import Moon from "./icons/moon.svelte";
	import Sun from "./icons/sun.svelte";

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

  let currentTheme = "";

  onMount(() => {
    const userPreferDarkMode = window.matchMedia("(prefers-color-scheme: dark)"
    ).matches;

    const hasUserSetDarkModeManually = document.documentElement.dataset.theme == "dark";

    if (!hasUserSetDarkModeManually) { 
      setTheme(userPreferDarkMode ? "dark" : "light");
    }

  })

  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    document.cookie = `siteTheme=${theme};max-age=31536000;path="/"`;
    currentTheme = theme;
  }

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
      <li class="flex items-center">
        {#if currentTheme == "light"}
          <a class="moon" href={"#"} on:click={() => setTheme("dark")}>
            <Moon />
          </a>
        {:else}
          <a class="sun" href={"#"} on:click={() => setTheme("light")}>
            <Sun />
          </a>
        {/if}
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