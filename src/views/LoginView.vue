<template>
	<div class="row">
		<div class="card mx-auto">
			<div class="card-header text-light bg-primary">
				<h4>Login</h4>
			</div>
			<div class="card-body">
				<form>
					<div class="form-group">
						<label for="username">Email</label>
						<input
							id="email"
							type="text"
							placeholder="Email"
							name="email"
							v-model="email"
							class="form-control">
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input
							id="password"
							type="password"
							placeholder="password"
							name="password"
							v-model="password"
							class="form-control">
					</div>
					<p v-if="error">{{ error }}</p>
					<button class="btn btn-primary" @click.prevent="loginUser">Login</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  
  data() {
    return {
      email: "",
      password: "",
			error: ""
    }
  },
  methods: {
    ...mapActions(['login']),
    loginUser() {
      let userData = {
        email: this.email,
        password: this.password
      };
			this.error = '';
      this.login(userData).then(res => {

				if (res.status === 401) {
					this.error = 'Wrong credentials.'
				}
				
				if (res.token) {
					this.$router.push('/encoder');
				}
				
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
.card {
  width: 60%;
  padding: 0px;
}
</style>