<template>
   <main>
      <div class="frame">
         <div class="frame__title">
            <h1 class="frame__title-main">On-Scroll Animations &amp; View Switch</h1>
            <a aria-label="Back to the article" class="frame__title-back" href="https://tympanus.net/codrops/?p=65117">
               <span class="oh__inner">Back to the article</span>
               <svg width="18px" height="18px" viewBox="0 0 24 24">
                  <path
                     vector-effect="non-scaling-stroke"
                     d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
                  ></path>
               </svg>
            </a>
         </div>
         <a class="frame__prev" href="http://tympanus.net/Development/MenuToGrid/">Previous demo</a>
      </div>
      <div class="heading">
         <h2 class="heading__main">Projects * Insomnia * Projects * Insomnia * Projects * Insomnia * Projects</h2>
         <span class="heading__sub">1984 - 2022</span>
      </div>
      <div class="switch">
         <button class="unbutton switch__button switch__button--grid">
            <svg width="18px" height="18px" viewBox="0 0 45 45">
               <rect x="0" y="0" width="20" height="20"></rect>
               <rect x="25" y="0" width="20" height="20"></rect>
               <rect x="0" y="25" width="20" height="20"></rect>
               <rect x="25" y="25" width="20" height="20"></rect>
            </svg>
         </button>
         <button class="unbutton switch__button switch__button--list switch__button--current">
            <svg width="18px" height="18px" viewBox="0 0 43 43">
               <rect x="0" y="0" width="11" height="11"></rect>
               <rect x="16" y="0" width="25" height="11"></rect>
               <rect x="16" y="16" width="25" height="11"></rect>
               <rect x="16" y="32" width="25" height="11"></rect>
               <rect x="0" y="16" width="11" height="11"></rect>
               <rect x="0" y="32" width="11" height="11"></rect>
            </svg>
         </button>
      </div>
      <div class="content">
         <figure-image
            v-for="item in data"
            :key="item.number"
            :number="item.number"
            :title="item.title"
            :description="item.description"
            :imageUrl="item.imageUrl"
         />
      </div>
      <div class="grid"></div>
   </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import FigureImage from '@/views/on-scroll-view-switch/components/figure-image.vue'
import { start } from '@/utils/on-scroll-view-switch/index'
export default defineComponent({
   components: {
      FigureImage
   },
   mounted() {
      this.supportsCssVars() || alert('Please view this demo in a modern browser that supports CSS Variables.')
      // start()
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
         data: [
            {
               number: '01',
               title: 'Cast a spell',
               description: 'All natural and technological processes Proceed in such a way that the availability Of the remaining energy decreases',
               imageUrl:
                  'https://images.unsplash.com/photo-1605834971676-ae92df689820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            },
            {
               number: '02',
               title: 'Corruption',
               description: 'In all energy exchanges, if no energy Enters or leaves an isolated system The entropy of that system increases',
               imageUrl:
                  'https://images.unsplash.com/photo-1605834971676-ae92df689820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            },
            {
               number: '03',
               title: 'All their lives',
               description: 'All natural and technological processes Proceed in such a way that the availability Of the remaining energy decreases',
               imageUrl:
                  'https://images.unsplash.com/photo-1605834971676-ae92df689820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            },
            {
               number: '04',
               title: "You'll burn in hell",
               description: 'All natural and technological processes Proceed in such a way that the availability Of the remaining energy decreases',
               imageUrl:
                  'https://images.unsplash.com/photo-1605834971676-ae92df689820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            },
            {
               number: '05',
               title: 'What we become',
               description: 'All natural and technological processes Proceed in such a way that the availability Of the remaining energy decreases',
               imageUrl:
                  'https://images.unsplash.com/photo-1605834971676-ae92df689820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            },
            {
               number: '06',
               title: 'Take a bow',
               description: 'All natural and technological processes Proceed in such a way that the availability Of the remaining energy decreases',
               imageUrl:
                  'https://images.unsplash.com/photo-1605834971676-ae92df689820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            },
            {
               number: '07',
               title: 'You bring death',
               description: 'All natural and technological processes Proceed in such a way that the availability Of the remaining energy decreases',
               imageUrl:
                  'https://images.unsplash.com/photo-1605834971676-ae92df689820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            },
            {
               number: '08',
               title: 'You must pay',
               description: 'All natural and technological processes Proceed in such a way that the availability Of the remaining energy decreases',
               imageUrl:
                  'https://images.unsplash.com/photo-1605834971676-ae92df689820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            },
            {
               number: '09',
               title: 'Feed the hex',
               description: 'All natural and technological processes Proceed in such a way that the availability Of the remaining energy decreases',
               imageUrl:
                  'https://images.unsplash.com/photo-1605834971676-ae92df689820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            },
            {
               number: '10',
               title: 'Beg for their lives',
               description: 'All natural and technological processes Proceed in such a way that the availability Of the remaining energy decreases',
               imageUrl:
                  'https://images.unsplash.com/photo-1605834971676-ae92df689820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            },
            {
               number: '11',
               title: 'For all your sins',
               description: 'All natural and technological processes Proceed in such a way that the availability Of the remaining energy decreases',
               imageUrl:
                  'https://images.unsplash.com/photo-1605834971676-ae92df689820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            },
            {
               number: '12',
               title: 'Beholden',
               description: 'All natural and technological processes Proceed in such a way that the availability Of the remaining energy decreases',
               imageUrl:
                  'https://images.unsplash.com/photo-1605834971676-ae92df689820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            }
         ]
      }
   }
})
</script>
<style lang="scss" src="@/assets/css/on-scroll-view-switch/base.scss" />