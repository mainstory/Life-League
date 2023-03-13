// =========== дальние папок
import {
   save,
   get,
   initSwiper,
   getRandomInt,
} from "../addition/index.js"

import {
   siteStart,
   colorYellowItems,
   colorRedItems,
   colorPinkItems,
   colorFioletItems,
   colorBlueItems,
   colorLightBlueItems
} from './index.js'

const mySwiper = initSwiper()

function shop() {

   siteStart()

   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      //# Звук принятия
      if (eventTarget.closest('[data-receiving-btn]')) {
         document.querySelector('[data-receiving]').classList.remove('_active')
         new Audio('audio/buttonclickrelease.mp3').play()

      }

   })

   //# Если уже были давно сгенерированы карточки достать их
   if (document.querySelector('[data-section-shop]')) {
      if (JSON.parse(get('shopSaveItems')).length === 6) {
         const array = JSON.parse(get('shopSaveItems'))
         array.forEach((e) => {
            e.color
            e.title
            e.category
            e.img
            e.price

            let template
            if (e.color === 'yellow') {
               template = `
         <div class="big-card swiper-slide" data-big-card data-card data-card-color="${e.color}">
         <div class="big-card__top" data-card-category>
         ${e.category}
         </div>
         <div class="big-card__bottom">
            <div class="big-card__title" data-card-title>${e.title}</div>
   
   
            <div class="big-card__img" data-card-img>${e.img}</div>
            <div class="big-card__btn" data-card-btn data-card-price="${e.price}">${e.price}</div>
   
         </div>
   
      </div> 
         `
            } else {
               template = `
      <div class="card card--red swiper-slide" data-card data-card-color="${e.color}">
      <div class="card__top" data-card-category>
         ${e.category}
      </div>
      <div class="card__bottom">
         <div class="card__title" data-card-title>${e.title}</div>
         <div class="card__img" data-card-img>${e.img}</div>
         <div class="card__btn" data-card-btn data-card-price="${e.price}">${e.price}</div>
      </div>
   
   </div>
   
      `
            }


            document.querySelector(`[data-shop-zone]`).insertAdjacentHTML('beforeend', template)
            if (e.color === 'yellow') {
               setBox('data-shop-zone')
            }

         })
      }
   }

   //# Генерация случайной карточки при заходе на сайт
   function randomCard(items, zone) {

      if (JSON.parse(get('shopSaveItems')).length !== 6) {

         // если пусто
         // сгенерировать

         let itemsAmount = items.length - 1

         const actualIndex = getRandomInt(0, itemsAmount)

         // }
         let price

         if (items[actualIndex].color === 'yellow') {
            price = 3200
         }
         if (items[actualIndex].color === 'red') {
            price = 1600
         }
         if (items[actualIndex].color === 'pink') {
            price = 800
         }
         if (items[actualIndex].color === 'fiolet') {
            price = 400
         }
         if (items[actualIndex].color === 'blue') {
            price = 100
         }
         if (items[actualIndex].color === 'light-blue') {
            price = 50
         }


         let template
         if (items[actualIndex].color === 'yellow') {
            template = `
            <div class="big-card swiper-slide" data-big-card data-card data-card-color="${items[actualIndex].color}">
            <div class="big-card__top" data-card-category>
            ${items[actualIndex].category}
            </div>
            <div class="big-card__bottom">
               <div class="big-card__title" data-card-title>${items[actualIndex].title}</div>
      
      
               <div class="big-card__img" data-card-img>${items[actualIndex].img}</div>
               <div class="big-card__btn" data-card-btn data-card-price="${price}">${price}</div>
      
            </div>
      
         </div>
            `
         } else {
            template = `
         <div class="card card--red swiper-slide" data-card data-card-color="${items[actualIndex].color}">
         <div class="card__top" data-card-category>
            ${items[actualIndex].category}
         </div>
         <div class="card__bottom">
            <div class="card__title" data-card-title>${items[actualIndex].title}</div>
            <div class="card__img" data-card-img>${items[actualIndex].img}</div>
            <div class="card__btn" data-card-btn data-card-price="${price}">${price}</div>
         </div>
      
      </div>
      
         `
         }

         const pushItems = {
            color: items[actualIndex].color,
            title: items[actualIndex].title,
            category: items[actualIndex].category,
            img: items[actualIndex].img,
            price: price,
         }


         document.querySelector(`[${zone}]`).insertAdjacentHTML('beforeend', template)

         // console.log(5);


         mySwiper.update()

         const array = JSON.parse(get('shopSaveItems'))
         array.push(pushItems)
         save('shopSaveItems', JSON.stringify(array))


      }



   }

   //# Кейс при заходе на сайт
   function setBox(zone) {



      let template = `
      
      <div class="box swiper-slide" data-box>
      <div class="box__top">
         КЕЙС
      </div>
      <div class="box__bottom">
   
   
         <div class="box__img">
            <img src="img/question.svg" alt="">
         </div>
   
   
      </div>
   
      <div class="box__btn" data-box-btn data-card-price="500">500</div>
   
   
   </div>
   
      `

      mySwiper.update()




      document.querySelector(`[${zone}]`).insertAdjacentHTML('beforeend', template)



   }

   //# Расстановка
   if (document.querySelector('[data-section-shop]')) {

      if (JSON.parse(get('shopSaveItems')).length !== 6) {

         randomCard(colorYellowItems, 'data-shop-zone')
         setBox('data-shop-zone')
         randomCard(colorRedItems, 'data-shop-zone')
         randomCard(colorPinkItems, 'data-shop-zone')
         randomCard(colorFioletItems, 'data-shop-zone')
         randomCard(colorBlueItems, 'data-shop-zone')
         randomCard(colorLightBlueItems, 'data-shop-zone')

      }

   }


   if (document.querySelector('[data-section-shop]') || document.querySelector('[data-section-inventory]')) {
      mySwiper.update()
   }


   //# Монеты при заходе на сайт
   if (document.querySelector('[data-shop]')) {
      if (get('myMoney') === null) {
         save('myMoney', '200')
         document.querySelector('[data-my-money]').setAttribute('data-my-money', get('myMoney'))
         document.querySelector('[data-my-money]').innerHTML = get('myMoney')

      } else {
         document.querySelector('[data-my-money]').setAttribute('data-my-money', get('myMoney'))
         document.querySelector('[data-my-money]').innerHTML = get('myMoney')


      }
   }


   //# Покупка карточек
   if (document.querySelector('[data-section-shop]')) {

      document.addEventListener('click', (event) => {
         const eventTarget = event.target

         if (eventTarget.closest('[data-card-btn]')) {

            if (!eventTarget.hasAttribute('data-card-buyed')) {

               new Audio('audio/buttonclickrelease.mp3').play()

               const card = eventTarget.closest('[data-card]')
               const myMoney = get('myMoney')
               const price = Number(card.querySelector('[data-card-price]').getAttribute('data-card-price'))

               if (myMoney >= price) {

                  new Audio('audio/gambling.m4a').play()


                  const newMyMoney = myMoney - price

                  document.querySelector('[data-my-money]').setAttribute('data-my-money', newMyMoney)
                  document.querySelector('[data-my-money]').innerText = newMyMoney

                  const color = card.getAttribute('data-card-color')

                  if (color === 'yellow') {
                     save('buyedYellow', '')

                  }

                  if (color === 'red') {
                     save('buyedRed', '')

                  }

                  if (color === 'pink') {
                     save('buyedPink', '')

                  }

                  if (color === 'fiolet') {
                     save('buyedFiolet', '')

                  }

                  if (color === 'blue') {
                     save('buyedBlue', '')

                  }

                  if (color === 'light-blue') {
                     save('buyedLightBlue', '')

                  }






                  const myPrice = Number(document.querySelector('[data-my-money]').getAttribute('data-my-money'))

                  const category = card.querySelector('[data-card-category]').innerText
                  const title = card.querySelector('[data-card-title]').innerText
                  const img = card.querySelector('[data-card-img]').innerHTML
                  console.log(img);

                  console.log(
                     category,
                     title,
                     price,
                     img,
                     myPrice,
                     color,
                  );


                  if (get('array') === null) {

                     const array = [
                        {
                           category,
                           title,
                           img,
                           color,
                        },
                     ]

                     save('array', JSON.stringify(array))

                  } else {
                     const array = JSON.parse(get('array'))

                     console.log(array);

                     const obj = {
                        category,
                        title,
                        img,
                        color,
                     }
                     console.log(obj);


                     array.push(obj)


                     save('array', JSON.stringify(array))

                  }

                  eventTarget.setAttribute('data-card-buyed', '')
                  eventTarget.innerText = 'Приобретено'


                  const receiving = document.querySelector('[data-receiving]')

                  console.log(receiving);

                  receiving.setAttribute('data-receiving-color', color)

                  receiving.querySelector('[data-receiving-box]').setAttribute('data-card-color', color)

                  receiving.querySelector('[data-receiving-category]').innerText = category
                  receiving.querySelector('[data-receiving-title]').innerText = title

                  receiving.querySelector('[data-receiving-img]').innerHTML = img


                  function a() {

                     receiving.classList.add('_active')

                  }

                  setTimeout(a, 1000)

                  save('myMoney', Number(document.querySelector('[data-my-money]').getAttribute('data-my-money')))

               }

            }
         }

      })

   }

   //# При заходе на сайт показывается что было приобретено
   if (document.querySelector('[data-shop]')) {

      if (get('buyedYellow') !== null) {
         const btn = document.querySelector('[data-card-color="yellow"]').querySelector('[data-card-btn]')
         btn.innerText = 'Приобретено'
         btn.setAttribute('data-card-buyed', '')
      }
      if (get('buyedRed') !== null) {
         const btn = document.querySelector('[data-card-color="red"]').querySelector('[data-card-btn]')
         btn.innerText = 'Приобретено'
         btn.setAttribute('data-card-buyed', '')
      }
      if (get('buyedPink') !== null) {
         const btn = document.querySelector('[data-card-color="pink"]').querySelector('[data-card-btn]')
         btn.innerText = 'Приобретено'
         btn.setAttribute('data-card-buyed', '')
      }
      if (get('buyedFiolet') !== null) {
         const btn = document.querySelector('[data-card-color="fiolet"]').querySelector('[data-card-btn]')
         btn.innerText = 'Приобретено'
         btn.setAttribute('data-card-buyed', '')
      }
      if (get('buyedBlue') !== null) {
         const btn = document.querySelector('[data-card-color="blue"]').querySelector('[data-card-btn]')
         btn.innerText = 'Приобретено'
         btn.setAttribute('data-card-buyed', '')
      }
      if (get('buyedLightBlue') !== null) {
         const btn = document.querySelector('[data-card-color="light-blue"]').querySelector('[data-card-btn]')
         btn.innerText = 'Приобретено'
         btn.setAttribute('data-card-buyed', '')
      }

   }


}


export {
   shop
}




