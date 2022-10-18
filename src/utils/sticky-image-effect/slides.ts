const createEleWithClass = (tag: any, className: string) => {
   const ele = document.createElement(tag)
   ele.className = className
   return ele
}

export class Slides {
   data: any
   container: any
   currentIdx: number
   slides: any

   constructor(data: any) {
      this.data = data
      this.container = createEleWithClass('div', 'slides')
      this.currentIdx = 0
      this.slides = this.data.map((entry: any, index: any) => {
         const slide = createEleWithClass('div', 'slide')
         const title = createEleWithClass('h1', 'slide-title')
         const meta = createEleWithClass('p', 'slide-meta')
         const more = createEleWithClass('a', 'slide-more')
         more.href = '#'
         slide.classList.add(index !== 0 ? 'next' : 'show-meta')
         meta.innerHTML = entry.meta
         title.innerHTML = entry.title
         more.innerHTML = 'Read more'
         slide.appendChild(meta)
         slide.appendChild(title)
         slide.appendChild(more)
         this.container.appendChild(slide)
         return slide
      })
   }

   mount(container: any) {
      container.appendChild(this.container)
   }

   onActiveIndexChange(activeIndex: any) {
      this.currentIdx = activeIndex
      for (let i = 0; i < this.slides.length; i++) {
         if (activeIndex === i) {
            this.slides[i].classList.remove('next')
            this.slides[i].classList.remove('prev')
         } else {
            if (activeIndex > i) {
               this.slides[i].classList.remove('next')
               this.slides[i].classList.add('prev')
            } else {
               this.slides[i].classList.add('next')
               this.slides[i].classList.remove('prev')
            }
         }
      }
   }

   onMove(indexFloat: any) {
      this.container.style.transform = `translateY(${(indexFloat * 100) / this.slides.length}%)`
   }

   appear() {
      this.container.classList.add('scrolling')
      this.slides[this.currentIdx].classList.remove('show-meta')
   }

   disperse(activeIndex: any) {
      //this.currentIdx = activeIndex;
      this.slides[this.currentIdx].classList.add('show-meta')
      this.container.classList.remove('scrolling')
      for (let index = 0; index < this.data.length; index++) {
         if (index > activeIndex) {
            this.slides[index].classList.add('next')
            this.slides[index].classList.remove('prev')
         } else if (index < activeIndex) {
            this.slides[index].classList.remove('next')
            this.slides[index].classList.add('prev')
         } else {
            this.slides[index].classList.remove('next')
            this.slides[index].classList.remove('prev')
         }
      }
   }
}
