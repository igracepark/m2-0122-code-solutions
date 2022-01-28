function helloThere() {
  removeHeading();
  var newHeading = document.createElement('h1');
  var newText = document.createTextNode('Hello, There');
  newHeading.appendChild(newText);
  var location = document.querySelector('body');
  location.appendChild(newHeading);
}

function removeHeading() {
  var removeElement = document.querySelector('h1');
  var containerElement = removeElement.parentNode;
  containerElement.removeChild(removeElement);
}

setTimeout(helloThere, 2000);
