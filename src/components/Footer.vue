<template>
  <footer class="flex w-full p-8">
    <div class="w-1/2 flex items-center">
      <a :href="config.url" class="block">
        <logo
          filename="avenoel"
          :png="true"
          :webp="true"
          alt="Logo"
          fallback="avenoel.png"
        />
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
import config from '@/../aveshack.config';

export default Vue.extend({
  components: {
    Logo,
  },
  data: () => ({
    config
  })
});
</script>
