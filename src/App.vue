<template>

  <header>
		<navbar-comp />
  </header>

	<div class="mt-5">
		<RouterView />
	</div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapGetters, mapActions } from 'vuex';

import NavbarComp from './components/NavbarComp.vue';
export default {

	components: {
		NavbarComp,
	},
}
</script>

<style scoped>

@media (min-width: 1024px) {

}
</style>
