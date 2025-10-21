<route lang="yaml">
meta:
  title: '首頁'
  # 有沒有登入都能看
  login: ''
  # 不是管理員也能看
  admin: false
</route>

<template>
  <div class="min-h-screen bg-accent-50">
    <!-- 導覽列 -->
    <nav class="sticky top-0 bg-white shadow-sm z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo 與導覽連結 -->
          <div class="flex items-center space-x-8">
            <!-- Logo -->
            <router-link to="/" class="flex items-center h-full py-3">
              <img src="@/assets/Logo-color.png" alt="logo" class="h-full w-auto" />
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- 頁面內容 -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
// 導覽列
</script>
