import router from "../../router/router";
import axios from "axios";
// initial state
const state = {
  loadPosts: [],
  loadPost: [], 
};

// getters
const getters = {
  
  lodedPosts(state) {
    return state.loadPosts;
  },
  lodedPost(state) {
    return state.loadPost;
  },
 
};

// actions
const actions = {
 
  createPost({ commit }, payload) {
    const post = {
      title: payload.title,
      category: payload.category,
      imgUrl: payload.imgUrl,
      content: payload.content
    };
    axios
      .post("create/addPost", {
        title: payload.title,
        category: payload.category,
        imgUrl: payload.imgUrl,
        content: payload.content
      })
      .then(() => {
        router.push("/");
        commit("createPosts", {
          ...post
        });
      });
  },

  getPosts({ commit }, payload) {
    axios
      .get(`posts/${payload ? `?limit=${payload}` : ""}`)

      .then(res => {
        commit("createPosts", res.data);
      });
  },
  getPost({ commit }, payload) {
    axios
      .get(`posts/${payload}`)

      .then(res => {
        commit("createPost", res.data);
      });
  },


};

// mutations
const mutations = {
  createPosts(state, payload) {
    state.loadProducts = payload;
  },
  createPost(state, payload) {
    state.loadProduct = payload;
  },
  
};

export default {
  state,
  getters,
  actions,
  mutations
};
