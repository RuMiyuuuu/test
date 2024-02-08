$(document).ready(function () {
  // Add click event listener to the card
  $(".card").click(function() {
    // Redirect to another HTML page
    window.location.href = "image.html";
  });

  // Animation on mouse enter and leave
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px"
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0
        },
        "slow"
      );
    });
});
