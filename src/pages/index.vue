<route lang="yaml">
meta:
  title: 'DigiSalad - Digital Marketing Agency'
  layout: default
  login: ''
  admin: false
</route>

<template>
  <div class="w-full relative">
    <!-- Hero Section with Video Background -->
    <section
      class="absolute top-0 left-0 w-screen h-screen min-h-[600px] flex md:items-start md:justify-start items-center justify-center overflow-hidden z-50 rounded-b-[16px] -translate-y-16"
    >
      <!-- Video Background -->
      <div class="absolute inset-0 z-0">
        <iframe
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vh] pointer-events-none"
          src="https://www.youtube.com/embed/8_4JRK4QkqU?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=8_4JRK4QkqU"
          frameborder="0"
          allow="autoplay; encrypted-media"
        />
      </div>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50 z-[1]" />

      <!-- DIGITAL AGENCY - Rotated -->
      <div
        class="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 text-white z-[2] tracking-wider md:flex items-center gap-3 hidden"
      >
        <span class="w-[52px] h-0 border-t-2 border-white inline-block" />
        <span>DIGITAL AGENCY</span>
      </div>

      <!-- Content -->
      <div class="relative z-[2] text-white max-w-6xl md:ml-[15%] md:mt-[10%] px-6 md:px-0">
        <img src="@\assets\logo.png" alt="logo" class="h-[60px] mb-3" />
        <div class="relative">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight uppercase tracking-wider text-left relative z-10"
          >
            WE CREATE <br />
            AMAZING <br />
            DIGITAL EXPERIENCES
          </h1>
          <span class="absolute left-0 bottom-2 w-full h-[10px] bg-primary" />
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]">
        <router-link to="/login">
          <img src="@\assets\food.png" alt="沙拉" class="m-auto" />
        </router-link>
      </div>
    </section>

    <!-- Spacer for the hero section -->
    <div class="h-screen" />

    <!-- About DigiSalad Section -->
    <section class="py-20 relative z-10 flex justify-center">
      <div class="w-[70%] text-center">
        <div class="mb-16">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase tracking-wider text-gray-800"
          >
            ABOUT DIGISALAD
          </h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto my-5" />
        </div>
        <!-- Video Section -->
        <div class="relative pb-[50%] h-0 overflow-hidden mb-6">
          <iframe
            class="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/IeIRJ9jZ5Ro"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div>
          <p class="text-lg leading-relaxed mb-6 text-gray-600">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
            bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel
            ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl,
            vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,
            venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam
            consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec
            lacus. Cras lobortis molestie faucibus.
          </p>
          <button
            class="w-[223px] h-[86px] rounded-[1px] bg-primary-500 text-white font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-primary-600 hover:-translate-y-0.5 mx-auto flex items-center justify-center gap-3"
          >
            <span>VIEW MORE</span>
            <span class="w-[52px] h-0 border-t-2 border-white" />
          </button>
        </div>
      </div>
    </section>

    <!-- AWARDS Section -->
    <section
      class="mx-auto w-[90%] md:ml-[10%] py-12 md:py-20 px-4 md:px-8 bg-white rounded-bl-[16px] rounded-tl-[16px] rounded-br-[16px] relative z-20"
    >
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-2 items-start">
        <div class="w-full lg:w-[416px] flex-shrink-0">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase tracking-wider text-gray-800"
          >
            AWARDS
          </h2>
          <div class="w-20 h-1 bg-primary-500 mb-6 my-5" />
          <p class="text-gray-600 leading-relaxed">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
            bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel
            ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl,
            vitae sagittis orci. Donec id dignissim nunc.
          </p>
        </div>

        <div class="flex-1 grid grid-cols-2 gap-2 w-full">
          <img
            src="@/assets/awards-image.png"
            alt="Award 1"
            class="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="@/assets/awards-image.png"
            alt="Award 2"
            class="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="@/assets/awards-image.png"
            alt="Award 3"
            class="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="@/assets/awards-image.png"
            alt="Award 4"
            class="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>

    <!--OUR INGRADIENTS Section -->
    <section
      class="py-[20em] px-8 bg-primary-500 text-white rounded-tl-[16px] rounded-br-[16px] relative z-10 -mt-40"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase tracking-wider">
            OUR INGRADIENTS
          </h2>
          <div class="w-20 h-1 bg-white mx-auto my-5" />
          <p>
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
            bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel
            ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl,
            vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,
            venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam
            consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec
            lacus. Cras lobortis molestie faucibus.
          </p>
        </div>

        <div class="mx-auto">
          <button
            class="w-[223px] h-[86px] rounded-[1px] bg-secondary-500 text-white font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-secondary-600 hover:-translate-y-0.5 mx-auto flex items-center justify-center gap-3"
          >
            <span>OUR SERVICES</span>
            <span class="w-[52px] h-0 border-t-2 border-white" />
          </button>
        </div>

        <!-- MemberCard Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MemberCard v-for="service in services" :key="service.title">
            <template #icon>
              <img
                :src="`/src/assets/member/${service.title}.png`"
                :alt="service.title"
                class="w-full h-full object-contain"
              />
            </template>
            <template #title>{{ service.title.toUpperCase() }}</template>
            <template #description>
              Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
              bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel
              ornare.
            </template>
          </MemberCard>
        </div>
        <button
          class="h-[86px] rounded-[1px] bg-primary-500 text-white font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-primary-600 hover:-translate-y-0.5 mx-auto flex items-center justify-center relative"
        >
          <span class="relative z-10 text-[18px]">VIEW MORE DIGISALAD'S INGRADIENTS</span>
          <span
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/6 w-full h-[10px] bg-orange-300"
          />
        </button>
      </div>
    </section>

    <!-- Team Section -->
    <section
      class="w-[90%] py-20 px-8 bg-secondary rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] text-white bg-cover bg-center relative z-20 -mt-40"
      :style="{ backgroundImage: `url(${backgroundTony})` }"
    >
      <div class="max-w-6xl mx-auto">
        <div class="max-w-3xl mx-auto grid md:grid-cols-[200px_1fr] gap-12 items-center">
          <div class="flex flex-col items-center justify-center">
            <img src="@\assets\Tony Ng.png" alt="Tony Ng" />
            <h3>Tony Ng</h3>
            <p>Founder & Creative Director</p>
          </div>
          <div class="text-center md:text-left flex flex-col justify-center">
            <img src="@\assets\left-quote.png" alt="雙引號" class="w-fit m-auto" />

            <p class="text-[22px] tracking-[2px] font-normal opacity-90 leading-[2em]">
              A great digital work isn't about designing beautiful pages purely. It is about context
              - how do we deliver the right experience to the
              <span class="font-bold"> right person at the right time. </span> The most important
              thing is that your work can engage customers at anytime, anywhere and let users
              experience an entire amazing digital journey.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR BRAND EXPERIENCE -->
    <section class="py-20 px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase tracking-wider text-gray-800"
          >
            OUR BRAND EXPERIENCE
          </h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto my-5" />
          <p>
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
            bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel
            ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl,
            vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,
            venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam
            consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec
            lacus. Cras lobortis molestie faucibus.
          </p>
        </div>
        <img src="@\assets\brend.png" alt="合作品牌" />
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-neutral-900 text-white py-16 px-8">
      <!--  -->
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MemberCard from '@/components/MemberCard.vue'
import backgroundTony from '@/assets/background-tony.png'

// Services/Members data
const services = ref([
  { title: 'UX Design' },
  { title: 'BRANDING' },
  { title: 'UI Design' },
  { title: 'mobile app development' },
  { title: 'website development' },
  { title: 'ecommerce' },
  { title: 'digital marketing' },
  { title: 'digital transformation' },
  { title: 'customer loyalty' },
])
</script>
