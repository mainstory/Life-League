import {
   save,
   get,
   rem,
} from "../addition/index.js"

function rankLobby() {

   function rank() {

      function startDisplay() {

         let rank
         let victories
         let rankImg

         if (get('rank') === null) {
            rank = 'Нет рейтинга'
            victories = 0
            rankImg = '<img src="img/rank/0.png" alt="">'

         } else {
            rank = get('rank')
            victories = get('victories')
            rankImg = get('rankImg')

            console.log(`изначально было: ${rank}`);
            console.log(`изначально было: ${victories}`);
            console.log(`изначально было: ${rankImg}`);
         }

         document.querySelectorAll('[data-rank-decor-item]').forEach((e) => {
            const order = Number(e.getAttribute('data-rank-decor-item'))

            if (order <= victories) {
               e.classList.add('_active')
            }

         })

         //runk
         document.querySelector('[data-rank]').setAttribute('data-rank', rank)
         document.querySelector('[data-rank]').innerText = rank

         //victories
         document.querySelector('[data-victories]').setAttribute('data-victories', victories)
         document.querySelector('[data-victories]').innerText = victories

         //runk img
         document.querySelector('[data-rank-img]').innerHTML = rankImg

      }
      startDisplay()

      function doRank() {


         const resultBattle = get('resultBattle')

         if (resultBattle === 'true') {

            add()

         } else {

            remove()

         }

         function add() {

            console.log(document.querySelector('[data-victories]').getAttribute('data-victories'))

            let victories = Number(document.querySelector('[data-victories]').getAttribute('data-victories'))
            let rank
            const rankNow = document.querySelector('[data-rank]').getAttribute('data-rank')


            let rankImg
            let rankImgNow = document.querySelector('[data-rank-img]').innerHTML



            if (victories === 9) {

               function rankDecor() {

                  document.querySelectorAll('[data-rank-decor-item]').forEach((e) => {

                     e.classList.remove('_active')

                  })

               }
               rankDecor()

               victories = 0

               if (rankNow === 'Нет рейтинга') {
                  rank = 'Бронза I'

                  rankImg = '<img src="img/rank/1.png" alt="">'
               }
               if (rankNow === 'Бронза I') {
                  rank = 'Бронза II'

                  rankImg = '<img src="img/rank/2.png" alt="">'
               }
               if (rankNow === 'Бронза II') {
                  rank = 'Бронза III'

                  rankImg = '<img src="img/rank/3.png" alt="">'
               }

               if (rankNow === 'Бронза III') {
                  rank = 'Серебро I'

                  rankImg = '<img src="img/rank/4.png" alt="">'
               }
               if (rankNow === 'Серебро I') {
                  rank = 'Серебро II'

                  rankImg = '<img src="img/rank/5.png" alt="">'
               }
               if (rankNow === 'Серебро II') {
                  rank = 'Серебро III'

                  rankImg = '<img src="img/rank/6.png" alt="">'
               }

               if (rankNow === 'Серебро III') {
                  rank = 'Золото I'

                  rankImg = '<img src="img/rank/7.png" alt="">'
               }
               if (rankNow === 'Золото I') {
                  rank = 'Золото II'

                  rankImg = '<img src="img/rank/8.png" alt="">'
               }
               if (rankNow === 'Золото II') {
                  rank = 'Золото III'

                  rankImg = '<img src="img/rank/9.png" alt="">'
               }

               if (rankNow === 'Золото III') {
                  rank = 'Платина I'

                  rankImg = '<img src="img/rank/10.png" alt="">'
               }
               if (rankNow === 'Платина I') {
                  rank = 'Платина II'

                  rankImg = '<img src="img/rank/11.png" alt="">'
               }
               if (rankNow === 'Платина II') {
                  rank = 'Платина III'

                  rankImg = '<img src="img/rank/12.png" alt="">'
               }

               if (rankNow === 'Платина III') {
                  rank = 'Даймонд I'

                  rankImg = '<img src="img/rank/13.png" alt="">'
               }
               if (rankNow === 'Даймонд I') {
                  rank = 'Даймонд II'

                  rankImg = '<img src="img/rank/14.png" alt="">'
               }
               if (rankNow === 'Даймонд II') {
                  rank = 'Даймонд III'

                  rankImg = '<img src="img/rank/15.png" alt="">'
               }

               if (rankNow === 'Даймонд III') {
                  rank = 'Чемпион I'

                  rankImg = '<img src="img/rank/16.png" alt="">'
               }
               if (rankNow === 'Чемпион I') {
                  rank = 'Чемпион II'

                  rankImg = '<img src="img/rank/17.png" alt="">'
               }
               if (rankNow === 'Чемпион II') {
                  rank = 'Чемпион III'

                  rankImg = '<img src="img/rank/18.png" alt="">'
               }

               if (rankNow === 'Чемпион III') {
                  rank = 'Великий чемпион'

                  rankImg = '<img src="img/rank/19.png" alt="">'
               }

             


               // victories
               document.querySelector('[data-victories]').setAttribute('data-victories', victories)
               document.querySelector('[data-victories]').innerText = victories


               // runk
               document.querySelector('[data-rank]').setAttribute('data-rank', rank)
               document.querySelector('[data-rank]').innerText = rank

               //runk img
               document.querySelector('[data-rank-img]').innerHTML = rankImg


            } else {
               rank = rankNow
               rankImg = rankImgNow

               victories = victories + 1

               // runk
               document.querySelector('[data-rank]').innerText = rankNow

               // victories
               document.querySelector('[data-victories]').setAttribute('data-victories', victories)
               document.querySelector('[data-victories]').innerText = victories


               function rankDecor() {

                  document.querySelectorAll('[data-rank-decor-item]').forEach((e) => {
                     const order = Number(e.getAttribute('data-rank-decor-item'))

                     if (order <= victories) {
                        e.classList.add('_active')
                     }

                  })

               }
               rankDecor()

               //runk img
               document.querySelector('[data-rank-img]').innerHTML = rankImg


            }

            save('rank', rank)
            save('victories', victories)
            save('rankImg', rankImg)


         }



         function remove() {


            let victories = Number(document.querySelector('[data-victories]').getAttribute('data-victories'))
            // let victories = Number(document.querySelector('[data-victories]').getAttribute('data-victories'))

            let rankImg

            let rank = 'Нет рейтинга'
            const rankNow = document.querySelector('[data-rank]').getAttribute('data-rank')

            let rankImgNow = document.querySelector('[data-rank-img]').innerHTML

            if (victories === 0) {

               // console.log('yes');

               console.log(`сейчас побед равно нулю по этому отнимаем: ${victories}`);



               if (rankNow === 'Нет рейтинга') {
                  rank = 'Нет рейтинга'

                  victories = 0

                  rankImg = '<img src="img/rank/0.png" alt="">'


               }
               if (rankNow === 'Бронза I') {
                  rank = 'Нет рейтинга'

                  victories = 9

                  rankImg = '<img src="img/rank/0.png" alt="">'


               }
               if (rankNow === 'Бронза II') {
                  rank = 'Бронза I'

                  victories = 9

                  rankImg = '<img src="img/rank/1.png" alt="">'


               }
               if (rankNow === 'Бронза III') {
                  rank = 'Бронза II'

                  victories = 9

                  rankImg = '<img src="img/rank/2.png" alt="">'

               }
               //#

               if (rankNow === 'Серебро I') {
                  rank = 'Бронза III'

                  victories = 9

                  rankImg = '<img src="img/rank/3.png" alt="">'

               }
               if (rankNow === 'Серебро II') {
                  rank = 'Серебро I'

                  victories = 9

                  rankImg = '<img src="img/rank/4.png" alt="">'

               }
               if (rankNow === 'Серебро III') {
                  rank = 'Серебро II'

                  victories = 9

                  rankImg = '<img src="img/rank/5.png" alt="">'

               }
               //#

               if (rankNow === 'Золото I') {
                  rank = 'Серебро III'

                  victories = 9

                  rankImg = '<img src="img/rank/6.png" alt="">'

               }
               if (rankNow === 'Золото II') {
                  rank = 'Золото I'

                  victories = 9

                  rankImg = '<img src="img/rank/7.png" alt="">'

               }
               if (rankNow === 'Золото III') {
                  rank = 'Золото II'

                  victories = 9

                  rankImg = '<img src="img/rank/8.png" alt="">'

               }
               //#

               if (rankNow === 'Платина I') {
                  rank = 'Золото III'

                  victories = 9

                  rankImg = '<img src="img/rank/9.png" alt="">'

               }
               if (rankNow === 'Платина II') {
                  rank = 'Платина I'

                  victories = 9

                  rankImg = '<img src="img/rank/10.png" alt="">'

               }
               if (rankNow === 'Платина III') {
                  rank = 'Платина II'

                  victories = 9

                  rankImg = '<img src="img/rank/11.png" alt="">'

               }
               //#

               if (rankNow === 'Даймонд I') {
                  rank = 'Платина III'

                  victories = 9

                  rankImg = '<img src="img/rank/12.png" alt="">'

               }
               if (rankNow === 'Даймонд II') {
                  rank = 'Даймонд I'

                  victories = 9

                  rankImg = '<img src="img/rank/13.png" alt="">'

               }
               if (rankNow === 'Даймонд III') {
                  rank = 'Даймонд II'

                  victories = 9

                  rankImg = '<img src="img/rank/14.png" alt="">'

               }
               //#

               if (rankNow === 'Чемпион I') {
                  rank = 'Даймонд III'

                  victories = 9

                  rankImg = '<img src="img/rank/15.png" alt="">'

               }
               if (rankNow === 'Чемпион II') {
                  rank = 'Чемпион I'

                  victories = 9

                  rankImg = '<img src="img/rank/16.png" alt="">'

               }
               if (rankNow === 'Чемпион III') {
                  rank = 'Чемпион II'

                  victories = 9

                  rankImg = '<img src="img/rank/17.png" alt="">'

               }
               //#

               if (rankNow === 'Великий Чемпион') {
                  rank = 'Чемпион III'

                  victories = 9

                  rankImg = '<img src="img/rank/18.png" alt="">'

               }
               



               // victories
               document.querySelector('[data-victories]').setAttribute('data-victories', victories)
               document.querySelector('[data-victories]').innerText = victories

               // runk
               document.querySelector('[data-rank]').setAttribute('data-rank', rank)
               document.querySelector('[data-rank]').innerText = rank




               function rankDecor() {

                  document.querySelectorAll('[data-rank-decor-item]').forEach((e) => {
                     const order = Number(e.getAttribute('data-rank-decor-item'))

                     if (order <= victories) {
                        e.classList.add('_active')
                     } else {
                        e.classList.remove('_active')

                     }

                  })

               }
               rankDecor()



            } else {

               rank = rankNow
               rankImg = rankImgNow


               // victories
               victories = victories - 1
               document.querySelector('[data-victories]').setAttribute('data-victories', victories)
               document.querySelector('[data-victories]').innerText = victories


               function rankDecor() {

                  document.querySelectorAll('[data-rank-decor-item]').forEach((e) => {
                     const order = Number(e.getAttribute('data-rank-decor-item'))

                     if (order <= victories) {
                        e.classList.add('_active')
                     } else {
                        e.classList.remove('_active')

                     }

                  })

               }
               rankDecor()


            }

            console.log(`сохранился после отнимания ранг: ${rank}`);
            console.log(`сохранился после отнимания победы: ${victories}`);
            console.log(`сохранился после отнимания победы: ${rankImg}`);

            save('rank', rank)
            save('victories', victories)
            save('rankImg', rankImg)

            //runk img
            document.querySelector('[data-rank-img]').innerHTML = rankImg

         }

         rem('doRank')
         rem('resultBattle')

      }

      if (get('doRank') !== null) {
         doRank()
      }

   }
   if (document.querySelector('[data-lobby-section]')) {
      rank()

   }

}



export { rankLobby }




