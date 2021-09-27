<template>
	<div class="weather-list-container">
		<div
			v-for="city in cities"
			:key="city.id"
			class="weather"
			:style="[getBackgroundColor(city.weather[0].id)]"
			@click="cityWeatherReportDetails(city.name)"
		>
			<h2>{{ city.name }}</h2>
			<p class="cross" @click.stop="removeCity(city.name)">+</p>
			<hr />
			<p>
				Current Weather : {{ city.weather[0].main }}
				<br />
				Date : {{ getDate(city.dt) }}
				<br />
			</p>
		</div>
	</div>
</template>

<script>
	import router from "@/router/routes.js";
	import { mapState, mapMutations } from "vuex";
	export default {
		name: "AllReports",
		router,
		computed: {
			...mapState({
				cities: (state) => state.cityReports.cities,
			}),
		},
		methods: {
			...mapMutations( {removeCityFromStore: "cityReports/removeCity"} ),
			cityWeatherReportDetails(cityName){
				this.$router.push({ name: "CityReport", params: { city: cityName } });
			},
			removeCity(cityName) {
				this.removeCityFromStore(cityName);
			},
			getBackgroundColor(code) {
				if (200 <= code && code <= 299) {
					return {
						backgroundColor: "DarkSlateBlue",
						color: "white",
					};
				} else if (300 <= code && code <= 399) {
					return {
						backgroundColor: "Aqua",
					};
				} else if (500 <= code && code <= 599) {
					return {
						backgroundColor: "blue",
						color: "white",
					};
				} else if (700 <= code && code <= 799) {
					return {
						backgroundColor: "grey",
						color: "white",
					};
				} else if (800 <= code && code <= 899) {
					return {
						backgroundColor: "GhostWhite",
					};
				}
			},
			getDate(date) {
				return new Date(date * 1000).toUTCString();
			},
		},
	};
</script>

<style scoped>
	.weather-list-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 120px 2em;
	}

	.weather {
        position: relative;
		border: 1px solid rgb(167, 167, 167);
		border-radius: 5px;
		padding: 20px;
		margin-bottom: 30px;
		flex-basis: 30%;
	}

	.cross {
		position: absolute;
		top: 0;
		right: 20px;
		font-size: 24px;
		transform: rotate(45deg);
		cursor: pointer;
	}

	@media (min-width: 768px) {
		.weather-list-container {
			margin: 100px 3em;
			padding-bottom: 100px;
		}
	}
</style>