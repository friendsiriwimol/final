<template>
  <div>
    <NavbarAdmin />
    <v-card class="mt-4">
    <v-card-title>
        <v-icon class="mr-2" color="#fcad74">mdi-comment-question</v-icon>
        <v-form v-model="valid" ref="form">
          <v-text-field label="คำถาม" v-model="question_detail"></v-text-field>
        </v-form>

        <v-spacer></v-spacer>
        <v-select
          :items="items"
          label="รูปแบบการทำ"
          dense
          solo
          v-model="selected"
          v-on:click="showcheckbox = !showcheckbox"
        ></v-select>
      </v-card-title>
      <div class="d-flex justify-end mb-2">
        <v-btn  @click="addAnswerOnClick()">เพิ่มคำตอบ</v-btn>
      </div>
      <pre>{{ list }}</pre>
      <div v-for="(it, index) in list" :key="index">
      <v-row align="center">
        <v-checkbox v-model="list[index]['value']"
          true-value="Y"
          false-value="N"
          hide-details
          class="shrink ml-3 mt-0">
        </v-checkbox>
        <v-text-field :label="`คำตอบ ${index+1}`" class="mr-3" v-model="list[index]['name']">
        </v-text-field>
      </v-row>
    </div>
  </v-card>
</div>
</template>

<script>
// import axios from 'axios'
// import Swal from 'sweetalert2'
import NavbarAdmin from '@/components/NavbarAdmin'

export default {
  components: {
    NavbarAdmin
  },
  data: () => ({
    items: ['Checkbox', 'Radio Button'],
    list: []
  }),
  methods: {
    addAnswerOnClick () {
      this.list.push({
        name: '',
        value: 'N'
      })
    }
  }
}
</script>

<style>
* {
  font-family: "Prompt", sans-serif;
}
.cardShowuser {
  margin-top: 5%;
}
.head {
  background-color: red;
}
</style>
