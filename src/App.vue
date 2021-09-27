<template>
  <div id="app">
    <app-navbar />
		<div class="router-view">
			<router-view></router-view>
		</div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: 'App',
  components:{
    AppNavbar: Navbar,

  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  -ms-overflow-style: none; 
  scrollbar-width: none; 
}

*::-webkit-scrollbar {
  display: none;
}

body {
  font-family: "Source Sans Pro", sans-serif;
  margin: 0 0 100px 0;
}

.router-view{
    margin-top: 100px;
}

</style>
