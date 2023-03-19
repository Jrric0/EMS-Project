// Show sidebar
var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");
toggleButton.onclick = function () {
  el.classList.toggle("toggled");
};

// Load the dashboard 1 by default
$(document).ready(function () {
  loadDashboard1();
});

// Load dashboard 1 when clicked
function loadDashboard1() {
  $.ajax({
    url: "dashboard1.php", // URL of the Dashboard 1 PHP file
    success: function (result) {
      $("#dashboard2").html(result); // Replace the content of the dashboard1 div with the content of the PHP file
      setActiveLink("dashboard1-link"); // Add "active" class to Dashboard 2 link
    },
  });
}

// Load dashboard 2 when clicked
function loadDashboard2() {
  $.ajax({
    url: "dashboard2.php", // URL of the Dashboard 2 PHP file
    success: function (result) {
      $("#dashboard2").html(result); // Replace the content of the dashboard2 div with the content of the PHP file
      setActiveLink("dashboard2-link"); // Add "active" class to Dashboard 2 link
    },
  });
}

//Stay sidebar active when clicked
function setActiveLink(linkId) {
  // Remove "active" class from all links
  $(".list-group-item").removeClass("active");

  // Add "active" class to clicked link
  $("#" + linkId).addClass("active");
}
