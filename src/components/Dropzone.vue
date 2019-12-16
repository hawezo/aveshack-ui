<template>
  <dropzone
    id="upload"
    :options="options"
    :use-custom-slot="true"
    :include-styling="false"
    @vdropzone-complete="onComplete"
  >
    <div
      class="flex flex-col items-center justify-center h-full p-4 rounded border-2 border-dashed border-on-surface-muted cursor-pointer min-h-dropzone"
    >
      <div class="my-4 flex flex-col items-center leading-tight">
        <span class="text-xl font-bold">Déposez un fichier</span>
        <span class="text-lg">ou cliquez pour en choisir un</span>
      </div>

      <div class="my-4">
        <button
          for="upload"
          class="px-5 py-3 rounded-lg bg-info text-on-info font-title font-bold transition-all hover:bg-info-hover focus:outline-none focus:shadow-outline"
        >
          Choisir un fichier
        </button>
      </div>
    </div>
  </dropzone>
</template>

<script lang="ts">
import Vue from 'vue';
import Dropzone from 'vue2-dropzone';

export default Vue.extend({
  components: {
    Dropzone,
  },
  data: () => ({
    options: {
      url: 'https://localhost/upload',
    },
  }),
  methods: {
    onComplete(data) {
      this.$emit('complete', data);
    },
  },
});
</script>

<style lang="postcss">
.dz-message {
  @apply h-full w-full;
}
.dz-preview {
  @apply hidden;
}
</style>
