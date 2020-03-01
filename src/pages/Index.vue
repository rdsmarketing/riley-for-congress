<template>
  <Layout class="bg-blue-800">
    <!-- Patriotic Banner -->
  
  </Layout>
</template>

<script>
import Header from "../components/Header";
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
    Header,
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
