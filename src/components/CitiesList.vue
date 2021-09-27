<template>
	<div class="cityNames">
		<p>
			<span v-for="city in cityNames" :key="city">{{ city }}</span>
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
	};
</script>

<style scoped>

.cityNames{
    text-align: center;
}

span::after{
    content: ', ';
}

span:last-child::after{
    content: '';
}
</style>