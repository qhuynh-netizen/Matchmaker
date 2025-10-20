const NUM_QUESTIONS = 6;
const MAX_POINTS = 5;
const MAX_SCORE = NUM_QUESTIONS * MAX_POINTS;
const DESIRED_RESPONSE = [5, 5, 5, 5, 5, 5]; // ideal answers
const THRESHOLD_HIGH = 80;   // percentage for "Perfect Match"
const THRESHOLD_MEDIUM = 50; // percentage for "Could be good"

function calculateCompatibility() {
  let responses = [];
  for (let i = 1; i <= 6; i++) {
    const value = document.getElementById(`q${i}`).value;
    if (value === "") {
      alert("Please answer all 6 questions!");
      return;
    }
    responses.push(parseInt(value));
  }
  let totalCompatibility = 0;
  let questionScores = [];
  for (let i = 0; i < responses.length; i++) {
    let score = 5 - Math.abs(responses[i] - DESIRED_RESPONSE[i]);
    questionScores.push(score);
    totalCompatibility += score;
  }
  let percentage = Math.round((totalCompatibility / MAX_SCORE) * 100);

  // Determine message
  let message = "";
if (percentage >= 80) message = "\u2764\uFE0F\uD83D\uDC96 Perfect Match!"; // ❤️💖
else if (percentage >= 50) message = "\uD83D\uDE0A Could be good!"; // 😊
else message = "\uD83D\uDE05 Maybe just friends!"; // 😅


  // Build summary text
  let summaryText = "";
  for (let i = 0; i < questionScores.length; i++) {
    summaryText += `Q${i+1} Compatibility: ${questionScores[i]}/5<br>`;
  }
  summaryText += `<br>Total Compatibility: ${percentage}%<br><strong>${message}</strong>`;

  // Display summary
document.getElementById("compatibility").innerHTML = summaryText;
  console.log("Compatibility summary:", summaryText);
}
