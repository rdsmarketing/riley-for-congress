<template>
  <Layout>
    <article v-for="edge in $static.allPost.edges" :key="edge.node.id">
      <div class="post-title">
        <h1 class="post-title__text">{{ edge.node.title }}</h1>

        <PostMeta :post="$page.post" />
      </div>

      <div class="post content-box">
        <div class="post__header">
          <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
        </div>

        <div class="post__content" v-html="$page.post.content" />

        <div class="post__footer">
          <PostTags :post="$page.post" />
        </div>
      </div>

      <div class="post-comments">
        <!-- Add comment widgets here -->
      </div>

      <Author class="post-author" />
    </article>
  </Layout>
</template>

<script>
export default {
  components: {},
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description
        }
      ]
    };
  }
};
</script>

<static-query>
{
  posts: allGhostPost(
      sortBy: "published_at",
      order: DESC,
  ) {
    edges {
      node {
        title
        description: excerpt
        date: published_at (format: "D. MMMM YYYY")
        url
        slug
        id
        coverImage: feature_image
      }
    }
  }
}
</static-query>

<style lang="scss">
</style>