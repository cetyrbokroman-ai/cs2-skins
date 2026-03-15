const skins=[

{
name:"AWP | Dragon Lore",
price:"$12000",
rarity:"Covert",
img:"https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_dragonlore_light_large.png",
desc:"Один из самых дорогих и известных скинов."
},

{
name:"M4A4 | Howl",
price:"$6000",
rarity:"Covert",
img:"https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a4_cu_howl_light_large.png",
desc:"Контрабандный скин с уникальной историей."
},

{
name:"AK-47 | Neon Rider",
price:"$120",
rarity:"Classified",
img:"https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_neonrider_light_large.png",
desc:"Неоновый киберпанк стиль."
},

{
name:"AWP | Asiimov",
price:"$140",
rarity:"Classified",
img:"https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_asiimov_light_large.png",
desc:"Футуристический дизайн серии Asiimov."
},

{
name:"AK-47 | Redline",
price:"$30",
rarity:"Restricted",
img:"https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_redline_light_large.png",
desc:"Минималистичный красно-черный стиль."
}

]

const container=document.getElementById("skins")

function loadSkins(list){

container.innerHTML=""

list.forEach((skin,i)=>{

container.innerHTML+=`

<div class="skin" onclick="openSkin(${i})">

<img src="${skin.img}">

<div class="skin-name">${skin.name}</div>

<div class="rarity">${skin.rarity}</div>

<div class="price">${skin.price}</div>

</div>

`

})

}

loadSkins(skins)


function filterRarity(rarity){

if(rarity==="all"){

loadSkins(skins)

return

}

const filtered=skins.filter(s=>s.rarity===rarity)

loadSkins(filtered)

}



function openSkin(index){

const skin=skins[index]

document.getElementById("modal").style.display="flex"

document.getElementById("modalName").innerText=skin.name
document.getElementById("modalDesc").innerText=skin.desc
document.getElementById("modalPrice").innerText="Market price: "+skin.price

init3D()

}



function closeModal(){

document.getElementById("modal").style.display="none"

}



function init3D(){

const viewer=document.getElementById("viewer")

viewer.innerHTML=""

const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(75,viewer.clientWidth/viewer.clientHeight,0.1,1000)

const renderer=new THREE.WebGLRenderer()

renderer.setSize(viewer.clientWidth,viewer.clientHeight)

viewer.appendChild(renderer.domElement)


const geometry=new THREE.BoxGeometry()

const material=new THREE.MeshNormalMaterial()

const cube=new THREE.Mesh(geometry,material)

scene.add(cube)

camera.position.z=2


function animate(){

requestAnimationFrame(animate)

cube.rotation.x+=0.01
cube.rotation.y+=0.01

renderer.render(scene,camera)

}

animate()

}
