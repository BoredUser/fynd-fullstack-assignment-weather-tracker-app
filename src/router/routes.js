import VueRouter from "vue-router";
import AllCities from "@/components/AllCities.vue";
import AllReports from "@/components/AllReports.vue";
import CityReport from "@/components/CityReport.vue";

const router = new VueRouter({
	mode: "history",
	routes: [
		{
			name: "AllCities",
			path: "/",
			component: AllCities,
			meta: {
				title: "Weather Tracker",
			},
		},
		{
			name: "AllReports",
			path: "/all",
			component: AllReports,
            meta: {
				title: "Weather Tracker | Reports",
			}
		},
		{
			name: "CityReport",
			path: "/:city",
			component: CityReport,
            meta: {
				title: "Weather Tracker | CityReport",
			}
		}
		
	],
});

export default router;
