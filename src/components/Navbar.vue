<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-800 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <g-link to="/">
        <span class="font-semibold text-xl tracking-tight">Riley For Congress</span>
      </g-link>
    </div>
    <div class="block lg:hidden">
      <button
        @click="isOpen = !isOpen"
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-sm lg:flex-grow">
        <g-link
          to="/about"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >About Riley</g-link>
        <g-link
          to="/why"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >Why I'm Running</g-link>
        <g-link
          to="/issues"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >Key Issues</g-link>
        <g-link
          to="/volunteer"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >Volunteer</g-link>
        <g-link
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          to="/blog"
        >Blog</g-link>
      </div>
      <div>
        <g-link
          to="/donate"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >Donate</g-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>
