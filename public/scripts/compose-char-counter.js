$(document).ready(function() {
  // --- our code goes here ---
  $('textarea').keyup(function() {
    let count = $(this).val().length;

    if (count <= 140) {
      $(this)
        .closest(".new-tweet")
        .find(".counter")
        .text(140 - count)
    } else {
      $(this)
      .closest(".new-tweet")
      .find(".counter")
      .text(140 - count)
    }
  })
});