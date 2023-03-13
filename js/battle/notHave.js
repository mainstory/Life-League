import {
   save,
   get,
   getRandomInt,
} from "./index.js"


function notHave() {
   console.log('//# ================================================================== (5) notHave()');

   console.log('//# ================================================================== (6) генерирует таблицу и сейвит в Local Storage');

   console.log('PPPPPPPPPP');

   //# Генератор ников
   const names = [
      'Maggotta',
      'HoleyMole',
      'PrincePle',
      'CatInHat',
      'Myopia',

      'Redshock',
      'Willowisp',
      'BeardDemon',
      'Hypophrenia',
      'SandySun',

      'DriveTime',
      'Moonlighter',
      'MarcAntony',
      'Trilemma',
      'Safflower',

      'CrystalRage',
      'HodgePodge',
      'MorningDawning',
      'NarrowVictory',
      'RiseUp',
   ]
   let actualElems = []
   let amount = 10

   // new
   if (actualElems.length) {

   } else {
      const x = getRandomInt(0, 20)
      const name = names[x]
      actualElems.push(name)
   }

   do {

      const x = getRandomInt(0, 20)
      const name = names[x]

      let check = 'start'

      actualElems.forEach((actualElem) => {
         if (actualElem === name) {
            check = 'stop'
         }
      })

      if (check === 'start') {

         actualElems.push(name)
      }
      if (check === 'stop') {
      }



   } while (actualElems.length < amount)



   //# Вводные данные
   let lvl
   if (get('rank') === null) {

      lvl = 10


   } else {

      let rank = get('rank')


      if (rank === 'Нет рейтинга') {
         lvl = 10

      }

      if (rank === 'Бронза I') {
         lvl = 11

      }

      if (rank === 'Бронза II') {
         lvl = 12

      }

      if (rank === 'Бронза III') {
         lvl = 13

      }
      if (rank === 'Серебро I') {
         lvl = 14

      }

      if (rank === 'Серебро II') {
         lvl = 15

      }

      if (rank === 'Серебро III') {
         lvl = 16

      }
      if (rank === 'Золото I') {
         lvl = 17

      }

      if (rank === 'Золото II') {
         lvl = 18

      }

      if (rank === 'Золото III') {
         lvl = 19

      }
      if (rank === 'Платина I') {
         lvl = 20

      }

      if (rank === 'Платина II') {
         lvl = 21

      }

      if (rank === 'Платина III') {
         lvl = 22

      }
      if (rank === 'Даймонд I') {
         lvl = 23

      }

      if (rank === 'Даймонд II') {
         lvl = 24

      }

      if (rank === 'Даймонд III') {
         lvl = 25

      }
      if (rank === 'Чемпион I') {
         lvl = 26

      }

      if (rank === 'Чемпион II') {
         lvl = 27

      }

      if (rank === 'Чемпион III') {
         lvl = 28

      }
      if (rank === 'Великий чемпион III') {
         lvl = 29

      }


   }

   console.log(`rank me-lvl: ${lvl}`);
   save('lvlCheck', lvl)

   lvl = lvl + 1

   main(lvl)

   //# Механизм
   function main(lvl) {

      //# Лвл ботов
      let blueBotLvl1 = lvl
      const nameBlueBotLvl1 = blueBotLvl1

      let blueBotLvl2 = lvl
      const nameBlueBotLvl2 = blueBotLvl2

      let blueBotLvl3 = lvl
      const nameBlueBotLvl3 = blueBotLvl3


      let blueBotLvl4 = lvl
      const nameBlueBotLvl4 = blueBotLvl4


      let blueBotLvl5 = lvl
      const nameBlueBotLvl5 = blueBotLvl5


      let orangeBotLvl1 = lvl
      const nameOrangeBotLvl1 = orangeBotLvl1


      let orangeBotLvl2 = lvl
      const nameOrangeBotLvl2 = orangeBotLvl2


      let orangeBotLvl3 = lvl
      const nameOrangeBotLvl3 = orangeBotLvl3


      let orangeBotLvl4 = lvl
      const nameOrangeBotLvl4 = orangeBotLvl4


      let orangeBotLvl5 = lvl
      const nameOrangeBotLvl5 = orangeBotLvl5


      //# Полученый балл
      let blue1 = getRandomInt(1, blueBotLvl1)
      let blue2 = getRandomInt(1, blueBotLvl2)
      let blue3 = getRandomInt(1, blueBotLvl3)
      let blue4 = getRandomInt(1, blueBotLvl4)
      let blue5 = getRandomInt(1, blueBotLvl5)
      let orange1 = getRandomInt(1, orangeBotLvl1)
      let orange2 = getRandomInt(1, orangeBotLvl2)
      let orange3 = getRandomInt(1, orangeBotLvl3)
      let orange4 = getRandomInt(1, orangeBotLvl4)
      let orange5 = getRandomInt(1, orangeBotLvl5)

      const globalPoint = [
         blue1,
         

         orange1,
        
      ]
      save('globalPoint', JSON.stringify(globalPoint))

      //# Ники
      const blueBot1 = actualElems[0]
      const blueBot2 = actualElems[1]
      const blueBot3 = actualElems[2]
      const blueBot4 = actualElems[3]
      const blueBot5 = actualElems[4]
      const orangeBot1 = actualElems[5]
      const orangeBot2 = actualElems[6]
      const orangeBot3 = actualElems[7]
      const orangeBot4 = actualElems[8]
      const orangeBot5 = actualElems[9]

      let actualPointBlue1 = blue1
      let actualPointBlue2 = blue2
      let actualPointBlue3 = blue3
      let actualPointBlue4 = blue4
      let actualPointBlue5 = blue5
      let actualPointOrange1 = orange1
      let actualPointOrange2 = orange2
      let actualPointOrange3 = orange3
      let actualPointOrange4 = orange4
      let actualPointOrange5 = orange5

      

      let myTeamPlace = getRandomInt(1, 3)
      save('myTeamPlace', myTeamPlace)

      //# Счёт
      const meScore = Number(document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max'))
      let blueScore
      let orangeScore
      if (myTeamPlace === 1) {
         blueScore = blue1 + blue2 + blue3 + blue4 + meScore
         orangeScore = orange1 + orange2 + orange3 + orange4 + orange5
      }
      if (myTeamPlace === 2) {
         blueScore = blue1 + blue2 + blue3 + blue4 + blue5
         orangeScore = orange1 + orange2 + orange3 + orange4 + meScore
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

      function reset() {

         // ============ zeroing
         blueScore = 0
         orangeScore = 0

         blue1 = 0
         blue2 = 0
         blue3 = 0
         blue4 = 0
         blue5 = 0

         orange1 = 0
         orange2 = 0
         orange3 = 0
         orange4 = 0
         orange5 = 0

         actualPointBlue1 = 0
         actualPointBlue2 = 0
         actualPointBlue3 = 0
         actualPointBlue4 = 0
         actualPointBlue5 = 0

         actualPointOrange1 = 0
         actualPointOrange2 = 0
         actualPointOrange3 = 0
         actualPointOrange4 = 0
         actualPointOrange5 = 0

      }
      reset()


      let x = getRandomInt(1, 7)

      let ifBlueRemove = `
      <div class="main__table-player" data-player data-name-blue-bot-lvl1="${nameBlueBotLvl1}" data-blue-bot1="${blueBot1}" data-blue1="${blue1}" data-actual-point-blue1="${actualPointBlue1}" data-actual-point-max="${actualPointBlue1}">
      <div class="main__table-player-left">
      <div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
      <div class="main__table-player-name">${blueBot1}</div>

      </div>
      <div class="main__table-player-right">
      <div class="main__table-player-succes">${blue1}</div>

      </div>

      </div>
`

      let ifOrangeRemove = `
      <div class="main__table-player main__table-player--orange" data-player data-name-orange-bot-lvl1="${nameOrangeBotLvl1}" data-orange-bot1="${orangeBot1}" data-orange1="${orange1}" data-actual-point-orange1="${actualPointOrange1}" data-actual-point-max="${actualPointOrange1}">
      <div class="main__table-player-left">
      <div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
      <div class="main__table-player-name">${orangeBot1}</div>

      </div>
      <div class="main__table-player-right">
      <div class="main__table-player-succes">${orange1}</div>

      </div>

      </div>
`



      let colorTeam = ''
      if (myTeamPlace === 2) {
         colorTeam = 'main__table-player--orange'
      }

      let myName = `
<div class="main__table-player ${colorTeam}" data-player data-my-team-place="${myTeamPlace}" data-my-place="${x}" data-actual-point-max="${document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max')}">
<div class="main__table-player-left">
<div class="main__table-player-avatar"><img src="img/quin.svg" alt=""></div>
<div class="main__table-player-name" data-me>Mainstory</div>

</div>
<div class="main__table-player-right">
<div class="main__table-player-succes">${document.querySelector('[data-zone-target]').getAttribute('data-actual-point-max')}</div>

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


   }



}


export {
   notHave
}