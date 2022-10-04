<template>
  <v-container>
    <v-item-group mandatory class="mt-n4">
      <v-toolbar color="rgba(0,0,0,0)" flat class="mt" style="margin-top: 20px">
        <v-toolbar-title>ภาพรวมระบบ</v-toolbar-title>
      </v-toolbar>
      <v-row justify="center" class="space">
        <v-col cols="9" md="2">
          <v-item v-slot="{ active, toggle }">
            <v-dialog
              transition="dialog-bottom-transition"
              max-width="600"
            >
        <template v-slot:activator="{ on, attrs }">
            <v-card
              :color="active ? '#099fae' : 'white'"
              class="d-flex align-center rounded-xl"
              dark
              height="200"
              @click="toggle"
              v-bind="attrs"
              v-on="on"
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line class="mt-10">
                    <v-list-item-content>
                      <div class="mb-3">
                        <v-icon x-large :color="active ? 'white' : '#099fae'"
                          >mdi-account-school-outline</v-icon
                        >
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'white--text' : 'black--text'"
                        >นักศึกษา</v-list-item-subtitle
                      >
                      <v-list-item-title
                        class="headline mb-1"
                        :class="active ? 'white--text' : 'black--text'"
                      >
                        <strong>{{allstudent.length}}</strong>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
            </template>
            <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="#099fae"
              dark
            >รายชื่อนักศึกษา</v-toolbar>
            <v-card-text>
              <v-simple-table
              fixed-header
              height="300px"
              class="mt-7"
            >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            ชื่อ
          </th>
          <th class="text-left">
            นามสกุล
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in allstudent"
          v-bind:key="user.user_id"
        >
          <td>{{ user.user_firstname }}</td>
          <td>{{ user.user_lastname }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                color="primary"
                @click="dialog.value = false"
              >ปิด</v-btn>
            </v-card-actions>
          </v-card>
          </template>
      </v-dialog>
          </v-item>
        </v-col>
        <v-col cols="9" md="2">
          <v-item v-slot="{ active, toggle }">
            <v-dialog
              transition="dialog-bottom-transition"
              max-width="600"
            >
        <template v-slot:activator="{ on, attrs }">
            <v-card
              :color="active ? '#099fae' : 'white'"
              class="d-flex align-center rounded-xl"
              dark
              height="200"
              @click="toggle"
              v-bind="attrs"
              v-on="on"
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line class="mt-10">
                    <v-list-item-content>
                      <div class="mb-3">
                        <v-icon x-large :color="active ? 'white' : '#099fae'"
                          >mdi-account-cowboy-hat-outline</v-icon
                        >
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'white--text' : 'black--text'"
                        >เกษตรกร</v-list-item-subtitle
                      >
                      <v-list-item-title
                        class="headline mb-1"
                        :class="active ? 'white--text' : 'black--text'"
                      >
                        <strong>{{allfarmer.length}}</strong>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
            </template>
            <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="#099fae"
              dark
            >รายชื่อเกษตรกร</v-toolbar>
            <v-card-text>
              <v-simple-table
              fixed-header
              height="300px"
              class="mt-7"
            >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            ชื่อ
          </th>
          <th class="text-left">
            นามสกุล
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in allfarmer"
          v-bind:key="user.user_id"
        >
          <td>{{ user.user_firstname }}</td>
          <td>{{ user.user_lastname }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                color="primary"
                @click="dialog.value = false"
              >ปิด</v-btn>
            </v-card-actions>
          </v-card>
          </template>
      </v-dialog>
          </v-item>
        </v-col>
        <v-col cols="9" md="2">
          <v-item v-slot="{ active, toggle }">
            <v-dialog
              transition="dialog-bottom-transition"
              max-width="600"
            >
        <template v-slot:activator="{ on, attrs }">
            <v-card
              :color="active ? '#099fae' : 'white'"
              class="d-flex align-center rounded-xl"
              dark
              height="200"
              @click="toggle"
              v-bind="attrs"
              v-on="on"
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line class="mt-10">
                    <v-list-item-content>
                      <div class="mb-3">
                        <v-icon x-large :color="active ? 'white' : '#099fae'"
                          >mdi-clipboard-text-search-outline</v-icon
                        >
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'white--text' : 'black--text'"
                        >แอดมิน</v-list-item-subtitle
                      >
                      <v-list-item-title
                        class="headline mb-1"
                        :class="active ? 'white--text' : 'black--text'"
                      >
                        <strong>{{alladmin.length}}</strong>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
            </template>
            <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="#099fae"
              dark
            >รายชื่อแอดมิน</v-toolbar>
            <v-card-text>
              <v-simple-table
              fixed-header
              height="300px"
              class="mt-7"
            >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            ชื่อ
          </th>
          <th class="text-left">
            นามสกุล
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in alladmin"
          v-bind:key="user.user_id"
        >
          <td>{{ user.user_firstname }}</td>
          <td>{{ user.user_lastname }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                color="primary"
                @click="dialog.value = false"
              >ปิด</v-btn>
            </v-card-actions>
          </v-card>
          </template>
      </v-dialog>
          </v-item>
        </v-col>
        <v-col cols="9" md="2">
          <v-item v-slot="{ active, toggle }">
            <v-dialog
              transition="dialog-bottom-transition"
              max-width="600"
            >
        <template v-slot:activator="{ on, attrs }">
            <v-card
              :color="active ? '#099fae' : 'white'"
              class="d-flex align-center rounded-xl"
              dark
              height="200"
              @click="toggle"
              v-bind="attrs"
              v-on="on"
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line class="mt-10">
                    <v-list-item-content>
                      <div class="mb-3">
                        <v-icon x-large :color="active ? 'white' : '#099fae'"
                          >mdi-account-group-outline</v-icon
                        >
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'white--text' : 'black--text'"
                        >ผู้ใช้งานทั้งหมด</v-list-item-subtitle
                      >
                      <v-list-item-title
                        class="headline mb-1"
                        :class="active ? 'white--text' : 'black--text'"
                      >
                        <strong>{{alluser.length}}</strong>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
            </template>
            <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="#099fae"
              dark
            >รายชื่อผู้ใช้งานทั้งหมด</v-toolbar>
            <v-card-text>
              <v-simple-table
              fixed-header
              height="300px"
              class="mt-7"
            >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            ชื่อ
          </th>
          <th class="text-left">
            นามสกุล
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in alluser"
          v-bind:key="user.user_id"
        >
          <td>{{ user.user_firstname }}</td>
          <td>{{ user.user_lastname }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                color="primary"
                @click="dialog.value = false"
              >ปิด</v-btn>
            </v-card-actions>
          </v-card>
          </template>
      </v-dialog>
          </v-item>
        </v-col>
        <v-col cols="9" md="2">
          <v-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? '#099fae' : 'white'"
              class="d-flex align-center rounded-xl"
              dark
              height="200"
              @click="toggle"
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line class="mt-10">
                    <v-list-item-content>
                      <div class="mb-3">
                        <v-icon x-large :color="active ? 'white' : '#099fae'"
                          >mdi-post-outline</v-icon
                        >
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'white--text' : 'black--text'"
                        >โพสต์รอการอนุมัติ</v-list-item-subtitle
                      >
                      <v-list-item-title
                        class="headline mb-1"
                        :class="active ? 'white--text' : 'black--text'"
                      >
                        <strong>23</strong>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      user_id: '',
      user_name: '',
      alluser: [],
      allstudent: [],
      allfarmer: [],
      alladmin: [],
      dialog: false,
      user: {
        user_id: '',
        user_firstname: '',
        user_lastname: ''
      }
    }
  },
  created () {
    this.getAllUser()
    this.getAllStudent()
    this.getAllFarmer()
    this.getAllAdmin()
  },
  methods: {
    async getAllUser () {
      axios.get('http://localhost/vue-backend/dashboardAlluser.php').then((res) => {
        console.log(res.data)
        if (res.data) {
          this.alluser = res.data
        }
      })
    },
    async getAllStudent () {
      axios.get('http://localhost/vue-backend/dashboardStudent.php').then((res) => {
        console.log(res.data)
        if (res.data) {
          this.allstudent = res.data
        }
      })
    },
    async getAllFarmer () {
      axios.get('http://localhost/vue-backend/dashboardFarmer.php').then((res) => {
        console.log(res.data)
        if (res.data) {
          this.allfarmer = res.data
        }
      })
    },
    async getAllAdmin () {
      axios.get('http://localhost/vue-backend/dashboardAdmin.php').then((res) => {
        console.log(res.data)
        if (res.data) {
          this.alladmin = res.data
        }
      })
    }
  }
}
</script>

<style>
.mt-n5 {
  margin-top: 20px;
}
</style>
