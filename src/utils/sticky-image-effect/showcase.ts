import { GLManager } from '@/utils/sticky-image-effect/gl-manager'
import { spring, parallel } from 'popmotion'
import { Grab } from '@/utils/sticky-image-effect/grab'
import { reach } from '@/utils/sticky-image-effect/reach'

// onFullscreenStart
// onFullscreenFinish
// onZoomOutStart
// onZoomOutFinish
// onAciveIndexChange
// onIndexChange
type ShowcaseIndexType = {
   target: number
   current: number
   initial: number
   scrollSize: number
   active: number
}

type ShowcaseFollowerType = {
   x: number
   y: number
   vx: number
   vy: number
}

export class Showcase {
   GL: any
   data: any
   progress: number
   direction: number
   waveIntensity: number
   options: any
   index: ShowcaseIndexType
   follower: ShowcaseFollowerType
   followerSpring: any
   slidesSpring: any
   grab: Grab
   GLStickPop: any
   textureProgressSpring: any
   slidesPop: any

   constructor(data: any, options: any = {}) {
      this.GL = new GLManager(data)
      this.GL.createPlane()

      this.data = data

      this.progress = 0
      this.direction = 1
      this.waveIntensity = 0

      this.options = options

      this.index = {
         target: 0,
         current: 0,
         initial: 0,
         scrollSize: window.innerHeight / 6,
         active: 0
      }

      this.follower = {
         x: 0,
         y: 0,
         vx: 0,
         vy: 0
      }

      this.followerSpring = null

      this.slidesSpring = null

      // this.slides = new Slides(data);

      this.grab = new Grab({
         onGrabStart: this.onGrabStart.bind(this),
         onGrabMove: this.onGrabMove.bind(this),
         onGrabEnd: this.onGrabEnd.bind(this)
      })
   }

   onGrabStart() {
      if (this.options.onZoomOutStart) {
         this.options.onZoomOutStart({
            activeIndex: this.index.active
         })
      }
      // this.slides.appear();
      this.index.initial = this.index.current

      if (this.GLStickPop) {
         this.GLStickPop.stop()
      }
      this.GL.scheduleLoop()

      const directionSpring = spring({
         from: this.progress === 0 ? 0 : this.direction,
         to: 0,
         mass: 1,
         stiffness: 800,
         damping: 2000
      })
      const progressSpring = spring({
         from: this.progress,
         to: 1,
         mass: 5,
         stiffness: 350,
         damping: 500
      })

      const waveIntensitySpring = spring({
         from: this.waveIntensity,
         to: 0.5,
         mass: 5,
         stiffness: 10,
         damping: 200
      })
      this.GLStickPop = parallel(progressSpring as any, directionSpring as any, waveIntensitySpring as any).start({
         update: (values: any) => {
            if (this.progress !== values[0]) {
            }
            this.progress = values[0]
            this.direction = values[1]
            this.waveIntensity = values[2]

            this.GL.updateStickEffect({
               progress: this.progress,
               direction: this.direction,
               waveIntensity: this.waveIntensity
            })
         },
         complete: () => {
            if (this.options.onZoomOutFinish) {
               this.options.onZoomOutFinish({
                  activeIndex: this.index.active
               })
            }
         }
      })
   }

   onGrabMove(scroll: any) {
      this.index.target = clamp(this.index.initial + scroll.delta / this.index.scrollSize, -this.data.length + 0.51, 0.49)

      const index = clamp(Math.round(-this.index.target), 0, this.data.length - 1)

      if (this.index.active !== index) {
         this.index.active = index
         if (this.options.onActiveIndexChange) {
            this.options.onActiveIndexChange(this.index.active)
         }
         // this.slides.onActiveIndexChange(this.index.active);

         this.GL.updateTexture(index)
         if (this.textureProgressSpring) {
            this.textureProgressSpring.stop()
            this.textureProgressSpring = null
         }

         this.textureProgressSpring = spring({
            from: 0,
            to: 1,
            stiffness: 400,
            damping: 30
         }).start((val: any) => {
            this.GL.updateTexture(null, val)
         })
      }

      if (this.slidesPop) {
         this.slidesPop.stop()
      }
      this.slidesPop = reach({
         from: {
            index: this.index.current
         },
         to: {
            index: this.index.target
         },
         restDelta: 0.001
      }).start({
         update: (val: any) => {
            // this.slides.onMove(index);
            if (this.options.onIndexChange) {
               this.options.onIndexChange(val.index)
            }
            this.index.current = val.index
         },
         complete: (val: any) => {
            if (this.options.onIndexChange) {
               this.options.onIndexChange(val.index)
            }
            this.index.current = val.index
         }
      })
   }

   onGrabEnd() {
      if (this.options.onFullscreenStart) {
         this.options.onFullscreenStart({
            activeIndex: this.index.active
         })
      }
      // this.slides.disperse(this.index.active);

      this.snapCurrentToActiveIndex()

      if (this.GLStickPop) {
         this.GLStickPop.stop()
      }
      const directionSpring = spring({
         from: this.progress === 1 ? 1 : this.direction,
         to: 1,
         mass: 1,
         stiffness: 800,
         damping: 2000
      })
      const progressSpring = spring({
         from: this.progress,
         to: 0,
         mass: 4,
         stiffness: 400,
         damping: 70,
         restDelta: 0.0001
      })
      const waveIntensitySpring = spring({
         from: this.waveIntensity,
         to: 0,
         mass: 0.1,
         stiffness: 800,
         damping: 50
      })

      this.GLStickPop = parallel(progressSpring as any, directionSpring as any, waveIntensitySpring as any).start({
         update: (values: any) => {
            this.progress = values[0]
            this.direction = values[1]
            this.waveIntensity = values[2]
            this.GL.updateStickEffect({
               progress: this.progress,
               direction: this.direction,
               waveIntensity: this.waveIntensity
            })
         },
         complete: () => {
            if (this.options.onFullscreenFinish) {
               this.options.onFullscreenFinish({
                  activeIndex: this.index.active
               })
            }
            this.GL.cancelLoop()
         }
      })
   }

   snapCurrentToActiveIndex() {
      if (this.slidesPop) {
         this.slidesPop.stop()
      }
      this.slidesPop = reach({
         from: {
            index: this.index.current
         },
         to: {
            index: Math.round(this.index.target)
         },
         restDelta: 0.001
      }).start({
         complete: () => {},
         update: (val: any) => {
            // this.slides.onMove(val);
            if (this.options.onIndexChange) {
               this.options.onIndexChange(val.index)
            }
            this.index.current = val.index
         }
      })
   }

   mount(container: any) {
      this.GL.mount(container)
      // this.slides.mount(container);
      // container.appendChild(this.slidesContainer);
   }

   render() {
      this.GL.render()
   }

   onMouseMove(ev: any) {
      if (this.followerSpring) {
         this.followerSpring.stop()
         this.followerSpring = null
         // this.follower.vx = 0;
         // this.follower.vy = 0;
      }

      this.followerSpring = reach({
         from: {
            x: this.follower.x,
            y: this.follower.y
         },
         to: {
            x: ev.clientX,
            y: ev.clientY
         },
         velocity: {
            x: this.follower.vx,
            y: this.follower.vy
         },
         stiffness: 500,
         damping: 50,
         mass: 1
      }).start({
         update: (position: any) => {
            const velocity = {
               x: position.x - this.follower.x,
               y: position.y - this.follower.y
            }
            this.GL.updateRgbEffect({
               position,
               velocity
            })
            this.follower = {
               x: position.x,
               y: position.y,
               vx: velocity.x,
               vy: velocity.y
            }
         },
         complete: () => {
            this.GL.updateRgbEffect({
               position: this.follower,
               velocity: {
                  x: 0,
                  y: 0
               }
            })
            this.follower.vx = 0
            this.follower.vy = 0
         }
      })
      // this.GL.updateRgbEffect({ position, velocity });
   }

   onResize() {
      this.GL.onResize()
   }
}

function clamp(num: number, min: number, max: number) {
   return Math.max(min, Math.min(num, max))
}
