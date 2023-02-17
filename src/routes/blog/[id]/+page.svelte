<script>
  export let data;
  const {post} = data;
</script>

<div class="container">
  <h1 class="font-bold text-2xl mb-2">{post.title}</h1>
  <p class="mb-2">{post.body}</p>
</div>