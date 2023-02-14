<script>
  import { page } from "$app/stores";
  
  export let title;
  export let description;
  export let type;

  $: url = $page.url.href
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} >
  {@html `<script type="application/ld-json">
    {
      "@context": "http://scheme.org",
      "@type": "${type}",
      "description": "${description}",
      "name": "${title}",
      "url": "${url}",
    }
  </script>` }
</svelte:head>