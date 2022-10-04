<template>
  <div>
      <h1>{{user_email}}</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    user_email: ''
  }),
  created () {
    this.getEmail()
  },
  methods: {
    async getEmail () {
      console.log('rewload')
      axios.get('http://localhost/vue-backend/success.php').then((res) => {
        console.log('data:', res.data)
        if (res.data) {
          this.user_email = res.data
        }
      })
    }
  }
}
</script>

<style>

</style>
