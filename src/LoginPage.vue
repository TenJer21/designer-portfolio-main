<template>
    <div class="login">
      <h1>Login</h1>
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  
  const login = () => {
    // Simulating API call for demonstration
    setTimeout(() => {
      localStorage.setItem('token', '123456')
      const redirectPath = sessionStorage.getItem('redirectPath') || '/'
      window.location.href = redirectPath
    }, 1000)
  }
  </script>