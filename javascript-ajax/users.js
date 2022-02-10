var userListElement = document.querySelector('#user-list');

function getUserList() {
  var xhReq = new XMLHttpRequest();
  xhReq.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhReq.responseType = 'json';
  xhReq.addEventListener('load', function () {
    console.log('status:', xhReq.status);
    console.log('response:', xhReq.response);
    var userArray = xhReq.response;
    for (var i = 0; i < userArray.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = userArray[i].name;
      userListElement.append(listItem);
    }
  });
  xhReq.send();
}
getUserList();
