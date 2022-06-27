<template>
  <v-row class="news-latest-features border_style">
    <v-col class="text_center" cols="12">
      <h3 class="titles">Games & Features</h3>
    </v-col>
    <v-col cols="12" md="4" sm="12" v-for="(feature, index ) in games" :keys="index">
      <v-hover v-slot="{ hover }">
        <figure class="position_relative">
          <v-img :src="feature.imagePath" height="28.4rem"></v-img>
          <figcaption class="captions">
            <div class="thumbnail_text">
              <div class="thumbnail__title">
                {{ feature.imageHeader }}
              </div>
            <v-expand-transition v-if="hover" class="transition-fast-in-fast-out description--reveal">
              <div class="thumbnail__desc">
                {{ feature.imageDescription }}
              </div>
             </v-expand-transition> 
            </div>
            <div class="text_center margin_top">
              <span class="thumbnail__meta">{{ feature.imageType }}</span>
              <v-icon>mdi-clock-outline</v-icon
              ><span class="">{{ feature.imageTime }}</span>
            </div>
          </figcaption>
        </figure>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          imagePath: "GotS-winner-SAISON-3200X2000.webp",
          imageHeader: "All about the US Tour",
          imageDescription:
            "Miami, Las Vegas, Dallas and New York. Find out all the details about the 4 stops on the U.S.A tour for Xavi Hernández and the squad",
          imageType: "Feature",
          imageTime: "3 hrs ago",
        },
        {
          imagePath: "3200x2000-SCHEDULE-pretempoda_2022-ENG.webp",
          imageHeader: "FC Barcelona preseason decided",
          imageDescription:
            "There will be six games, two in Catalonia and four in the United States, before la Liga kicks off on August 12 or 13",
          imageType: "Feature",
          imageTime: "16 Jun 22",
        },
        {
          imagePath: "2022-06-10_FCBFUTSALvsElPOZO_17.webp",
          imageHeader: "Barça to face AS Roma in Gamper on August 6",
          imageDescription:
            "Men’s and women’s teams to once again play back to back encounters, this time against the respective teams",
          imageType: "Feature",
          imageTime: "15 Jun 22",
        },
      ],
    };
  },
};
</script>

<style>
.news-latest-features {
  margin: 0px;
  /*padding : 30px 24px 44px;*/
  position: relative;
  background: #fff;
  min-height:30rem;
}
.border_style{
  border: 1px solid gray;
}
.titles {
  background: linear-gradient(90deg, #cd122d, #154284);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #fff;
  font-size: 2.2rem!important;
  font-family: fcb-extra-bold, Arial, Helvetica Neue, Helvetica, sans-serif;
  font-weight: 900;
}

.captions {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  z-index: 20;
  font-size: 1rem !important;
  font-weight: 800;
  letter-spacing: 0.0333333333em !important;
  line-height: 1.25rem;
  font-family: "Roboto", sans-serif !important;
}

.thumbnail_text {
  text-align: center;
}
.thumbnail__meta {
  text-align: center;
  font-size: 1rem;
  color: yellow;
  font-weight: 400;
}

.thumbnail__title {
  white-space: normal;
  font-size: 1.4rem;
  line-height: 1.5rem;
  color: yellow;
  text-align: center;
  font-family: fcb-extra-bold, Arial, Helvetica Neue, Helvetica, sans-serif;
  font-weight: 800;
  max-height: 4.8rem;
  overflow: hidden;
  transition: margin 0.3s ease-out;
}
.thumbnail__desc {
  max-height: 3.6rem;
  overflow: hidden;
  margin-bottom: 1.8rem;
  color: #727272;
  font-size: 1rem;
  padding:0;
  line-height: 1.8rem;
  text-align: center;
  font-weight: 400;
  height: 4rem;
  color: white;
  max-height: none;
  transition: height 0.25s ease, opacity 0.25s ease;
}

.text_center{
text-align: center;
}
.position_relative{
position: relative;
}
.margin_top{
margin-top:5px;
}
</style>
