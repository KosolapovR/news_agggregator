<template>
  <div class="travel">
    <h1 @click="increment">This is a travel page</h1>
    <p @click="getNewsByArticle">
      {{ someComponentData }}
    </p>
  </div>
</template>

<script>
import { MUTATIONS_TYPES } from "@/store/mutation-types";
import { ACTION_TYPES } from "@/store/action-types";

export default {
  name: "Travel",
  computed: {
    someComponentData() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit(MUTATIONS_TYPES.INCREMENT);
    },
    getNewsByArticle() {
      console.log("clicked");
      this.$store.dispatch(
        ACTION_TYPES.GET_NEWS_BY_ARTICLE_FROM_LAST_WEEK,
        "Apple"
      );
    },
  },
};
</script>
