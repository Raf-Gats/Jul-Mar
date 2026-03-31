document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message Sent Successfully!');
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

document.addEventListener('DOMContentLoaded', () => {
  const alertButton = document.getElementById('alertButton');

  alertButton.addEventListener('click', () => {
    alert('Hello! My name is Wilnard, how are you today.');
  });
});

document.addEventListener('DOMContentLoaded', () => {
    // Put ALL your counter code here
    const counterDisplay = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementButton');
    const decrementButton = document.getElementById('decrementButton');

    let counter = 0;

    incrementButton.addEventListener('click', () => {
        counter += 1;
        counterDisplay.textContent = counter;
    });

    decrementButton.addEventListener('click', () => {
        counter -= 1;
        counterDisplay.textContent = counter;
    });
});

      const resetButton = document.getElementById('resetButton');
      resetButton.addEventListener('click', function () {
        location.reload();
});

          const userInput = document.getElementById('username')
          const greetButton = document.getElementById('greetButton')
          const greetingMessage = document.getElementById('greetingMessage')

          function isValidName(name) {
          const namePattern = /^[a-zA-Z\s]+$/; 
          return namePattern.test(name);
}
        greetButton.addEventListener('click', function () {
 
        const username = userInput.value.trim();

    if (username === '') {
    greetingMessage.textContent = ('Please enter your name.');
} else if (!isValidName(username)) {
    greetingMessage.textContent = 'Invalid input. Please use only letters.';
} else {
  
   greetingMessage.textContent = `Hello, ${username}!`;
}
 });

const addParagraphButton = document.getElementById('addParagraphButton');
const paragraphContainer = document.getElementById('paragraphContainer');

addParagraphButton.addEventListener('click', function () {
const newParagraph = document.createElement('p');

newParagraph.textContent = 'Hello, Wilnard Racel!';

paragraphContainer.appendChild(newParagraph);
});
 
