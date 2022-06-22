var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.js-input');
var elBtn = document.querySelector('.js-button');
var elList = document.querySelector('.js-list');
var record = new webkitSpeechRecognition();
record.lang = "uz-UZ";
var count = [];

elBtn.addEventListener('click', function () {
  record.start();
}) 

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var inputVal = elInput.value;
  elInput.value = "";
  elList.innerHTML = "";

  count.push(inputVal);
  record.onresult = function (evt) {
    count.push(evt.results[0][0].transcript);
  }

  for(var inputVal of count){
	var newLi = document.createElement('li');
	if(inputVal == " "){
		newLi.textContent == "inputga malumot kiriting";
	}
	else{
		newLi.textContent = inputVal;
	}
	
	elList.appendChild(newLi);
	 
  }
})