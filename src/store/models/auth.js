import axios from 'axios';
import router from '../../router/router';
// axios.defaults.withCredentials = true;
export default {
    state: {
        user: null,
        error: null,     
    },
    getters: {
        user(state) {
          return state.user;
        },
        error(state) {
          return state.error;
        }        
    },
    actions: {
      isAuth({ commit }) {
        axios.get("auth").then(res => {
          
          commit("register", res.data);
        });
      },
      register({ commit }, payload) {
        commit("clearError");
        axios
          .post("auth/register", {
            email: payload.email,
            username: payload.username,
            password: payload.password
          })
  
          .then(res => {
            console.log(res.data.username);  
                router.push("login");
              })
          },
          login({ commit }, payload) {
            commit("clearError");
            axios
              .post("auth/login", {
                username: payload.username,
                password: payload.password
              })
      
              .then((res) => {
                console.log(res.data);
              
              const token = res.data.token
              localStorage.setItem('user-token', token)
                router.push("/profile");
                commit("setUser", res.data);
              })
              .catch(error => {
                console.log(error);
              });
          },
      
          logout({ commit }) {
            // axios.post(`auth/logout`).then(() => {
            //   localStorage.removeItem('user-token')
            //   router.push("/login");
            // });
      
            commit("setUser", null);
            localStorage.setItem('user-token', "")
            router.push("/");
          },
          clearError({ commit }) {
            commit("clearError");
          }

    },

    mutations: {
        setUser(state, payload) {
          state.user = payload;
        },
        setError(state, payload) {
          state.error = payload;
        },
        clearError(state) {
          state.error = null;
        }
      }
}