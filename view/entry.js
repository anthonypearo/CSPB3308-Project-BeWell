// Need to finish mapping from index.html to models/entry.js and view/entry.js
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submitAnswer").addEventListener('click', event => {
    event.preventDefault()
    console.log("inside entry.js 1")
    //update so it has all the fields on the form
    let symptoms = []
    $("input[name='symptom']:checked").each(function ()
    {
      symptoms.push(parseInt($(this).val()));
    }); //jquery to pull checked fields in symptoms
    let newEntry = {
      //text entries
      firstname: $("#fname").val(),
      lastname: $("#lname").val(),
      email: $("#email").val(),
      date: $("#date").val(),
      airline: parseInt($("#airline").val()),
      flightnumber: $("#flightnumber").val(),
      illness: parseInt($('input[name=illness]:checked', '#submissionForm').val()),
      symptoms: symptoms
    }

    console.log("newEntry: ", newEntry);
    $.ajax("/api/entry/", { //this will need to be updated with the correct route
      method: "POST",
      data: newEntry,
      success: function(res) {
        console.log("success")
        window.location.href = "BeWellFrontendResults.html?flightnumber="+$("#flightnumber").val()
      },
      error: function(err) {
        console.log("In entry.js, post, an error occurred: ", err);
      }   
    });
  });
});
