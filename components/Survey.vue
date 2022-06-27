<template>
    <v-row  style="position:relative">
    <v-col>
            <v-img src="BAR-A-NEW-KIT_1600x700.webp" min-height="30rem" min-width="23rem"></v-img>
        </v-col>
        <v-col class="featured-promo__container" cols="12">
            <v-row>
                <v-col cols="12" class="text_center survey_font">
                WIN THE BARÇA JERSEY EVERY YEAR </br> FOR YOUR WHOLE LIFE!
                </v-col>
                <v-col cols="12" class="text_center survey_desc">
                <p>You will be able to chose the new kit version that you want season after season!</p>
                <v-btn class="btn_colors">Take Part</v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
}
</script>

<style>

.featured-promo__container {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding:2.8rem;
}

.survey_font{
font-size:3.2rem;
font-weight:800;
color:#fdc52c;
text-align: center;
font-family:fcb-light,Arial,Helvetica Neue,Helvetica,sans-serif
}

.survey_desc{
font-family:fcb-light,Arial,Helvetica Neue,Helvetica,sans-serif;
font-size:1.2rem;
font-weight:400;
}

.btn_colors{
background:#cd122d !important;
}

@media (max-width: 840px) {
  .survey_font{
   font-size:1rem;
   font-weight:900;
  }
  .survey_desc{
  font-size:0.9rem;
  }
}
</style>