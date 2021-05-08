function process_json() {
  show_employees(employees);
}

function show_employees(employees) {
  var html = "";
  for (var index in employees) {
    var employee = employees[index];
    html +=
      "<tr><td>" +
      employee["username"] +
      "</td><td>" +
      employee["email"] +
      "</td><td>" +
      employee["age"] +
      "</td></tr>";
  }

  $("#employees_table").html(html);
}

function find_employee() {
  var search_username = $("#search-username").val().toLowerCase();
  var result = [];
  for (var index in employees) {
    var employee = employees[index];
    if (employee["age"].toLowerCase().search(search_username) != -1) {
      result.push(employee);
    }
  }
  show_employees(result);

  return false;
}
