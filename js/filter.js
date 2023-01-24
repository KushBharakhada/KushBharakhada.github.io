function filter() {
  var userInput = document.getElementById("filter-input").value.toLowerCase().trim();
  // Get all projects
  var projects = document.querySelectorAll('.main-project-div');

  // Iterate through each project
  for (var i = 0; i < projects.length; i += 1) {
    // All the languages for that project
    var allLanguagesAndFrameworks = projects[i].getElementsByClassName("languages-frameworks");
    var filterFound = false;

    // Check if the languages/framework is the one the user wants
    for (var j = 0; j < allLanguagesAndFrameworks.length; j += 1) {
      var match = allLanguagesAndFrameworks[j].innerHTML.toLowerCase().indexOf(userInput);
      if (match != -1) {
        filterFound = true;
        break;
      }
    }
    // Hide the project
    if (!filterFound) {
      projects[i].classList.add("hidden");
    }
  }
}

function clearFilter() {
  // Get all projects
  var projects = document.querySelectorAll('.main-project-div');

  for (var i = 0; i < projects.length; i += 1) {
    // Check if the project is hidden, if so, show it
    if (projects[i].classList.contains("hidden")) {
      projects[i].classList.remove("hidden");
    }
  }
}
