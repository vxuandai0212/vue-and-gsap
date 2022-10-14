<template>
   <section class="preview">
      <button class="preview__close unbutton">&#9587;</button>
      <preview-item v-for="item in previewItems" :key="item.title" :title="item.title" :imageUrls="item.imageUrls" />
   </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PreviewData } from '@/views/menu-to-grid/components/type'
import PreviewItem from '@/views/menu-to-grid/components/PreviewItem.vue'
export default defineComponent({
   components: {
      PreviewItem
   },
   props: {
      previewItems: {
         readonly: true,
         type: Array<PreviewData>
      }
   }
})
</script>
