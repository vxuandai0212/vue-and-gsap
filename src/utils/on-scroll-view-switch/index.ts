import { preloadImages, isInViewport } from '@/utils/on-scroll-view-switch/utils'
import { Item } from '@/utils/on-scroll-view-switch/item'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { Flip } from 'gsap/Flip'
gsap.registerPlugin(Flip)

type SwitchCtrlType = {
   grid: any
   list: any
}

type HeadingType = {
   el: any
   main: any
}

class ScrollScene {
   items: any = []
   switchCtrl: SwitchCtrlType
   heading: HeadingType
   grid: any
   lenis: any

   constructor() {
      // Item instances (Item is the .content > figure.item)
      ;[...document.querySelectorAll('.item')].forEach((item) => {
         this.items.push(new Item(item))
      })

      // Toggle grid view
      this.switchCtrl = {
         grid: document.querySelector('.switch__button--grid'),
         list: document.querySelector('.switch__button--list')
      }

      // Text element that moves horizontally as we scroll
      this.heading = {
         el: document.querySelector('.heading'),
         main: document.querySelector('.heading .heading__main')
      }

      // Placeholder for the grid items (.item__image). We'll use the gsap FLIP plugin to move the "".item .item__image" inside the grid element
      this.grid = document.querySelector('.grid')

      this.scrollFn = this.scrollFn.bind(this)
   }

   // Initialize Lenis smooth scrolling
   initSmoothScrolling() {
      this.lenis = new Lenis({
         easing: (t) => Math.min(1, 1.00098 - Math.pow(2, -10 * t)),
         smooth: true
      })
      requestAnimationFrame(this.scrollFn)
   }

   scrollFn(time: number) {
      this.lenis.raf(time)
      requestAnimationFrame(this.scrollFn)
   }

   // ScrollTrigger animations for scrolling
   animateOnScroll() {
      for (const item of this.items) {
         gsap.set(item.DOM.imageInner, { transformOrigin: '50% 0%' })

         gsap
            .timeline({
               scrollTrigger: {
                  trigger: item.DOM.el,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: true
               }
            })
            .addLabel('start', 0)
            // scale up the inner image
            .to(
               item.DOM.imageInner,
               {
                  ease: 'none',
                  scaleY: 2.4,
                  scaleX: 1.2,
                  opacity: 0.2 // 0
               },
               'start'
            )
            // translate the title and number
            .to(
               [item.DOM.title, item.DOM.number],
               {
                  ease: 'none',
                  yPercent: -150
               },
               'start'
            )
            // translate the inner title/number (overflow is hidden so they get hidden)
            .to(
               [item.DOM.titleInner, item.DOM.numberInner],
               {
                  scrollTrigger: {
                     trigger: item.DOM.el,
                     start: 'top bottom',
                     end: 'top 20%',
                     scrub: true
                  },
                  ease: 'expo.in',
                  yPercent: -100
               },
               'start'
            )
         /*
        .to(item.DOM.description, {
            scrollTrigger: {
                trigger: item.DOM.el,
                start: 'top bottom',
				end: 'bottom top',
				scrub: true,
            },
			ease: 'none',
            yPercent: 100
		}, 'start')
        */
      }

      // animate the heading element as we scroll (horizontally)
      let windowWidth = window.innerWidth
      gsap.to(this.heading.main, {
         scrollTrigger: {
            start: 0,
            end: 'max',
            scrub: true
         },
         ease: 'none',
         x: () => -this.heading.main.offsetWidth - ((13.25 * windowWidth) / 100 + (25 * windowWidth) / 100 + windowWidth / 100) + windowWidth
      })
   }

   showGrid() {
      document.body.classList.add('grid-open')

      // stop the smooth scrolling
      this.lenis.stop()

      // get the DOM elements that we'll work with
      const DOM = this.getDOMElements()

      // Disable active ScrollTrigger instances
      let Alltrigger = ScrollTrigger.getAll()
      for (let i = 0; i < Alltrigger.length; i++) {
         Alltrigger[i].disable(false)
      }

      // Use gsap flip for the animation
      // save the current state of the images
      const flipstate = Flip.getState(DOM.allImages)
      // put them inside the .grid element
      this.grid.append(...DOM.allImages)

      // gsap stagger properties
      const staggerConfig: any = {
         grid: 'auto',
         // the order goes from the first item inside the viewport
         from: DOM.inViewportItems.length ? this.items.indexOf(DOM.inViewportItems[0]) : 0,
         amount: 0.06
      }

      // Flip it
      Flip.from(flipstate, {
         duration: 0.7,
         ease: 'power3.inOut',
         scale: true,
         stagger: staggerConfig
      })
         // Also reset scales applied to the inner images (items inside the viewport)
         .to(
            DOM.inViewportImagesInner,
            {
               duration: 0.7,
               ease: 'power3.inOut',
               scaleX: 1,
               scaleY: 1,
               opacity: 1,
               stagger: staggerConfig
            },
            0
         )
         // For the items outside of the viewport, simply reset the scales with no animation
         .set(
            DOM.outViewportImagesInner,
            {
               scaleX: 1,
               scaleY: 1,
               opacity: 1
            },
            0
         )
         // hide the titles and numbers inner elments by translating them up
         .to(
            [DOM.inViewportTitlesInner, DOM.inViewportNumbersInner],
            {
               duration: 0.4,
               ease: 'power3.inOut',
               yPercent: -100,
               opacity: 0.2 // 0
            },
            0
         )
         // hide description
         .to(
            DOM.inViewportDescription,
            {
               duration: 0.4,
               ease: 'power3.inOut',
               opacity: 0.2 // 0
            },
            0
         )
         // For all the items outside the viewport, simply set opacity to 0
         .set(
            [DOM.outViewportTitlesInner, DOM.outViewportNumbersInner, DOM.outViewportDescription],
            {
               opacity: 0.2 // 0
            },
            0
         )
         // hide the heading element
         .to(
            this.heading.el,
            {
               duration: 0.7,
               ease: 'power3.inOut',
               yPercent: -100,
               x: -100
            },
            0
         )
   }

   hideGrid() {
      document.body.classList.remove('grid-open')

      // restart the smooth scrolling
      this.lenis.start()

      // get the DOM elements that we'll work with
      const DOM = this.getDOMElements()

      const flipstate = Flip.getState([DOM.allImages, DOM.allImagesInner], { props: 'opacity' })

      DOM.allImages.forEach((image: any, pos: any) => {
         this.items[pos].DOM.imageWrap.appendChild(image)
      })

      // Enable ScrollTrigger instances
      let Alltrigger = ScrollTrigger.getAll()
      for (let i = 0; i < Alltrigger.length; i++) {
         Alltrigger[i].enable(false)
      }

      Flip.from(flipstate, {
         duration: 0.7,
         ease: 'power3.inOut',
         scale: true
      })
         .to(
            [DOM.inViewportTitlesInner, DOM.inViewportNumbersInner, DOM.inViewportDescription],
            {
               duration: 0.4,
               ease: 'power3.inOut',
               startAt: { opacity: 0.2 }, // 0
               opacity: 1
            },
            0
         )
         .set(
            [DOM.outViewportTitlesInner, DOM.outViewportNumbersInner, DOM.outViewportDescription],
            {
               opacity: 1
            },
            0
         )
         .to(
            this.heading.el,
            {
               duration: 0.7,
               ease: 'power3.inOut',
               yPercent: 0,
               x: 0
            },
            0
         )
   }

   // Returns some DOM elements that are needed for showing/hiding the grid
   getDOMElements() {
      const inViewportItems = this.items.filter((item: any) => isInViewport(item.DOM.el))
      const outViewportItems = this.items.filter((n: any) => !inViewportItems.includes(n))

      return {
         allImages: this.items.map((item: any) => item.DOM.image),
         allImagesInner: this.items.map((item: any) => item.DOM.imageInner),
         inViewportItems: inViewportItems,
         outViewportItems: outViewportItems,
         inViewportImagesInner: inViewportItems.map((item: any) => item.DOM.imageInner),
         outViewportImagesInner: outViewportItems.map((item: any) => item.DOM.imageInner),
         inViewportDescription: inViewportItems.map((item: any) => item.DOM.description),
         outViewportDescription: outViewportItems.map((item: any) => item.DOM.description),
         inViewportTitlesInner: inViewportItems.map((item: any) => item.DOM.titleInner),
         outViewportTitlesInner: outViewportItems.map((item: any) => item.DOM.titleInner),
         inViewportNumbersInner: inViewportItems.map((item: any) => item.DOM.numberInner),
         outViewportNumbersInner: outViewportItems.map((item: any) => item.DOM.numberInner)
      }
   }

   // Initialize the events
   initEvents() {
      console.log(this.switchCtrl)
      // show grid ctrl click
      this.switchCtrl.grid.addEventListener('click', () => {
         this.switchCtrl.grid.classList.add('switch__button--hidden', 'switch__button--current')
         this.switchCtrl.list.classList.remove('switch__button--hidden', 'switch__button--current')
         this.showGrid()
      })
      // hide grid ctrl click
      this.switchCtrl.list.addEventListener('click', () => {
         this.switchCtrl.list.classList.add('switch__button--hidden', 'switch__button--current')
         this.switchCtrl.grid.classList.remove('switch__button--hidden', 'switch__button--current')
         this.hideGrid()
      })
   }
}

export const start = () => {
   // Preload images
   preloadImages('.item__image-inner').then(() => {
      const scene = new ScrollScene()
      document.body.classList.remove('loading')
      scene.initSmoothScrolling()
      scene.animateOnScroll()
      scene.initEvents()
   })
}
