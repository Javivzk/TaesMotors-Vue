import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: null,
  }),
  getters: {
    isAuthenticated(state) {
      return state.token !== null;
    },
  },
  actions: {
    login(token) {
      this.token = token;
      localStorage.setItem('userToken', token);
    },
    logout() {
      this.token = null;
      localStorage.removeItem('userToken');
    },
    setToken(token) {
      this.token = token;
      localStorage.setItem('userToken', token);
    },
    clearToken() {
      this.token = null;
      localStorage.removeItem('userToken');
    },
  },
});
