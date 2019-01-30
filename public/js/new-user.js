// Get references to page elements
var $userName = $("#user-name");
var $submitBtn = $("#user-submit");

var API = {
  newUser: function(userName) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/users",
      data: JSON.stringify(userName)
    });
  }
};

var handleUserSubmit = function(event) {
  event.preventDefault();

  var userObject = {
    userName: $userName.val().trim()
  };

  if (!userObject.userName) {
    alert("You must enter a user name");
    return;
  }

  API.newUser(userObject).then(function() {
    console.log("DONE");
  });
};

$submitBtn.on("click", handleUserSubmit);
