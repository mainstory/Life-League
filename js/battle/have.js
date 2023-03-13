import {
   save,
   get,
   rem,
   getRandomInt,
   consoleLog
} from "./index.js"

function have() {
   consoleLog('//# ================================================================== (5) have()');

   consoleLog('//# ================================================================== (6) генерирует таблицу и создаёт winnerPopup()');


   main()


   //# Механизм
   function main() {


      //# Лвл ботов
      // let blueBotLvl1 = Number(document.querySelector('[data-name-blue-bot-lvl1]').getAttribute('data-name-blue-bot-lvl1'))
      // const nameBlueBotLvl1 = Number(document.querySelector('[data-name-blue-bot-lvl1]').getAttribute('data-name-blue-bot-lvl1'))
      // let blueBotLvl2 = Number(document.querySelector('[data-name-blue-bot-lvl2]').getAttribute('data-name-blue-bot-lvl2'))
      // const nameBlueBotLvl2 = Number(document.querySelector('[data-name-blue-bot-lvl2]').getAttribute('data-name-blue-bot-lvl2'))
      // let blueBotLvl3 = Number(document.querySelector('[data-name-blue-bot-lvl3]').getAttribute('data-name-blue-bot-lvl3'))
      // const nameBlueBotLvl3 = Number(document.querySelector('[data-name-blue-bot-lvl3]').getAttribute('data-name-blue-bot-lvl3'))
      // let blueBotLvl4 = Number(document.querySelector('[data-name-blue-bot-lvl4]').getAttribute('data-name-blue-bot-lvl4'))
      // const nameBlueBotLvl4 = Number(document.querySelector('[data-name-blue-bot-lvl4]').getAttribute('data-name-blue-bot-lvl4'))

      // let orangeBotLvl1 = Number(document.querySelector('[data-name-orange-bot-lvl1]').getAttribute('data-name-orange-bot-lvl1'))
      // const nameOrangeBotLvl1 = Number(document.querySelector('[data-name-orange-bot-lvl1]').getAttribute('data-name-orange-bot-lvl1'))
      // let orangeBotLvl2 = Number(document.querySelector('[data-name-orange-bot-lvl2]').getAttribute('data-name-orange-bot-lvl2'))
      // const nameOrangeBotLvl2 = Number(document.querySelector('[data-name-orange-bot-lvl2]').getAttribute('data-name-orange-bot-lvl2'))
      // let orangeBotLvl3 = Number(document.querySelector('[data-name-orange-bot-lvl3]').getAttribute('data-name-orange-bot-lvl3'))
      // const nameOrangeBotLvl3 = Number(document.querySelector('[data-name-orange-bot-lvl3]').getAttribute('data-name-orange-bot-lvl3'))
      // let orangeBotLvl4 = Number(document.querySelector('[data-name-orange-bot-lvl4]').getAttribute('data-name-orange-bot-lvl4'))
      // const nameOrangeBotLvl4 = Number(document.querySelector('[data-name-orange-bot-lvl4]').getAttribute('data-name-orange-bot-lvl4'))


      let blueBotLvl1 = 0
      let nameBlueBotLvl1 = 0
      let blue1 = 0
      let actualPointBlue1 = 0
      let blueBot1
      if (document.querySelector('[data-name-blue-bot-lvl1]')) {
         blueBotLvl1 = Number(document.querySelector('[data-name-blue-bot-lvl1]').getAttribute('data-name-blue-bot-lvl1'))
         nameBlueBotLvl1 = Number(document.querySelector('[data-name-blue-bot-lvl1]').getAttribute('data-name-blue-bot-lvl1'))
         blue1 = getRandomInt(0, blueBotLvl1)
         actualPointBlue1 = blue1
         blueBot1 = document.querySelector('[data-blue-bot1]').getAttribute('data-blue-bot1')
      }

      let orangeBotLvl1 = 0
      let nameOrangeBotLvl1 = 0
      let orange1 = 0
      let actualPointOrange1 = 0
      let orangeBot1
      if (document.querySelector('[data-name-orange-bot-lvl1]')) {
         orangeBotLvl1 = Number(document.querySelector('[data-name-orange-bot-lvl1]').getAttribute('data-name-orange-bot-lvl1'))
         nameOrangeBotLvl1 = Number(document.querySelector('[data-name-orange-bot-lvl1]').getAttribute('data-name-orange-bot-lvl1'))
         orange1 = getRandomInt(0, orangeBotLvl1)
         orangeBot1 = document.querySelector('[data-orange-bot1]').getAttribute('data-orange-bot1')
         actualPointOrange1 = orange1

      }


      const date = new Date()


      // // сейчас время:
      let nowHour = date.getHours()
      let nowMinute = date.getMinutes()

      // сейчас время:
      // let nowHour = 14
      // let nowMinute = 0


      const allTimingArray = JSON.parse(get('allTimingArray'))


      function sort(orderBot) {

         orderBot = orderBot - 1

         let botRealPoint = 0

         allTimingArray[orderBot].forEach((e) => {

            if (nowHour > e.timingHour) {
               botRealPoint++
            }

            if (nowHour === e.timingHour) {
               if (nowMinute >= e.timingMinute) {
                  botRealPoint++
               }
            }


         })

         return botRealPoint

      }


      // let blue1
      // let blue2
      // let blue3
      // let blue4

      // let orange1
      // let orange2
      // let orange3
      // let orange4

      if (get('theEnd') === null) {

         //# Полученый балл
         // blue1 = sort(1)
         // blue2 = sort(2)
         // blue3 = sort(3)
         // blue4 = sort(4)




         if (Number(get('myTeamPlace')) === 2) {
            blue1 = sort(1)
            actualPointBlue1 = sort(1)
         } else {
            orange1 = sort(2)
            actualPointOrange1 = sort(2)
         }





         // orange1 = sort(6)
         // orange2 = sort(7)
         // orange3 = sort(8)
         // orange4 = sort(9)


      } else {

         const arr = JSON.parse(get('globalPoint'))

         //# Полученый балл
         // blue1 = arr[0]
         // blue2 = arr[1]
         // blue3 = arr[2]
         // blue4 = arr[3]




         if (Number(get('myTeamPlace')) === 2) {
            blue1 = arr[0]
            actualPointBlue1 = arr[0]
         } else {
            orange1 = arr[1]
            actualPointOrange1 = arr[1]
         }




         // orange1 = arr[5]
         // orange2 = arr[6]
         // orange3 = arr[7]
         // orange4 = arr[8]


      }

      //# Ники
      // blueBot1 = document.querySelector('[data-blue-bot1]').getAttribute('data-blue-bot1')
      // const blueBot2 = document.querySelector('[data-blue-bot2]').getAttribute('data-blue-bot2')
      // const blueBot3 = document.querySelector('[data-blue-bot3]').getAttribute('data-blue-bot3')
      // const blueBot4 = document.querySelector('[data-blue-bot4]').getAttribute('data-blue-bot4')
      // orangeBot1 = document.querySelector('[data-orange-bot1]').getAttribute('data-orange-bot1')
      // const orangeBot2 = document.querySelector('[data-orange-bot2]').getAttribute('data-orange-bot2')
      // const orangeBot3 = document.querySelector('[data-orange-bot3]').getAttribute('data-orange-bot3')
      // const orangeBot4 = document.querySelector('[data-orange-bot4]').getAttribute('data-orange-bot4')


      // actualPointBlue1 = blue1
      // let actualPointBlue2 = blue2
      // let actualPointBlue3 = blue3
      // let actualPointBlue4 = blue4
      // actualPointOrange1 = orange1
      // let actualPointOrange2 = orange2
      // let actualPointOrange3 = orange3
      // let actualPointOrange4 = orange4




      let myTeamPlace = Number(document.querySelector('[data-my-team-place]').getAttribute('data-my-team-place'))


      //# Счёт
      const meScore = Number(document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max'))

      let blueScore
      let orangeScore
      if (myTeamPlace === 1) {
         blueScore = actualPointBlue1 + meScore
         orangeScore = actualPointOrange1

      }
      if (myTeamPlace === 2) {
         blueScore = actualPointBlue1
         orangeScore = actualPointOrange1 + meScore
      }

      let myPlaceBlue1 = ''
      let myPlaceBlue2 = ''
      let myPlaceBlue3 = ''
      let myPlaceBlue4 = ''
      let myPlaceBlue5 = ''
      let myPlaceBlue6 = ''

      let myPlaceOrange1 = ''
      let myPlaceOrange2 = ''
      let myPlaceOrange3 = ''
      let myPlaceOrange4 = ''
      let myPlaceOrange5 = ''
      let myPlaceOrange6 = ''

      let x = Number(document.querySelector('[data-my-place]').getAttribute('data-my-place'))

      let colorTeam = ''
      if (myTeamPlace === 2) {
         colorTeam = 'main__table-player--orange'
      }


      let myName = `


<div class="main__table-player ${colorTeam} _me" data-player data-my-team-place="${myTeamPlace}" data-my-place="${x}" data-actual-point-max="${document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max')}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name" data-me>Mainstory</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max')}</div>

</div>

</div>

`
      let ifBlueRemove = `

<div class="main__table-player" data-player data-order="1"  data-name-blue-bot-lvl1="${nameBlueBotLvl1}" data-blue-bot1="${blueBot1}" data-blue1="${blue1}" data-actual-point-blue1="${actualPointBlue1}" data-actual-point-max="${actualPointBlue1}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${blueBot1}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${actualPointBlue1}</div>

</div>

</div>
`
      let ifOrangeRemove = `
<div class="main__table-player main__table-player--orange" data-player data-order="10"  data-name-orange-bot-lvl1="${nameOrangeBotLvl1}" data-orange-bot1="${orangeBot1}" data-orange1="${orange1}" data-actual-point-orange1="${actualPointOrange1}" data-actual-point-max="${actualPointOrange1}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name">${orangeBot1}</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${actualPointOrange1}</div>

</div>

</div>

`

      if (myTeamPlace === 1) {
         //blue

         ifBlueRemove = ''


         // if (1 === x) {
         myPlaceBlue1 = myName
         // }

      }
      if (myTeamPlace === 2) {
         //orange

         ifOrangeRemove = ''


         // if (1 === x) {
         myPlaceOrange1 = myName
         // }

      }


      //# Вывод
      const template = `

<div class="main__score" data-blue-score="${blueScore}" data-orange-score="${orangeScore}">
<div class="main__score-left">${blueScore}</div>
<div class="main__score-middle">00:00</div>
<div class="main__score-right">${orangeScore}</div>

</div>

<div class="main__table" data-table>

   <div class="main__table-blue">

      <div class="main__table-top">

      <div class="main__table-title-team">СИНИЕ</div>
      <div class="main__table-title-succes">УСПЕХИ</div>

      </div>

      ${ifBlueRemove}
      ${myPlaceBlue1}
      


   </div>

   <div class="main__table-orange">

      <div class="main__table-top">

      <div class="main__table-title-team main__table-title-team--orange">ОРАНЖЕВЫЕ</div>
      <div class="main__table-title-succes">УСПЕХИ</div>

      </div>

      ${ifOrangeRemove}
      ${myPlaceOrange1}


   </div>


</div>




`

      document.querySelector('[data-zone]').insertAdjacentHTML('afterbegin', template)

      const me = Number(document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max'))

      const maxValue = Math.max(
         actualPointBlue1,
         actualPointOrange1,
         me
      )


      if (maxValue !== 0) {


         document.querySelectorAll('[data-actual-point-max]').forEach((e) => {
            const checkAtt = Number(e.getAttribute('data-actual-point-max'))
            if (checkAtt === maxValue) {


               e.classList.add('_active')


            }

         })

      }


      if (get('theEnd') !== null) {
         // rem('theEnd')
         if (blueScore > orangeScore) {
            let elemInner = document.querySelector('[data-table]').outerHTML
            let score = document.querySelector('.main__score').outerHTML
            save('winner', elemInner)
            save('score', score)
            save('winnerColor', 'blue')

         }
         if (blueScore < orangeScore) {
            console.log('в мини матче выиграла оранжевая команда');

            let elemInner = document.querySelector('[data-table]').outerHTML
            let score = document.querySelector('.main__score').outerHTML
            save('winner', elemInner)
            save('score', score)
            save('winnerColor', 'orange')

         }
         if (blueScore === orangeScore) {
            console.log('ничья');

            let elemInner = document.querySelector('[data-table]').outerHTML
            let score = document.querySelector('.main__score').outerHTML
            save('winner', elemInner)
            save('score', score)
            save('winnerColor', 'nothing')


         }


         function winnerPopup() {

            document.querySelector('[data-winner-zone]').insertAdjacentHTML('beforeend', get('score'))
            document.querySelector('[data-winner-zone]').insertAdjacentHTML('beforeend', get('winner'))

            if (get('winnerColor') === 'blue') {
               document.querySelector('[data-winner-title]').classList.add(`_${get('winnerColor')}`)
               document.querySelector('.winner__body').classList.add(`_${get('winnerColor')}`)
               document.querySelector('[data-winner-title]').innerText = 'СИНЯЯ КОМАНДА'

            }
            if (get('winnerColor') === 'orange') {
               document.querySelector('[data-winner-title]').classList.add(`_${get('winnerColor')}`)
               document.querySelector('.winner__body').classList.add(`_${get('winnerColor')}`)
               document.querySelector('[data-winner-title]').innerText = 'ОРАНЖЕВАЯ КОМАНДА'

            }
            if (get('winnerColor') === 'nothing') {
               document.querySelector('[data-winner-title]').classList.add(`_${get('winnerColor')}`)
               document.querySelector('.winner__body').classList.add(`_${get('winnerColor')}`)
               document.querySelector('[data-winner-title]').innerText = 'НИЧЬЯ'

            }


            document.querySelector('.wrapper').classList.add('_active')
            document.querySelector('body').classList.add('_scroll-off')

            new Audio('audio/gambling.m4a').play()


         }
         winnerPopup()


         const teamPlace = Number(document.querySelector('[data-my-team-place]').getAttribute('data-my-team-place'))

         let money = 200
         if (get('winnerColor') === 'nothing') {

            money = 250


         } else {

            if (get('winnerColor') === 'blue' && teamPlace === 1) {
               money = 500

               save('doRank', '')
               save('resultBattle', true)

            }
            if (get('winnerColor') === 'orange' && teamPlace === 2) {
               money = 500

               save('doRank', '')
               save('resultBattle', true)

            }

            if (get('winnerColor') === 'blue' && teamPlace !== 1 || get('winnerColor') === 'orange' && teamPlace !== 2) {
               save('doRank', '')
               save('resultBattle', false)
            }

         }

         document.querySelector('[data-receiving]').classList.add('_active')
         document.querySelector('[data-receiving]').querySelector('[data-receiving-title]').innerText = money


         if (get('myMoney') === null) {
            let addNumber = 5000
            save('myMoney', addNumber + money)
         } else {
            save('myMoney', Number(get('myMoney')) + money)
         }
      }





   }

}

export {
   have,
}