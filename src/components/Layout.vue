<template>
  <main role="main" class="flex flex-col min-h-screen w-full">
    <app-header />

    <div class="flex flex-grow md:items-center md:justify-center">
      <panel />
    </div>

    <app-footer />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';
import Panel from '@/components/Panel.vue';

export default Vue.extend({
  name: 'Layout',
  components: {
    AppHeader,
    Panel,
    AppFooter,
  },
});
</script>
