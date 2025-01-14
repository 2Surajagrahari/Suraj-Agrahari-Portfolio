const getInTouchBtn = document.querySelector('.btn');
const contactCard = document.getElementById('contact-card');
const closeBtn = document.querySelector('.close-btn');


    getInTouchBtn.addEventListener('click', () => {
        contactCard.style.display = 'block';
        document.body.classList.add('active-overlay');
    });

    closeBtn.addEventListener('click', () => {
        contactCard.style.display = 'none';
        document.body.classList.remove('active-overlay');
    });

    window.addEventListener('click', (event) => {
        if (event.target === contactCard) {
            contactCard.style.display = 'none';
            document.body.classList.remove('active-overlay');
        }
    });

    const nameInput =  document.getElementById('name');
    nameInput.addEventListener('input', (event) => {
        nameInput.value = nameInput.value.replace(/\d/g, '');
    });

    form.addEventListener("submit", (e) => {
        const nameInput = document.querySelector("#name");
        const emailInput = document.querySelector("#email");
        const messageInput = document.querySelector("#message");
        e.preventDefault(); // Prevent actual form submission

        // Simulate sending the message
        alert("Your message has been sent!");

        // Clear form fields after submission
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";

        // Optionally hide the contact card after submission
        contactCard.style.display = "none";
    });


    // Get elements
    function toggleMenu() {
        const navLinks = document.getElementById('nav-links');
        if (navLinks) {
            navLinks.classList.toggle('active');
        } else {
            console.error('Nav links element not found');
        }
    }
    
    
