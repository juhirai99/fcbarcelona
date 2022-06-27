<template>
  <v-row class="store_container">
    <v-col cols="12" class="text_center">
      <h3 class="playList_header widget_title">Barça Store CN</h3>
    </v-col>
    <v-col cols="12" sm="12" md="4" v-for="(store,index) in storeImage" :key="index">
      <v-card  class="background_white">
        <v-row class="mt_23">
          <v-col class="pt_0">
            <v-img :src="store.imagePath"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-img :src="store.shirtImage"></v-img>
          </v-col>
          <v-col cols="8">
            <v-row>
              <v-col cols="12"  class="font_header pb_0">
                <h2>{{ store.description }}</h2>
              </v-col>
              <v-col cols="12" class="pb_0 font_label">
                <h5>{{ store.label }}</h5>
              </v-col>
              <v-col cols="12" class="pt_0">
                <button text class="pl_0 button_style">
                  Shop Now
                  <svg class="icon icon_width" viewBox="0 0 88 88">
                    <path
                      d="M51.56 55.78H58V29H30.64v6.3h16.41L11 70.27 15.83 75l35.73-35.29v16.07z"
                    ></path>
                    <path
                      d="M75 13A43.8 43.8 0 0044.12 0a42.51 42.51 0 00-30.88 13C-.74 27-4 47.41 5.11 64.62L11 61.7a37 37 0 016.83-43.84 34.87 34.87 0 0126-11 36.12 36.12 0 0126.33 11 37.12 37.12 0 0111 26.3 36.58 36.58 0 01-11 26.31 37.55 37.55 0 01-43.88 6.82l-2.6 5.84A45.22 45.22 0 0044.12 88 43.64 43.64 0 0075 75a43.78 43.78 0 0013-30.84A45.08 45.08 0 0075 13z"
                    ></path>
                  </svg>
                </button>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <!--<v-col cols="12" class="border_image">
</v-col>-->
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      storeImage: [
        {
          imagePath: "MicrosoftTeams-image-2-.webp",
          shirtImage: "home.webp",
          description: "Home Kit 22/23",
          label: "Men",
        },
        {
          imagePath: "dona-imatge.webp",
          shirtImage: "home.webp",
          description: "Home Kit 22/23",
          label: "Women",
        },
        {
          imagePath: "banner_825x385_3-prova.webp",
          shirtImage: "home.webp",
          description: "Home Kit 22/23",
          label: "Kids",
        },
      ],
    };
  },
};
</script>

<style>
.widget_title {
  font-size: 36px;
  margin-bottom: 20px;
  color: #cd122d;
  font-family: fcb-extra-bold, Arial, Helvetica Neue, Helvetica, sans-serif;
  font-weight: 400;
}
.font_header {
  color: black;
  font-size: 1rem;
  font-weight: 900;
}
.font_label {
  color: gray;
  font-size: 0.9rem;
  font-weight: 400;
}

.button_style {
  font-family: fcb-extra-bold, Arial, Helvetica Neue, Helvetica, sans-serif;
  font-weight: 800;
  font-size: 0.9rem;
  font-style: italic;
  color: #154284;
  margin-top: 1.6rem;
  text-transform: uppercase;
  z-index: 20;
}
.icon_width {
  height: 0.8rem;
  fill: #154284;
}
.pb_0{
padding-bottom:0;
}
.background_white{
background:white !important;
}

.mt_23{
margin-top:-23px;
}
.border_image {
  position: absolute;
  bottom: 50px;
  border-top: 0.07rem solid rgb(192 183 183 / 87%);
}
.store_container{
background: white; 
position: relative; 
min-height: 34rem;
min-width:23rem;
}
</style>
