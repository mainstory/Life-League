function getRandomInt(min, max) {
   const randomBuffer = new Uint32Array(1);

   window.crypto.getRandomValues(randomBuffer);

   let randomNumber = randomBuffer[0] / (0xffffffff + 1);

   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(randomNumber * (max - min)) + min
}

export {
   getRandomInt,
}
