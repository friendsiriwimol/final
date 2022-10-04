<template>
<div>
  <NavbarAdmin/>
  <v-card class="cardShowuser">
    <v-card-title>
      <v-icon class="mr-2" color="#fcad74">mdi-post</v-icon>
     โพสต์
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        dense
        color="#099fae"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <!-- <v-card-title>friend</v-card-title> -->
       <v-data-table :items="allpost" :headers="headers" :items-per-page="5" :search="search">
       <template slot="data" slot-scope="props" >
        <td>{{ user_firstname }}</td>
        <td>{{ props.data.comment_detail }}</td>
      </template>
      <template v-slot:item.check="{ item }">
      <v-icon
        small
        @click="updateStatus(item)"
        color="#56a062"
      >
       mdi-check-circle
      </v-icon>
    </template>
    <template v-slot:item.delete="{ item }">
      <v-icon
        small
        @click="deleteItem(item)"
        color="#ea5859"
      >
        mdi-delete
      </v-icon>
    </template>
    </v-data-table>

  </v-card>
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
  data () {
    return {
      show3: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match')
      },
      dialog: false,
      allpost: [],
      search: '',
      post_detail: '',
      post_id: '',
      post_status: '',
      postuser: {
        post_detail: ''
      },
      user: {
        user_id: ''
      },
      valid: false,
      headers: [
        // {
        //   text: 'ชื่อ',
        //   align: 'start',
        //   // sortable: false,
        //   value: 'user_firstname'
        // },
        { text: 'โพสต์', value: 'post_detail' },
        { text: 'จัดการโพสต์', value: 'check', sortable: false },
        { text: 'ลบ', value: 'delete', sortable: false }

      ],
      data: []
    }
  },
  created () {
    this.getPost()
  },
  methods: {
    async getPost () {
      console.log('rewload')
      axios.get('http://localhost/vue-backend/post.php').then((res) => {
        console.log('data:', res.data)
        if (res.data) {
          this.allpost = res.data
        }
      })
    },
    // updateStatus (data) {
    //   this.post_status = data.post_status
    // },
    async updateStatus (data) {
      var bodyValue = {
        post_id: data.post_id,
        post_detail: data.post_detail,
        post_status: 'approve'
      }
      var { data: update } = await axios.put(
        'http://localhost/vue-backend/updatePostStatus.php',
        bodyValue
      )
      console.log(update, 'data here!')
      if (update === 'success') {
        Swal.fire({
          icon: 'success',
          title: 'แก้ไขสำเร็จ',
          showConfirmButton: false,
          text: 'คำอธิบาย',
          customClass: {
            title: 'csss'
          },
          timer: 1500
        })
        // this.type = type
        this.getPost()
      }
    },

    // editItem (data) {
    //   // console.log('item:', this.items)มันไม่มีค่า มันเอามาจากตัวแปรitems:{}ข้างบน มันว่าง
    //   // console.log('item:', data)คือฟังก์ชันedit(data)ข้างบนdataที่ส่งมา
    //   this.dialog = true
    //   this.user_id = data.user_id
    //   this.user_firstname = data.user_firstname
    //   this.user_lastname = data.user_lastname
    //   this.user_email = data.user_email
    //   this.user_password = data.user_password
    //   this.user_tel = data.user_tel
    //   this.user_type = data.user_type
    //   this.user_age = data.user_age
    //   // console.log('friend data item', data)
    //   // console.log(this.allshow)
    // },
    // async save () {
    //   var bodyValue = {
    //     user_id: this.user_id,
    //     user_firstname: this.user_firstname,
    //     user_lastname: this.user_lastname,
    //     user_email: this.user_email,
    //     user_password: this.user_password,
    //     user_tel: this.user_tel,
    //     user_type: this.user_type,
    //     user_age: this.user_age

    //   }
    //   var { data } = await axios.put('http://localhost/vue-backend/updateUser.php', bodyValue)
    //   console.log(data, 'data here!')
    //   if (data === 'success') {
    //     this.dialog = false
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'แก้ไขสำเร็จ',
    //       showConfirmButton: false,
    //       text: 'คำอธิบาย',
    //       customClass: {
    //         title: 'csss'
    //       },
    //       timer: 1500
    //     })
    //     this.getUser()
    //     // setTimeout(() => {
    //     //   this.getData()
    //     // }, 2000)
    //   }
    // },
    // closedialog () {
    //   this.dialog = false
    // }
    async deleteItem (data) {
      // var idDel = parseInt(data.id)
      var { data: deletes } = await axios.post('http://localhost/vue-backend/deletePost.php', {
        post_id: data.post_id
      })
      console.log(deletes, 'delete')
      if (deletes === 'success') {
        this.dialog = false
        Swal.fire({
          icon: 'success',
          title: 'ลบสำเร็จ',
          showConfirmButton: false,
          text: 'คำอธิบาย',
          customClass: {
            title: 'csss'
          },
          timer: 1500
        })
        this.getPost()
      }
    }
  }
  // mounted () {
  //   this.getUser()
  // }
}
</script>

<style scoped>
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
