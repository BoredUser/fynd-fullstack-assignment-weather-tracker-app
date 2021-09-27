import { s_getCityReport } from "@/services/cityWeatherReportServices.js";

const cityReports = {
	namespaced: true,
	state: {
		token: "414c24b0ec0278856f10e110f3cdf2ae",
		cities: [],
	},
	getters: {
		getCity(state) {
			return (cityName) => {
				const data = (state.cities).find((value) => {
					return value.name.toLowerCase() === cityName;
				});
				if (data !== undefined) {
					const jData = JSON.parse(data);
					return jData;
				} else {
					if (localStorage.getItem(cityName)) {
						const currentDateTime = new Date().getTime();
						const cityData = localStorage.getItem(cityName);

						const cityJData = JSON.parse(cityData);

						const storageDateTime = new Date(cityJData.time).getTime();

						if (currentDateTime - storageDateTime >= 900000) {
							return false;
						} else {
							return cityJData.data;
						}
					} else {
						
						return false;
					}
				}
			};
		},
	},
	mutations: {
		setCityReport(state, cityReport) {
			const data = (state.cities).filter((value) => {
				return value.name.toLowerCase() !== cityReport.name;
			});
			const date = new Date();
			const Jdata = { data: cityReport, time: date };
			const dString = JSON.stringify(Jdata);

			localStorage.setItem(cityReport.name.toLowerCase(), dString);
			data.push(cityReport);
			state.cities = data;
		},
	},
	actions: {
		getCityReport(context, cityName) {
			cityName = cityName.toLowerCase();
			const cityReport = context.getters.getCity(cityName);
			if (cityReport === false) {
				s_getCityReport(
					cityName,
					context.state.token
				).then((data) => {
					context.commit("setCityReport", data);
				});
				
			}
			else{
				context.commit("setCityReport", cityReport);
			}
		},
	},
};

export default cityReports;
