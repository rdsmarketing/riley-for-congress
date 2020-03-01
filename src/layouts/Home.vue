<template>
  <div class="layout">
<div class="hero-nav">
      <Header />
    <Navbar />
</div>
    <slot />
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
import Header from "../components/Header";
import Navbar from "../components/Navbar";
export default {
  name: "default",
  components: {
    Header,
    Navbar
  }
};
</script>

<style>
/* .hero-nav {
  min-height: 100vh!important;
} */
.body {
  background-color: white;
}
</style>
