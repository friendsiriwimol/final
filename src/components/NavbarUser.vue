<template>
<div >
  <nav>
    <v-toolbar app height="90px"  elevation="2" class="rounded-lg">
      <v-btn @click="drawer = !drawer"
      class="ma-2"
      fab
      dark
      elevation="0"
      text
      icon
        color="teal lighten-2">
         <v-icon dark>
        mdi-menu
      </v-icon>
    </v-btn>
      <v-toolbar-title color="#334465">
        <span class="font-weight-light">E-learning </span>
        <span color="#fcad74">for </span>
        <span> Hens</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="text-capitalize" color="#ea5859" href="/">
        <span class="icon">Sign Out</span>
        <v-icon right class="icon">mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" color="#099fae">
       <div class="nav-menu">
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/187955402_1805265456321792_5790365418668920358_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFjnZw5Nq60vr2i-vtQx02zt_TST1ymdpi39NJPXKZ2mKc6wPDghlYK-NI2b8K70uFEBMDorIYT4x8wUiD4sod4&_nc_ohc=gc5K5a-etUIAX8jo5gB&_nc_ht=scontent.fkkc3-1.fna&oh=00_AT8CgTmO1G_DIKzQ4qaflnFdc9pY9PfdWifv95tmk0pp3g&oe=637B29A9"></v-img>
        </v-list-item-avatar>

        <v-list-item-title class="text">Friend</v-list-item-title>

      </v-list-item>
       <v-divider></v-divider>

      <v-list dense >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router :to="item.route"
          class="icon"
        >
          <v-list-item-icon class="icon">
            <v-icon class="icon">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="title"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>

    </v-navigation-drawer>
  </nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        { title: 'หน้าแรก', icon: 'mdi-home-city', route: '/post' },
        { title: 'บทเรียน', icon: 'mdi-book-open-variant', route: '/lesson' },
        { title: 'แบบทดสอบ', icon: 'mdi-notebook-edit', route: '/quiz' },
        { title: 'วิดีโอ', icon: 'mdi-video', route: '/video' },
        { title: 'ประวัติเข้าเรียน', icon: 'mdi-clipboard-text-clock', route: '/history' },
        { title: 'บัญชีผู้ใช้', icon: 'mdi-account', route: '/profile' }
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
.title
 font-size: 2.5em !important
 color: #AB4D4 !important
 cursor: pointer
.font
 font-size: 2em !important
 padding: 10% 5% !important
.icon
  color: #fff !important
.img
 margin:30px auto
 font-size: 1.2em !important
.px-2
 background: #099fae
 color: #AB4D4 !important
.ma-2
  font-size: 0.8em !important
  width:100%
  background: #AB4D4 !important
.text
 color:#fff
</style>
