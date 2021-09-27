<template>
	<div class="addCity">
		<label for="cityToAdd">Enter a city to name to add to list</label>
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
            margin: 10px 0;
        }

        .addCity input {
            padding: 5px;
            border-radius: 5px;
            margin: 10px 0;
        }

        .addCity button {
            margin: 10px 0;
            padding: 5px 10px;
            cursor: pointer;
        }

        .addCity button:active {
            transform: translateY(3px);
        }


</style>