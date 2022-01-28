var counter = 5;

function countDown() {
  removeElement();
  counter--;
  createElement();
  if (counter === 0) {
    clearInterval(interval);
    removeElement();
    createFinalMessage();
  }
}

var interval = setInterval(function () {
  countDown();
}, 1000);

function removeElement() {
  var removeEl = document.querySelector('h1');
  var elementContainer = removeEl.parentNode;
  elementContainer.removeChild(removeEl);
}

function createElement() {
  var newEl = document.createElement('h1');
  var newElText = document.createTextNode(counter);
  newEl.appendChild(newElText);
  var elLocation = document.querySelector('body');
  elLocation.appendChild(newEl);
}

function createFinalMessage() {
  var newEl = document.createElement('h1');
  var newElText = document.createTextNode('~Earth Beeeelooowww Us~');
  newEl.appendChild(newElText);
  var elLocation = document.querySelector('body');
  elLocation.appendChild(newEl);
}
