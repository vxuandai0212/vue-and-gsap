<template>
   <div>
      <main>
         <div class="frame">
            <div class="frame__title-wrap">
               <h1 class="frame__title">WebGL Sticky Image Effect</h1>
               <p class="frame__tagline">Based on <a href="http://ultranoir.com">Ultranoir's website</a></p>
            </div>
            <div class="frame__links">
               <a href="https://tympanus.net/Development/CrossroadsSlideshow/">Previous demo</a>
               <a href="https://tympanus.net/codrops/?p=39980">Article</a>
               <a href="https://github.com/Anemolo/StickyImageEffect">GitHub</a>
            </div>
            <p class="frame__tip">Click &amp; drag</p>
         </div>
         <div class="content" id="sticky-image-effect"></div>
      </main>
      <div class="cursor">
         <div class="cursor__inner cursor__inner--circle"></div>
         <div class="cursor__inner cursor__inner--dot"></div>
      </div>
   </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
   data() {
      return {
         images: ['']
      }
   }
})
</script>
