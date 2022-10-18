import imagesLoaded from 'imagesloaded'

const body = document.body
export const preloader = (selector: any) => {
   return new Promise<void>((resolve) => {
      const imgwrap: any = document.createElement('div')
      imgwrap.style.visibility = 'hidden'
      body.appendChild(imgwrap)

      ;[...document.querySelectorAll(selector)].forEach((el) => {
         const imgEl: any = document.createElement('img')
         imgEl.style.width = 0
         imgEl.src = el.getAttributeNS('http://www.w3.org/1999/xlink', 'href')
         imgEl.className = 'preload'
         imgwrap.appendChild(imgEl)
      })

      imagesLoaded(document.querySelectorAll('.preload'), () => {
         imgwrap.parentNode.removeChild(imgwrap)
         body.classList.remove('loading')
         resolve()
      })
   })
}
