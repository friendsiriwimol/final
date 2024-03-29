import Vue from 'vue'
import VueRouter from 'vue-router'
import post from '../components/User/Post.vue'
import register from '../components/Registerr.vue'
import login from '../components/Login.vue'
import edituser from '../components/Admin/Edituser.vue'
import editLesson from '../components/Admin/Editlesson.vue'
import adminLesson from '../components/Admin/Lesson.vue'
import insertlesson from '../components/Admin/Insertlesson.vue'
import lesson from '../components/User/Lesson.vue'
import quiz from '../components/User/Quiz.vue'
import quizlesson from '../components/User/Quizlesson.vue'
import video from '../components/User/Video.vue'
import profile from '../components/User/Profile.vue'
import adminprofile from '../components/Admin/Profile.vue'
import history from '../components/User/History.vue'
import editor from '../components/Editor.vue'
import q from '../components/q.vue'
import adminUser from '../components/Admin/User.vue'
import adminPost from '../components/Admin/Post.vue'
import testprofile from '../components/testprofile.vue'
import test from '../components/test.vue'
import adminquiz from '../components/Admin/Quiz.vue'
import testImage from '../components/testImage.vue'
import admindashboard from '../components/Admin/Dashboard.vue'
import adminhome from '../components/Admin/Home.vue'
import adminwebsite from '../components/Admin/Website.vue'
import admininsertquiz from '../components/Admin/Insertquiz.vue'
import testParams from '../components/testparams.vue'
import testImg from '../components/testshowimg.vue'
import testUploadImg from '../components/Admin/test.vue'
import lessondetail from '../components/User/Lessondetail'
import adminvideo from '../components/Admin/Video'
import testVideo from '../components/testVideo'
import table from '../components/Table.vue'
import testLogin from '../components/testLogin.vue'
import forgetpassword from '../components/User/ForgetPassword.vue'
import posttest from '../components/User/Posttest.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/post',
    name: 'post',
    component: post
  },
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/edituser',
    name: 'edituser',
    component: edituser
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/lesson',
    name: 'lesson',
    component: lesson
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: quiz
  },
  {
    path: '/video',
    name: 'video',
    component: video
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/adminLesson',
    name: 'adminLesson',
    component: adminLesson
  },
  {
    path: '/insertlesson',
    name: 'insertlesson',
    component: insertlesson
  },
  {
    path: '/history',
    name: 'history',
    component: history
  },
  {
    path: '/quizlesson',
    name: 'quizlesson',
    component: quizlesson
  },
  {
    path: '/editor',
    name: 'editor',
    component: editor
  },
  {
    path: '/q',
    name: 'q',
    component: q
  },
  {
    path: '/adminprofile',
    name: 'adminprofile',
    component: adminprofile
  },
  {
    path: '/adminUser',
    name: 'adminUser',
    component: adminUser
  },
  {
    path: '/editLesson',
    name: 'editLesson',
    component: editLesson
  },
  {
    path: '/testprofile',
    name: 'testprofile',
    component: testprofile
  },
  {
    path: '/test/:id',
    name: 'test',
    component: test
  },
  {
    path: '/adminpost',
    name: 'adminpost',
    component: adminPost
  },
  {
    path: '/adminquiz',
    name: 'adminquiz',
    component: adminquiz
  },
  {
    path: '/testImage',
    name: 'testImage',
    component: testImage
  },
  {
    path: '/admindashboard',
    name: 'admindashboard',
    component: admindashboard
  },
  {
    path: '/adminhome',
    name: 'adminhome',
    component: adminhome
  },
  {
    path: '/adminwebsite',
    name: 'adminwebsite',
    component: adminwebsite
  },
  {
    path: '/admininsertquiz',
    name: 'admininsertquiz',
    component: admininsertquiz
  },
  {
    path: '/testParams',
    name: 'testParams',
    component: testParams
  },
  {
    path: '/testImg',
    name: 'testImg',
    component: testImg
  },
  {
    path: '/testUploadImg',
    name: 'testUploadImg',
    component: testUploadImg
  },
  {
    path: '/lessondetail/:id',
    name: 'lessondetail',
    component: lessondetail
  },
  {
    path: '/adminvideo',
    name: 'adminvideo',
    component: adminvideo
  },
  {
    path: '/testVideo',
    name: 'testVideo',
    component: testVideo
  },
  {
    path: '/table',
    name: 'table',
    component: table
  },
  {
    path: '/testLogin',
    name: 'testLogin',
    component: testLogin
  },
  {
    path: '/testLogin',
    name: 'testLogin',
    component: testLogin
  },
  {
    path: '/forgetpassword',
    name: 'forgetpassword',
    component: forgetpassword
  },
  {
    path: '/quiz/posttest/:id',
    name: 'posttest',
    component: posttest
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
