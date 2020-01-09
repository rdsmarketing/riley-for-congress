<template>
  <Layout>
    <div class="bg-gray-300">
      <div id="hero" class="rounded overflow-hidden shadow-lg">
        <div class="px-6 py-6">
          <h1 class="text-center font-bold text-4xl mb-2">The Game Is Rigged And We All Know It</h1>
          <h2 class="text-center font-bold text-2xl mb-2">
            Together With Your Help We Can
            <span
              class="text-center font-bold italic text-2xl mb-2 pr-1 text-red-700"
            >Rewrite</span>The Rules.
          </h2>
          <h3
            class="text-center font-bold text-2xl mb-2"
          >My name is Riley Seaburg and if you live in</h3>
          <h3 class="text-center font-bold text-2xl mb-2">New York's Capital Region (20th District)</h3>
          <h3 class="text-center font-bold text-2xl mb-2">
            I want to be
            <span
              class="text-center font-bold italic text-2xl mb-2 pr-1 text-blue-500"
            >your</span>congressman.
          </h3>
        </div>
      </div>
    </div>
    <div>
      <div class="md:max-w-full w-full lg:max-w-full lg:flex">
        <div class="relative">
          <g-image
            class="h-full w-full object-cover"
            alt="Riley Seaburg"
            src="~/assets/riley.jpg"
            width="auto"
          />
        </div>
        <div
          class="border-r border-b border-l lg:w-3/4 border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex-col justify-between leading-normal"
        >
          <div class="mb-1">
            <p class="flex items-center"></p>
            <div class="font-bold text-3xl mb-2">Here's how we can win</div>
            <p
              class="text-xl font-bold text-base"
            >I'm not going to lie to you. This is going to be a fight. A real fight but I firmly believe that people speak louder than money. Our competition is flooded with dark money and will be able to outspend us 10 to 1. This is why I need your help. I'm only one man but I'm willing to be your voice.</p>
            <h4 class="text-3xl">Join me in the fight.</h4>
            <h5>Enter your information below and together we'll make real progress.</h5>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
    <Issues />
  </Layout>
</template>

<script>
import SignUpForm from "../components/SignUpForm";
import Issues from "../components/Issues";
export default {
  metaInfo: {
    title: "Home",
    meta: [
      { charset: "utf-8" },
      { name: "author", content: "Riley Seaburg" },
      {
        name: "description",
        content: "My name is Riley Seaburg and I want to be your congressman."
      },
      {
        name: "keywords",
        content:
          "Riley Seaburg, Riley for congress, who is Riley Seaburg, who is running for congress in NY 20, who's my congressman, how to beat paul tonko, is paul tonko corrupt, how to overthrough the establishment"
      }
    ]
  },
  components: {
    SignUpForm,
    Issues
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
