 // Function to set the theme and update UI
 function setTheme(theme) {
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    var switchThemeBtn = document.getElementById('switchTheme');
    if (switchThemeBtn) {
        switchThemeBtn.innerHTML = theme === 'dark' ?  '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
         // Update the logo images based on the theme
    const logoImages = document.querySelectorAll('.logo-name img'); // Select all logo images
    logoImages.forEach((logoImg) => {
        logoImg.src = theme === 'dark' ? "./assets/darklogo-rohan.png" : "./assets/lightlogo-rohan.png";
    });
    }
    //console.log(`Switched to ${theme} theme`);
    updateButtonClasses(theme)
}

var currentTheme = localStorage.getItem('theme') || 'dark';
setTheme(currentTheme);

// Event listener for the switch theme button
var switchThemeBtn = document.getElementById('switchTheme');
if (switchThemeBtn) {
    switchThemeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme);
    });

}

// Function to update the button classes based on the theme
function updateButtonClasses(theme) {
    const cvButton = document.getElementById('cvButton');
    const hirebtn = document.getElementById('hirebtn');

    const header = document.getElementById('header');
    if (header) {
        header.style.backgroundColor = theme === 'dark' ? '#212529' : '#ffffff'; // Set header background
    }


    // Toggle button classes
    [cvButton, hirebtn].forEach((button) => {
        if (button) {
            button.classList.remove('btn-light', 'btn-dark'); 
            button.classList.add(theme === 'dark' ? 'btn-light' : 'btn-dark');
        }
    });
}

// open pic in new tab

function openInNewTab(imageUrl) {
    window.open(imageUrl, '_blank').focus();
}

// off loading 

window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
});


// hire me animation

const container = document.getElementById('Hireme');
const thankyou = document.getElementById('thankyou');
const hiremebtn = document.getElementById('hiremebtn');

thankyou.addEventListener('click', () => {
    container.classList.add("active");
});

hiremebtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// send form data

function sendEmail(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Construct email subject and body
    const subject = `Job Inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    // Create a mailto link
    const mailtoLink = `mailto:rohanmpct21@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the email client
    window.location.href = mailtoLink;
}