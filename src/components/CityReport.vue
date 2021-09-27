<template>
	<div class="weather-container">
		<div class="loading" v-if="status === 'LOADING'">
			<p>Getting weather report for your city</p>
		</div>
		<div v-if="status == 'ERROR'" class="loading">
			{{ error }}
		</div>
		<div v-else>
			<div
				class="weather"
				:style="[getBackgroundColor(city.weather[0].id)]"
			>
				<h2>{{ city.name }}</h2>
				<hr />
				<p>
					Date : {{ getDate(city.dt) }}
					<br />
					Wind direction is {{ city.wind.deg }} deg.
					<br />
					Wind speed is {{ city.wind.speed }} km/hr
					<br />
					Cloudiness is {{ city.clouds.all }}
					<br />
					Pressure is {{ city.main.pressure }}hPa
					<br />
					Humidity is {{ city.main.humidity }}%
					<br />
					Cooridinates : {{ city.coord.lat }}°N,
					{{ city.coord.lon }}°E
					<br />
					Sunrise time :
					{{ new Date(city.sys.sunrise * 1000).toUTCString() }}
					<br />
					Sunset time :
					{{ new Date(city.sys.sunset * 1000).toUTCString() }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		name: "CityReport",
		data() {
			return {
				cityName: this.$route.params.city,
				city: {},
				status: "LOADING",
				error: "",
			};
		},
		computed: {
			...mapGetters({ getCity: "cityReports/getCity" }),
		},
		created() {
			this.setCity();
			this.status = "LOADED";
		},
		methods: {
			setCity() {
				this.status = "LOADING";
				try {
					this.city = this.getCity(this.cityName.toLowerCase());
				} catch (err) {
					this.status = "ERROR";
					this.error = err.message;
				}
				this.status = "LOADED";
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
	.loading {
		text-align: center;
	}
	.weather-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
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
</style>