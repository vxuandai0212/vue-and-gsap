<template>
   <div class="row">
      <div class="cell cell--text">
         <h2 class="cell__title oh">
            <span class="oh__inner">{{ title }}</span>
         </h2>
      </div>
      <div class="cell cell--images">
         <content-item v-for="(item, index) in imageUrls" :key="index" :imageUrl="(item as string)" />
      </div>
   </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ContentItem from '@/views/menu-to-grid/components/ContentItem.vue'
export default defineComponent({
   components: { ContentItem },
   props: {
      title: {
         readonly: true,
         default: 'Crumble Toe',
         type: String
      },
      imageUrls: {
         readonly: true,
         default: ['img/19.avif', 'img/20.avif', 'img/21.avif', 'img/22.avif'],
         type: Array<String>
      }
   },
   setup(props) {
      props.imageUrls, props.title
   }
})
</script>
