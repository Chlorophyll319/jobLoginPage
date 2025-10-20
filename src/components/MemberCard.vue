<template>
  <div class="bg-primary-500 text-white p-8 rounded-lg text-center flex flex-col items-center">
    <!-- Icon Circle -->
    <div
      class="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 p-6 overflow-hidden"
    >
      <slot name="icon">
        <i class="fa-solid fa-leaf text-green-500" />
      </slot>
    </div>

    <!-- Title -->
    <h3
      class="text-2xl font-bold mb-4 uppercase tracking-wider h-[4.5rem] flex items-center justify-center"
    >
      <slot name="title">UX DESIGN</slot>
    </h3>

    <!-- Description -->
    <p class="text-base leading-relaxed mb-6 opacity-90">
      <slot name="description">
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
        bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.
      </slot>
    </p>

    <!-- Button -->
    <button
      class="px-10 py-3 rounded-full border-2 border-white text-white font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-primary-500"
    >
      <slot name="button">VIEW MORE</slot>
    </button>
  </div>
</template>

<script setup>
// Member Card - 可重用的服務卡片元件
</script>
