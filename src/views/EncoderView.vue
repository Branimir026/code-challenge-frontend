<template>
	<div class="row">
		<div class="card mx-auto">
			<div class="card-header text-light bg-primary">
				<h4>Encoder</h4>
			</div>
			<div class="card-body">
				<form>
					<div class="form-group pb-3">
						<label for="username">String you want to encode</label>
						<input
							id="string"
							type="text"
							placeholder="AAABCCC"
							name="string"
							v-model="string"
							class="form-control"
							ref="stringInput">
					</div>
					<p class="error alert alert-danger p-1" v-if="error">{{ error }}</p>
					<button class="btn btn-primary" @click.prevent="encodeString">Encode</button>
				</form>
				<h1 v-if="encodedString">{{ encodedString }}</h1>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  
  data() {
    return {
      string: "",
			error: "",
			encodedString: ""
    }
  },

  methods: {
    ...mapActions(['encode']),
    encodeString() {

			if (!this.string) {
        this.error = 'String is required';
				this.$refs.stringInput.focus();
				return;
      }

      let stringData = {
        string: this.string
      };
			this.error = '';
			this.encodedString = '';

      this.encode(stringData).then(res => {

				if (res.status !== 200) {
					this.error = 'Something went wrong.'
				} else {
					this.encodedString = res.encodedString;
					this.string = '';
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