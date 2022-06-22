elInput = document.querySelector(".js-input");
elSendBtn = document.querySelector(".js-sendBtn");
elRecordBtn = document.querySelector(".js-recordBtn");
elList = document.querySelector(".js-list");
elForm = document.querySelector(".form")


var market = [];

var record = new webkitSpeechRecognition();
record.lang = "uz-UZ";

elRecordBtn.addEventListener("click", function() {
  record.start();
})

elForm.addEventListener("submit", function(e){
  e.preventDefault();
  var inputValue = elInput.value;
  elInput.value = "";
  elList.innerHTML = "";

    market.push(inputValue);
    record.onresult = function (evt) {
      market.push(evt.results[0][0].transcript);
    }

    for (var inputValue of market){
      var newLi = document.createElement("li");
      newLi.textContent = inputValue;
      elList.appendChild(newLi);
      newLi.style.fontSize = "32px";
    }

})