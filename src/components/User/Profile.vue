<template>
<div>
  <NavbarUser />
  <div>
      <v-breadcrumbs
        :items="breadcrumbs"
        large
      ></v-breadcrumbs>
    </div>
<v-card class="cardShowuser mt-0">
    <v-card-title>
        <!-- <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
      </v-tab-item>
    </v-tabs-items> -->
        <v-icon class="mr-2" color="#fcad74">mdi-account</v-icon>
        บัญชีผู้ใช้
        <v-spacer></v-spacer>
        <!-- <button @click="exportUser()" value="Export">โหลด</button> -->
        <!-- <form >
     <input type="submit" name="export" class="btn btn-success"  />
    </form> -->
      </v-card-title>

    <v-divider></v-divider>
    <v-row justify="center" class="ma-5">
    <v-avatar color="primary">
      <span class="white--text text-h5">SP</span>
    </v-avatar>
    </v-row>
        <v-card-text>

    <div class="ma-10">
    <v-row >ชื่อ : สิริวิมล</v-row>
    <v-row >นามสกุล : เพชรเวียง</v-row>
    <v-row >อีเมล : friend.siriwimol@kkumail.com</v-row>
    <v-row >เบอร์โทร : 0943706163</v-row>
    <v-row >อายุ : 21</v-row>
        <v-row >กลุ่มผู้ใช้งาน : นักศึกษา</v-row>
        </div>
        </v-card-text>
    <!-- <v-virtual-scroll
      :items="items"
      :item-height="50"
      height="300"
    >
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar
              :color="item.color"
              size="56"
              class="white--text"
            >
              {{ item.initials }}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.fullName }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              depressed
              small
            >
              View User

              <v-icon
                color="orange darken-4"
                right
              >
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll> -->
  </v-card>
  </div>
</template>

<script>
import NavbarUser from '@/components/NavbarUser'

export default {
  components: {
    NavbarUser
  },
  data: () => ({
    colors: ['#2196F3', '#90CAF9', '#64B5F6', '#42A5F5', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF', '#2979FF', '#2962FF'],
    names: ['Oliver', 'Jake', 'Noah', 'James', 'Jack', 'Connor', 'Liam', 'John', 'Harry', 'Callum', 'Mason', 'Robert', 'Jacob', 'Jacob', 'Jacob', 'Michael', 'Charlie', 'Kyle', 'William', 'William', 'Thomas', 'Joe', 'Ethan', 'David', 'George', 'Reece', 'Michael', 'Richard', 'Oscar', 'Rhys', 'Alexander', 'Joseph', 'James', 'Charlie', 'James', 'Charles', 'William', 'Damian', 'Daniel', 'Thomas', 'Amelia', 'Margaret', 'Emma', 'Mary', 'Olivia', 'Samantha', 'Olivia', 'Patricia', 'Isla', 'Bethany'],
    surnames: ['Smith', 'Anderson', 'Clark', 'Wright', 'Mitchell', 'Johnson', 'Thomas', 'Rodriguez', 'Lopez', 'Perez', 'Williams', 'Jackson', 'Lewis', 'Hill', 'Roberts', 'Jones', 'White', 'Lee', 'Scott', 'Turner', 'Brown', 'Harris', 'Walker', 'Green', 'Phillips', 'Davis', 'Martin', 'Hall', 'Adams', 'Campbell', 'Miller', 'Thompson', 'Allen', 'Baker', 'Parker', 'Wilson', 'Garcia', 'Young', 'Gonzalez', 'Evans', 'Moore', 'Martinez', 'Hernandez', 'Nelson', 'Edwards', 'Taylor', 'Robinson', 'King', 'Carter', 'Collins'],
    breadcrumbs: [
      {
        text: 'หน้าแรก',
        disabled: false,
        href: 'post'
      },
      {
        text: 'บัญชีผู้ใช้',
        disabled: true,
        href: 'profile'
      }
    ]
  }),

  computed: {
    items () {
      const namesLength = this.names.length
      const surnamesLength = this.surnames.length
      const colorsLength = this.colors.length

      return Array.from({ length: 10000 }, (k, v) => {
        const name = this.names[this.genRandomIndex(namesLength)]
        const surname = this.surnames[this.genRandomIndex(surnamesLength)]

        return {
          color: this.colors[this.genRandomIndex(colorsLength)],
          fullName: `${name} ${surname}`,
          initials: `${name[0]} ${surname[0]}`
        }
      })
    }
  },

  methods: {
    genRandomIndex (length) {
      return Math.ceil(Math.random() * (length - 1))
    }
  }
}
</script>

<style scoped>
.v-breadcrumbs >>> a {
    color: #fcad74;
}
</style>
