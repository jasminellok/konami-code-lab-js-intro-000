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
  document.body.addEventListener("keydown", (event) => {
    console.log(event.key);
  }
  let index = 0;

  if (codes.indexOf(event.key) < 0 || event.key !== codes[index]) {
		index = 0;
		return;
	} else {
    index++
    if (pattern.length === current) {
		current = 0;
		window.alert('You found it!');
  }
  
}
