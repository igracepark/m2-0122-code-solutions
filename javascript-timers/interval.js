var headingElement = document.querySelector('h1');
var counter = 5;

function countDown() {
  counter--;
  headingElement.innerHTML = counter;
  if (counter === 0) {
    clearInterval(interval);
    headingElement.innerHTML = '~Earth Beeeelooowww Us~';
  }
}

var interval = setInterval(function () {
  countDown();
}, 1000);
