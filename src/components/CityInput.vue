<template>
	<div class="addCity">
		<label for="cityToAdd"
			><h2>Enter a city to name to add to list</h2></label
		>
		<input
			id="cityToAdd"
			type="text"
			v-model="city"
			placeholder="City Name"
		/>
		<button @click="addSelectedCity">Add</button>
	</div>
</template>

<script>
	export default {
		name: "CityInput",
		data() {
			return {
				city: "",
			};
		},
		methods: {
			addSelectedCity() {
				if (this.city.trim() !== "") {
					this.$emit("addCityToList", this.city);
					this.city = "";
				}
			},
		},
	};
</script>

<style scoped>
	.addCity {
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;
		border-bottom: 1px solid black;
	}

	.addCity label {
		text-align: center;
		text-transform: capitalize;
		margin-bottom: 10px;
		margin-top: 50px;
	}

	.addCity input {
		padding: 5px;
		border-radius: 5px;
		margin: 10px 0;
	}

	.addCity button {
		margin-top: 10px;
		margin-bottom: 50px;
		padding: 5px 10px;
		cursor: pointer;
	}

	.addCity button:active {
		transform: translateY(3px);
	}
</style>