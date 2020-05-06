const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var index = 0;

function init() {
  var index = 0
  document.body.addEventListener('keydown', event);

  function event(e) {
    const key = parseInt(e.detail || e.which)
    console.log('key', key)
    if (key === code[index]) {
      index++

      if (index === code.length) {
        alert("Hurray!")
        index = 0
      }
    } else {
      index = 0
    }
  }

}
