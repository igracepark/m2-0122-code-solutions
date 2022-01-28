var counter = 5;

function countDown() {
  var counterElement = document.querySelector('h1');
  counter--;
  counterElement.textContent = counter;
  if (counter === 0) {
    clearInterval(interval);
    counterElement.textContent = '~Earth Beeeelooowww Us~';
  }
}

var interval = setInterval(function () {
  countDown();
}, 1000);
