// User interface logic
$(document).ready(function () {
  $("#survey").submit(function (event) {
    event.preventDefault();
    const fName = $("input#firstName").val();
    const lName = $("input#lastName").val();
    const food = $("#food").val();
    const music = $("input:radio[name=music]:checked").val();
    const fDay = $("#favoriteDay").val();
    const fColor = $("#color").val();

    $(".firstName").text(fName);
    $(".lastName").text(lName);
    $(".favFood").text(food);
    $(".favMusic").text(music);
    $(".favDay").text(fDay);
    $(".favColor").text(fColor);

    $("#information").show();
  });
});
