<template>
   <div class="preview__item">
      <h2 class="preview__item-title oh"><span class="oh__inner">{{ title }}</span></h2>
      <div class="grid">
         <div class="cell__img" v-for="(item, index) in imageUrls" :key="index">
            <div class="cell__img-inner" :style="`background-image: url(${item})`"></div>
         </div>
      </div>
   </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
   props: {
      title: {
         readonly: true,
         default: "Nobody's Love",
         type: String
      },
      imageUrls: {
         readonly: true,
         default: ['img/27.avif', 'img/26.avif', 'img/25.avif', 'img/24.avif']
      }
   },
   setup(props) {
      props.title, props.imageUrls
   }
})
</script>