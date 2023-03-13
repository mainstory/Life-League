function save(name, value) {
   localStorage.setItem(name, value)
}
function get(name) {
   return localStorage.getItem(name)
}
function rem(name) {
   localStorage.removeItem(name)
}
function off() {
   localStorage.clear();
}

export {
   save,
   get,
   rem,
}



