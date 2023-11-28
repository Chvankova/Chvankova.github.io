const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Hello Sandra!')
      return {
        message
      }
    }
  }).mount('#app')