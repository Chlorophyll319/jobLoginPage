<template>
  <!-- 表單元件 -->
  <div class="bg-white rounded-DEFAULT shadow-md p-8">
    <h2 class="text-3xl font-bold text-secondary-900 mb-6 text-center">登入</h2>

    <form @submit.prevent="handleLogin" class="space-y-6">
      <!-- 帳號輸入 -->
      <div>
        <label for="email" class="block text-sm font-medium text-secondary-700 mb-2">
          電子郵件
        </label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="w-full px-4 py-2 border border-secondary-300 rounded-[--radius] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          placeholder="your@email.com"
        />
      </div>

      <!-- 密碼輸入 -->
      <div>
        <label for="password" class="block text-sm font-medium text-secondary-700 mb-2">
          密碼
        </label>
        <input
          id="password"
          v-model="password"
          type="password"
          required
          class="w-full px-4 py-2 border border-secondary-300 rounded-[--radius] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          placeholder="請輸入密碼"
        />
      </div>

      <!-- 記住我 -->
      <div class="flex items-center">
        <input
          id="remember"
          v-model="remember"
          type="checkbox"
          class="h-4 w-4 text-primary focus:ring-primary border-secondary-300 rounded"
        />
        <label for="remember" class="ml-2 block text-sm text-secondary-700"> 記住我 </label>
      </div>

      <!-- 登入按鈕 -->
      <button
        type="submit"
        class="w-full bg-primary text-white py-2 px-4 rounded-[--radius] font-medium hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition"
      >
        登入
      </button>
    </form>

    <!-- 其他選項 -->
    <div class="mt-6 text-center">
      <a href="#" class="text-sm text-primary hover:text-primary-700"> 忘記密碼? </a>
    </div>
  </div>
</template>
<script setup>
// 表單邏輯
const email = ref('')
const password = ref('')
const remember = ref(false)

const handleLogin = () => {
  console.log('登入資訊:', {
    email: email.value,
    password: password.value,
    remember: remember.value,
  })
  // 這裡可以添加實際的登入邏輯
}
</script>
