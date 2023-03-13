import {
   initSwiper,
   save,
   get,
} from "./index.js"
const mySwiper = initSwiper()


function inventory() {

   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-receiving-btn]')) {
         document.querySelector('[data-receiving]').classList.remove('_active')
         new Audio('audio/buttonclickrelease.mp3').play()

      }

   })
   

   if (get('array') !== null) {

      const array = JSON.parse(get('array'))

      array.forEach((e, index) => {

         if (e !== null) {

            console.log(e);


            if (e.color === 'yellow') {
               const template = `

            <div class="big-card swiper-slide" data-big-card data-card data-card-color="${e.color}" data-card-index="${index}">
            <div class="big-card__top" data-card-category>
            ${e.category}
            </div>
            <div class="big-card__bottom">
               <div class="big-card__title" data-card-title>${e.title}</div>


               <div class="big-card__img" data-card-img>${e.img}</div>
               <div class="big-card__btn">ПРИМЕНИТЬ</div>

            </div>

         </div>

            `
               document.querySelector('[data-inventory]').insertAdjacentHTML("afterbegin", template)


            } else {
               const template = `

            <div class="card card--red swiper-slide" data-card data-card-color="${e.color}" data-card-index="${index}">
            <div class="card__top" data-card-category>
               ${e.category}
            </div>
            <div class="card__bottom">
               <div class="card__title" data-card-title>${e.title}</div>
               <div class="card__img" data-card-img>${e.img}</div>
               <div class="card__btn">ПРИМЕНИТЬ</div>
            </div>

         </div>

            `
               document.querySelector('[data-inventory]').insertAdjacentHTML("afterbegin", template)

            }
         }

         mySwiper.update()

      })

   }



   if (document.querySelector('[data-section-inventory]')) {


      document.addEventListener('click', (event) => {
         const eventTarget = event.target

         if (eventTarget.closest('[data-card-category]')) {

            new Audio('audio/buttonclickrelease.mp3').play()


            const myMoney = Number(get('myMoney'))


            const color = eventTarget.closest('[data-card]').getAttribute('data-card-color')
            let x
            if (color === 'yellow') {
               x = 1600
            }
            if (color === 'red') {
               x = 800
            }
            if (color === 'pink') {
               x = 400
            }
            if (color === 'fiolet') {
               x = 200
            }
            if (color === 'blue') {
               x = 100
            }
            if (color === 'light-blue') {
               x = 50
            }


            if (confirm(`Продать за ${x}$ ?`)) {

               const result = myMoney + x

               document.querySelector('[data-my-money]').setAttribute('data-my-money', result)
               // document.querySelector('[data-my-money]').innerHTML = result
               save('myMoney', result)

               document.querySelector('[data-receiving]').querySelector('[data-receiving-title]').innerHTML = x

               eventTarget.closest('[data-card]').remove()

               const index = Number(eventTarget.closest('[data-card]').getAttribute('data-card-index'))
               eventTarget.closest('[data-card]').remove()

               const array = JSON.parse(get('array'))
               delete array[index]

               save('array', JSON.stringify(array))

               new Audio('audio/gambling.m4a').play()

               setTimeout(() => {
                  document.querySelector('[data-receiving]').classList.add('_active')

               }, 1000);

            }


         }

      })


   }


   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('.card__btn') || eventTarget.closest('.big-card__btn')) {

         if (eventTarget.innerText === 'ПРИМЕНИТЬ') {


            const index = Number(eventTarget.closest('[data-card]').getAttribute('data-card-index'))

            const array = JSON.parse(get('array'))
            delete array[index]

            save('array', JSON.stringify(array))


            const card = eventTarget.closest('[data-card]')
            const title = card.querySelector('[data-card-title]').innerText
            const img = card.querySelector('[data-card-img]').innerHTML
            const category = card.querySelector('[data-card-category]').innerText
            const color = card.getAttribute('data-card-color')

            document.querySelector('[data-receiving]').setAttribute('data-receiving-color', color)
            document.querySelector('[data-receiving]').querySelector('[data-card-color]').setAttribute('data-card-color', color)

            document.querySelector('[data-receiving-title]').innerText = title
            document.querySelector('[data-receiving-img]').innerHTML = img
            document.querySelector('[data-receiving-category]').innerText = category

            eventTarget.closest('[data-card]').remove()


            setTimeout(() => {
               document.querySelector('[data-receiving]').classList.add('_active')

            }, 1000);

            new Audio('audio/gambling.m4a').play()
            new Audio('audio/buttonclickrelease.mp3').play()

            mySwiper.update()


         }
      }

   })


}


export { inventory }