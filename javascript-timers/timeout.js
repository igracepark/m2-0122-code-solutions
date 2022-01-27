var headingElement = document.querySelector('h1');

function helloThere() {
  headingElement.innerHTML = 'Hello There';
}

setTimeout(helloThere, 2000);
