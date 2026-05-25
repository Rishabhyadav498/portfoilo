// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Form submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = this;
    const formData = new FormData(form);

    fetch("contact.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        const success = document.getElementById("successMsg");
        const error = document.getElementById("errorMsg");

        if (data.status === "success") {
            success.style.display = "block";
            error.style.display = "none";
            form.reset();
        } else {
            error.style.display = "block";
            success.style.display = "none";
        }
    })
    .catch(() => {
        document.getElementById("errorMsg").style.display = "block";
    });
});