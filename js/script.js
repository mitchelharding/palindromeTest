$(document).ready(function(){

  $("form#form-group").submit(function(event){
     event.preventDefault();
     var userInput = $("input#input").val();
     var backWord = userInput.split("").reverse().join("");

    if (backWord === userInput) {
      $(".result").text("This is a Palindrome.");
      $("#result").show();
    } else {
      $(".result").text("This is not a Palindrome.");
      $("#result").show();
    }
  });
});
