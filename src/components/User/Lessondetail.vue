<template>
  <div>
    <NavbarUser/>
    <!-- <div>{{item.lesson_unit}}</div>
    <div>{{item.lesson_name}}</div>
    <div>{{item}}</div> -->
    <v-card class="mt-7 mb-7">
    <div class="output ql-snow">
      <div class="ql-editor" v-html="item.lesson_description"></div>
    </div>
</v-card>
  </div>
</template>

<script>
import axios from 'axios'
import NavbarUser from '@/components/NavbarUser'
export default {
  components: {
    NavbarUser
  },
  name: 'quill-example-custom-toolbar',
  title: 'Custom toolbar',
  data () {
    return {
      alllesson: [],
      item: '',
      lesson: {
        lesson_id: '',
        lesson_unit: '',
        lesson_name: '',
        lesson_description: ''
      },
      lesson_id: '',
      lesson_unit: '',
      lesson_name: '',
      lesson_description: ''
    }
  },
  created () {
    this.lesson_id = this.$route.params.id
    this.getLesson()
  },
  inject: [
    'getLesson'
  ],
  computed: {
    lessonChilren () {
      return this.getLesson
    }
  },
  methods: {
    async getLesson () {
      axios.get('http://localhost/vue-backend/lesson.php?id=this.lesson_id').then((res) => {
        console.log('data:', res.data)
        if (res.data) {
          this.item = res.data[this.lesson_id]
          console.log('item', this.item)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.example {
  display: flex;
  height: 30rem;
  overflow: hidden;
  .editor,
  .output {
    width: 50%;
  }
  $toolbar-height: 41px;
  .editor {
    padding-bottom: $toolbar-height;
    .ql-custom-button {
      width: 100px;
    }
  }
  .output {
    border: 1px solid #ccc;
    border-left: none;
    .title {
      height: $toolbar-height;
      line-height: $toolbar-height;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
