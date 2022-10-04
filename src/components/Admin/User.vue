<template>
  <div>
    <NavbarAdmin />
    <v-card class="cardShowuser">
      <v-tabs background-color="transparent" color="#099fae" grow v-model="tab">
        <v-tab @click="getUser('all')"> ทั้งหมด </v-tab>
        <v-tab @click="getStudent('student')"> นักศึกษา </v-tab>
        <v-tab @click="getFarmer('farmer')"> เกษตรกร </v-tab>
        <v-tab @click="getAdmin('admin')"> แอดมิน </v-tab>
      </v-tabs>
      <v-card-title>
        <!-- <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
      </v-tab-item>
    </v-tabs-items> -->
        <v-icon class="mr-2" color="#fcad74">mdi-account-cog</v-icon>
        รายชื่อผู้ใช้
        <v-btn class="ml-5 text-capitalize" color="#e5ffee" dark elevation="1" @click="onExport()">
          <span style="color:#2a7e4a;"><v-icon left> mdi-microsoft-excel </v-icon>Export</span></v-btn>
        <v-spacer></v-spacer>
        <!-- <button @click="exportUser()" value="Export">โหลด</button> -->
        <!-- <form >
     <input type="submit" name="export" class="btn btn-success"  />
    </form> -->
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
      <v-data-table
        :items="alluser"
        :headers="headers"
        :items-per-page="5"
        :search="search"
        v-show="type === 'all'"
        no-data-text="ไม่พบข้อมูล"
        no-results-text="ไม่พบข้อมูลที่ค้นหา"
        v-if="alluser.length"
      >
        <template slot="data">
          <!-- <td>
                    <v-btn
                      dark
                      @click="edit(data)"
                      class="mx-1"
                      fab
                      small
                      color="pink"
                    >
                      <v-icon dark> mdi-pencil </v-icon>
                    </v-btn>
            </td>
            <td>
              <v-btn class="mx-1" fab dark small color="pink" @click="deleteItem(user)">
                <v-icon dark> mdi-delete </v-icon>
              </v-btn>
            </td> -->
        </template>
        <template v-slot:[`item.user_type`]="{ item }">
          <v-chip v-if="item.user_type === 'นักศึกษา'" color="#e8f9ff">
            <span style="color: #4481eb">{{ item.user_type }}</span>
          </v-chip>

          <v-chip v-else-if="item.user_type === 'เกษตรกร'" color="#eaffed">
            <span style="color: #56a062">{{ item.user_type }}</span>
          </v-chip>

          <v-chip v-else color="#fff5ef">
            <span style="color: #fcad74">{{ item.user_type }}</span>
          </v-chip>
        </template>
        <template v-slot:[`item.quiz`]="{ item }">
          <v-icon small @click="editItem(item)" color="#4481eb">
            mdi-eye
          </v-icon>
        </template>
        <template v-slot:item.edit="{ item }">
          <v-icon small @click="editItem(item,type)" color="#56a062">
            mdi-pencil
          </v-icon>
        </template>
        <template v-slot:item.delete="{ item }">
          <v-icon small @click="deleteItem(item, type)" color="#ea5859">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
      <div v-if="!alluser.length && type === 'all'">
        <h1>ไม่พบข้อมูล 1111</h1>
      </div>
      <v-data-table
        :items="alluser"
        :headers="headers"
        :items-per-page="5"
        :search="search"
        v-show="type === 'student'"
        no-data-text="'ไม่พบข้อมูล"
        v-if="alluser.length"
      >
        <template v-slot:[`item.user_type`]="{ item }">
          <v-chip v-if="item.user_type === 'นักศึกษา'" color="#e8f9ff">
            <span style="color: #4481eb">{{ item.user_type }}</span>
          </v-chip>
          <!-- <td>
                    <v-btn
                      dark
                      @click="edit(data)"
                      class="mx-1"
                      fab
                      small
                      color="pink"
                    >
                      <v-icon dark> mdi-pencil </v-icon>
                    </v-btn>
            </td>
            <td>
              <v-btn class="mx-1" fab dark small color="pink" @click="deleteItem(user)">
                <v-icon dark> mdi-delete </v-icon>
              </v-btn>
            </td> -->
        </template>
        <template v-slot:item.quiz="{ item }">
          <v-icon small @click="editItem(item)" color="#4481eb">
            mdi-eye
          </v-icon>
        </template>
        <template v-slot:item.edit="{ item }">
          <v-icon small @click="editItem(item,type)" color="#56a062">
            mdi-pencil
          </v-icon>
        </template>
        <template v-slot:item.delete="{ item }">
          <v-icon small @click="deleteItem(item,type), type" color="#ea5859">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
            <div v-if="!alluser.length && type === 'student'">
        <h1>ไม่พบข้อมูล 2222</h1>
      </div>
      <v-data-table
        :items="alluser"
        :headers="headers"
        :items-per-page="5"
        :search="search"
        v-show="type === 'farmer'"
        no-data-text="'ไม่พบข้อมูล"
        v-if="alluser.length"
      >
         <template v-slot:[`item.user_type`]="{ item }">
          <v-chip v--if="item.user_type === 'เกษตรกร'" color="#eaffed">
            <span style="color: #56a062">{{ item.user_type }}</span>
          </v-chip>
          <!-- <td>
                    <v-btn
                      dark
                      @click="edit(data)"
                      class="mx-1"
                      fab
                      small
                      color="pink"
                    >
                      <v-icon dark> mdi-pencil </v-icon>
                    </v-btn>
            </td>
            <td>
              <v-btn class="mx-1" fab dark small color="pink" @click="deleteItem(user)">
                <v-icon dark> mdi-delete </v-icon>
              </v-btn>
            </td> -->
        </template>
        <template v-slot:item.quiz="{ item }">
          <v-icon small @click="editItem(item)" color="#4481eb">
            mdi-eye
          </v-icon>
        </template>
        <template v-slot:item.edit="{ item }">
          <v-icon small @click="editItem(item,type)" color="#56a062">
            mdi-pencil
          </v-icon>
        </template>
        <template v-slot:item.delete="{ item }">
          <v-icon small @click="deleteItem(item,type), type" color="#ea5859">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
            <div v-if="!alluser.length && type === 'farmer'">
        <h1>ไม่พบข้อมูล 3333</h1>
      </div>
      <v-data-table
        :items="alluser"
        :headers="headers"
        :items-per-page="5"
        :search="search"
        v-show="type === 'admin'"
        no-data-text="'ไม่พบข้อมูล"
        v-if="alluser.length"
      >
 <template v-slot:[`item.user_type`]="{ item }">
            <v-chip v-if="item.user_type === 'แอดมิน'" color="#fff5ef">
            <span style="color: #fcad74">{{ item.user_type }}</span>
          </v-chip>
          <!-- <td>
                    <v-btn
                      dark
                      @click="edit(data)"
                      class="mx-1"
                      fab
                      small
                      color="pink"
                    >
                      <v-icon dark> mdi-pencil </v-icon>
                    </v-btn>
            </td>
            <td>
              <v-btn class="mx-1" fab dark small color="pink" @click="deleteItem(user)">
                <v-icon dark> mdi-delete </v-icon>
              </v-btn>
            </td> -->
        </template>
        <template v-slot:item.quiz="{ item }">
          <v-icon small @click="editItem(item)" color="#4481eb">
            mdi-eye
          </v-icon>
        </template>
        <template v-slot:item.edit="{ item }">
          <v-icon small @click="editItem(item,type)" color="#56a062">
            mdi-pencil
          </v-icon>
        </template>
        <template v-slot:item.delete="{ item }">
          <v-icon small @click="deleteItem(item, type)" color="#ea5859">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
            <div v-if="!alluser.length && type === 'admin'">
        <h1>ไม่พบข้อมูล 4444</h1>
      </div>
      <!--  -->
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title> แก้ไขผู้ใช้ </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="ชื่อ"
                    required
                    v-model="user_firstname"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="นามสกุล"
                    required
                    v-model="user_lastname"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="อีเมล"
                    type="email"
                    v-model="user_email"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    :type="show3 ? 'text' : 'password'"
                    label="รหัสผ่าน"
                    v-model="user_password"
                    required
                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    @click:append="show3 = !show3"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="เบอร์โทร"
                    v-model="user_tel"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="user_type"
                    :items="['นักศึกษา', 'เกษตรกร', 'แอดมิน']"
                    :rules="typeRules"
                    label="กลุ่มผู้ใช้งาน"
                  >
                    <template v-slot:item="{ item, attrs, on }">
                      <v-list-item v-bind="attrs" v-on="on">
                        <v-list-item-title
                          :id="attrs['aria-labelledby']"
                          v-text="item"
                        ></v-list-item-title>
                      </v-list-item>
                    </template>
                  </v-select>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="อายุ"
                    v-model="user_age"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              ปิด
            </v-btn>
            <v-btn color="blue darken-1" text @click="save(type)"> บันทึก </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import NavbarAdmin from '@/components/NavbarAdmin'
import * as XLSX from 'xlsx'

export default {
  components: {
    NavbarAdmin
  },
  data () {
    return {
      show3: false,
      password: 'Password',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => "The email and password you entered don't match"
      },
      dialog: false,
      alluser: [],
      allstudent: [],
      allfarmer: [],
      alladmin: [],
      user_id: '',
      user_firstname: '',
      user_lastname: '',
      user_email: '',
      user_password: '',
      user_tel: '',
      user_type: '',
      user_age: '',
      user: {
        user_firstname: '',
        user_lastname: '',
        user_email: '',
        user_password: '',
        user_tel: '',
        user_type: '',
        user_age: ''
      },
      search: '',
      headers: [
        {
          text: 'ชื่อ',
          align: 'start',
          // sortable: false,
          value: 'user_firstname'
        },
        { text: 'นามสกุล', value: 'user_lastname' },
        { text: 'อีเมล', value: 'user_email' },
        // { text: 'รหัสผ่าน', value: 'user_password' },
        { text: 'เบอร์โทร', value: 'user_tel' },
        { text: 'ประเภทผู้ใช้', value: 'user_type' },
        { text: 'อายุ', value: 'user_age' },
        // { text: 'แก้ไข', value: 'แก้ไข' },
        // { text: 'ลบ', value: 'ลบ' },
        // { text: 'ข้อสอบ', value: 'quiz', sortable: false },
        { text: 'แก้ไข', value: 'edit', sortable: false },
        { text: 'ลบ', value: 'delete', sortable: false }
      ],
      data: {},
      export: 'export',
      json: [
        { name: 'Dady', age: '21' },
        { name: 'Jonh', age: '25' },
        { name: 'James', age: '17' }
      ],
      tab: null,
      items: ['ทั้งหมด', 'นักศึกษา', 'เกษตรกร', 'แอดมิน'],
      selected: '',
      type: 'all'
    }
  },
  created () {
    this.type = 'all'
    this.getUser(this.type)
  },
  methods: {
    async exportUser () {
      var { data } = await axios.post(
        'http://localhost/vue-backend/exportUser.php',
        {
          // post_id: this.post_id,
          export: 1
        }
      )
      if (data === 'success') {
        Swal.fire({
          icon: 'success',
          title: 'ดาวน์โหลดสำเร็จ',
          showConfirmButton: false,
          text: 'คำอธิบาย',
          customClass: {
            title: 'csss'
          },
          timer: 1500
        })
      }
    },
    async getUser (value) {
      this.type = value
      axios.get('http://localhost/vue-backend/editUser.php').then((res) => {
        console.log('data:', res.data)
        if (res.data) {
          this.alluser = res.data
        }
      })
    },
    async getStudent (value) {
      this.type = value
      axios.get('http://localhost/vue-backend/editStudent.php').then((res) => {
        console.log('data:', res.data)
        if (res.data) {
          this.alluser = res.data
        }
      })
    },
    async getFarmer (value) {
      this.type = value
      axios.get('http://localhost/vue-backend/editFarmer.php').then((res) => {
        console.log('data:', res.data)
        if (res.data) {
          this.alluser = res.data
        }
      })
    },
    async getAdmin (value) {
      this.type = value
      axios.get('http://localhost/vue-backend/editAdmin.php').then((res) => {
        console.log('data:', res.data)
        if (res.data) {
          this.alluser = res.data
        }
      })
    },
    editItem (data) {
      // console.log('item:', this.items)มันไม่มีค่า มันเอามาจากตัวแปรitems:{}ข้างบน มันว่าง
      // console.log('item:', data)คือฟังก์ชันedit(data)ข้างบนdataที่ส่งมา
      this.dialog = true
      this.user_id = data.user_id
      this.user_firstname = data.user_firstname
      this.user_lastname = data.user_lastname
      this.user_email = data.user_email
      this.user_password = data.user_password
      this.user_tel = data.user_tel
      this.user_type = data.user_type
      this.user_age = data.user_age
      // console.log('friend data item', data)
      // console.log(this.allshow)
    },
    async save (type) {
      var bodyValue = {
        user_id: this.user_id,
        user_firstname: this.user_firstname,
        user_lastname: this.user_lastname,
        user_email: this.user_email,
        user_password: this.user_password,
        user_tel: this.user_tel,
        user_type: this.user_type,
        user_age: this.user_age
      }
      var { data: update } = await axios.put(
        'http://localhost/vue-backend/updateUser.php',
        bodyValue
      )
      console.log(update, 'data here!')
      if (update === 'success') {
        this.dialog = false
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
        setTimeout(() => {
          this.type = type
          this.getReload(this.type)
        }, 1500)
      }
    },
    // closedialog () {
    //   this.dialog = false
    // }
    async deleteItem (data, type) {
      // var idDel = parseInt(data.id)
      var { data: deletes } = await axios.post(
        'http://localhost/vue-backend/deleteUser.php',
        {
          user_id: data.user_id
        }
      )
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
        setTimeout(() => {
          this.type = type
          this.getReload(this.type)
        }, 1500)
      }
    },
    getReload (type) {
      if (type === 'all') {
        this.getUser('all')
      } else if (type === 'student') {
        this.getStudent('student')
      } else if (type === 'farmer') {
        this.getFarmer('farmer')
      } else {
        // Admin
        this.getAdmin('admin')
      }
    },
    onExport () {
      // console.log('log')
      const dataWS = XLSX.utils.json_to_sheet(this.alluser)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, dataWS)
      XLSX.writeFile(wb, 'รายชื่อผู้ใช้งาน.xlsx')
    }
  }
}
// mounted () {
//   this.getUser()
// }
</script>

<style scoped>
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
