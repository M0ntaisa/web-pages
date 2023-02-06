<script>
// @ts-nocheck

	import Button from "$lib/Button.svelte";

</script>
<div class="container">
  <h2>Contact Us</h2>
  <form>
    <div class="form-group">
      <label for="name" class="col-md-3 control-label">Name</label>
      <div class="col-md-9">
        <input 
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          class="form-control" 
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
        />
      </div>
      <label for="message" class="col-md-3 control-label">Your Message</label>
      <div class="col-md-9">
        <textarea 
          id="message"
          name="message"
          type="text"
          placeholder="Your message"
          class="form-control" 
        />
      </div>
    </div>
    <div class="form-group">
      <div class="col-md-12">
        <Button type="submit">Submit</Button>
      </div>
    </div>
  </form>
</div>

<style>
  .container {
    padding: 2em 0;
  }
  h2 {
    font-weight: 500;
    font-size: 2em;
  }
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
</style>