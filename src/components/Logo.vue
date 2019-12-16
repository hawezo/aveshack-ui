<template>
  <picture class="object-cover" :title="alt">
    <source
      v-if="webp"
      type="image/webp"
      :srcset="require(`@/assets/${filename}.webp`)"
    />
    <source
      v-if="png"
      type="image/png"
      :srcset="require(`@/assets/${filename}.png`)"
    />
    <img v-if="fallback" :src="require(`@/assets/${fallback}`)" :alt="alt" />
  </picture>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    filename: String,
    webp: Boolean,
    png: Boolean,
    jpeg: Boolean,
    fallback: String,
    alt: String,
  },
});
</script>
