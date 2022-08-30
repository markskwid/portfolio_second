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
  $("#submit-btn").click(() => {
    let regex_special = /([A-Za-z\s])/g;
    let regex_num = /([A-Za-z]|[/\W])/g;

    const name = $("#fullname");
    const email = $("#email");
    const phone = $("#phone");
    const message = $("#message");

    if (name.val() == "" || !name.val().match(regex_special)) {
      name.addClass("is-invalid");
    } else {
      // phone
      if (
        phone.val() == "" ||
        phone.val().match(regex_num) ||
        phone.val().length != 11
      ) {
        phone.addClass("is-invalid");
      } else {
        phone.removeClass("is-invalid");
      }
      name.removeClass("is-invalid");
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
