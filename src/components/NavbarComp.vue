<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between px-2">
    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/encoder" class="nav-link">Encoder</RouterLink>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <RouterLink to="/login" class="nav-link">Login</RouterLink>
        </li>
        <li class="nav-item" v-else>
          <RouterLink @click.prevent="logoutUser" to="" class="nav-link">Logout</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
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

.navbar-collapse {
  flex-grow: 0;
}

@media (min-width: 1024px) {

}
</style>
