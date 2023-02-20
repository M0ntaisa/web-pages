<script>
// @ts-nocheck


	// @ts-ignore
	import Button from "$lib/Button.svelte";

</script>
<div class="container grid grid-cols-12 gap-12 my-5">
  <div class="col-span-8">
    <h3>What we do?</h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas deleniti deserunt ipsam eum, aperiam eos reprehenderit eligendi at vitae fugiat ex error sapiente impedit fuga esse dolores voluptatum autem dignissimos facilis ratione repudiandae ducimus quod eius repellat. Numquam, hic! Distinctio deserunt aperiam totam at necessitatibus tempora nulla laudantium illo reprehenderit!
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nihil quia nemo magnam esse neque molestiae iste magni voluptatibus autem delectus obcaecati officiis consequatur nulla velit harum, soluta dignissimos illo.
    </p>
    <Button id="action">Call to Action >></Button>
  </div>
  <div class="col-span-4">
    <h3>Contact Us</h3>
    <p><strong>Start Tailwind</strong></p>
    <p>1997 Stray Cat Street</p>
    <p>Silent Hills, Free R301</p>
    <p>P: (211) 0421-35529</p>
    <p>E: <a href="mailto:dragonneeetoo@gmail.com">dragonneeetoo@gmail.com</a></p>
  </div>
</div>

<style>
  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 2em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
  a {
    text-decoration: none;
    color: var(--primary-color);
  }
  a:hover {
    text-decoration: underline;
  }
</style>