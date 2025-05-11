document.addEventListener("DOMContentLoaded", () => {
    console.log("Gusto Italian website loaded");

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.3s";
        });
        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
        });
    });
});

function openModal(element) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = element.querySelector('img').src;
}

function closeModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = "none";
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function openModal(element) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = element.querySelector('img').src;
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.querySelector('.price').style.opacity = '1';
    });
    item.addEventListener('mouseout', function() {
        this.querySelector('.price').style.opacity = '0';
    });
});

let reservations = []; 

    function openReservationForm() {
        document.getElementById('reservation-form').style.display = 'flex';
    }

    function closeReservationForm() {
        document.getElementById('reservation-form').style.display = 'none';
    }

    function submitReservation(event) {
        event.preventDefault(); 

        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;

        const isBooked = reservations.some(reservation => reservation.date === date && reservation.time === time);

        if (isBooked) {
            alert("This time is already booked, please choose another time or date.");
        } else {
            reservations.push({ date, time, guests, fullName, email });
            alert(`Your reservation has been booked successfully! A confirmation has been sent to your email: ${email}`);
            closeReservationForm(); 
        }
    }

   
function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("open"); 
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
  
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
  
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  
    document.getElementById("formResponse").textContent = "Thank you! Your message has been sent.";
  
    this.reset();
  });
  