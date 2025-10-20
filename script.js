const MAX_SCORE = 30; // 6 questions × 5 points each
const DESIRED_RESPONSE = [5, 5, 5, 5, 5, 5]; // Ideal answers

function calculateCompatibility(event) {
    event.preventDefault();
  let responses = [];

  // Get answers and validate
  for (let i = 1; i <= 6; i++) {
    const value = document.getElementById(`q${i}`).value;
    if (value === "") {
      alert("Please answer all 6 questions before calculating!");
      return; // Stop if any question is unanswered
    }
    responses.push(parseInt(value));
  }

  // Calculate total compatibility
  let totalCompatibility = 0;
  for (let i = 0; i < responses.length; i++) {
    totalCompatibility += 5 - Math.abs(responses[i] - DESIRED_RESPONSE[i]);
  }

  // Convert to percentage
  let percentage = Math.round((totalCompatibility / MAX_SCORE) * 100);

  // Display result message
  let message = "";
  if (percentage >= 80) message = "💘 You're a perfect match!";
  else if (percentage >= 50) message = "😊 You might get along well!";
  else message = "😅 Maybe just friends!";

  document.getElementById("compatibility").innerHTML =
    "Your compatibility score is: <strong>" + percentage + "%</strong><br>" + message;

  console.log("Your compatibility is: " + percentage + "%");
}


