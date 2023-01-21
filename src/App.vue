<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
				<RouterLink to="/encoder">Encoder</RouterLink>
        <RouterLink to="/login" v-if="!isLoggedIn">Login</RouterLink>
				<RouterLink @click.prevent="logoutUser" to="" v-else>Logout</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapGetters, mapActions } from 'vuex';
export default {
  
  data() {
    return {}
  },

	computed: {
    ...mapGetters(['isLoggedIn'])
  },

  methods: {
    ...mapActions(['login', 'logout']),
    logoutUser() {
      this.logout();
    }
  }
}
</script>

<style scoped>

@media (min-width: 1024px) {

}
</style>
