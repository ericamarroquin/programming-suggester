function addFiveArgs(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
}

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const interest = parseInt($("#interests").val());
    const dog = parseInt($("#dogs").val());
    const cartoons = parseInt($("#cartoon").val());
    const operating = parseInt($("#os").val());
    const gaming = parseInt($("#games").val());
    const result = addFiveArgs(interest,dog,cartoons,operating,gaming);
    const name = $("input#name").val();

    $(".name").text(name);
    
    if (result < 2) {
      $("#python").hide();
      $("#javaScript").hide();
      $("#swift").hide();
      $("#cSharp").slideDown();
    } else if (result < 4) {
      $("#python").hide();
      $("#javaScript").hide();
      $("#swift").slideDown();
      $("#cSharp").hide();
    } else if (result < 6) {
      $("#python").hide();
      $("#javaScript").slideDown();
      $("#swift").hide();
      $("#cSharp").hide();
    } else {
      $("#python").slideDown();
      $("#javaScript").hide();
      $("#swift").hide();
      $("#cSharp").hide();
    }
  });
});