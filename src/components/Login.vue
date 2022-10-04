<template>
  <v-card class="mx" max-width="80%" max-height="70%" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <!-- <div class="text-overline mb-4">{{ password }}</div> -->
        <center><h1>เข้าสู่ระบบ</h1></center>
</v-list-item-content>
    </v-list-item>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="user.user_email"
        :rules="emailRules"
        label="อีเมล"
        required
      ></v-text-field>

        <v-text-field
            v-model="user.user_password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[passwordRules.required, passwordRules.min]"
            :type="show ? 'text' : 'password'"
            name="input-10-2"
            label="รหัสผ่าน"
            class="input-group--focused"
            @click:append="show = !show"
          ></v-text-field>
<div class="btn">
<input type="button" class="button button1" value="เข้าสู่ระบบ" @click="Login"/>
<input type="button" class="button button3" value="ลงทะเบียน" onclick="window.location.href='Register'"/>
</div>
    </v-form>
  </v-card>
</template>

<script>
import axios from 'axios'
// import router from 'router'

export default {
  data () {
    return {
      user: {
        user_email: '',
        user_password: ''
      },
      show: false,
      emailRules: [
        // v => !!v || 'กรุณากรอกอีเมล',
        // v => /.+@.+\..+/.test(v) || 'กรุณาใส่กรอกอีเมลให้ถูกต้อง'
      ],
      passwordRules: {
        // required: value => !!value || 'กรุณากรอกรหัสผ่าน',
        // emailMatch: () => ('The email and password you entered don\'t match')
      },
      data: {}
    }
  },
  // mounted () {
  //   this.$emit('test', false)
  // },
  methods: {
    Login () {
      const test = this
      if (test.user.user_email !== '' && test.user.user_password !== '') {
        axios.post('http://localhost/vue-backend/login.php', {
          request: 1,
          user_email: test.user.user_email,
          user_password: test.user.user_password
        })
          .then(function (response) {
            test.data = response.data[0]
            // console.log(test.data, 'friend')
            if (test.data.status === 1) {
              if (test.data.type === 'student') {
                test.$router.push('/post')
              } else if (test.data.type === 'farmer') {
                console.log('farmer')
                // console.log(test.$route, 'roter')
                test.$router.push('/post')
              } else {
                test.$router.push('/')
              }
            } else {
              alert('User does not exist')
            }
          })
        test.$router.push('/register')
          .catch(function (error) {
            console.log(error)
          })
      } else {
        alert('Please enter username & password')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');

*{
font-family: 'Prompt', sans-serif;
}
.text-h2{
  text-align: center;
  font-size: 25px;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.mx{
  margin-top: -5%;
  height: 400px !important;
  margin-left: auto;
  margin-right: auto;
  padding: 30px ;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 40px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 30px;
  width: 180px;
  margin: 20px auto;
  margin-right: auto;
  margin-left: auto;
  /* display: block; */
}
.button1 {
  background-color: white;
  color: black !important;
  border: 2px solid #FAD335;
  margin: 20px;
}
.button1:hover {
  background-color: #FAD335;
  color: white;
}
.button3 {
  background-color: white;
  color: black;
  border: 2px solid #EF5B9B;
  border-radius: 30px;
  margin: 20px;
}
.button3:hover {
  background-color: #EF5B9B;
  color: white;
}
.btn{
  text-align: center;
   margin: 20px;
   padding: 20px;
}
.v-card {
  transition: opacity .5s ease-in-out rgb(255, 255, 107) ;
   border: 1px solid #FAD335 !important;
    border-radius: 30px !important;
    box-shadow: 1px 1px 9px 9px #FAD335;
}
.v-card:not(.on-hover) {
  box-shadow: 1px 1px 30px 8px #FAD335;
 }
</style>
