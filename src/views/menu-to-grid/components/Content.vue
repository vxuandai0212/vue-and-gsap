<template>
   <section class="content">
      <div class="cover"></div>
      <content-group v-for="item in menuItems" :key="item.title" :title="item.title" :imageUrls="item.imageUrls" />
   </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PreviewData } from '@/views/menu-to-grid/components/type'
import ContentGroup from '@/views/menu-to-grid/components/ContentGroup.vue'
export default defineComponent({
   components: {
      ContentGroup
   },
   props: {
      menuItems: {
         readonly: true,
         type: Array<PreviewData>
      }
   }
})
</script>