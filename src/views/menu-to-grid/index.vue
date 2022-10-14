<template>
   <main>
      <frame />
      <intro />
      <content :menuItems="menuItems" />
      <preview :previewItems="previewItems" />
      <footer />
   </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Frame from '@/views/menu-to-grid/components/Frame.vue'
import Intro from '@/views/menu-to-grid/components/Intro.vue'
import Content from '@/views/menu-to-grid/components/Content.vue'
import Preview from '@/views/menu-to-grid/components/PreviewGroup.vue'
import Footer from '@/views/menu-to-grid/components/Footer.vue'
import { start } from '@/utils/menu-to-grid/index.js'
export default defineComponent({
   components: {
      Frame,
      Intro,
      Content,
      Preview,
      Footer
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
   },
   data() {
      return {
         menuItems: [
            {
               title: "Nobody's Love",
               imageUrls: [
                  'https://images.unsplash.com/photo-1565523925028-812f891b0e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
                  'https://images.unsplash.com/photo-1552039431-11d2a516d0d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
                  'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80', 
                  'https://images.unsplash.com/photo-1535232843222-a40c29436fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
               ]
            },
            {
               title: 'Good Wings',
               imageUrls: [
                  'https://images.unsplash.com/photo-1605516094070-9cf1705ca558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
                  'https://images.unsplash.com/photo-1530083132269-9a87893794f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
                  'https://images.unsplash.com/photo-1546237769-58c2846e87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80', 
                  'https://images.unsplash.com/photo-1562666954-f07b370746a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
                  'https://images.unsplash.com/photo-1493221875746-1203de4f7a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
               ]
            },
            {
               title: 'Maniac Fly',
               imageUrls: [
                  'https://images.unsplash.com/photo-1609716831038-0976e99d4c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80', 
                  'https://images.unsplash.com/photo-1584098180552-52082cd36982?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
                  'https://images.unsplash.com/photo-1500297726361-1715d90aec00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80', 
                  'https://images.unsplash.com/photo-1566931476788-47984a25beea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80', 
                  'https://images.unsplash.com/photo-1551523771-41bb480b5127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80', 
                  'https://images.unsplash.com/photo-1605834971676-ae92df689820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
               ]
            },
            {
               title: 'Crumble Toe',
               imageUrls: ['img/16.avif', 'img/17.avif', 'img/18.avif']
            },
            {
               title: 'Finger Wax',
               imageUrls: ['img/19.avif', 'img/20.avif', 'img/21.avif', 'img/22.avif']
            },
            {
               title: 'Haunted X',
               imageUrls: ['img/23.avif', 'img/24.avif', 'img/25.avif', 'img/26.avif', 'img/27.avif', 'img/28.avif']
            },
            {
               title: 'Next Horror',
               imageUrls: ['img/29.avif', 'img/30.avif', 'https://images.unsplash.com/photo-1605516094070-9cf1705ca558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1609716831038-0976e99d4c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80', 'https://images.unsplash.com/photo-1500297726361-1715d90aec00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80']
            }
         ],
         previewItems: [
            {
               title: "Nobody's Love",
               imageUrls: ['img/27.avif', 'img/26.avif', 'img/25.avif', 'img/24.avif']
            },
            {
               title: 'Good Wings',
               imageUrls: ['img/30.avif', 'img/29.avif', 'img/28.avif']
            },
            {
               title: 'Maniac Fly',
               imageUrls: ['img/22.avif', 'img/21.avif']
            },
            {
               title: 'Crumble Toe',
               imageUrls: ['img/20.avif', 'img/19.avif', 'img/30.avif', 'img/31.avif', 'https://images.unsplash.com/photo-1530083132269-9a87893794f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
            },
            {
               title: 'Finger Wax',
               imageUrls: ['https://images.unsplash.com/photo-1605834971676-ae92df689820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', 'https://images.unsplash.com/photo-1551523771-41bb480b5127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80', 'https://images.unsplash.com/photo-1566931476788-47984a25beea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80', 'https://images.unsplash.com/photo-1500297726361-1715d90aec00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80']
            },
            {
               title: 'Haunted X',
               imageUrls: ['https://images.unsplash.com/photo-1584098180552-52082cd36982?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1609716831038-0976e99d4c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80']
            },
            {
               title: 'Next Horror',
               imageUrls: ['https://images.unsplash.com/photo-1565523925028-812f891b0e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80', 'https://images.unsplash.com/photo-1493221875746-1203de4f7a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
            }
         ]
      }
   }
})
</script>
