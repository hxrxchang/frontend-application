<template>
  <div class="edit-article-container">
    <app-header />
    <edit-header-nav class="drafts" />
    <article-editor :title="decodedTitle" :putArticle="putArticle"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppHeader from '../organisms/AppHeader'
import EditHeaderNav from '../molecules/EditHeaderNav'
import ArticleEditor from '../atoms/ArticleEditor'
import { htmlDecode } from '~/utils/article'

export default {
  components: {
    AppHeader,
    EditHeaderNav,
    ArticleEditor
  },
  computed: {
    decodedTitle() {
      return htmlDecode(this.title)
    },
    ...mapGetters('article', ['title', 'body'])
  },
  methods: {
    ...mapActions('article', ['putDraftArticle', 'gotArticleData']),
    async putArticle() {
      if (!this.gotArticleData) return
      const { title, body, thumbnail } = this
      const { articleId } = this.$route.params
      const article = { title, body }
      if (thumbnail !== '') article.eye_catch_url = thumbnail
      await this.putDraftArticle({ article, articleId })
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-article-container {
  display: grid;
  grid-template-rows: 100px 40px 50px 650px 75px;
  grid-template-columns: 1fr 640px 1fr;
  /* prettier-ignore */
  grid-template-areas:
    "app-header  app-header app-header"
    "nav         nav        nav       "
    "...         ...        ...       "
    "...         editor     ...       "
    "...         ...        ...       ";
}
</style>
