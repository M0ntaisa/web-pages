<script>

	import Button from "$lib/Button.svelte";

</script>

<div class="container">
  <div class="form h-screen flex flex-col justify-center items-center">
    <form class="bg-gray-100 rounded-lg px-8 pt-6 pb-8 mb-4" method="POST">
      <h2 class="text-center text-3xl text-gray-800 mb-8 font-bold">Login</h2>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" placeholder="example123">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="Enter your password">
      </div>
      <div class="flex items-center justify-between">
        <Button id="action">Sign In</Button>
      </div>
    </form>
  </div>
    
</div>