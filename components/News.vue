<template>
<v-hover  v-slot="{ hover }">
<v-row class="content">
<v-col cols="12" md="4" sm="6" v-for="(data, index) in news" :key="index">
<v-row class="parentDiv">
<v-col cols="12" sm="12" class="pr_0 pl_0">
  <a href=""><v-img :src="data.banner" alt="Flowers" height="39rem"></v-img></a>
</v-col>
<v-col class="headerDIV" >
<h3 class="hero-tile__title">{{data.header}}</h3>
<v-expand-transition v-if="hover" class="transition-fast-in-fast-out description--reveal">
<p class="hero-tile__description">{{data.description}}</p>
</v-expand-transition>
<p class="pt_3">
<span class="font-color"><v-icon small color="yellow">mdi-checkbox-blank</v-icon> {{data.teamType}}</span>
<span class="font-color"><v-icon>mdi-clock-time-three-outline</v-icon>{{data.time}}</span>
</p>
</v-col>
 </v-row> 
</v-col>

</v-row>
</div>
</v-hover>
</template>

<script>
export default {
  data() {
  return {
  news:[{
  banner :"1920X1080-CALENDAR_SINCR_22-23_eng.webp",
  header :"Nuria Rábano, first new face for 2022/23",
  description:"Left back, whose contract with Real Sociedad has expired, signs until 30 June 2024",
  teamType :"Women",
  time :"19 hrs ago"
  },
  {
  banner :"WhatsApp-Image-2022-06-23-at-4.54.03-PM.webp",
  header :"Previous meetings between Barça and Roma",
  description:"The teams have played 12 games, counting competitive and friendly meetings, and although the Catalans have the better record it's only by the tightest of margins",
  teamType :"First Team",
  time :"1 hr ago"
  },
  {
  banner :"mini_-Messi.webp",
  header : "New kit inspired by the Barcelona Olympics",
  description: "Presented under the tagline “The Flame Lives On”, and including the Spotify and UNHCR/ACNUR logos on the front and back, the home jersey will be available",
  teamType :"Club",
  time :"4:49 hours"
  }],
  
  }
  }
}
</script>

<style>
.parentDiv{
position : relative;
text-align: center;
color: white;
}

.headerDIV{
position : absolute;
top: 80%;
left :50%;
transform: translate(-50%, -50%);
}
.pr_0{
padding-right:0
}

.pl_0{
padding-left:0;
}
.pt_3{
padding-top:3rem;
}
.hero-tile__title {
    margin: 0 auto;
    font-family: fcb-extra-bold,Arial,Helvetica Neue,Helvetica,sans-serif;
    font-weight: 900;
    color: #fff;
    transition: -webkit-transform .2s;
    transition: transform .2s;
    transition: transform .2s, -webkit-transform .2s;
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
    font-size: 1.8rem;
    line-height: 1.1;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    padding: 0 2rem;
    z-index : 9999;
}

.hero-tile__description {
    color:white;
    max-width: 44rem;
    max-height: 0;
    margin: 0 auto;
    padding: 0 1rem;
    font-size:0.9rem;
    will-change: opacity,max-height,transform;
    transition: opacity .3s 0s,max-height .3s
}

.content{
    position: relative;
    min-height: 36rem;
    position: relative;
    background: #080e1f;
    box-shadow: 0 0.4rem 1.2rem 0 rgb(0 0 0 / 40%);
    display: flex;
    overflow: hidden;
    min-width:23rem;
}


.font-color{
    color: #fdc52c;
    margin-right: 1rem;
    font-size : 0.8rem;
    font-family:
    fcb-bold,Arial,Helvetica Neue,Helvetica,sans-serif;
    font-weight: 700;

}
.description--reveal{
opacity:1;
}

</style>
