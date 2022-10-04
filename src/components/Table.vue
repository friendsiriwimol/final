<template>
  <div>
    <v-container>
       <v-toolbar color="rgba(0,0,0,0)" flat class="pt-2">
                <v-toolbar-title class=""> ผู้ดูแลระบบ </v-toolbar-title>
              </v-toolbar>
              <v-simple-table class="transparent mt-n2">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">#</th>
                      <th class="text-left">ชื่อ</th>
                      <th class="text-left">นามสกุล</th>
                      <th class="text-left">สถานะ</th>
                      <th class="text-left">แก้ไข</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in admin" :key="item.id">
                      <td>{{ item.id }}</td>
                      <td>{{ item.first }}</td>
                      <td>{{ item.last }}</td>
                      <td>{{ item.expert }}</td>
                      <td>{{ item.date }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    admin: [
      {
        id: 1,
        first: 'สิริวิมล',
        last: 'เพชร',
        expert: 'นักศึกษา'
        // date: '05:30 pm - 11:00 pm',
      },
      {
        id: 2,
        first: 'เกตุมณี',
        last: 'ศรีสงสาร',
        expert: 'นักศึกษา'
        // date: '05:30 pm - 12:00 pm',
      }
    ]
  })
}
</script>

<style>

</style>
