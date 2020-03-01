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
import Footer from "../components/Footer";
export default {
  name: "default",
  components: {
    Header,
    Navbar,
    Footer
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

@media (min-width: 1100px) {
  .body {
    overflow: hidden;
  }
}
.layout {
  min-height: 100vh;
}
</style>
