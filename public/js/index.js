// Get references to page elements
var $newUserBtn = $("#new-user");
var $newReportBtn = $("#new-report");

// The API object contains methods for each kind of request we'll make
var API = {
  //Sends user to New User page
  userPage: function() {
    return $.ajax({
      url: "users/new",
      type: "GET"
    });
  },
  //Sends user to New Report page
  reportPage: function() {
    return $.ajax({
      url: "reports/new",
      type: "GET"
    });
  }
};

var handleUserBtnClick = function(event) {
  event.preventDefault();
  API.userPage().then(function() {
    console.log("done");
  });
};

var handleReportBtnClick = function(event) {
  event.preventDefault();
  API.reportPage().then(function(data) {
    console.log(data);
  });
};

// Add event listeners to the buttons
$newUserBtn.on("click", handleUserBtnClick);
$newReportBtn.on("click", handleReportBtnClick);
