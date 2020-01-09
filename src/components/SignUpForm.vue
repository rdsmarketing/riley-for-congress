<template>
  <form action="/subscribe" method="POST" class="w-full">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="first-name"
        >First Name</label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          name="first-name"
          type="text"
          placeholder="Jane"
          required
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="last-name"
        >Last Name</label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="last-name"
          type="text"
          placeholder="Doe"
          required
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="email"
        >Email</label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="email"
          type="Email"
          placeholder="example@example.com"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,4}$"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="phone-number"
        >Phone Number</label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="phone-number"
          type="Phone"
          placeholder="518-888-5868"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="zipcode"
        >Zip Code</label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="zipcode"
          type="Zip"
          placeholder="12067"
          required
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
    </div>
    <div class="flex items-stretch">
      <button
        class="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >Join The Fight!</button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
</style>