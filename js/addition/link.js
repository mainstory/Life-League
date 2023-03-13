function link() {

   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-link]')) {


         if (eventTarget.hasAttribute('data-stop')) {


         } else {
            eventTarget.setAttribute('data-stop', '')

            new Audio('audio/buttonclickrelease.mp3').play()

            const path = eventTarget.closest('[data-link]').getAttribute('data-link')

            setTimeout(() => {
               location.replace(path)
            }, 300)


         }

      }

   })

}


export { link }