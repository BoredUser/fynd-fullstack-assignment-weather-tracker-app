<template>
	<div class="cityNames">
		<h2>Cities added in weather report list</h2>
		<p>
			<span v-for="city in cityNamesTitleCase" :key="city">{{
				city
			}}</span>
		</p>
	</div>
</template>

<script>
	export default {
		name: "CitiesList",
		props: {
			cityNames: {
				type: Array,
				default: () => [],
			},
		},
		computed: {
			cityNamesTitleCase() {
				return this.cityNames.map((value) => {
					return value.charAt(0).toUpperCase() + value.slice(1);
				});
			},
		},
	};
</script>

<style scoped>
	h2 {
		margin: 50px 0 10px 0;
		text-align: center;
		text-transform: capitalize;
	}
	.cityNames {
		
		text-align: center;
	}
	span{
		margin-bottom: 50px;
	}

	span::after {
		content: ", ";
		
	}

	span:last-child::after {
		content: "";
	}
</style>