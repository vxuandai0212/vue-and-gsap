<template>
   <div class="cell__img">
      <div class="cell__img-inner" :style="`background-image: url(${imageUrl})`"></div>
   </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
   props: {
      imageUrl: {
         readonly: true,
         default: "img/6.avif",
         type: String
      }
   },
   setup(props) {
      props.imageUrl
   }
})
</script>
