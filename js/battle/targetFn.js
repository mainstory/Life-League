import {
   save,
   get,
   generateBattleData,
} from "./index.js"

function targetFn() {


   //# Цели
   function target() {

      document.addEventListener('click', (event) => {
         const eventTarget = event.target

         if (eventTarget.closest('[data-set-target]')) {

            new Audio('audio/buttonclickrelease.mp3').play()

            let targetName;
            let targetDifficult;
            targetName = prompt('Название')

            if (targetName === '' || targetName === null) {
               return
            }

            targetDifficult = prompt('Сложность (1-5)', '5')

            if ((targetDifficult === '' || targetDifficult === null)) {
               return
            }
            if (targetDifficult !== '1' && targetDifficult !== '2' && targetDifficult !== '3' && targetDifficult !== '4' && targetDifficult !== '5') {
               return
            }


            document.querySelector('[data-zone-target]').insertAdjacentHTML('afterbegin', `
      <div class="main__targets-target" data-target>
      <div class="main__targets-target-left">
         <div class="main__targets-target-icon" data-icon data-finished="no"></div>
         <div class="main__targets-target-title" data-target-title>${targetName}</div>

      </div>
      <div class="main__targets-target-right">
         <div class="main__targets-target-succes" data-target-succes="${targetDifficult}">+${targetDifficult}</div>
         <div class="main__targets-target-succes-icon"><img src="img/icon.svg" alt=""></div>

      </div>

   </div>
      `)

            save('targetInner', document.querySelector('[data-zone-target]').innerHTML)




            document.querySelector('[data-achievement-name]').innerText = 'ПОСТАВЛЕНО'
            new Audio('audio/achievement.mp3').play()






            setTimeout(() => {
               document.querySelector('[data-achievement]').classList.add('_active')

            }, 300)
            const achievement = document.querySelector('[data-achievement]')
            function removeActual() {

               achievement.classList.remove('_active')

            }
            setTimeout(removeActual, 3000)

         }

      })

      document.addEventListener('click', (event) => {
         const eventTarget = event.target

         if (eventTarget.closest('[data-target-title]')) {
            const rename = prompt('Переименовать на:')
            if (rename === '' || rename === null) {
               return
            }
            eventTarget.innerHTML = rename
            new Audio('audio/buttonclickrelease.mp3').play()
            save('targetInner', document.querySelector('[data-zone-target]').innerHTML)


         }

      })
      document.addEventListener('click', (event) => {
         const eventTarget = event.target

         if (eventTarget.closest('[data-target-succes]')) {
            const rename = prompt('Изменить сложность на: (1-5)')
            if (rename === '' || rename === null) {
               return
            }
            if (rename !== '1' && rename !== '2' && rename !== '3' && rename !== '4' && rename !== '5') {
               return
            }

            eventTarget.innerHTML = `+${rename}`

            eventTarget.setAttribute('data-target-succes', rename)

            new Audio('audio/buttonclickrelease.mp3').play()
            save('targetInner', document.querySelector('[data-zone-target]').innerHTML)


         }

      })

      document.addEventListener('click', (event) => {
         const eventTarget = event.target

         if (eventTarget.hasAttribute('data-target')) {

            if (eventTarget.hasAttribute('data-ready-delete')) {
               document.querySelectorAll('[data-target]').forEach((e) => {
                  e.removeAttribute('data-ready-delete')
               })

               eventTarget.remove()
               new Audio('audio/buttonclickrelease.mp3').play()
               save('targetInner', document.querySelector('[data-zone-target]').innerHTML)



            }


            // const question = confirm('Удалить?')
            // if (question === true) {
            //    eventTarget.remove()
            //    new Audio('audio/buttonclickrelease.mp3').play()
            //    save('targetInner', document.querySelector('[data-zone-target]').innerHTML)
            // }


         }

      })


      document.addEventListener('click', (event) => {
         const eventTarget = event.target

         if (eventTarget.closest('[data-target]')) {


            if (!eventTarget.classList.contains('_active')) {

               // new Audio('audio/buttonclickrelease.mp3').play()
               new Audio('audio/achievement.mp3').play()



               if (eventTarget.classList.contains('_taken')) {
                  eventTarget.classList.remove('_taken')
               } else {
                  document.querySelectorAll('[data-target]').forEach((e) => {
                     if (e === eventTarget) {
                        e.classList.add('_taken')

                     } else {
                        e.classList.remove('_taken')

                     }
                  })
               }

               save('targetInner', document.querySelector('[data-zone-target]').innerHTML)


            }

         }

      })

   }
   target()


   //# Ачивки при выполнении целей
   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-icon]')) {

         if (eventTarget.getAttribute('data-finished') === 'no') {

            new Audio('audio/buttonclickrelease.mp3').play()
            new Audio('audio/goal.mp3').play()

            const addNum = Number(eventTarget.closest('[data-target]').querySelector('[data-target-succes]').getAttribute('data-target-succes'))

            let newSucces = Number(document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max')) + addNum
            document.querySelector('[data-zone-target]').setAttribute('data-actual-point-max', newSucces)


            eventTarget.classList.add('_active')
            eventTarget.setAttribute('data-finished', 'yes')
            eventTarget.closest('[data-target]').classList.add('_active')


            document.querySelector('[data-achievement-name]').innerText = 'ДОСТИГНУТО'
            document.querySelector('[data-achievement-reward]').innerHTML = `+${addNum}`




            setTimeout(() => {
               document.querySelector('[data-achievement]').classList.add('_active')

            }, 300)
            const achievement = document.querySelector('[data-achievement]')
            function removeActual() {

               achievement.classList.remove('_active')
               document.querySelector('[data-achievement-reward]').innerHTML = ''


            }
            setTimeout(removeActual, 3000)

            document.querySelector('._me').querySelector('.main__table-player-succes').innerText = newSucces


            save('targetInner', document.querySelector('[data-zone-target]').innerHTML)

            save('actualPointMax', newSucces)

            let myTeamPlace = Number(get('myTeamPlace'))
            if (myTeamPlace === 1) {

               const def = Number(document.querySelector('.main__score-left').innerText)
               console.log(
                  `${'test'} = ${addNum} + ${def}`
               );
               let test = addNum + def
               document.querySelector('.main__score-left').innerText = test


            } else {

               const def = Number(document.querySelector('.main__score-right').innerText)
               console.log(
                  `${'test'} = ${addNum} + ${def}`
               );
               let test = addNum + def

               document.querySelector('.main__score-right').innerText = test

            }

            save('generateBattleData', document.querySelector('[data-zone]').innerHTML)












            const meValue = Number(document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max'))


            const arr = []

            console.log(`meValue: ${meValue}`);

            document.querySelector('[data-table]').querySelectorAll('[data-actual-point-max]').forEach((e) => {


               arr.push(Number(e.getAttribute('data-actual-point-max')))
            })

            const maxValue = Math.max(...arr)

            console.log(`maxValue: ${maxValue}`);



            if (meValue > maxValue) {

               document.querySelector('[data-table]').querySelectorAll('[data-actual-point-max]').forEach((e) => {
                  e.classList.remove('_active')
               })

               document.querySelector('._me').classList.add('_active')

            }
            if (meValue === maxValue) {
               document.querySelector('._me').classList.add('_active')

            }


         }
      }

   })



   //# Целей всего достигнуто
   document.querySelector('[data-audio-popup]').addEventListener('click', (event) => {

      const elem = get('actualPointMax')

      if (elem === null) {

         //# Целей нету
         document.querySelector('[data-zone-target]').setAttribute('data-actual-point-max', 0)


      } else {

         //# Цели есть
         document.querySelector('[data-zone-target]').setAttribute('data-actual-point-max', get('actualPointMax'))

      }


   })

   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-header-option]')) {
         new Audio('audio/buttonclickrelease.mp3').play()

         document.querySelectorAll('[data-target]').forEach((e) => {
            e.setAttribute('data-ready-delete', '')
         })

      }

   })

}


export {
   targetFn
}