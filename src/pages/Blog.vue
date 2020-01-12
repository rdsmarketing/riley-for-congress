<template>
  <Layout>
    <h1 class="text-center text-2xl font-bold">Blog</h1>
  </Layout>
</template>

<static-query>

{
  
  allGhostPost {
    edges{
      node{
        id
        title
        html
        excerpt
        updated_at
        og_image
        og_title
        og_description
        url
       tags {
          meta_title
        meta_description
      }
        }
      }
    }
  }

</static-query>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>