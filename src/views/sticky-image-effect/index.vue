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
         <div class="content" id="sticky-image-effect-app"></div>
      </main>
      <div class="cursor">
         <div class="cursor__inner cursor__inner--circle"></div>
         <div class="cursor__inner cursor__inner--dot"></div>
      </div>
   </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { start } from '@/utils/sticky-image-effect/index'
export default defineComponent({
   data() {
      return {
         images: [''],
         view: 'sticky-image-effect'
      }
   },
   mounted() {
      this.supportsCssVars() || alert('Please view this demo in a modern browser that supports CSS Variables.')
      start()
   },
   methods: {
      supportsCssVars() {
         let e
         let t = document.createElement('style')
         return (
            (t.innerHTML = 'root: { --tmp-var: bold; }'),
            document.head.appendChild(t),
            (e = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'))),
            t.parentNode?.removeChild(t),
            e
         )
      }
   }
})
</script>
<style lang="scss" src="@/assets/css/sticky-image-effect/base.scss" />
<style lang="scss" src="@/assets/css/sticky-image-effect/styles.scss" />
