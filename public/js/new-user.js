// Get references to page elements
var $userName = $("#user-name");
var $userPass = $("#password");
var $submitBtn = $("#user-submit");

var API = {
  newUser: function(userData) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/users",
      data: JSON.stringify(userData)
    });
  }
};

var handleUserSubmit = function(event) {
  event.preventDefault();

  var userObject = {
    userName: $userName.val(),
    password: $userPass.val()
  };

  if (!userObject.userName) {
    alert("You must enter a user name");
    return;
  } else if (!userObject.password) {
    alert("You must enter a password");
    return;
  }

  API.newUser(userObject).then(function() {
    window.location.href = "/";
  });
};

$submitBtn.on("click", handleUserSubmit);
