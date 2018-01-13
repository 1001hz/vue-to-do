<template>
  <div>
    <ul>
      
        <li v-for="task in tasks">
          <router-link :to="{ name: 'ViewTask', params: { taskId: task.id }}">
          {{ task.title }}
          </router-link>
        </li>
      
    </ul>
  </div> 
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'task-list',
  computed: mapGetters({
      tasks: 'allTasks'
  }),
  methods: {
    openTask () {}
  }
}
</script>
<style>

</style>

