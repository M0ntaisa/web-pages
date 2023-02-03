<script>

	import Hero from "./Hero.svelte";
	import What from "./What.svelte";
	import Posts from "./Posts.svelte";

	export let data;

	const { posts } = data;

</script>

<Hero />
<What />
<Posts {posts} />

