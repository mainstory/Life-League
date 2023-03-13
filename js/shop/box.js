import {
   save,
   get,
   getRandomInt,
} from "./index.js"

import {
   colorYellowItems,
   colorRedItems,
   colorPinkItems,
   colorFioletItems,
   colorBlueItems,
   colorLightBlueItems
} from './index.js'

function box() {

   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-box-btn]')) {

         const price = Number(eventTarget.getAttribute('data-card-price'))
         const myMoney = Number(document.querySelector('[data-my-money]').getAttribute('data-my-money'))

         if (myMoney >= price) {

            const result = myMoney - price

            save('myMoney', result)
            document.querySelector('[data-my-money]').setAttribute('data-my-money', result)
            document.querySelector('[data-my-money]').innerHTML = result

            new Audio('audio/buttonclickrelease.mp3').play()
            new Audio('audio/gambling.m4a').play()


            let items;
            const rulete = getRandomInt(1, 100)

            console.log(rulete);

            if (rulete === 1) {
               //редкость 1%
               items = colorYellowItems
            }
            if (rulete > 1 && rulete <= 6) {
               //редкость 5%
               items = colorRedItems
            }
            if (rulete > 6 && rulete <= 16) {
               //редкость 10%
               items = colorPinkItems
            }
            if (rulete > 16 && rulete <= 36) {
               //редкость 20%
               items = colorFioletItems
            }
            if (rulete > 36 && rulete <= 46) {
               //редкость 30%
               items = colorBlueItems
            }
            if (rulete > 46) {
               //редкость 54%

               items = colorLightBlueItems
            }


            let itemsAmount = items.length - 1
            console.log(`количество ${itemsAmount}`);

            const actualIndex = getRandomInt(0, itemsAmount)

            let active = ''
            if (items[actualIndex].color === 'yellow') {
               active = 'yellow'
            }
            if (items[actualIndex].color === 'red') {
               active = 'red'
            }
            if (items[actualIndex].color === 'pink') {
               active = 'pink'
            }
            if (items[actualIndex].color === 'fiolet') {
               active = 'fiolet'
            }
            if (items[actualIndex].color === 'blue') {
               active = 'blue'
            }
            if (items[actualIndex].color === 'light-blue') {
               active = 'light-blue'
            }


            const elem = document.querySelector('[data-receiving]')
            // elem.setAttribute('data-card-color', active)
            document.querySelector('[data-receiving-box]').setAttribute('data-card-color', active)
            elem.setAttribute('data-receiving-color', active)
            elem.querySelector('[data-receiving-category]').innerText = items[actualIndex].category
            elem.querySelector('[data-receiving-title]').innerText = items[actualIndex].title
            console.log(items[actualIndex].title);
            elem.querySelector('[data-receiving-img]').innerHTML = items[actualIndex].img

            function a() {

               elem.classList.add('_active')

            }

            setTimeout(a, 1000)

            console.log('====================================================');
            console.log(`актуальный индекс: ${actualIndex}`);
            console.log(items[actualIndex].category);
            console.log(items[actualIndex].title);
            console.log(items[actualIndex].img);
            console.log(items[actualIndex].color);
            console.log('====================================================');



            const category = items[actualIndex].category
            const title = items[actualIndex].title
            const img = items[actualIndex].img
            const color = items[actualIndex].color



            if (get('array') === null) {

               const array = [
                  {
                     category,
                     title,
                     img,
                     color,
                  }
               ]

               save('array', JSON.stringify(array))

            } else {

               const array = JSON.parse(get('array'))

               const obj = {
                  category,
                  title,
                  img,
                  color,
               }

               console.log(array);


               console.log(obj);


               array.push(obj)


               save('array', JSON.stringify(array))
            }


         } else {

            alert('Не достаточно монет')

         }
      }

   })

}


export { box }