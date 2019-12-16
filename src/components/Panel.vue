<template>
  <section
    class="flex w-full md:max-w-3xl xl:max-w-6xl p-8 rounded-lg md:bg-surface md:text-on-surface md:shadow-lg min-h-panel"
  >
    <div class="flex flex-col md:flex-row">
      <dropzone
        class="w-full md:w-1/2 px-6 mt-8 md:mt-0 md:px-0"
        @complete="onComplete"
      />

      <div class="flex flex-1 flex-col w-full md:w-1/2 px-12 pt-6 md:mt-0">
        <div
          class="flex flex-col flex-1 md:order-2"
          :class="{ 'my-6': files.length }"
        >
          <file-result
            v-for="(data, id) in files"
            :key="id"
            :data="data"
            link="#"
          />
        </div>

        <div class="flex flex-col flex-1 md:order-1">
          <h1 class="text-4xl font-bold font-title leading-tight">
            Le service de partage d'image le plus pratique.
          </h1>
          <p class="text-lg mt-3 md:mt-6 text-paragraph leading-relaxed">
            AveShack est un service de partage d'images. <br />
            Il permet de téléverser une image et d'obtenir un lien de partage
            rapide. Vous pouvez utiliser ce service pour partager vos images sur
            le web.
          </p>
        </div>

        <small class="text-center order-3 mt-6">
          En acceptant ce service, vous acceptez les
          <a href="#" class="link transition-all hover:text-on-surface-emphasis"
            >conditions générales d'utilisation</a
          >.
        </small>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Dropzone from '@/components/Dropzone.vue';
import FileResult from '@/components/FileResult.vue';

export default Vue.extend({
  components: {
    Dropzone,
    FileResult,
  },
  data: () => ({
    files: [],
  }),
  methods: {
    onComplete(data) {
      // TODO: implement real upload, pass result URL to `file-result` component
      // TODO: handle errors
      this.files.push(data);
    },
  },
});
</script>
