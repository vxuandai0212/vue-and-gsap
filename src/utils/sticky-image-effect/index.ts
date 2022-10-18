import { Showcase } from '@/utils/sticky-image-effect/showcase'
import { Slides } from '@/utils/sticky-image-effect/slides'
import { Cursor } from '@/utils/sticky-image-effect/cursor'
export const start = () => {
   const container = document.getElementById('sticky-image-effect-app')
   const cursor = new Cursor(document.querySelector('.cursor'))
   const slidesData = [
      {
         image: 'https://images.unsplash.com/photo-1608265035345-2c692e691b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80',
         title: 'Segovia',
         meta: 'Spain / Castile and León'
      },
      {
         image: 'https://images.unsplash.com/photo-1533281808624-e9b07b4294ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80',
         title: 'Barcelona',
         meta: 'Spain / Catalonia'
      },
      {
         image: 'https://images.unsplash.com/photo-1661868149492-f471e78eebf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1434&q=80',
         title: 'Málaga',
         meta: 'Spain / Andalusia'
      },
      {
         image: 'https://images.unsplash.com/photo-1607006517448-8606ca39df6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
         title: 'Pamplona',
         meta: 'Spain / Navarre'
      },
      {
         image: 'https://images.unsplash.com/photo-1661857519018-e59569789e42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
         title: 'Bilbao',
         meta: 'Spain / Biscay'
      }
   ]

   const slides = new Slides(slidesData)
   const showcase = new Showcase(slidesData, {
      onActiveIndexChange: (activeIndex: any) => {
         slides.onActiveIndexChange(activeIndex)
      },
      onIndexChange: (index: any) => {
         slides.onMove(index)
      },
      onZoomOutStart: ({ activeIndex }: any) => {
         cursor.enter()
         slides.appear()
      },
      onZoomOutFinish: ({ activeIndex }: any) => {},
      onFullscreenStart: ({ activeIndex }: any) => {
         cursor.leave()
         slides.disperse(activeIndex)
      },
      onFullscreenFinish: ({ activeIndex }: any) => {}
   })

   showcase.mount(container)
   slides.mount(container)
   showcase.render()

   window.addEventListener('resize', function () {
      showcase.onResize()
   })

   window.addEventListener('mousemove', function (ev) {
      showcase.onMouseMove(ev)
   })
}
