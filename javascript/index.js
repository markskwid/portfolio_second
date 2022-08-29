$(document).ready(function () {
  animationFunction();

  formSubmit();
});

$(document).scroll(function () {
  var sec = $("#second-content").position().top;
  if ($(this).scrollTop() >= sec) {
    $("#row-container").fadeIn(2000);
  }
});

const formSubmit = () => {
  const phone = "";
  const message = "";

  $("#submit-btn").click(() => {
    let regex_num = /([0-9]|[/\W])/g;
    const name = $("#fullname").val();
    const email = $("#email").val();

    if (name.match(regex_num)) {
      $("#fullname").addClass("is-invalid");
    } else {
      $("#fullname").removeClass("is-invalid");
    }
  });
};

const animationFunction = () => {
  var my_img = $("#my_img");
  var right = $("#info");

  $(my_img).animate(
    {
      left: "250px",
    },
    "slow"
  );

  $(my_img).animate(
    {
      left: "10px",
    },
    "slow"
  );

  $(my_img).animate(
    {
      left: "0px",
    },
    "slow"
  );

  $(right).fadeIn(3000);
};
