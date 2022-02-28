// User interface logic
$(document).ready(function () {
  $("#survey").submit(function (event) {
    event.preventDefault();
    const fName = $("input#firstName").val();
    const lName = $("input#lastName").val();
    const food = $("#food").val();
    const music = $("input:radio[name=music]:checked").val();

    $(".firstName").text(fName);
    $(".lastName").text(lName);
    $(".favFood").text(food);
    $(".favMusic").text(music);

    $("#information").show();
  });
});
