<template>
  <v-row class="fcb_comment">
    <v-row>
      <v-col cols="12" class="fan-comments__sponsor-container">
        <span>Presented By</span>
        <span class="fan-comments__sponsor-logo">
          <svg
            class="icon fan-comments__sponsor-logo-icon"
            viewBox="0 0 373.37 82.6"
          >
            <path
              d="M302.71 0l-3.63 19.51h22.57l-11.53 63h25.31l11.56-63h22.75L373.37 0zm-140 63l2.67-14.4h20.52c14.6 0 10.6 14.35-2.42 14.35h-20.77zm48.8-24a20.93 20.93 0 009.09-14.25C223.13 11.22 214 0 193.56 0l-44.28.08L137 66l10.89 16.55h31.52c20.67 0 36-9.49 39-26C220.86 43 211.59 39.1 211.54 39zm-24.71-6.32h-18.35l2.44-13.19H189c13.39.05 9.71 13.16-2.22 13.16zm62 17.91L246.49 63h41.18l-3.61 19.51h-66.42L232.88 0h63.92l-3.6 19.53h-38.61l-2.14 11.54h33.46l-3.6 19.51z"
              fill="#0090d7"
              fill-rule="evenodd"
            ></path>
            <path
              d="M94.3 8.33C89.06 1.76 80.25-.12 72.42 0H50l20.74 31.62L94.3 8.33zM33.89 75.78L110.55 0h36.68l-36.38 36 30.65 46.5h-18.75c-18 0-21.51-5.65-24.6-9.36l-9.83-14.92-24.57 24.3-56.66.08c2.62-14.55 5.36-29.1 8-43.64l2.42-7L0 40.12l.15-21.29L29.42 0h18.67l-14.2 75.78z"
              fill="#fff"
              fill-rule="evenodd"
            ></path>
          </svg>
        </span>
      </v-col>
      <v-col cols="12" class="fan-comments__title">
        <h2>
          THE <span class="fan-comments__title--yellow">Culers Wall</span>
        </h2>
      </v-col>
      <v-col class="fan-comments__splitter">
        <h4 class="fan-comments__splitter-text">
          <span class="fan-comments__splitter-topic-text"
            >Topic of the day...</span
          >
          <span class="splitter-question"
            >Happy Birthday, Clement Lenglet! 🎊🎉 Let's share with him our
            birthday messages!</span
          >
        </h4>
      </v-col>
      <v-col cols="12">
        <v-btn class="button_color"> HAVE YOUR SAY</v-btn>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
};
</script>

<style>
.fcb_comment {
  position: relative;
  margin: 20px 0;
  min-width:23rem;
  padding: 22px 32px 48px;
  width: 100%;
  background-size: cover;
  background-image: url(https://www.fcbarcelona.com/resources/v2.46.0-4844/i/bg-elements/fan-comments-background@x2.png);
  background-position: 50%;
  background-repeat: no-repeat;
  text-align: center;
  color: #fff;
  min-height: 420px;
}
.fan_comment_text {
  padding-right: 12px;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-transform: uppercase;
  color: hsla(0, 0%, 100%, 0.7);
  font-family: fcb-bold, Arial, Helvetica Neue, Helvetica, sans-serif;
  font-weight: 400;
}

.fan-comments__sponsor-logo {
  margin-left: 12px;
  height: 30px;
}

.fan-comments__sponsor-logo-icon {
  height: 3rem;
  width: auto;
}

.fan-comments__title {
  position: relative;
  display: inline-block;
  font-size: 30px;
  line-height: 30px;
  text-transform: uppercase;
  color: #fff;
  font-family: fcb-extra-bold, Arial, Helvetica Neue, Helvetica, sans-serif;
  font-weight: 400;
  font-style: italic;
  margin: 22px 0 30px;
  z-index: 10;
}

.fan-comments__title--yellow {
  color: #fdc52c;
}

.

.fan-comments__splitter {
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 0 36px;
}


.fan-comments__splitter-text {
  font-size: 16px;
  margin: 0 1px;
  text-transform: uppercase;
}

.fan-comments__splitter-topic-text {
  color: #fdc52c;
}

.fan-comments__content-container {
  position: relative;
  margin-top: 32px;
}

.splitter-question{
font-size:2rem;
}
.button_color{
background:#c5841c !important;
}


</style>
