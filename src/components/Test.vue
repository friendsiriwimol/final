<template>
  <v-container>
    <v-row>
      <v-col style="background-color:red" cols="12" sm="6" md="6">
        <div>Joon Title</div>
      </v-col>
      <v-col style="background-color:pink" cols="6" sm="6" md="6">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title> {{ messagejoon }} </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="showMe()">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col md="12">
        <div class="csstest">END... Good Luck</div>
        <div>
          <v-btn
            color="primary"
            class="ma-2 white--text"
            @click="clickTest()"
            v-if="valueTest === true"
          >
            กดคลิ้ก!!
            <v-icon right dark> mdi-cloud-upload </v-icon>
          </v-btn>
          <v-btn
            v-else
            color="success"
            class="ma-2 white--text"
            @click="clickTest()"
          >
            คลิ้กแล้ว!!
            <v-icon right dark> mdi-cloud-upload </v-icon>
          </v-btn>
        </div>
        <v-row>
            <v-col md="6" class="bg">
                <v-chip
                    v-for="(item2, index) in list"
                    class="ma-2"
                    :key='index'
                    :color="item2.color"
                    dark
                >
                    My Chip ของ {{ item2.name }}
                </v-chip>
            </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
export default {
  components: {
    // DialogCancelGroupSummary
  },
  data: () => ({
    show: false,
    messagejoon: 'สวัสดีจ้า ชื่อจูนนี่',
    valueTest: false,
    list: [
      { name: 'Joon', color: 'pink' },
      { name: 'Friend', color: 'success' },
      { name: 'Bank', color: 'orange' }
    ]
  }),
  created () {
    this.openpage()
  },
  methods: {
    openpage () {
      console.log('created Page:', this.show)
    },
    showMe () {
      this.show = !this.show
    },
    clickTest () {
      alert('Click Function')
      console.log(this.valueTest, 'Log ##')
      this.valueTest = true
    }
  }
}
</script>

<style scoped>
.csstest {
  color: #b63aa6 !important;
  font-size: 30px !important;
}
.bg {
  background-color: #e2d693 !important;
}
</style>
