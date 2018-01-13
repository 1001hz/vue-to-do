<template>
    <div>
        <h1>{{task.title}}</h1>
        <p>{{task.description}}</p>
        <button @click="remove">Delete</button>
    </div>  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ViewTask',
    computed: mapGetters({
      task: 'currentTask'
    }),
    beforeRouteEnter (to, from, next) {
        next(vm => vm.$store.dispatch('setCurrentTaskId', to.params.taskId))
    },
    methods: {
        remove () {
            this.$store.dispatch('deleteCurrentTask')
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>
