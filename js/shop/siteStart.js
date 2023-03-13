import {
   save,
   get,
} from "./index.js"


function siteStart() {

   if (get('shopSaveItems') === null) {

      const shopSaveItems = []
   
      save('shopSaveItems', JSON.stringify(shopSaveItems))
   }

}




export {
   siteStart,
}
