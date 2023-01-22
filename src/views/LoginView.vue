<template>
	<div class="row">
		<div class="card mx-auto">
			<div class="card-header text-light bg-primary">
				<h4>Login</h4>
			</div>
			<div class="card-body">
				<form>
					<div class="form-group pb-3">
						<label for="username">Email</label>
						<input
							id="email"
							type="email"
							placeholder="email@domain.com"
							name="email"
							v-model="email"
							class="form-control"
							ref="emailInput">
					</div>
					<div class="form-group pb-3">
						<label for="password">Password</label>
						<input
							id="password"
							type="password"
							placeholder="password"
							name="password"
							v-model="password"
							class="form-control"
							min="6"
							ref="passwordInput">
					</div>
					<p class="error alert alert-danger p-1" v-if="error">{{ error }}</p>
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
			this.error = '';

			if (!this.email) {
        this.error = 'Email is required';
				this.$refs.emailInput.focus();
				return;
      } else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(this.email)) {
        this.error = 'Invalid email';
				this.$refs.emailInput.focus();
				return;
      }

			if (this.password.length < 6 || !/\d/.test(this.password)) {
        this.error = 'Password should be at least 6 characters long and contain 1 number';
				this.password = '';
				this.$refs.passwordInput.focus();
				return;
      }

			let userData = {
        email: this.email,
        password: this.password
      };

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
  width: 90%;
  padding: 0px;
}

@media (min-width: 1024px) {
	.card {
		width: 60%;
	}
}
</style>