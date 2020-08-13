$(function() {
    $(".devBtn").on("click", function(event) {
      let id = $(this).data("id");
      console.log("Clicked " + id);
  
      let updateBurg = {
        devoured: 1 //Changes to 'True' 
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: updateBurg
      }).then(
        function() {
          console.log("Just ate a burger");
          location.reload();
        }
      );
    });
  
    $("#addBurg").on("click", function(event) {
      event.preventDefault();
      console.log("clicked")
  
      let newBurg = {
        burgerName: $("#burgInput").val().trim(),
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });