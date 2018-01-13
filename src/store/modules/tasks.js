const state = {
  tasks: [],
  currentTaskId: null
}

const getters = {
  allTasks: state => {
      return state.tasks
  },
  currentTask: state => {
    var singleTask = {}
    state.tasks.map((task) => {
      singleTask = task.id === state.currentTaskId ? task : singleTask
    })
    return singleTask
  }
}

const actions = {
  addTask: function ({commit}, task) {
    commit('ADD_TASK', {
      task: task
    })
  },
  setCurrentTaskId: function ({commit}, taskId) {
    commit('SET_CURRENT_TASK', {
      currentTaskId: taskId
    })
  },
  deleteCurrentTask: function ({commit}) {
    commit('DELETE_CURRENT_TASK', {})
  }
}

const mutations = {
  ADD_TASK (state, {task}) {
    state.tasks.push(task)
  },
  SET_CURRENT_TASK (state, {currentTaskId}) {
    state.currentTaskId = currentTaskId
  },
  DELETE_CURRENT_TASK (state) {
    state.tasks = state.tasks.filter(task => {
      if (state.currentTaskId !== task.id) {
        return task
      }
    })
    state.currentTaskId = null
  }
}

const tasksStore = {
  getters,
  actions,
  mutations,
  state
}

export default tasksStore
