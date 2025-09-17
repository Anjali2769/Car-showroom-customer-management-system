function login(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email === "admin@example.com" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login! Try admin@example.com / 1234");
  }
}
