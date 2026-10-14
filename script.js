```javascript
const quizForm = document.getElementById("quizForm");
const message = document.getElementById("message");

quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document
        .getElementById("studentName")
        .value.trim();

    const category = document.getElementById("category").value;
    const difficulty = document.getElementById("difficulty").value;

    if (studentName === "") {
        message.textContent = "Please enter your name.";
        return;
    }

    // Save the student's information for the next page
    const quizDetails = {
        studentName: studentName,
        category: category,
        difficulty: difficulty
    };

    localStorage.setItem("quizDetails", JSON.stringify(quizDetails));

    message.style.color = "#16a34a";
    message.textContent = "Welcome, " + studentName + "! Starting your quiz...";

    // Navigate to the quiz questions page
    setTimeout(function () {
        window.location.href = "quiz.html";
    }, 1000);
});
```
