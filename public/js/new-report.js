var $submitReportBtn = $("#submit-report");
var $reportType = $("#type");
var $reportDescription = $("#description");
var $reportLocation = $("#location");
var $reportCity = $("#city");
var $reportState = $("#state");

var API = {
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

$submitReportBtn.on("click", handleReportSubmit);
