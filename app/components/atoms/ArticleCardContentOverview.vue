<template>
  <p class="area-overview">
    {{ decodedOverview }}
  </p>
</template>

<script>
import { htmlDecode } from '~/utils/article'

export default {
  props: {
    overview: {
      type: String,
      required: false
    }
  },
  computed: {
    decodedOverview() {
      return htmlDecode(this.overview)
    }
  }
}
</script>

<style lang="scss" scoped>
.area-overview {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #7f7f7f;
  display: -webkit-box;
  font-size: 12px;
  grid-area: overview;
  line-height: 20px;
  margin: 0;
  overflow: hidden;
  text-align: justify;
  text-overflow: ellipsis;

  a {
    color: #7f7f7f;
    display: block;
    text-decoration: none;
  }
}

.long-article-card {
  .area-overview {
    -webkit-line-clamp: 3;
    font-size: 14px;
    line-height: 24px;
  }
}

@media screen and (max-width: 1296px) {
  .long-article-card {
    .area-overview {
      -webkit-line-clamp: 2;
      font-size: 12px;
      line-height: 24px;
    }
  }
}

@media screen and (max-width: 550px) {
  .long-article-card {
    .area-overview {
      line-height: 18px;
    }
  }
}
</style>
