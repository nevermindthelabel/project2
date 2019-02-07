var $deleteBtn = $(".delete-btn");

var API = {
  deletePost: function(id) {
    return $.ajax({
      type: "DELETE",
      url: "/api/reports/" + id
    });
  }
};

var handleDeleteBtn = function(event) {
  event.preventDefault();

  var id = $(this).data("value");

  API.deletePost(id)
    .then(function() {
      console.log("DONE");
      location.reload();
    })
    .catch(function(err) {
      if (err) {
        console.log(err);
      }
    });
};

$deleteBtn.on("click", handleDeleteBtn);
