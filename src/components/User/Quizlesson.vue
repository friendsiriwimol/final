<template>
 <div >
     <NavbarUser/>
      <div class="row">
        <div class="col-md-12">
          <div class="title"><h1> แบบทดสอบ </h1>
          <br>
          <h2>บทที่ 1 บทนำ</h2>
          </div>
        </div>
      </div>
  <v-card
    class="mx-auto mb-5"
    v-for="question in allquestion" :key="question.question_id"
  >

        <v-card-title>
        {{question.question_detail}}
      </v-card-title>
    <v-card-subtitle>
        <!-- <v-card-text> -->
            <v-radio-group
            v-model="radios"
              row
              v-for="answer in allanswer" :key="answer.answer_id"
            >
            <v-radio
                color="orange"
                v-model="answer.answer_detail"
              ></v-radio>
              <div  v-if="answer.question_id === question.question_id">{{answer.answer_detail}}</div>
            </v-radio-group>
        <!-- </v-card-text> -->
        </v-card-subtitle>

    <!-- <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions> -->
  </v-card>
          <!-- <div class="container-fluid bg-3 ">
                <div class="col-md-12">
                    <div class="card">
                        <h3>ไก่กับไข่อะไรเกิดก่อนกัน ?</h3><br>
                    <div class="control">
                    <label class="radio">
                        <input type="radio" name="foobar">
                        ไก่
                    </label><br>
                    <label class="radio">
                        <input type="radio" name="foobar" checked>
                        ไข่
                    </label>
                </div>
            </div>

             <div class="card">
                        <h3>ไก่กับไข่อะไรเกิดก่อนกัน ?</h3><br>
                    <div class="control">
                    <label class="radio">
                        <input type="radio" name="kai">
                        ไก่
                    </label><br>
                    <label class="radio">
                        <input type="radio" name="kai" checked>
                        ไข่
                    </label>
                </div>
            </div>
             <div class="card">
                        <h3>ไก่กับไข่อะไรเกิดก่อนกัน ?</h3><br>
                    <div class="control">
                    <label class="checkbox">
                        <input type="checkbox" name="kai">
                        ไก่
                    </label><br>
                    <label class="checkbox">
                        <input type="checkbox" name="kai">
                        ไข่
                    </label>
                </div>
            </div> -->
</div>
<!-- </div>
</div> -->
</template>

<script>
import NavbarUser from '@/components/NavbarUser'
import axios from 'axios'

export default {
  components: {
    NavbarUser
  },
  data: () => ({
    // reveal: false
    allquestion: [],
    allanswer: [],
    question_id: '',
    question_detail: '',
    question: {
      question_id: '',
      question_detail: ''
    },
    answer_id: '',
    answer_detail: '',
    answer: {
      answer_id: '',
      answer_detail: ''
    },
    radios: null,
    radio: '',
    panel: '',
    show: false

  }),
  created () {
    this.getQuestion()
    this.getAnswer()
  },
  methods: {
    // showRadio (index, questionid) {
    //   this.show = index
    //   this.radio = questionid
    //   this.answer_detail = ''
    // },
    showtest2 (index) {
      this.show = !index
      this.radio = ''
    },
    async getQuestion () {
      console.log('rewload')
      axios.get('http://localhost/vue-backend/question.php').then((res) => {
        console.log('data:', res.data)
        if (res.data) {
          this.allquestion = res.data
          console.log(this.allquestion, 'คำถามจ้า')
        }
      })
    },
    async getAnswer () {
      console.log('rewload')
      axios.get('http://localhost/vue-backend/answer.php').then((res) => {
        console.log('data:', res.data)
        if (res.data) {
          this.allanswer = res.data
          console.log(this.allanswer, 'answer')
        }
      })
    }
  }
//   mounted () {
//     this.$emit('test', true)
//   }
}
</script>

<style lang="scss" scoped>
*{
font-family: 'Prompt', sans-serif;
}
.title{
    text-align: center;
    margin: 50px;
}
p{
    margin-top: 40px;
    // text-indent: 2.5em;
}
h2{
    color: #56a062;
}
.card {
    margin-right: auto;
    margin-left: auto;
    width:80%;
//   box-shadow: 2px 2px 2px 2px #56a06289;
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
 padding: 30px;
 margin-bottom: 30px;
}
.row{
    margin-left: auto;
    margin-right: auto;
}
/* Add rounded corners to the top left and the top right corner of the image */
img {
  border-radius: 5px 5px 0 0;
}
.button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
button{
    // background-color: #56a062;
    font-size: 1.3em;
    padding: 10px;
    border-radius: 25px;
    color: aliceblue;
    margin-right: auto;
    margin-left: auto;
}
</style>
