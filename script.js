```javascript
// Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.innerText = "☀️";
    } else {
        themeBtn.innerText = "🌙";
    }

});


// Contact Form

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("message").innerText =
        "Message sent successfully!";

    form.reset();

});


// Get Started Button

function showMessage() {

    alert("Welcome to My Website!");

}
```
