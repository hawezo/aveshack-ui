<template>
  <footer class="flex w-full p-8">
    <div class="w-1/2 flex items-center">
      <a href="https://avenoel.org/" class="block">
        <logo
          filename="avenoel"
          :png="true"
          :webp="true"
          alt="Logo"
          fallback="avenoel.png"
        />
        <!-- <picture class="object-cover">
          <source type="image/webp" srcset="@/assets/avenoel.webp">
          <source type="image/png" srcset="@/assets/avenoel.png">
          <img src="@/assets/avenoel.png" alt="Logo Avenoel" />
        </picture> -->
      </a>
    </div>

    <div class="w-1/2 flex items-center justify-end">
      <!-- Other stuff -->
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import Logo from '@/components/Logo.vue';

export default Vue.extend({
  components: {
    Logo,
  },
});
</script>
