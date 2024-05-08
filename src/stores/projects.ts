import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getProjects } from '@/services/ProductsService'

export const useCounterStore = defineStore('projects', {
  state: () => ({
    projects: [],
    filted: []
  }),
  getters: {

  },
  actions: {
    setData(newData) {
      this.projects = newData
      this.filted = this.projects
    },
    filterList(category) {
      this.filted = this.projects.filter((p) => p.categories.name == category)
    }
  }
})
