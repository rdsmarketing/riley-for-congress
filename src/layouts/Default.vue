<template>
  <div class="layout">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  name: "default",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
.body {
  background-color: beige;
}
</style>
