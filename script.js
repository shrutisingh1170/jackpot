function checkPuzzle() {
  let riddleAns = document.getElementById("riddle-answer").value.trim().toLowerCase();
  let password = document.getElementById("password").value.trim();

  if (riddleAns === "echo" && password === "open123") {
    // Both correct
    window.location.href = "congrats.html";
  } else if (riddleAns !== "echo" && password === "open123") {
    alert("❌ Riddle answer is wrong!");
  } else if (riddleAns === "echo" && password !== "open123") {
    alert("❌ Password is wrong!");
  } else {
    alert("❌ Both riddle answer and password are incorrect!");
  }
}
