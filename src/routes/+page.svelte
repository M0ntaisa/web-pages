<script>
	import { onMount } from "svelte";
	import Hero from "./Hero.svelte";
	import What from "./What.svelte";

	/**
	 * @type {any[]}
	 */
	let posts = []
	onMount(async() => {
		posts = await getPosts();
	})

	const getPosts = async() => {
		const res = await fetch("https://jsonplaceholder.typicode.com/photos");
		const data = await res.json();
		const filteredData = data.slice(0, 5);
		return filteredData;
	}

</script>

<Hero />
<What />

<div class="container grid grid-cols-3 gap-3 my-5">
	{#each posts as { title, url} }
		<div class="p-2">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	{/each}
</div>