<template>
    <div>
    <new-task></new-task>
    <task-list></task-list>
    </div>  
</template>

<script>
import NewTask from './NewTask'
import TaskList from './TaskList'
export default {
    name: 'TaskPage',
    components: {
        NewTask,
        TaskList
    }
}
</script>

<style>

</style>
