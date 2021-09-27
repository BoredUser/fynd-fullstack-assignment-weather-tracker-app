import { s_getCityReport } from "@/services/cityWeatherReportServices.js";

const cityReports = {
	namespaced: true,
	state: {
		token: "414c24b0ec0278856f10e110f3cdf2ae",
		cities: [],
		cityNames : []
	},
	getters: {
		getCity(state) {
			return (cityName) => {
				const data = (state.cities).find((value) => {
					return value.name.toLowerCase() === cityName;
				});
				if (data !== undefined) {
					return data;
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
				return value.name.toLowerCase() !== (cityReport.name).toLowerCase();
			});
			const date = new Date();
			const Jdata = { data: cityReport, time: date };
			const dString = JSON.stringify(Jdata);

			localStorage.setItem(cityReport.name.toLowerCase(), dString);
			data.push(cityReport);
			state.cities = data;
			const cityNameExists = (state.cityNames).find((value) => {
				return value.toLowerCase() === cityReport.name.toLowerCase();
			});
			if (cityNameExists === undefined) {
				state.cityNames.push(cityReport.name.toLowerCase());
			}
			
		},
		removeCity(state, cityName){
			const data = (state.cities).filter((value) => {
				return value.name.toLowerCase() !== cityName.toLowerCase();
			});
			state.cities = data;
			const names = (state.cityNames).filter((value) => {
				return value.toLowerCase() !== cityName.toLowerCase();
			});
			state.cityNames = names;
		}
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
