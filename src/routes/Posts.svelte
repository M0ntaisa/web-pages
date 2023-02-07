<script>
  /**
	 * @type {any}
	 */
   export let posts;
</script>

<div class="container grid grid-cols-3 gap-3 my-5">
	{#each posts as { title, url} }
		<div class="p-2 w-1/3">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	{/each}
</div>