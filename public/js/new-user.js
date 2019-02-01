// Get references to page elements
var $userName = $("#user-name");
var $submitBtn = $("#user-submit");
var $userTable = $("#user-table");

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
  },

  returnUsers: function() {
    return $.ajax({
      type: "GET",
      url: "/api/users"
    });
  }
};

API.returnUsers().then(function(data) {
  for (var i = 0; i < data.length; i++) {
    buildTable(data[i].userName);
  }
});

var handleUserSubmit = function(event) {
  event.preventDefault();

  var userObject = {
    userName: $userName.val().trim()
  };

  if (!userObject.userName) {
    alert("You must enter a user name");
    return;
  }

  API.newUser(userObject).then(function(data) {
    console.log(data);
  });
};

function buildTable(userName) {
  var tr = $("<tr>");
  var td = $("<td>").text(userName);
  tr.append(td);
  $userTable.append(tr);
}

$submitBtn.on("click", handleUserSubmit);
