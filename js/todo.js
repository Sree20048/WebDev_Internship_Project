window.onload = function () {

    const form = document.getElementById("contactForm");
    const messageBox = document.getElementById("formMessage");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // stop refresh

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const msg = document.getElementById("message").value.trim();

        if (name === "" || email === "" || msg === "") {
            messageBox.style.color = "red";
            messageBox.textContent = "Please fill all fields!";
        } else {
            messageBox.style.color = "#4CAF50";
            messageBox.textContent = "Message Sent Successfully ✅";
            form.reset();
        }
    });

};