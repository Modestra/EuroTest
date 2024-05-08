import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getProjects } from '@/services/ProductsService'

export const useCategoryStore = defineStore('categories', {
    state: () => ({
        categories: []
    }),
    getters: {

    },
    actions: {
        setData(newData) {
            this.projects = newData
        }
    }
})