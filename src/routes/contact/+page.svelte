<script>
// @ts-nocheck

	import { enhance } from "$app/forms";

// @ts-nocheck

	import Button from "$lib/Button.svelte";

  /**
	 * @type {{ success: any; message: any; }}
	 */
   export let form;

  $: console.log(form);

</script>
<div class="container py-8">
  <h2 class="font-bold text-4xl">Contact Us</h2>
  {#if form?.success}
    <p class="success">{form?.message || ""}</p>
  {:else}
    <p>{form?.message || ""}</p>
    <form method="POST" use:enhance>
      <div class="form-group">
        <label for="name" class="col-md-3 control-label">Name</label>
        <div class="col-md-9">
          <input 
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            class="form-control" 
            value={form?.name || ""}
            class:error={form && !form?.name}
          />
        </div>
        <label for="email" class="col-md-3 control-label">Email</label>
        <div class="col-md-9">
          <input 
            id="email"
            name="email"
            type="text"
            placeholder="Your email"
            class="form-control" 
            value={form?.email || ""}
            class:error={form && !form?.email}
          />
        </div>
        <label for="message" class="col-md-3 control-label">Your Message</label>
        <div class="col-md-9">
          <textarea 
            id="message"
            name="message"
            placeholder="PLease enter your message here..."
            rows="5"
            class="form-control"
            value={form?.message || ""}
            class:error={form && !form?.message} 
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-md-12">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  {/if}
</div>

<style>
  input, textarea {
    width: 100%;
    padding: 0.5em 1em;
    border-radius: 0.25em;
    border: 1px solid #999;
  }
  .form-group {
    margin-bottom: 1.1em;
  }
  label {
    display: block;
    margin: 0.5em 0;
  }
  .success {
    padding: 1em;
    background-color: lightgreen;
  }
  .error {
    border: 1px solid lightcoral;
  }
</style>