import { MUTATIONS_TYPES } from "@/store/mutation-types";
import { ACTION_TYPES } from "@/store/action-types";
import getNewsByArticleFromLastWeek from "@/api/news/getNewsByArticleFromLastWeek";
import { createLogger } from "vuex";

const initialState = {
  count: 1,
  newsIsFetching: false,
};

const getters = {};

const mutations = {
  [MUTATIONS_TYPES.INCREMENT](state) {
    state.count++;
  },
  [MUTATIONS_TYPES.NEWS_IS_FETCHING](state, payload) {
    state.newsIsFetching = payload;
  },
};

const actions = {
  [ACTION_TYPES.GET_NEWS_BY_ARTICLE_FROM_LAST_WEEK]({ commit }, payload) {
    commit(MUTATIONS_TYPES.NEWS_IS_FETCHING, true);
    console.log("inside action");
    getNewsByArticleFromLastWeek(payload);
    commit(MUTATIONS_TYPES.NEWS_IS_FETCHING, false);
  },
};

const store = {
  state: initialState,
  getters,
  mutations,
  actions,
  plugins: process.env.NODE_ENV !== "production" ? [createLogger()] : [],
};

export default store;
