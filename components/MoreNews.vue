<template>
  <v-row class="news-latest-features">
    <v-col class="text_center" cols="12">
      <h3 class="titles">Barça News</h3>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="3"
          v-for="(feature,index) in news"
          :keys="index"
          class="pr_0"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              class="imgae_div"
              width="23rem"
            >
              <v-row>
                <v-col class="ptb_0 background_white" cols="12" sm="12" md="12">
                  <v-img :src="feature.imagePath" ></v-img>

                  <div class="" class="text_center background_white color_black">
                    <div class="newsTitle">
                      {{ feature.imageHeader }}
                    </div>
                    <v-expand-transition
                      v-if="hover"
                      class="transition-fast-in-fast-out v-card--reveal"
                    >
                      <div class="descriptions">
                        {{ feature.imageDescription }}
                      </div>
                    </v-expand-transition>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" md="6" sm="12" class="pt_0  background_white">
                  <v-icon color="red">mdi-square-medium</v-icon>
                  <span class="labelcolor">{{ feature.imageType }}</span>
                </v-col>
                <v-col cols="6" md="6" sm="12" class="pt_0 background_white text_right">
                  <v-icon color="grey">mdi-clock-time-three-outline</v-icon>
                  <span class="descriptions">{{ feature.imageTime }}</span>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          imagePath: "a51499545ca13d9ddce5a5df4209aef6.webp",
          imageHeader: "LaLiga Promises live",
          imageDescription:
            "Men’s and women’s teams to once again play back to back encounters, this time against the respective teams ",
          imageType: "Barca youth",
          imageTime: "15 Jun 22",
        },
        {
          imagePath: "WhatsApp-Image-2022-06-23-at-5.03.02-PM-1-.webp",
          imageHeader: "Five unmissable games at Camp Nou in 2022",
          imageDescription:
            "Men’s and women’s teams to once again play back to back encounters, this time against the respective teams",
          imageType: "First Team",
          imageTime: "15 Jun 22",
        },
        {
          imagePath: "2022-03-21-OTRO-MADRID-BARCELONA-30.webp",
          imageHeader: "Barça to face AS Roma in Gamper on August 6",
          imageDescription:
            "Men’s and women’s teams to once again play back to back encounters, this time against the respective teams",
          imageType: "First Team",
          imageTime: "15 Jun 22",
        },
        {
          imagePath: "WhatsApp-Image-2022-06-23-at-4.54.03-PM.webp",
          imageHeader: "Barça to face AS Roma in Gamper on August 6",
          imageDescription:
            "Men’s and women’s teams to once again play back to back encounters, this time against the respective teams",
          imageType: "First Team",
          imageTime: "15 Jun 22",
        },
      ],
    };
  },
};
</script>

<style>
.newsTitle {
  white-space: normal;
  font-size: 0.9em;
  line-height: 1.3rem;
  color: #222;
  text-align: center;
  margin: 1.2rem 0 1rem;
  font-family: fcb-extra-bold, Arial, Helvetica Neue, Helvetica, sans-serif;
  font-weight: 900;
  max-height: 4.8rem;
  overflow: hidden;
  transition: margin 0.3s ease-out;
}

.descriptions {
  max-height: 3.6rem;
  overflow: hidden;
  margin-bottom: 1.8rem;
  color: #727272;
  font-size: 0.8rem;
  line-height: 1.3rem;
  text-align: center;
  /*opacity: 0;8*/
  height: 4rem;
}
.labelcolor {
  color: red;
  font-size: 0.8rem;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.pr_0{
padding-right:0;
}
.ptb_0{
padding-top:0px;
padding-bottom:0px;
}
.pt_0{
padding-top:0;
}
.imgae_div{
position: relative; 
background: white;
 margin-left: 4px
}
.color_black{
color: black;
}
@media (min-width: 768px) {
  .imgae_div{
    width:50rem !important;
  }
  
}

</style>
