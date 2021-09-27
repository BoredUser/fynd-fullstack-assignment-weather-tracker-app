<template>
	<div>
		<city-input v-on:addCityToList="addCityToCityList" />
		<cities-list :cityNames="cityNames" />
	</div>
</template>

<script>
	import CitiesList from "@/components/CitiesList.vue";
	import CityInput from "@/components/CityInput.vue";
	import { mapState } from "vuex";

	export default {
		name: "AllCities",
		data() {
			return {
				status: "LOADING"
			};
		},
		computed: {
			...mapState({
				cities: (state) => state.cityReports.cities,
				cityNames:(state) => state.cityReports.cityNames
			})
		},
		methods: {
			async getWeather() {
				try {
					await Promise.all(
						this.cityNames.map(async (cityName) => {
							console.log(cityName);
							await this.$store.dispatch(
								"cityReports/getCityReport",
								cityName
							);
						})
					);
				} catch (error) {
					console.log(error.message);
				}
			},
			async addCityToCityList(cityName) {
				this.status = "LOADING";
				const isAdded = (this.cityNames).indexOf(cityName.toLowerCase());
				if (isAdded === -1) {
					this.cityNames.push(cityName.toLowerCase());
					await this.getWeather();
					this.status = "LOADED";
				}
			},
		},
		components: {
			CitiesList,
			CityInput,
		},
		async created() {
			this.status = "LOADED";
		},
	};
</script>

<style>
</style>