import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera( 75,7, 0.9, 100 );

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, 600)
camera.position.setZ(1.9)


const diamondTexture = new THREE.TextureLoader().load("cover2.jpg")
const diamondMap = new THREE.TextureLoader().load("crystal-map.jpg")
const geometry = new THREE.OctahedronGeometry
const material = new THREE.MeshStandardMaterial({ map: diamondTexture, normalMap: diamondMap})
const diamond = new THREE.Mesh(geometry, material)

scene.add(diamond)

const pointLight = new THREE.PointLight(0xFFFFFF)
pointLight.position.set(5,4,4)

const ambientLight = new THREE.AmbientLight(0xFFFFFF)
scene.add(pointLight, ambientLight)

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50) 
// scene.add(lightHelper, gridHelper )

// const controls = new OrbitControls(camera, renderer.domElement)


function addDiamonds() {
  const miniDiamondTexture = new THREE.TextureLoader().load("cover2.jpg")
  const geometry = new THREE.OctahedronGeometry
  const material = new THREE.MeshStandardMaterial({ map: miniDiamondTexture})
  const miniDiamond = new THREE.Mesh(geometry, material)

  const [x,y,z ]= Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(25))

  miniDiamond.position.set(x,y,z)
  // scene.add(miniDiamond)
}

Array(200).fill().forEach(addDiamonds)

const color2 = new THREE.Color( 0x131516);
const texture = new THREE.TextureLoader().load('ether.jpg')
scene.background = texture




function animate(){
  requestAnimationFrame(animate)

  diamond.rotation.y += 0.01

  // controls.update()

  renderer.render( scene, camera)
}

animate()

