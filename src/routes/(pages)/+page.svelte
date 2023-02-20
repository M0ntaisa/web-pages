<script>

	import What from "$lib/What.svelte";
	import Posts from "$lib/Posts.svelte";
	import Seo from "$lib/Seo.svelte";

	export let data;

	const { posts } = data;

</script>

<What />
<Posts {posts} />
<Seo title="M0nochrome .inc" description="M0no desc" type="Website" />