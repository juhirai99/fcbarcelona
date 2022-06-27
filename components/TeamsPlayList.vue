<template>
  <v-card class="mx-auto playlist_background" min-height="18rem">
    <v-row>
      <v-col cols="12" class="text_center">
        <h3 class="playList_header">Only for Culers</h3>
      </v-col>
      <v-col cols="2" v-for="(playList,index) in playListTeam" :key="index">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto"
            id="listImage"
          >
            <v-img :src="playList"></v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      playListTeam: [
        "eng_live_tv.webp",
        "bfe084f1-b880-414c-9e3d-fcdc9e86a909.webp",
        "cat_culers.webp",
        "eng_full_matches.webp",
        "eng_cuers_wall.webp",
        "cat_barca_fun.webp",
      ],
    };
  },
};
</script>

<style>
.playList_header {
  background: linear-gradient(90deg, #cd122d, #154284);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #fff;
  font-size: 2rem;
  font-family: fcb-extra-bold, Arial, Helvetica Neue, Helvetica, sans-serif;
  font-weight: 900;
}

.playlist_background {
  background: white !important;
  padding: 0;
  border-bottom: 0.7px solid rgb(54 36 36 / 12%);
}

listImage.v-card {
  transition: 0.4s ease-in-out;
  width: 500px;
}

listImage.v-card:not(.on-hover) {
  width: 400px;
}


</style>
