import {
   have,
   notHave,
   save,
   get,
   consoleLog
} from "./index.js"


function generateBattleData() {

   consoleLog('//# ================================================================== (3) запустить generateBattleData()');



   // Проверка первый ли заход на сайт
   const status = get('notFirst')

   if (status === null) {

      save('notFirst', '')

      consoleLog('//# ================================================================== (4) первый');
      notHave()


   } else {

      consoleLog('//# ================================================================== (4) не первый');
      have()



   }



}

export {
   generateBattleData,
}
