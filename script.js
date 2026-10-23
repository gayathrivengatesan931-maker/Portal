function shuffle(arr) {
 const a = [...arr];
 for (let i = a.length - 1; i > 0; i--) {
 const j = Math.floor(Math.random() * (i + 1));
 [a[i], a[j]] = [a[j], a[i]];
 }
 return a;
}
function startTimer() {
 clearInterval(timerId);
 timeLeft = TIME_PER_QUESTION;
 timerId = setInterval(() => { Page 4
 timeLeft--;
 if (timeLeft <= 0) {
 clearInterval(timerId);
 if (currentIndex < questions.length - 1) goNext();
 else submitQuiz();
 }
 }, 1000);
}
