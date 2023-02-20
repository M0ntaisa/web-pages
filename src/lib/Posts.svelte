<script>
  /**
	 * @type {any}
	 */
   export let posts;
</script>

<div class="container grid grid-cols-3 gap-3 my-5">
	{#each posts as { id, title, image, body } }
		<div class="p-2 w-3/4">
			<h2 class="font-bold text-2xl">{title.substring(0, 20)}</h2>
			<img src={image} alt={title} />
			<p>{body}</p>
		</div>
	{/each}
</div>