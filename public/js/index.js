// Get references to page elements
var $exampleList = $("#example-list");
var $searchCityBtn = $("#search-city");
var $submitReportBtn = $("#submit-report");
var $reportType = $("#type");
var $reportDescription = $("#description");
var $reportLocation = $("#location");
var $reportCity = $("#city");
var $reportState = $("#state");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/users",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "/api/reports",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "/api/users/" + id,
      type: "DELETE"
    });
  },
  searchCity: function(city) {
    return $.ajax({
      url: "/search/city/" + city,
      type: "GET"
    });
  },
  submitReport: function(data) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/reports",
      data: JSON.stringify(data)
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};
// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

var handleReportSubmit = function(event) {
  event.preventDefault();

  var data = {
    type: $reportType.val().trim(),
    description: $reportDescription.val().trim(),
    location: $reportLocation.val().trim(),
    city: $reportCity.val().trim(),
    state: $reportState.val().trim()
  };

  API.submitReport(data).then(function() {
    console.log(data);
    location.reload();
  });
};

// Add event listeners to the submit and delete buttons
$exampleList.on("click", ".delete", handleDeleteBtnClick);
$searchCityBtn.on(
  "click",
  API.searchCity(
    $("#city-name")
      .val()
      .trim()
  )
);
$submitReportBtn.on("click", handleReportSubmit);
