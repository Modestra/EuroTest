import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getProjects } from '@/services/ProductsService'
import type { Category } from '@/entities/category'
import Project from '@/components/Project.vue'

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
    filterList(category: String) {
      this.filted = this.projects.filter((p: Project) => p.categories.forEach((list) => {
        return list.name === category ? true : false
      }))
    }
  }
})
