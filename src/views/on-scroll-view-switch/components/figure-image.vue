<template>
   <figure class="item">
      <figcaption class="item__caption">
         <span class="item__caption-number oh"
            ><span class="oh__inner">{{ number }}</span></span
         >
         <h2 class="item__caption-title oh">
            <span class="oh__inner">{{ title }}</span>
         </h2>
         <p class="item__caption-description">{{ description }}</p>
      </figcaption>
      <div class="item__image-wrap">
         <div class="item__image"><div class="item__image-inner" :style="`background-image: url(${imageUrl})`"></div></div>
      </div>
   </figure>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
   props: {
      number: {
         type: String,
         readonly: true
      },
      title: {
         type: String,
         readonly: true
      },
      description: {
         type: String,
         readonly: true
      },
      imageUrl: {
         type: String,
         readonly: true
      },
   }
})
</script>
