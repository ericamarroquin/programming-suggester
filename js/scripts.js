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
    console.log(result);
  });
});