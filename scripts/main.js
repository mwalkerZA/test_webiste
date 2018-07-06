var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bitcoin.jpg') {
      myImage.setAttribute ('src','images/carlos.jpg');
    } else {
      myImage.setAttribute ('src','images/bitcoin.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Bitcoin, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Bitcoin, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}