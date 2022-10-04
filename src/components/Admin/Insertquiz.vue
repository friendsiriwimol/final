<template>
  <div>
    <NavbarAdmin/>
    <v-card class="cardShowuser">
      <v-card-title>
        <v-icon class="mr-2" color="#fcad74">mdi-comment-question</v-icon>{{question_detail}}
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field
        solo
        value="1"
        label="คะเเนน"
        type="number"
        min="0"
        max="10"
      ></v-text-field>
      </v-card-title>
<v-card-text>
      <v-row align="center">
        <v-checkbox
        class="shrink ml-3 mt-5"
              color="#fcad74"
              value="answer_detail1"
            ></v-checkbox>
            <div>{{answer_detail1}}</div>
      </v-row>
      <v-row align="center">
        <v-checkbox
        class="shrink ml-3 mt-5"
              color="#fcad74"
              value="answer_detail1"
            ></v-checkbox>
            <div>{{answer_detail2}}</div>
      </v-row>

      <v-row align="center">
        <v-checkbox
        class="shrink ml-3 mt-5"
              color="#fcad74"
              value="answer_detail1"
            ></v-checkbox>
            <div>{{answer_detail3}}</div>
      </v-row>
      <v-row align="center">
        <v-checkbox
        class="shrink ml-3 mt-5"
              color="#fcad74"
              value="answer_detail1"
            ></v-checkbox>
            <div>{{answer_detail4}}</div>
      </v-row>
      <v-row align="center">
        <v-checkbox
        class="shrink ml-3 mt-5"
              color="#fcad74"
              value="answer_detail1"
            ></v-checkbox>
            <div>{{answer_detail5}}</div>
      </v-row>
      <v-row align="center">
        <v-checkbox
        class="shrink ml-3 mt-5"
              color="#fcad74"
              value="answer_detail1"
            ></v-checkbox>
            <div>{{answer_detail6}}</div>
      </v-row>
    </v-card-text>

<v-card-title>
      <v-icon class="mr-2" color="#fcad74">mdi-comment-question</v-icon>
       <v-form v-model="valid" ref="form">
     <v-text-field
     label="คำถาม"
    v-model="question_detail"></v-text-field>
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
    <!-- <v-btn @click="show = !show" icon>
    <v-icon>{{ !show ? 'mdi-eye' : 'mdi-close' }}</v-icon>
</v-btn>
<span>Selected: {{ selected }}</span> -->
<div v-for="(answerCheckbox, checkbox) in answerCheckbox" :key="checkbox" v-show="showcheckbox">
<v-card-text>
      <v-row align="center">
        <v-checkbox
          v-model="answerCheckbox.checkbox"
          hide-details
          class="shrink ml-3 mt-0"
          disabled
          value
        ></v-checkbox>
         <!-- <v-form  v-model="valid1" ref="form1"> -->
        <v-text-field label="คำตอบ 1" class="mr-3"
        v-model="answer_detail1"></v-text-field>
        <!-- </v-form> -->
<!-- <v-btn
              icon
              color="#56a062"
               class="mr-3 mt-0"
               v-model="answerCheckbox.plus"
               @click="addNewCheckbox()"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn
              icon
              color="#ea5859"
               class="mr-3 mt-0"
               @click="deleteCheckbox(checkbox, answerCheckbox)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn> -->
      </v-row>
      <v-row align="center">
        <v-checkbox
          v-model="answerCheckbox.checkbox"
          hide-details
          class="shrink ml-3 mt-0"
          disabled
          value
        ></v-checkbox>
        <v-text-field label="คำตอบ 2" class="mr-3"
        v-model="answer_detail2"></v-text-field>
      </v-row>
      <v-row align="center">
        <v-checkbox
          v-model="answerCheckbox.checkbox"
          hide-details
          class="shrink ml-3 mt-0"
          disabled
          value
        ></v-checkbox>
        <v-text-field label="คำตอบ 3" class="mr-3"
        v-model="answer_detail3"></v-text-field>
      </v-row>
      <v-row align="center">
        <v-checkbox
          v-model="answerCheckbox.checkbox"
          hide-details
          class="shrink ml-3 mt-0"
          disabled
          value
        ></v-checkbox>
        <v-text-field label="คำตอบ 4" class="mr-3"
        v-model="answer_detail4"></v-text-field>
      </v-row>
      <v-row align="center">
        <v-checkbox
          v-model="answerCheckbox.checkbox"
          hide-details
          class="shrink ml-3 mt-0"
          disabled
          value
        ></v-checkbox>
        <v-text-field label="คำตอบ 5" class="mr-3"
        v-model="answer_detail5"></v-text-field>
      </v-row>
      <v-row align="center">
        <v-checkbox
          v-model="answerCheckbox.checkbox"
          hide-details
          class="shrink ml-3 mt-0"
          disabled
          value
        ></v-checkbox>
        <v-text-field label="คำตอบ 6" class="mr-3"
        v-model="answer_detail6"></v-text-field>
      </v-row>
      <v-divider class="ma-5" color="#fcad74"></v-divider>
<v-row align="center">
  <v-btn
      text
      class="mt-3 mb-3"
      color="#fcad74"
      @click="checkAnswerCheckbox()"
    >
    <v-icon
    class="mr-1"
      >
        mdi-clipboard-check-outline
      </v-icon>
      เฉลยคำตอบ
    </v-btn>
</v-row>
    </v-card-text>
    </div>
    <div v-for="(answerRadio, radio) in answerRadio" :key="radio" v-show="!showcheckbox">
      <v-card-text>
        <v-row align="center">
        <v-radio-group v-model="answerRadio.radioGroup">
      <v-radio
        class="ml-3 mt-0"
        disabled
          value
      ></v-radio>
    </v-radio-group>
    <v-text-field label="คำตอบ" class="mr-3"
    v-model="answerRadio.answer_detail"></v-text-field>
<!-- <v-btn
              icon
              color="#56a062"
               class="mr-3 mt-0"
               v-model="answerRadio.plus"
               @click="addNewRadio()"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn
              icon
              color="#ea5859"
               class="mr-3 mt-0"
               @click="deleteRadio(radio, answerRadio)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn> -->
    </v-row>
     <v-row align="center">
        <v-radio-group v-model="answerRadio.radioGroup">
      <v-radio
        class="ml-3 mt-0"
        disabled
          value
      ></v-radio>
    </v-radio-group>
    <v-text-field label="คำตอบ" class="mr-3"
    v-model="answerRadio.answer_detail"></v-text-field>

</v-row>
<v-row align="center">
        <v-radio-group v-model="answerRadio.radioGroup">
      <v-radio
        class="ml-3 mt-0"
        disabled
          value
      ></v-radio>
    </v-radio-group>
    <v-text-field label="คำตอบ" class="mr-3"
    v-model="answerRadio.answer_detail"></v-text-field>

</v-row>
<v-row align="center">
        <v-radio-group v-model="answerRadio.radioGroup">
      <v-radio
        class="ml-3 mt-0"
        disabled
          value
      ></v-radio>
    </v-radio-group>
    <v-text-field label="คำตอบ" class="mr-3"
    v-model="answerRadio.answer_detail"></v-text-field>

</v-row>
<v-divider class="ma-5" color="#fcad74"></v-divider>
<v-row align="center">
  <v-btn
      text
      class="mt-3 mb-3"
      color="#fcad74"
      @click="checkAnswerRadio()"
    >
    <v-icon
    class="mr-1"
      >
        mdi-clipboard-check-outline
      </v-icon>
      เฉลยคำตอบ
    </v-btn>
</v-row>

    </v-card-text>
    </div>
    </v-card>
    <v-row class="mt-3">
      <v-col cols="12" sm="6">
    <v-btn
              color="#4481eb"
              dark
              block
            >
              เพิ่มคำถาม
            </v-btn>
      </v-col>
      <v-col cols="12" sm="6">
    <v-btn
              color="#56a062"
              dark
              block
              @click="insertAnswer()"
            >
              บันทึก
            </v-btn>
      </v-col>
      </v-row>
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
    show: false,
    selected: '',
    radioGroup: 1,
    checkbox: false,
    // value: ['รูปแบบ']
    answerCheckbox: [{
      checkbox: false,
      answer_detail: '',
      plus: ''
    }],
    answerRadio: [{
      radioGroup: 1,
      answer_detail: '',
      plus: ''
    }],
    valid: false,
    valid2: false,
    question_id: '',
    question_detail: '',
    answer_id: '',
    answer_detail1: '',
    answer_detail2: '',
    answer_detail3: '',
    answer_detail4: '',
    answer_detail5: '',
    answer_detail6: ''
  }),
  created () {
    this.addNewCheckbox()
    this.addNewRadio()
    this.addAnswer()
  },
  methods: {
    addNewCheckbox () {
      const select = this.selected
      const item = this.items
      console.log(select, 'select จ้า')
      console.log(item[0], 'items จ้า')
      if (select === item[0]) {
        this.answerCheckbox.push({
          checkbox: true,
          answer_detail: '',
          plus: ''
        })
      }
    },
    addNewRadio () {
      const select = this.selected
      const item = this.items
      console.log(select, 'select จ้า')
      console.log(item[1], 'items จ้า')
      if (select === item[1]) {
        this.answerRadio.push({
          radioGroup: 1,
          answer_detail: '',
          plus: ''
        })
      }
    },
    checkAnswerCheckbox (data) {
      this.answer_detail1 = data.answer_detail1
    },
    // addAnswer () {
    //   const select = this.selected
    //   const item = this.items
    //   console.log(select, 'select จ้า')
    //   console.log(item[0], 'items จ้า')
    //   if (select === item[0]) {
    //     this.answerCheckbox.push({
    //       checkbox: true,
    //       answer_detail: '',
    //       plus: ''
    //     })
    //   } else if (select === item[1]) {
    //     this.answerRadio.push({
    //       radioGroup: 1,
    //       answer_detail: '',
    //       plus: ''
    //     })
    //   }
    // },
    deleteCheckbox (index, answerCheckbox) {
      var idx = this.answerCheckbox.indexOf(answerCheckbox)
      console.log(idx, index)
      if (idx > 0) {
        this.answerCheckbox.splice(idx, 1)
      }
    },
    deleteRadio (index, answerRadio) {
      var idx = this.answerRadio.indexOf(answerRadio)
      console.log(idx, index)
      if (idx > 0) {
        this.answerRadio.splice(idx, 1)
      }
    },
    async insertAnswer () {
      // console.log(questionid, 'question ja')
      if (this.$refs.form.validate()) { // กรอกครบมั้ย
        var { data } = await axios.post('http://localhost/vue-backend/insertAnswer1.php', {
          // question_id: questionid,

          question_detail: this.question_detail,
          answer_id: this.answer_id,
          answer_detail1: this.answer_detail1,
          answer_detail2: this.answer_detail2,
          answer_detail3: this.answer_detail3,
          answer_detail4: this.answer_detail4,
          answer_detail5: this.answer_detail5,
          answer_detail6: this.answer_detail6

        })
        if (data === 'success') {
          Swal.fire({
            icon: 'success',
            title: 'เพิ่มควิซสำเร็จ',
            showConfirmButton: false,
            text: 'คำอธิบาย',
            customClass: {
              title: 'csss'
            },
            timer: 1500
          })
        }
        this.$refs.form.reset()
      }
    }
  }
}
</script>

<style>
*{
font-family: 'Prompt', sans-serif;
}
.cardShowuser{
  margin-top: 5%;
}
.head{
  background-color: red;
}
</style>
