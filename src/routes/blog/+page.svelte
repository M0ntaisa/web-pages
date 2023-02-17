<script>
  export let data;
  const {posts} = data;
</script>

<div class="container">
  <h2 class="font-bold text-2xl mb-2">Blog Posts</h2>
  <ul>
    {#each posts as post }
      <li class="mb-2">
        <a href="blog/{post.id}">{post.title}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  a:hover {
    text-decoration: underline;
  }
</style>