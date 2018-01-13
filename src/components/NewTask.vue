<template>
  <div>
    <h1>Add new task</h1>
    <form>
      <div>
        <input v-model="title" type="text">
      </div>
      <div>
        <textarea v-model="description"></textarea>
      </div>
      <div>
        <button v-on:click.prevent="add" type="submit">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import generator from '../services/generator'

export default {
    name: 'NewTask',
    data () {
      return {
        description: '',
        title: ''
      }
    },
    methods: {
      add () {
        var task = {
          description: this.description,
          title: this.title,
          id: generator.randomId(10)
        }
        this.$store.dispatch('addTask', task)
        this.clearFields()
      },
      clearFields () {
        this.description = ''
        this.title = ''
      }
    }
}
</script>

<style>

</style>
