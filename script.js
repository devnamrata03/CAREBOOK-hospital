function login() {
  const name = document.getElementById("username").value;
  const role = document.getElementById("role").value;

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  alert("Welcome " + name + " (" + role + ")");
}
