<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from './components/Layout.vue';

export default Vue.extend({
  name: 'app',
  components: {
    Layout,
  },
});
</script>

<style lang="postcss">
@import 'tailwindcss/base';
@import 'tailwindcss/utilities';
@import 'tailwindcss/components';

.link {
  background-image: linear-gradient(
    180deg,
    transparent 70%,
    rgba(var(--color-info), 0.4) 0
  );
}
</style>
