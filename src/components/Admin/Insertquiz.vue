<template>
  <div>
    <NavbarAdmin />
    <div>{{ allquestion }} </div>
    <v-card class="mt-4" v-for="(question, index) in allquestion" :key="index">
      <v-card-title>
        <v-icon class="mr-2" color="#fcad74">mdi-comment-question</v-icon>
        <v-form v-model="valid" ref="form">
          <v-text-field v-model="allquestion[index]['question_detail']"  :label="`คำถาม ${index + 1}`"></v-text-field>
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
      <pre>{{ answer_detail }}</pre>
      <div>
        <v-row align="center">
          <v-checkbox
            v-model="allquestion[index]['value']"
            true-value="Y"
            false-value="N"
            hide-details
            class="shrink ml-3 mt-0"
          >
          </v-checkbox>
          <v-text-field
            :label="`คำตอบ ${index + 1}`"
            class="mr-3"
            v-model="allquestion[index]['name']"
          >
          </v-text-field>
        </v-row>
      </div>
      <div class="d-flex justify-end mb-2">
        <v-btn @click="addQuestionOnClick()">เพิ่มคำตอบ</v-btn>
      </div>
    </v-card>
    <div>
        <v-btn @click="addQuestionOnClick()">เพิ่มคำถาม</v-btn>
        <v-btn @click="insertQuestion()">บันทึก</v-btn>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import NavbarAdmin from '@/components/NavbarAdmin'

export default {
  components: {
    NavbarAdmin
  },
  data: () => ({
    items: ['Checkbox', 'Radio Button'],
    answer_detail: [],
    allquestion: [],
    valid: false,
    question_detail: ''
  }),
  methods: {
    alert () {
      alert('จ้าาา')
    },
    addAnswerOnClick () {
      this.answer_detail.push({
        name: '',
        value: 'N'
      })
    },
    addQuestionOnClick () {
      this.allquestion.push({
        question_detail: '',
        answer_detail: [{
          name: '',
          value: 'N'
        }]
      })
    },
    async insertQuestion () {
      if (this.$refs.form.validate()) {
        // กรอกครบมั้ย
        var { data } = await axios.post(
          'http://localhost/vue-backend/insertQuestion.php',
          {
            question_detail: this.allquestion.push({
              question_detail: ''
            })
          }
        )
        if (data === 'success') {
          Swal.fire({
            icon: 'success',
            title: 'เพิ่มสำเร็จ',
            showConfirmButton: false,
            // text: 'คำอธิบาย',
            customClass: {
              title: 'csss'
            },
            timer: 1500
          })
        }
        // this.$refs.form.reset()
        // this.lesson_description = ''
        // this.$refs.form.reset()
        // this.postuser.post_detail = ''
      }
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
