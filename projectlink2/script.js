document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message Sent Successfully!');
});

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function () {
    location.reload();
});

document.addEventListener("DOMContentLoaded", function() {
  const skillsLink = document.querySelector('a[href="#skills"]');
  const skillsSection = document.getElementById("skills");

  let skillsVisible = false;

  skillsLink.addEventListener("click", function(e) {
    e.preventDefault(); // stop scrolling

    if (!skillsVisible) {
      // Scroll to top and show only skills section
      skillsSection.style.display = "block";
      skillsSection.scrollIntoView({ behavior: "smooth" });
      skillsVisible = true;
    } else {
      // If clicked again, hide skills section
      skillsSection.style.display = "none";
      skillsVisible = false;
    }
  });
});
