<template>
  <div
    class="p-4 flex rounded bg-surface md:bg-surface-file text-on-surface my-2"
  >
    <div class="h-12 w-12 hidden sm:block">
      <img
        :src="data.dataURL"
        :alt="data.name"
        :type="data.type"
        class="object-contain h-full w-full"
      />
    </div>
    <div class="flex items-center sm:pl-4 pr-4 flex-1 min-w-0">
      <div class="flex flex-col leading-tight flex-1 min-w-0">
        <b class="truncate" v-html="filename(data.upload.filename)" />
        <small class="truncate" v-html="bytes(data.upload.total)" />
      </div>
    </div>
    <div class="flex items-center justify-center px-2">
      <a
        :href="link"
        title="Ouvrir le fichier"
        class="mr-4 hover:text-info cursor-pointer transition-all"
      >
        <fa :icon="['far', 'share-square']" class="text-2xl" />
      </a>
      <span
        :href="link"
        :title="showConfirmation ? 'Lien copié' : 'Copier le lien'"
        @click="copyLink"
        class="hover:text-info cursor-pointer transition-all"
      >
        <fa v-if="!showConfirmation" :icon="['far', 'copy']" class="text-2xl" />
        <fa
          v-if="showConfirmation"
          :icon="['far', 'check-circle']"
          class="text-2xl text-success"
        />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import humanize from 'pretty-bytes';

export default Vue.extend({
  props: {
    data: {
      type: File,
      required: true,
    },
    link: {
      type: String,
      default: '#',
    },
  },
  data: () => ({
    showConfirmation: false,
  }),
  methods: {
    filename(filename: string) {
      let max: number = 30;
      return filename.length > max
        ? `${filename.substring(0, max)}...`
        : filename;
    },
    bytes(value: number) {
      return humanize(value, { locale: 'fr' });
    },
    copyLink() {
      if (this.showConfirmation) {
        this.showConfirmation = false;
        return;
      }

      this.$copyText(this.link);
      this.showConfirmation = true;
      setTimeout(() => (this.showConfirmation = false), 4000);
    },
    download() {
      location.replace(this.link);
    },
  },
});
</script>
