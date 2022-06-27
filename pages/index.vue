<template>
  <v-app>
    <v-row >
      <v-col cols="12" class="fixed_menu ml_10" >
        <Menus></Menus>
      </v-col>
      <v-col cols="12" class="">
        <News></News>
      </v-col>
      <v-col cols="12" class="">
        <Partners></Partners>
      </v-col>
      <v-col cols="12" class="col_padding ">
        <TeamsPlayList></TeamsPlayList>
      </v-col>
      <v-col cols="12" class="">
        <Store></Store>
      </v-col>
      <v-col cols="12" class="">
        <FanComment></FanComment>
      </v-col>
      <v-col cols="12" class="feature_background">
        <Features></Features>
      </v-col class="">
        <MoreNews></MoreNews>
      <v-col class="">
        <Survey></Survey>
      </v-col>  
      
      <v-col cols="12" class="">
        <Footer></Footer>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background: #181733;
  font-family: fcb-regular, Arial, Helvetica Neue, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
}
body,
h1 {
  font-weight: 400;
}
.theme--dark.v-application {
  background: #181733;
}
.fixed_menu {
  position: fixed;
  top: 0;
  z-index: 99999;
  background: #181733;
}

.feature_background{
background:white; 
padding-top:0;
min-width:23rem;
}

.col_padding{
padding:0;
min-width:23rem;
}

@media (min-width: 1280px) {
  .full_height{
    min-width:115rem;
  }
}

/*@media (min-width: 1024px) {
  .full_height{
    min-width:83rem;
  }
}*/
</style>
