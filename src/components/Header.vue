<template>
  <header class="header flex flex-col items-center justify-center">
    <div class="header-container">
      <h1 class="text-center text-white text-4xl pb-4 pt-4">
        Riley Seaburg For US Congress NY's 20th District
      </h1>
    </div>
    <div class="hero-container flex flex-col md:flex-row items-center justify-around w-full">
      <div class="img-container h-auto ">
        <g-image
          src="~/assets/riley.jpg"
          width="400"
          class="rounded-full border-4 border-solid border-white"
        />
      </div>
      <div
        class="form__container my-20 bg-blue-800 rounded-sm p-2 text-white"
      >
        <SignUpForm />
      </div>
    </div>
  </header>
</template>

<script>
import SignUpForm from "../components/SignUpForm";
export default {
  components: {
    SignUpForm
  }
};
</script>

<style lang="css">
.header {
  background-image: url(~@/assets/hero-banner.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

@media (min-width: 1100px) {
    .header {

  max-height: 100vh;
    }
}
</style>
