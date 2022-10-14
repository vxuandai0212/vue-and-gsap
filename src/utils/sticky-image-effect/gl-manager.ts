import * as THREE from 'three'
import { fragment, vertex } from './shaders'

class GLManager {
   totalEntries: number
   loadedEntries: number
   textures: any
   factors: any
   currentIndex: number
   nextIndex: number
   textureProgress: number
   camera: any
   scene: any
   renderer: any
   initialRender: boolean
   time: number
   loopRaf: any
   mesh: any
   container: any

   constructor(data: any) {
      this.totalEntries = data.length
      this.loadedEntries = 0
      const camera: any = new THREE.PerspectiveCamera(45, 1, 0.1, 10000)
      camera.position.z = 5

      const scene = new THREE.Scene()
      camera.lookAt = scene.position

      const renderer = new THREE.WebGLRenderer({
         alpha: true,
         antialias: true
      })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(window.devicePixelRatio)

      this.textures = data.map((entry: any, i: any) =>
         new THREE.TextureLoader().load(entry.image, (texture) => this.calculateAspectRatioFactor(i, texture))
      )
      this.factors = data.map((d: any) => new THREE.Vector2(1, 1))
      this.currentIndex = 0
      this.nextIndex = 0
      this.textureProgress = 0
      this.camera = camera
      this.scene = scene
      this.renderer = renderer
      this.initialRender = false
      this.time = 0
      this.loopRaf = null
   }

   calculateAspectRatioFactor(index: any, texture: THREE.Texture) {
      const plane = this.getPlaneSize()
      const windowRatio = window.innerWidth / window.innerHeight
      const rectRatio = (plane.width / plane.height) * windowRatio
      const imageRatio = texture.image.width / texture.image.height

      let factorX = 1
      let factorY = 1
      if (rectRatio > imageRatio) {
         factorX = 1
         factorY = (1 / rectRatio) * imageRatio
      } else {
         factorX = (1 * rectRatio) / imageRatio
         factorY = 1
      }

      this.factors[index] = new THREE.Vector2(factorX, factorY)
      if (this.currentIndex === index) {
         this.mesh.material.uniforms.u_textureFactor.value = this.factors[index]
         this.mesh.material.uniforms.u_textureFactor.needsUpdate = true
      }
      if (this.nextIndex === index) {
         this.mesh.material.uniforms.u_texture2Factor.value = this.factors[index]
         this.mesh.material.uniforms.u_texture2Factor.needsUpdate = true
      }
      if (this.initialRender) {
         this.loadedEntries++
         if (this.loadedEntries === this.totalEntries) {
            document.body.classList.remove('loading')
         }
         this.render()
      }
   }

   getViewSize() {
      const fovInRadians = (this.camera.fov * Math.PI) / 180
      const viewSize = Math.abs(this.camera.position.z * Math.tan(fovInRadians / 2) * 2)
      return viewSize
   }

   getPlaneSize() {
      const viewSize = this.getViewSize()
      return {
         width: viewSize * 1.5,
         height: viewSize
      }
   }

   createPlane() {
      // Calculate bas of Isoceles triangle(camera)
      const { width, height } = this.getPlaneSize()
      const uniforms: any = {
         u_texture: {
            type: 't',
            value: this.textures[this.currentIndex]
         },
         u_textureFactor: {
            type: 'f',
            value: this.factors[this.currentIndex]
         },
         u_texture2: {
            type: 't',
            value: this.textures[this.nextIndex]
         },
         u_texture2Factor: {
            type: 'f',
            value: this.factors[this.nextIndex]
         },
         u_textureProgress: {
            type: 'f',
            value: this.textureProgress
         },
         u_offset: {
            type: 'f',
            value: 8
         },
         u_progress: {
            type: 'f',
            value: 0
         },
         u_direction: {
            type: 'f',
            value: 1
         },
         u_effect: {
            type: 'f',
            value: 0
         },
         u_time: {
            type: 'f',
            value: this.time
         },
         u_waveIntensity: {
            type: 'f',
            value: 0
         },
         u_resolution: {
            type: 'v2',
            value: new THREE.Vector2(window.innerWidth, window.innerHeight)
         },
         u_rgbPosition: {
            type: 'v2',
            value: new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2)
         },
         u_rgbVelocity: {
            type: 'v2',
            value: new THREE.Vector2(0, 0)
         }
      }

      const segments = 60
      const geometry = new THREE.PlaneGeometry(width, height, segments, segments)
      const material = new THREE.ShaderMaterial({
         uniforms,
         vertexShader: vertex,
         fragmentShader: fragment,
         side: THREE.DoubleSide
      })
      const mesh = new THREE.Mesh(geometry, material)
      this.scene.add(mesh)
      this.mesh = mesh
   }

   updateTexture(newIndex: number, progress: number) {
      let didChange = false
      if (newIndex != null && newIndex !== this.currentIndex) {
         this.currentIndex = this.nextIndex
         this.nextIndex = newIndex
         this.textureProgress = 0
         this.mesh.material.uniforms.u_textureProgress.value = 0
         this.mesh.material.uniforms.u_texture.value = this.textures[this.currentIndex]
         this.mesh.material.uniforms.u_textureFactor.value = this.factors[this.currentIndex]
         this.mesh.material.uniforms.u_texture2.value = this.textures[newIndex]

         this.mesh.material.uniforms.u_texture2Factor.value = this.factors[newIndex]

         didChange = true
      }
      if (progress != null && progress !== this.textureProgress) {
         this.mesh.material.uniforms.u_textureProgress.value = progress
         this.textureProgress = progress
         didChange = true
      }

      if (!this.loopRaf && didChange) {
         this.render()
      }
   }

   updateStickEffect({ progress, direction, waveIntensity }: any) {
      this.mesh.material.uniforms.u_progress.value = progress
      this.mesh.material.uniforms.u_direction.value = direction
      this.mesh.material.uniforms.u_waveIntensity.value = waveIntensity
      // this.render();
   }

   updateRgbEffect({ position, velocity }: any) {
      this.mesh.material.uniforms.u_rgbPosition.value = new THREE.Vector2(position.x, position.y)
      this.mesh.material.uniforms.u_rgbVelocity.value = new THREE.Vector2(velocity.x, velocity.y)
      if (!this.loopRaf) {
         this.render()
      }
   }

   render() {
      if (!this.initialRender) {
         this.initialRender = true
      }
      this.renderer.render(this.scene, this.camera)
   }

   mount(container: Element) {
      this.container = container
      container.appendChild(this.renderer.domElement)
   }

   unmount() {
      this.mesh.material.dispose()
      this.mesh.geometry.dispose()
      this.mesh = null
      this.renderer = null
      this.camera = null
      this.scene = null
      this.container = null
   }

   onResize() {
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.mesh.material.uniforms.u_resolution.value = new THREE.Vector2(window.innerWidth, window.innerHeight)
      // this.camera.aspect = window.inenrWidth / window.innerHeight;
      // this.camera.updateProjectionMatrix();
      for (var i = 0; i < this.textures.length; i++) {
         if (this.textures[i].image) {
            this.calculateAspectRatioFactor(i, this.textures[i])
         }
      }

      this.render()
   }

   scheduleLoop() {
      if (this.loopRaf) return
      this.loop()
   }

   loop() {
      this.render()
      this.time += 0.1
      this.mesh.material.uniforms.u_time.value = this.time
      this.loopRaf = requestAnimationFrame(this.loop)
   }

   cancelLoop() {
      cancelAnimationFrame(this.loopRaf)
      this.loopRaf = null
   }
}

export { GLManager }
