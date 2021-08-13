$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const website = $("input:radio[name=website]:checked").val();
    const secondQuestion = $("input:radio[name=website]:checked").val();

    let commonAnswerA = 0;
    let commonAnswerB = 0;
    let commonAnswerC = 0;
    
    if (website === "a") {
      commonAnswerA += 1;
    } else if (website === "b") {
      commonAnswerB += 1;
    } else {
      commonAnswerC += 1;
    }
    
    const result = Math.max(commonAnswerA,commonAnswerB,commonAnswerC);

    if (result === commonAnswerA) {
      $(".letterResult").text("A");
      $("#python").slideDown();
      $("#javaScript").hide();
      $("#cSharp").hide();
    } else if (result === commonAnswerB) {
      $(".letterResult").text("B");
      $("#python").hide();
      $("#javaScript").slideDown();
      $("#cSharp").hide();
    } else {
      $(".letterResult").text("C");
    }
  });
});