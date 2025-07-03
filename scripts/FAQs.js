var questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        var text = question.querySelector(".question-content");
        toggleText(text);
    })
})

function toggleText(text) {
    text.classList.toggle("hide-content");
    text.classList.toggle("show-content");
}