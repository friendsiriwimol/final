<template>
<v-app>
    <NavbarUser/>
 <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title"><h1> บทที่ {{lesson.lesson_unit}} {{lesson.lesson_name}} </h1>
          </div>
        </div>
      </div>
          <div class="container-fluid bg-3 ">
            <div class="row">
                <div class="col-md-12">
                  {{lesson.lesson_description}}
        </div>
      </div>
 </div>
      </div>
      </v-app>
</template>

<script>
import axios from 'axios'
import NavbarUser from '@/components/NavbarUser'
export default {
  components: {
    NavbarUser
  },
  data: () => ({
    reveal: false,
    lesson: {
      lesson_unit: '',
      lesson_name: '',
      lesson_description: ''
    }
  }),
  created () {
    this.getLesson()
  },
  // mounted () {
  //   this.$emit('test', true)
  // },
  methods: {
    async getLesson () {
      console.log('rewload')
      axios.get('http://localhost/vue-backend/lessonmore.php').then((res) => {
        console.log('data:', res.data)
        if (res.data) {
          this.alllesson = res.data
        }
      })
    },
    sendData (data) {
      // console.log('item:', this.items)มันไม่มีค่า มันเอามาจากตัวแปรitems:{}ข้างบน มันว่าง
      // console.log('item:', data)คือฟังก์ชันedit(data)ข้างบนdataที่ส่งมา
    //   this.$router.push('/lessonmore')
      this.lesson_id = data.lesson_id
      this.lesson_unit = data.lesson_unit
      this.lesson_description = data.lesson_description
      // console.log('friend data item', data)
      // console.log(this.allshow)
    }
  }
}
</script>

<style lang="scss" scoped>
*{
font-family: 'Prompt', sans-serif;
}
h1{
    text-align: center;
    margin: 50px;
}
p{
    margin-top: 40px;
    // text-indent: 2.5em;
    margin-bottom: 40px;
}
h2{
    color: #56a062;
}

.img{
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: center;
  justify-items: center;
  // cursor:pointer;
  text-align: center;
}
img{
  margin-right: auto;
  margin-left: auto;
  width: 80%;
}
.container{
  width: 90%;
}
</style>
