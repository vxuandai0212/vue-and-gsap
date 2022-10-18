<template>
   <main id="menu-to-grid-container">
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
import { start } from '@/utils/menu-to-grid/index'
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
               imageUrls: [
                  'https://images.unsplash.com/photo-1597697984630-3724437043f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
                  'https://images.unsplash.com/photo-1634824597085-e4012c45d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
                  'https://images.unsplash.com/photo-1607616513365-f961039afa25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
               ]
            },
            {
               title: 'Finger Wax',
               imageUrls: [
                  'https://images.unsplash.com/photo-1636237624632-20edd128d7db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
                  'https://images.unsplash.com/photo-1651471669424-947ad395338d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80', 
                  'https://images.unsplash.com/photo-1607073848140-9b90be8c131d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
                  'https://images.unsplash.com/photo-1540544660406-6a69dacb2804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80'
               ]
            },
            {
               title: 'Haunted X',
               imageUrls: [
                  'https://images.unsplash.com/photo-1545303234-bfb7c2db402b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80', 
                  'https://images.unsplash.com/photo-1572988893299-8fcc5164132b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80', 
                  'https://images.unsplash.com/photo-1601836743857-4d1e6da20a32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80', 
                  'https://images.unsplash.com/photo-1607616513103-c75af888e6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
                  'https://images.unsplash.com/photo-1660974572643-59c82fc22f73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80', 
                  'https://images.unsplash.com/photo-1607006517117-60ff91ac8203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
               ]
            },
            {
               title: 'Next Horror',
               imageUrls: [
                  'https://images.unsplash.com/photo-1641359007446-7598640aef34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80', 
                  'https://images.unsplash.com/photo-1607616512887-c67e95b592ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
                  'https://images.unsplash.com/photo-1605516094070-9cf1705ca558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
                  'https://images.unsplash.com/photo-1609716831038-0976e99d4c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80', 
                  'https://images.unsplash.com/photo-1500297726361-1715d90aec00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80'
               ]
            }
         ],
         previewItems: [
            {
               title: "Nobody's Love",
               imageUrls: [
                  'https://images.unsplash.com/photo-1660974572643-59c82fc22f73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80', 
                  'https://images.unsplash.com/photo-1607616513103-c75af888e6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
                  'https://images.unsplash.com/photo-1601836743857-4d1e6da20a32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80', 
                  'https://images.unsplash.com/photo-1572988893299-8fcc5164132b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80'
               ]
            },
            {
               title: 'Good Wings',
               imageUrls: [
                  'https://images.unsplash.com/photo-1607616512887-c67e95b592ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
                  'https://images.unsplash.com/photo-1641359007446-7598640aef34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80', 
                  'https://images.unsplash.com/photo-1607006517117-60ff91ac8203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
               ]
            },
            {
               title: 'Maniac Fly',
               imageUrls: [
                  'https://images.unsplash.com/photo-1540544660406-6a69dacb2804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80', 
                  'https://images.unsplash.com/photo-1607073848140-9b90be8c131d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
               ]
            },
            {
               title: 'Crumble Toe',
               imageUrls: [
                  'https://images.unsplash.com/photo-1651471669424-947ad395338d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80', 
                  'https://images.unsplash.com/photo-1636237624632-20edd128d7db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
                  'https://images.unsplash.com/photo-1607616512887-c67e95b592ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
                  'https://images.unsplash.com/photo-1608265035345-2c692e691b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80', 
                  'https://images.unsplash.com/photo-1530083132269-9a87893794f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
               ]
            },
            {
               title: 'Finger Wax',
               imageUrls: [
                  'https://images.unsplash.com/photo-1605834971676-ae92df689820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', 
                  'https://images.unsplash.com/photo-1551523771-41bb480b5127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80', 
                  'https://images.unsplash.com/photo-1566931476788-47984a25beea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80', 
                  'https://images.unsplash.com/photo-1500297726361-1715d90aec00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80'
               ]
            },
            {
               title: 'Haunted X',
               imageUrls: [
                  'https://images.unsplash.com/photo-1584098180552-52082cd36982?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
                  'https://images.unsplash.com/photo-1609716831038-0976e99d4c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
               ]
            },
            {
               title: 'Next Horror',
               imageUrls: [
                  'https://images.unsplash.com/photo-1565523925028-812f891b0e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
                  'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80', 
                  'https://images.unsplash.com/photo-1493221875746-1203de4f7a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
               ]
            }
         ]
      }
   }
})
</script>
<!-- <style lang="scss" src="@/assets/css/menu-to-grid/base.scss" /> -->
