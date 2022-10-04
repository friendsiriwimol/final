<template>
  <div>
    <NavbarUser />
    <h1 class="mt-7 mb-7" align="center">วิดีโอ</h1>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto" max-width="500">
          <div class="video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/gQlMMD8auMs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <v-card-title>บทที่ 1</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto" max-width="500">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/WPdWvnAAurg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <v-card-title>บทที่ 2</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto" max-width="500">
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/4vbDFu0PUew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          <v-card-title>บทที่ 3</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto" max-width="500">
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/F0B7HDiY-10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        <v-card-title>บทที่ 4</v-card-title> </v-card>

      </v-col>
    </v-row>
  </div>
</template>
<script>
import NavbarUser from '@/components/NavbarUser'
export default {
  components: {
    NavbarUser
  },
  data: () => ({
    reveal: false
  })
  // mounted () {
  //   this.$emit('test', true)
  // }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");
* {
  font-family: "Prompt", sans-serif;
}

.text-h4 {
  text-align: center;
  font-size: 20px;
}
// .container{
//   margin-left: 40%;
// }
h1 {
  color: #000;
}
.img1 {
  width: 500px;
  height: 100px;
  text-align: center;
}
.mx {
  // margin-top: 40px;
  height: 400px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
}
.text-center {
  font-size: 25px;
  font-style: bold;
  padding: 15px;
  color: #56a062;
  text-align: center;
}
.text-title {
  text-align: center;
  padding: 15px;
  font-size: 1.3em !important;
  color: rgb(75, 75, 75);
}
a {
  text-decoration: none;
  text-align: center;
  color: #56a062;
}
.lesson {
  text-align: center;
  margin-top: 30px;
}

.v-card {
  transition: opacity 0.5s ease-in-out rgb(255, 255, 107);
  //  border: 5px solid #56a062 !important;
  // border-radius: 21px;
  box-shadow: 1px 1px 9px 9px lightblue;
}
.v-card:not(.on-hover) {
  // opacity: 0.5;
  // box-shadow: 1px 1px 9px 9px lightblue;
}
.show-btns {
  color: #feedb0 !important;
  box-shadow: 10px 10px 5px 12px lightblue;
}
</style>
