//Page References
var $searchSelect = $("#search-select");
var $searchInput = $("#search-input");
var $searchBtn = $("#search-btn");

var HTML = {
  returnPage: function(searchSelector, searchInput) {
    // return $.ajax({
    // type: "GET",
    // url: "/search/" + searchSelector + "/" + searchInput,
    // success: function() {
    window.location.href = "/search/" + searchSelector + "/" + searchInput;
  }
  // });
  // }
};

var handleSearchSubmit = function(event) {
  event.preventDefault();

  var searchSelector = $searchSelect
    .val()
    .trim()
    .toLowerCase();
  var searchInput = $searchInput.val().trim();

  HTML.returnPage(searchSelector, searchInput);
};

$searchBtn.on("click", handleSearchSubmit);
