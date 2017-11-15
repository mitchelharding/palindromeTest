$(document).ready(function(){

  var reverseWord = [];

  $("form#form-group").submit(function(event){
     event.preventDefault();
     var userInput = $("input#input").val();
     userInput.split("").reverse().join("");
     reverseWord.push(userInput);

     alert(reverseWord);
  });
});
