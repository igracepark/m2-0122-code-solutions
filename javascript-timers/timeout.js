function helloThere() {
  var headingElement = document.querySelector('h1');
  headingElement.textContent = 'Hello There';
}

setTimeout(helloThere, 2000);
