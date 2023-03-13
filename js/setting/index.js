import {
   link,
   save,
   rem
} from "../addition/index.js"

link()


// 

document.addEventListener('click', (event) => {
   const eventTarget = event.target 
   
   if (eventTarget.closest('[data-shop-update-btn]')) {

      new Audio('audio/buttonclickrelease.mp3').play()

      save('shopSaveItems', JSON.stringify([]))

      rem('buyedYellow')
      rem('buyedRed')
      rem('buyedPink')
      rem('buyedFiolet')
      rem('buyedBlue')
      rem('buyedLightBlue')
   }
   
})




