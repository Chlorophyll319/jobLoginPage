<route lang="yaml">
meta:
  title: '登入'
  layout: default
  # 有沒有登入都能看
  login: ''
  # 不是管理員也能看
  admin: false
</route>

<template>
  <div class="flex items-center justify-center min-h-[calc(100vh-8rem)]">
    <div class="w-full max-w-md">
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue'
</script>
