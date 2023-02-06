<script>

	import What from "./What.svelte";
	import Posts from "./Posts.svelte";

	export let data;

	const { posts } = data;

</script>

<What />
<Posts {posts} />

