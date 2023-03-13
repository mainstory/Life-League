import {
   save,
   get,
   rem,
   generateBattleData,
   consoleLog,
   getRandomInt,
} from "./index.js"





function battle() {



   if (document.querySelector('[data-battle-section]')) {

      document.addEventListener('click', (event) => {

         // let audio = new Audio('audio/battle-background.mp3')
         // audio.volume = 0.3;
         // audio.loop = true;
         // audio.play();

         const eventTarget = event.target

         if (eventTarget.closest('[data-audio-popup]')) {

            consoleLog('//# ==================================== (1) нажатие на попап');

            new Audio('audio/battleStart.m4a').play()


            document.querySelector('[data-startPopup]').classList.add('_active')
            setTimeout(() => {
               document.querySelector('[data-startPopup-text]').innerText = '2'

               setTimeout(() => {
                  document.querySelector('[data-startPopup-text]').innerText = '1'

                  setTimeout(() => {
                     document.querySelector('[data-startPopup-text]').innerText = 'ПОГНАЛИ!'

                     setTimeout(() => {
                        document.querySelector('[data-startPopup]').classList.remove('_active')


                     }, 1000)


                  }, 1000)

               }, 1000)

            }, 1000)

            // document.querySelector('[data-startPopup]').classList.remove('_active')

            document.querySelector('[data-audio-popup]').classList.add('_hidden')


            if (get('generateBattleData') === null) {

               consoleLog('//# ==================================== (2) если нету данных нулевой таблицы');
               generateBattleData()
               console.log(`generateBattleData()`);


               const zone = document.querySelector('[data-zone]').innerHTML
               save('generateBattleData', zone)


            } else {

               consoleLog('//# ==================================== (2) если есть данные нулевой таблицы');

               consoleLog('//# ==================================== (3) нарисовать таблицу из Local Storage');

               document.querySelector('[data-zone]').innerHTML = get('generateBattleData')
               document.querySelector('[data-table]').classList.add('_hidden')
               document.querySelector('.main__score').classList.add('_hidden')

               generateBattleData()
               console.log(`generateBattleData()`);



            }

            const date = new Date

            let startHour
            let startMinute

            // сейчас время:
            let nowHour
            let nowMinute

            // сейчас день:
            let day

            consoleLog('//# ================================================================== (2) создаёт данные для таймера');

            if (document.querySelector('[data-battle-section]')) {

               function getDadaStartMatch() {

                  // cfg

                  if (get('startHour') === null) {
                     consoleLog('//# ================================================================== (3) если впервые зашел');
                     consoleLog('//# ================================================================== (4) взять глобальное время в данный момент когда был поставлен таймер');


                     // таймер повставлен в:
                     startHour = date.getHours()
                     startMinute = date.getMinutes()
                     // startHour = 17
                     // startMinute = 13

                     save('startHour', startHour)
                     save('startMinute', startMinute)

                  } else {
                     consoleLog('//# ================================================================== (3) если в Local Storage уже есть данные');
                     consoleLog('//# ================================================================== (4) взять эти данные');

                     // таймер повставлен в:
                     startHour = Number(get('startHour'))
                     startMinute = Number(get('startMinute'))

                     // таймер повставлен в:
                     // startHour = 0
                     // startMinute = 0

                  }

                  // сейчас время:
                  nowHour = date.getHours()
                  // nowHour = 8
                  nowMinute = date.getMinutes()

                  // сейчас время:
                  // nowHour = 2
                  // nowMinute = 0

                  // сейчас день:
                  day = 5



               }
               getDadaStartMatch()


            }


            function generateDataTimer() {


               function strStart() {

                  let str_startHour
                  let str_startMinute

                  if (startHour < 10) {
                     str_startHour = `0${startHour}`
                  } else {
                     str_startHour = startHour
                  }

                  if (startMinute < 10) {
                     str_startMinute = `0${startMinute}`
                  } else {
                     str_startMinute = startMinute
                  }

                  consoleLog(`=== начало: ${str_startHour}:${str_startMinute}`);

               }
               strStart()

               let mtn_nowHour = nowHour

               function mtnNexDay() {

                  if (mtn_nowHour === 0 && startHour === 22) {
                     mtn_nowHour = 24
                  }
                  if (mtn_nowHour === 1 && startHour === 22) {
                     mtn_nowHour = 25
                  }
                  if (mtn_nowHour === 2 && startHour === 22) {
                     mtn_nowHour = 26
                  }

                  if (mtn_nowHour === 0 && startHour === 23) {
                     mtn_nowHour = 24
                  }
                  if (mtn_nowHour === 1 && startHour === 23) {
                     mtn_nowHour = 25
                  }
                  if (mtn_nowHour === 2 && startHour === 23) {
                     mtn_nowHour = 26
                  }

               }
               mtnNexDay()

               function strNow() {

                  let str_nowHours = nowHour
                  let str_nowMinute = nowMinute

                  if (str_nowHours < 10) {
                     str_nowHours = `0${str_nowHours}`
                  }

                  if (str_nowMinute < 10) {
                     str_nowMinute = `0${str_nowMinute}`
                  }

                  consoleLog(`сейчас: ${str_nowHours}:${str_nowMinute}`);

               }
               strNow()

               let mtn_hourAdd = startHour + 3

               function strLeft() {

                  let check


                  let timerHour
                  if (startMinute !== 0) {

                     timerHour = mtn_hourAdd - nowHour

                     if (timerHour < 0) {
                        timerHour = -timerHour
                        timerHour = 24 - timerHour
                     }

                  } else {


                     let addNumber = mtn_hourAdd - 24

                     // основная формула, вычисляет сколько осталось часов
                     timerHour = mtn_hourAdd - mtn_nowHour


                     if (startHour === 22 || startHour === 23) {

                        timerHour = (24 - mtn_nowHour) + addNumber

                     }

                     if (nowMinute !== 0) {
                        timerHour = timerHour - 1
                     }

                  }


                  let mtn_nowMinute = nowMinute

                  //!important
                  if (startMinute !== 0) {

                     mtn_nowMinute = startMinute - nowMinute

                     if (mtn_nowMinute < 0) {

                        //important
                        mtn_nowMinute = -mtn_nowMinute
                        mtn_nowMinute = 60 - mtn_nowMinute

                        timerHour = timerHour - 1

                     }

                  } else {

                     mtn_nowMinute = 60 - mtn_nowMinute
                     if (mtn_nowMinute === 60) {
                        mtn_nowMinute = 0
                     }

                  }


                  if (timerHour === 0 && nowMinute === 0) {
                     consoleLog('таймер завершен');

                     check = false

                     save('theEnd', '')
                     generateBattleData()
                     console.log(`generateBattleData()`);


                     return check

                  }

                  if (timerHour < 0 || timerHour > 3) {

                     consoleLog('таймер завершен');

                     check = false

                     rem('startHour')
                     rem('startMinute')

                     save('theEnd', '')
                     generateBattleData()
                     console.log(`generateBattleData()`);




                     return check


                  } else {

                     let str_timerHour
                     let mtn_str_nowMinute = mtn_nowMinute

                     if (timerHour < 10) {
                        str_timerHour = `0${timerHour}`
                     }

                     if (mtn_str_nowMinute < 10) {
                        mtn_str_nowMinute = `0${mtn_str_nowMinute}`
                     }

                     consoleLog(`осталось: ${str_timerHour}:${mtn_str_nowMinute}`);
                     document.querySelector('.main__score-middle').innerText = `${str_timerHour}:${mtn_str_nowMinute}`

                     check = true
                     consoleLog(check);

                     return [timerHour, mtn_nowMinute, check]

                  }

               }

               let mtn_str_hourAdd = mtn_hourAdd
               let str_startMinute = startMinute


               function strEnd() {



                  if (get('notFirstNewFn') === null) {

                     save('notFirstNewFn', '')


                     function newFn() {

                        let index = 0

                        const arr = JSON.parse(get('globalPoint'))

                        const allTimingArray = []

                        for (let i = 0; i < 2; i++) {

                           const timingArray = []

                           for (let i = 0; i < arr[index]; i++) {

                              let timingHour = getRandomInt(startHour, (mtn_hourAdd + 1))
                              let timingMinute = 0

                              if (timingHour === mtn_hourAdd) {
                              } else {

                                 if (timingHour === startHour) {
                                    timingMinute = getRandomInt(startMinute, (59 + 1))

                                 } else {
                                    timingMinute = getRandomInt(0, (59 + 1))

                                 }
                              }

                              const timingObj = {
                                 'timingHour': timingHour,
                                 'timingMinute': timingMinute,
                              }

                              timingArray.push(timingObj)


                           }

                           allTimingArray.push(timingArray)

                           index++

                        }

                        console.log(allTimingArray);

                        save('allTimingArray', JSON.stringify(allTimingArray))

                     }
                     newFn()
                  }




                  if (mtn_hourAdd < 10) {
                     mtn_str_hourAdd = `0${mtn_hourAdd}`
                  }
                  if (mtn_hourAdd === 24) {
                     mtn_str_hourAdd = '00'
                  }
                  if (mtn_hourAdd === 25) {
                     mtn_str_hourAdd = '01'
                  }
                  if (mtn_hourAdd === 26) {
                     mtn_str_hourAdd = '02'
                  }

                  if (str_startMinute < 10) {
                     str_startMinute = `0${str_startMinute}`
                  }

                  consoleLog(`=== конец: ${mtn_str_hourAdd}:${str_startMinute}`);


               }
               strEnd()

               const check = strLeft()

               if (check) {
                  consoleLog('//# ================================================================== (6-7) если время ещё идёт');

                  // здесь запуск таймера, думаю поставить условие
                  const [timerHour, mtn_nowMinute] = strLeft()
                  startTimer(timerHour, mtn_nowMinute)
               } else {
                  consoleLog('//# ================================================================== (6-7) если время вышло');

                  if (get('theEnd') === null) {

                     save('theEnd', '')
                     generateBattleData()
                     console.log(`generateBattleData()`);

                  }



               }


            }
            generateDataTimer()


            function startTimer(hour, minute) {
               consoleLog('//# ================================================================== (8) запустить таймер');


               if (minute === 0) {
                  hour = hour - 1
               }

               if (minute === 0) {
                  minute = 60
               }

               if (hour < 0) {
                  consoleLog('END');
                  save('theEnd', '')

                  generateBattleData()
                  console.log(`generateBattleData()`);

                  rem('startHour')
                  rem('startMinute')
               } else {
                  timer()
               }

               function timer() {

                  function linkTimer() {

                     let modernHour = ''
                     if (hour < 10) {
                        modernHour = `0`
                     }

                     let modernMinute = ''
                     if (minute < 11) {
                        modernMinute = `0`
                     }

                     minute--
                     const elem = document.querySelector('.main__score-middle')
                     elem.innerText = `${modernHour}${hour}:${modernMinute}${minute}`

                     if (minute <= 0) {
                        hour--
                        minute = 60
                     }

                     if (hour === -1) {
                        if (minute === 60) {
                           clearInterval(id)
                           consoleLog('END');
                           save('theEnd', '')

                           generateBattleData()
                           console.log(`generateBattleData()`);

                           rem('startHour')
                           rem('startMinute')
                        }
                     }

                  }


                  let id = setInterval(linkTimer, 60000)

               }


            }

            //# Находит меня и добавляет _me
            if (document.querySelector('[data-battle-section]')) {
               document.querySelectorAll('[data-me]').forEach((e) => {
                  e.closest('[data-player]').classList.add('_me')
               })
            }


            if (get('targetInner') !== null) {
               document.querySelector('[data-zone-target]').innerHTML = get('targetInner')
            }



         }

      })


      if (document.querySelector('[data-exit]')) {

         document.addEventListener('click', (event) => {
            const eventTarget = event.target

            if (eventTarget.closest('[data-exit]')) {
               rem('winner')
               rem('winnerColor')
               rem('score')
               rem('generateBattleData')
               rem('actualPointMax')
               rem('allTimingArray')
               rem('notFirst')
               rem('theEnd')
               rem('notFirstNewFn')


               rem('targetInner')
               // rem('meSucces')


            }

         })

      }


      document.addEventListener('click', (event) => {
         const eventTarget = event.target

         if (eventTarget.closest('[data-receiving-btn]')) {
            document.querySelector('[data-receiving]').classList.remove('_active')
            new Audio('audio/buttonclickrelease.mp3').play()

         }

      })




   }


}


export {
   battle
}


