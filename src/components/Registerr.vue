<template>
<div id="app">
  <article>
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <v-form v-model="valid" ref="form" action="#" class="sign-up-form">
               <v-toolbar-title class="header">E-learning for Hens</v-toolbar-title>
              <v-toolbar-title class="font-weight mb-7">สมัครสมาชิก</v-toolbar-title>
     <v-row>
        <v-col
          cols="12"
          sm="4"
        >
       <v-text-field
      v-model="user.user_firstname"
      :rules="firstnameRules"
      :error-messages="nameErrors"
      label="ชื่อ"
      required
      filled
       rounded
       dense
       class="input1"
    ></v-text-field>
        </v-col>
     <v-col
          cols="12"
          sm="4"
        >
    <v-text-field
      v-model="user.user_lastname"
      :rules="lastnameRules"
      :error-messages="lastnameErrors"
      label="นามสกุล"
      required
      filled
       rounded
       dense
       class="input1"
      @input="$v.lastname.$touch()"
      @blur="$v.lastname.$touch()"
    ></v-text-field>
     </v-col>
      <v-col
          cols="12"
          sm="4"
        >
    <v-text-field
      v-model="user.user_email"
      :rules="emailRules"
      :error-messages="emailErrors"
      label="อีเมล"
      filled
       rounded
       dense
       class="input1"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
      </v-col>
       <v-col
          cols="12"
          sm="4"
        >
    <v-text-field
            v-model="user.user_password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[passwordRules.required, passwordRules.min]"
            :type="show ? 'text' : 'password'"
            name="input-10-2"
            label="รหัสผ่าน"
            @click:append="show = !show"
        required
        filled
       rounded
       dense
       class="input1 input-group--focused"
      ></v-text-field>
       </v-col>
        <v-col
          cols="12"
          sm="4"
        >
      <v-text-field
        type="text"
        v-model="user.user_tel"
        :rules="telRules"
        label="เบอร์โทร"
        filled
       rounded
       dense
       class="input1"
        required
      ></v-text-field>
        </v-col>
     <v-col
          cols="12"
          sm="4"
        >
      <v-text-field
        type="number"
        v-model="user.user_age"
        :rules="ageRules"
        label="อายุ"
        required
        min="1"
        max="100"
        filled
       rounded
       dense
       class="input1"
      ></v-text-field>
     </v-col>
     <v-col
          cols="12"
          sm="4"
        >
    <v-select
          v-model="user.user_type"
        :items="['นักศึกษา', 'เกษตรกร']"
        :rules="typeRules"
        label="กลุ่มผู้ใช้งาน"
      :error-messages="selectErrors"
      required
      filled
       rounded
       dense
       class="input1"
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    >
        <template v-slot:item="{ item, attrs, on }">
        <v-list-item
            v-bind="attrs"
            v-on="on"
        >
            <v-list-item-title
            :id="attrs['aria-labelledby']"
            v-text="item"
            ></v-list-item-title>
        </v-list-item>
        </template>
    </v-select>
     </v-col>
<!-- <v-col
          cols="12"
          sm="6"
        >
    <v-select
        :items="['บ้านไผ่', 'ชนบท']"
        :rules="typeRules"
        label="อำเภอ"
      :error-messages="selectErrors"
      required
      filled
       rounded
       dense
       class="input1"
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    >
        <template v-slot:item="{ item, attrs, on }">
        <v-list-item
            v-bind="attrs"
            v-on="on"
        >
            <v-list-item-title
            :id="attrs['aria-labelledby']"
            v-text="item"
            ></v-list-item-title>
        </v-list-item>
        </template>

    </v-select>
     </v-col> -->
     <!-- <v-col
          cols="12"
          sm="4"
        >
        <addressinput-subdistrict class="addressinput" v-model="subdistrict" placeholder="ตำบล/แขวง"/>
    </v-col> -->
    <v-col
          cols="12"
          sm="4"
        >
        <addressinput-district class="addressinput" v-model="user.user_district" placeholder="อำเภอ"/>

        </v-col>
        <v-col
          cols="12"
          sm="4"
        >
        <addressinput-province class="addressinput" v-model="user.user_province" placeholder="จังหวัด"/>
        </v-col>
      </v-row>
         <input type="button" class="button button1 btn" value="ลงทะเบียน" @click="resgisterUser()"/>
          </v-form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>เข้าสู่ระบบ ?</h3>
            <p>ทำการเข้าสู่ระบบ บัญชีผู้ใช้ของท่าน</p>
            <input type="button"  class="button button3 btn transparent login" value="เข้าสู่ระบบ" onclick="window.location.href='/Login'"/>

          </div>
          <img src="../assets/register.png" alt="img" class="image">
        </div>
      </div>
    </div>
  </article>
  <!-- Youtube Link -->
</div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  data: () => {
    return {
      subdistrict: '',
      district: '',
      province: '',
      zipcode: '',
      signUp: true,
      user: {
        user_firstname: '',
        user_lastname: '',
        user_email: '',
        user_password: '',
        user_tel: '',
        user_type: '',
        user_age: '',
        user_district: '',
        user_province: ''
      },
      valid: true,
      show: false,
      firstnameRules: [
        v => !!v || 'กรุณากรอกชื่อ'
      ],
      lastnameRules: [
        v => !!v || 'กรุณากรอกนามสกุล'
      ],
      emailRules: [
        v => !!v || 'กรุณากรอกอีเมล',
        v => /.+@.+\..+/.test(v) || 'กรุณาใส่กรอกอีเมลให้ถูกต้อง'
      ],
      passwordRules: {
        required: value => !!value || 'กรุณากรอกรหัสผ่าน',
        min: v => v.length >= 8 || 'กรุณากรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร',
        emailMatch: () => ('The email and password you entered don\'t match')
      },
      telRules: [
        v => !!v || 'กรุณากรอกเบอร์โทร'
      ],
      typeRules: [
        v => !!v || 'กรุณากรอกกลุ่มผู้ใช้งาน'
      ],
      ageRules: [
        v => !!v || 'กรุณากรอกอายุ'
      ]
    }
  },
  methods: {
    resgisterUser () {
    //   console.log(this.user)
      console.log(this.$refs.form.validate(), 'pp')
      if (this.$refs.form.validate()) {
        console.log('mmmm')
        axios
          .post('http://localhost/vue-backend/register.php', {
            user_firstname: this.user.user_firstname,
            user_lastname: this.user.user_lastname,
            user_email: this.user.user_email,
            user_password: this.user.user_password,
            user_tel: this.user.user_tel,
            user_type: this.user.user_type,
            user_age: this.user.user_age,
            user_district: this.user.user_district,
            user_province: this.user.user_province
          })
          .then(function (response) {
            console.log(response, 'ii')
            Swal.fire({
              icon: 'success',
              title: 'ลงทะเบียนสำเร็จ',
              showConfirmButton: false,
              text: 'คำอธิบาย',
              customClass: {
                title: 'csss'
              },
              timer: 1500
            })
          })
        this.$router.push('/Login')
          .catch(function (error) {
            console.log(error)
          })
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'กรุณากรอกข้อมูลให้ครบ',
          showConfirmButton: false,
          text: 'คำอธิบาย',
          customClass: {
            title: 'csss'
          },
          timer: 1500
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

 @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
      font-family: 'Prompt', sans-serif !important;

}
#app{
    padding: 0px;
}
body,
input {
//   font-family: "Poppins", sans-serif;
}
.login{
    text-decoration: underline;
}
.container {
  position: relative;
  width: 100vw;
//   background-color: #fff;
  height: 100vh;
//   overflow: hidden;
}

article{
    margin-top: -5vw;
}
.sign-up-form{
    margin-top: 3%;
}

// .col-12{
//   margin: 10px;
// }

div .content{
    margin-left: auto;
    margin-right: auto;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 85%;
  width: 70%;
  transition: 0.5s 0.5s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 8;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem 5rem;
  transition: all 0.2s 0.2s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

form.sign-in-form {
  opacity: 0;
  z-index: 1;
}

form.sign-in-form {
  z-index: 2;
}

.title {
  font-size: 4.5rem;
  color: #444;
  margin-bottom: 40px;
  text-align: center;
  // margin-left: -70px;
}

.input1{
    width: 30vw;
    margin: 10px;
    padding: 0px 20px;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 1px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
}

.social-icon:hover {
  color: #4481eb;
  border-color: #4481eb;
}

.btn {
  width: 150px;
  background-color: #5995fd;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}

.btn:hover {
  background-color: #2a68d5;
}
.panels-container {
  position: absolute;
  height: 50%;
  width: 100%;
  top: 7%;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container:before {
  content: "";
  position: absolute;
  height: 1500px;
  width: 1500px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
  transition: 0.5s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.image {
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: transform 0.5s ease-in-out;
  transition-delay: 0.5s;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
  transform: translateX(800px);
}

/* ANIMATION */

.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}

.container.sign-up-mode form.sign-up-form {
  opacity: 1;
  z-index: 2;
}

.container.sign-up-mode form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}

@media (max-width: 870px) {
  .container {
    min-height: 800px;
    height: 100vh;
  }
  .signin-signup {
    width: 100vw;
    top: 100%;
    margin-top: 200px;
    transform: translate(-50%, -100%);
    transition: 0.5s 0.3s ease-in-out;
  }

  .signin-signup,
  .container.sign-up-mode .signin-signup {
    left: 50%;
  }
  .input1{
    width: 80%;
    left: 10%;
  }

  .panels-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }

  .panel {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }

  .right-panel {
    grid-row: 3 / 4;
  }

  .left-panel {
    grid-row: 1 / 2;
  }

  .image {
    width: 200px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel .content {
    padding-right: 15%;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.8s;
  }

  .panel h3 {
    font-size: 1.2rem;
  }

  .panel p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }

  .btn.transparent {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
  }

  .container:before {
    width: 1500px;
    height: 1500px;
    transform: translateX(-50%);
    left: 30%;
    bottom: 68%;
    right: initial;
    top: initial;
    transition: 2s ease-in-out;
  }

  .container.sign-up-mode:before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }

  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateY(-300px);
  }

  .container.sign-up-mode .right-panel .image,
  .container.sign-up-mode .right-panel .content {
    transform: translateY(0px);
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateY(300px);
  }

  .container.sign-up-mode .signin-signup {
    top: 5%;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 570px) {
  form {
    padding: 0 1.5rem;
  }
//   .sign-up-form{
//     margin-top: 100%;
// }

   .header{
    font-size: 1em;
  }
  .signin-signup {
    width: 100vw;
    top: 100%;
    margin-top: 500px;
    // transform: translate(-50%, -100%);
    transition: 0.5s 0.3s ease-in-out;
  }

  .image {
    display: none;
  }
  .panel .content {
    padding: 0.5rem 1rem;
  }
  .container {
    padding: 1.5rem;
  }

  .container:before {
    bottom: 72%;
    left: 20%;
  }

  .container.sign-up-mode:before {
    bottom: 28%;
    left: 50%;
  }
}
@import url(https://fonts.googleapis.com/css?family=Righteous);
.header{
  margin-bottom: 30px;
  font-size: 3em;
  font-weight: bold;
  font-family: 'Righteous', serif;
  background: linear-gradient(110deg, #fcad74 33%, rgba(253, 255, 144, 0) 33%), linear-gradient(110deg, #ffffff 34%, #4481eb 34%);
    background-size: 400%;
     -webkit-text-fill-color: transparent;
  background-size: 40%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: gradient 5s infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
