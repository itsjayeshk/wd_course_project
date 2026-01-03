function scrollDown() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message submitted successfully!");
    this.reset();
});
