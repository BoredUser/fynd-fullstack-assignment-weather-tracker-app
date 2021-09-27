<template>
	<nav :class="{ show: d_isCrossClicked }">
		<div class="nav-content">

			<div
				class="nav-cross"
				@click="d_isCrossClicked = !d_isCrossClicked"
			>
				<div class="crosss-bar one"></div>
				<div class="crosss-bar two"></div>
			</div>

			<div class="nav-links">
				<router-link
					class="nav-link"
					to="/"
					active-class="active"
					exact
					>All Cities</router-link
				>
				<router-link
					class="nav-link"
					to="/all"
					active-class="active"
					>All Reports</router-link
				>
				

			</div>
			
		</div>
	</nav>
</template>

<script>
	import router from "@/router/routes.js";
	export default {
		name: "Navbar",
		router,
		data() {
			return {
				d_isCrossClicked: false,
			};
		},
	};
</script>

<style>
	nav {
		margin: 0;
		overflow: hidden;
		background: #f8f9fa;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 3;
	}

	.nav-content {
		padding: 1em 2em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 600; /* Experimental */
	}

	.nav-content a {
		display: block;
		line-height: 50px;
		text-decoration: none;
	}

	.show {
		background-color: #000000;
	}

	.nav-links {
		position: fixed;
		top: 60px;
		padding-top: 40px;
		right: 0;
		width: 100%;
		flex-direction: column;
		justify-content: flex-start;
	}

	.show .nav-links {
		height: 100%;
		background-color: #000000;
		z-index: 2;
	}

	.logo {
		color: #000;
	}

	.show .logo {
		color: #fff;
	}

	.nav-links a {
		display: none;
		margin-right: 50px;
		margin-left: 2em;
		color: #a3a4a5;
		border-bottom: 1px solid rgba(180, 180, 180, 0.5);
	}

	.nav-links > .active {
		color: #fff;
	}

	.show .nav-links a {
		display: block;
		opacity: 1;
		width: auto;
		height: auto;
	}

	.nav-logout {
		order: 3;
		color: #a3a4a5;
	}
	.nav-logout a {
		color: #a3a4a5;
	}

	.nav-logout span {
		display: none;
	}

	.one {
		margin-bottom: 10px;
	}

	.show .one {
		transform: rotate(45deg) translateY(8px);
	}

	.show .two {
		transform: rotate(-45deg) translateY(-8px);
	}

	.user-greeting {
		display: none;
		color: rgb(180, 180, 180);
	}

	.user-greeting .active {
		color: #73c7d5;
	}

	.nav-cross {
		grid-template-columns: auto;
		height: 10px;
		cursor: pointer;
		transition: all 0.3s;
		order: 1;
		display: grid;
	}

	.crosss-bar {
		height: 1px;
		width: 30px;
		background: #a3a4a5;
		transition: 0.5s;
	}

	.nav-content a:hover,
	.nav-cross:hover,
	.search-icon:hover {
		color: #fff;
	}

	@media (min-width: 768px) {
		.nav-content {
			padding: 0em 3em;
		}

		.nav-links {
			width: 65%;
			padding-top: 0;
			position: static;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
		}

		.nav-links a {
			display: inline-block;
			overflow: hidden;
			margin: 0;
			padding: 0.6em 10px;
			border-bottom: none;
			font-size: 1em;
			line-height: 44px;
		}

		.nav-links a:first-child {
			margin-left: -10px;
		}

		.user-greeting {
			display: inline-block;
		}

		.nav-cross {
			display: none;
		}

		.nav-links > .active {
			color: #000;
			background-color: #eeeeee;
		}

		.nav-logout {
			order: 0;
		}
		.nav-content a:hover,
		.nav-cross:hover,
		.search-icon:hover {
			color: #000;
		}
	}

	.logo:hover {
		color: #73c7d5;
	}
</style>
