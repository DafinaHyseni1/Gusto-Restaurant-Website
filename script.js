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



    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const response = document.getElementById("formResponse");
            if (response) {
                response.textContent = "Thank you! Your message has been sent.";
            }

            this.reset();
        });
    }


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;

            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll('.menu-item, .about-story, .chef, .contact-details').forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });


    window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");

        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }
        }
    });


if (document.body.classList.contains("dish-page")) {

    const dishes = {

    carbonara: {
        title: "Pasta Carbonara",
        tagline: "A Roman classic with rich, creamy indulgence",
        image: "images/Pasta-Carbonara-Recipe.jpg",
        description: "A timeless Roman specialty prepared with premium Italian ingredients, offering a rich and velvety texture balanced with smoky depth.",
        highlights: [
            "Authentic Roman-inspired preparation",
            "Premium imported Italian ingredients",
            "Made fresh to order",
            "Chef signature interpretation"
        ],
        ingredients: [
            "Handcrafted Italian pasta",
            "Smoked pancetta",
            "Free-range egg yolk cream",
            "Aged Parmigiano Reggiano",
            "Fresh cracked black pepper"
        ],
        pairing: "Best enjoyed with Chardonnay or Pinot Grigio",
        calories: "Approx. 650 kcal",
        time: "15–20 min preparation",
        difficulty: "Chef-level precision required"
    },

    bruschetta: {
        title: "Bruschetta al Pomodoro",
        tagline: "Crisp artisan bread with fresh Mediterranean flavors",
        image: "images/Bruschetta.png",
        description: "A traditional Italian antipasto featuring grilled artisan bread topped with vibrant tomatoes, basil, and garlic infused olive oil.",
        highlights: [
            "Fresh seasonal tomatoes",
            "Extra virgin olive oil",
            "Hand-grilled rustic bread",
            "Classic Italian starter"
        ],
        ingredients: [
            "Rustic Italian bread",
            "Fresh tomatoes",
            "Garlic",
            "Basil leaves",
            "Extra virgin olive oil",
            "Sea salt"
        ],
        pairing: "Perfect with light white wine or Aperol Spritz",
        calories: "Approx. 220 kcal",
        time: "10 min preparation",
        difficulty: "Simple elegance"
    },

    caprese: {
        title: "Caprese Salad",
        tagline: "A fresh harmony of Italian simplicity",
        image: "images/Caprese.png",
        description: "An iconic Italian salad combining fresh mozzarella, ripe tomatoes, and basil, finished with balsamic glaze.",
        highlights: [
            "Fresh buffalo mozzarella",
            "Organic tomatoes",
            "Hand-picked basil",
            "Balsamic reduction drizzle"
        ],
        ingredients: [
            "Mozzarella di bufala",
            "Fresh tomatoes",
            "Basil leaves",
            "Olive oil",
            "Balsamic glaze"
        ],
        pairing: "Pairs beautifully with Sauvignon Blanc",
        calories: "Approx. 300 kcal",
        time: "5–10 min preparation",
        difficulty: "Minimalist freshness"
    },

    lasagna: {
        title: "Lasagna Bolognese",
        tagline: "Slow-cooked layers of Italian comfort",
        image: "images/lasagna-bolognese.png",
        description: "A rich layered pasta baked with slow-cooked beef ragù, creamy béchamel, and aged cheese.",
        highlights: [
            "Slow-cooked beef ragù",
            "Creamy béchamel layers",
            "Oven-baked perfection",
            "Traditional Emilia-Romagna recipe"
        ],
        ingredients: [
            "Fresh lasagna sheets",
            "Ground beef ragù",
            "Béchamel sauce",
            "Parmesan cheese",
            "Tomato sauce"
        ],
        pairing: "Best with bold red wine like Chianti",
        calories: "Approx. 750 kcal",
        time: "60–90 min preparation",
        difficulty: "Advanced kitchen craft"
    },

    pizza: {
        title: "Margherita Pizza",
        tagline: "The essence of Neapolitan tradition",
        image: "images/pizza.png",
        description: "A classic Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, and basil on a thin crispy crust.",
        highlights: [
            "Wood-fired baking style",
            "San Marzano tomatoes",
            "Fresh mozzarella",
            "Classic Neapolitan recipe"
        ],
        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Mozzarella",
            "Fresh basil",
            "Olive oil"
        ],
        pairing: "Perfect with light red wine or beer",
        calories: "Approx. 680 kcal",
        time: "12–15 min baking",
        difficulty: "Artisan baking"
    },

    tiramisu: {
        title: "Tiramisu",
        tagline: "Italy’s most beloved coffee dessert",
        image: "images/tiramisu.jpg",
        description: "Layers of espresso-soaked ladyfingers and mascarpone cream dusted with cocoa powder.",
        highlights: [
            "Rich espresso flavor",
            "Silky mascarpone cream",
            "Classic Italian dessert",
            "No-bake indulgence"
        ],
        ingredients: [
            "Ladyfingers",
            "Espresso",
            "Mascarpone cream",
            "Cocoa powder",
            "Egg yolk cream"
        ],
        pairing: "Perfect with espresso or dessert wine",
        calories: "Approx. 420 kcal",
        time: "Chilled 4–6 hours",
        difficulty: "Dessert craftsmanship"
    },
     Caprese: {
        title: "Caprese Salad",
        tagline: "A fresh harmony of Italian simplicity",
        image: "images/Caprese.png",
        description: "An iconic Italian salad celebrating purity and freshness with creamy mozzarella, ripe tomatoes, and aromatic basil.",
        highlights: [
            "Fresh buffalo mozzarella",
            "Organic vine-ripened tomatoes",
            "Hand-picked basil",
            "Extra virgin olive oil finish"
        ],
        ingredients: [
            "Mozzarella di bufala",
            "Tomatoes",
            "Fresh basil",
            "Olive oil",
            "Balsamic glaze"
        ],
        pairing: "Best paired with Sauvignon Blanc or light rosé",
        calories: "Approx. 300 kcal",
        time: "5–10 min preparation",
        difficulty: "Fresh & light"
    },
       gnocchi: {
        title: "Gnocchi alla Sorrentina",
        tagline: "Soft potato gnocchi baked in rich tomato & mozzarella",
        image: "images/Gnocchi.png",
        description: "A comforting Southern Italian dish with pillowy gnocchi baked in tomato sauce and melted mozzarella.",
        highlights: [
            "Soft handmade potato gnocchi",
            "Slow-simmered tomato sauce",
            "Melted mozzarella topping",
            "Traditional Neapolitan comfort dish"
        ],
        ingredients: [
            "Potato gnocchi",
            "Tomato sauce",
            "Mozzarella cheese",
            "Basil",
            "Olive oil"
        ],
        pairing: "Pairs well with medium-bodied red wine",
        calories: "Approx. 600 kcal",
        time: "25–30 min preparation",
        difficulty: "Comfort classic"
    },
      risotto: {
        title: "Risotto ai Funghi",
        tagline: "Creamy risotto infused with wild mushroom aroma",
        image: "images/Mushroom-Risotto-ai-Funghi-PIC1.jpg",
        description: "A luxurious Italian risotto made with Arborio rice and wild mushrooms for deep earthy flavor.",
        highlights: [
            "Wild forest mushrooms",
            "Creamy Arborio rice texture",
            "Parmesan enriched finish",
            "Slow-stirred perfection"
        ],
        ingredients: [
            "Arborio rice",
            "Wild mushrooms",
            "Vegetable broth",
            "Parmesan cheese",
            "White wine",
            "Butter"
        ],
        pairing: "Best with Pinot Noir or earthy red wine",
        calories: "Approx. 550 kcal",
        time: "30–35 min preparation",
        difficulty: "Chef attention required"
    },
     seafood: {
        title: "Seafood Risotto",
        tagline: "A coastal Italian delicacy with fresh seafood",
        image: "images/Dalmatian-Seafood-Risotto-735x965.jpg",
        description: "Creamy risotto enriched with fresh seafood, delivering a perfect balance of ocean flavors and citrus freshness.",
        highlights: [
            "Fresh shrimp, mussels & calamari",
            "Citrus-infused risotto base",
            "Creamy seafood broth",
            "Coastal Italian inspiration"
        ],
        ingredients: [
            "Arborio rice",
            "Shrimp",
            "Mussels",
            "Calamari",
            "Seafood stock",
            "Lemon zest"
        ],
        pairing: "Pairs beautifully with Chardonnay or Prosecco",
        calories: "Approx. 700 kcal",
        time: "35–40 min preparation",
        difficulty: "Advanced seafood craft"
    },
      cannoli: {
        title: "Cannoli Siciliani",
        tagline: "Crispy pastry filled with sweet ricotta cream",
        image: "images/Cannoli.png",
        description: "A traditional Sicilian dessert featuring crisp pastry shells filled with smooth ricotta cream and chocolate chips.",
        highlights: [
            "Crispy golden pastry shell",
            "Sweet ricotta filling",
            "Chocolate chip garnish",
            "Authentic Sicilian dessert"
        ],
        ingredients: [
            "Pastry shells",
            "Ricotta cheese",
            "Sugar",
            "Chocolate chips",
            "Vanilla essence"
        ],
        pairing: "Perfect with espresso or dessert wine",
        calories: "Approx. 350 kcal",
        time: "Chilled serving",
        difficulty: "Dessert artisan"
    },
        pannaCotta: {
        title: "Panna Cotta",
        tagline: "Silky smooth Italian cream dessert",
        image: "images/PannaCotta.png",
        description: "A delicate Italian dessert made with sweetened cream and topped with berry compote.",
        highlights: [
            "Silky cream texture",
            "Vanilla infused base",
            "Fresh berry topping",
            "Elegant plated dessert"
        ],
        ingredients: [
            "Cream",
            "Sugar",
            "Vanilla",
            "Gelatin",
            "Berry sauce"
        ],
        pairing: "Best with dessert wine or cappuccino",
        calories: "Approx. 280 kcal",
        time: "Chilled 3–4 hours",
        difficulty: "Light dessert craft"
    },
       tortaDellaNonna: {
        title: "Torta della Nonna",
        tagline: "A traditional Tuscan custard tart",
        image: "images/torta-della-nonna-1-5.jpg",
        description: "A classic Italian dessert with creamy custard filling and pine nut topped pastry crust.",
        highlights: [
            "Smooth custard filling",
            "Buttery shortcrust pastry",
            "Toasted pine nuts",
            "Traditional Tuscan recipe"
        ],
        ingredients: [
            "Flour",
            "Butter",
            "Eggs",
            "Milk",
            "Pine nuts",
            "Vanilla custard"
        ],
        pairing: "Perfect with espresso or dessert wine",
        calories: "Approx. 400 kcal",
        time: "Baked dessert",
        difficulty: "Traditional pastry craft"
    }

    };

    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");

    const dish = dishes[name];

    if (!dish) {
        document.body.innerHTML = "<h2 style='color:white;text-align:center'>Dish not found</h2>";
        return;
    }

    document.getElementById("dish-title").textContent = dish.title;
    document.getElementById("dish-tagline").textContent = dish.tagline;
    document.getElementById("dish-img").src = dish.image;

    const ingList = document.getElementById("dish-ingredients");
    ingList.innerHTML = "";

    dish.ingredients.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ingList.appendChild(li);
    });

    document.getElementById("dish-preparation").innerHTML = `
        <p style="margin-bottom:15px;">${dish.description}</p>
    `;

    document.getElementById("extra-info").innerHTML = `
        <div class="info-box"><h3>🍷 Pairing</h3><p>${dish.pairing}</p></div>
        <div class="info-box"><h3>⏱ Serving Time</h3><p>${dish.time}</p></div>
        <div class="info-box"><h3>🍽 Calories</h3><p>${dish.calories}</p></div>
        <div class="info-box"><h3>👨‍🍳 Chef Note</h3><p>${dish.difficulty}</p></div>

    `;
}
});

function openDish(name) {
    window.location.href = `dish.html?name=${name}`;
}


function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    if (modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = src;
    }
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    if (modal) modal.style.display = "none";
}

document.addEventListener("click", function (e) {
    const modal = document.getElementById("imageModal");

    if (e.target === modal) {
        closeModal();
    }
});


(function () {
    if (typeof emailjs !== "undefined") {
        emailjs.init("zcwDXXnvY0Gg3Lw2K");
    }
})();

let reservations = [];

function openReservationForm() {
    const form = document.getElementById('reservation-form');
    if (form) form.style.display = 'flex';
}

function closeReservationForm() {
    const form = document.getElementById('reservation-form');
    if (form) form.style.display = 'none';
}

function submitReservation(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;

    const hour = parseInt(time.split(':')[0]);

    if (hour >= 1 && hour < 7) {
        alert("Sorry, we are open 7 AM - 1 AM.");
        return;
    }

    const isBooked = reservations.some(r =>
        r.date === date && r.time === time
    );

    if (isBooked) {
        alert("This time is already booked.");
        return;
    }

    reservations.push({ date, time, guests, fullName, email });

    if (typeof emailjs !== "undefined") {
        emailjs.send("service_n0t9o5r", "template_btukfdh", {
            to_name: fullName,
            email: email,
            date,
            time,
            guests
        })
        .then(() => {
            alert(`Reservation confirmed! Email sent to ${email}`);
        })
        .catch(err => {
            console.error(err);
            alert("Reservation saved, but email failed");
        });
    }

    closeReservationForm();
}

function openReservationForm() {
    document.getElementById("reservation-form").classList.add("active");
}

function closeReservationForm() {
    document.getElementById("reservation-form").classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("reservation-form");
    const box = document.querySelector("#reservation-form .container");

    modal.addEventListener("click", function (e) {
        if (!box.contains(e.target)) {
            closeReservationForm();
        }
    });

    box.addEventListener("click", function (e) {
        e.stopPropagation();
    });
});

function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    if (menu) {
        menu.classList.toggle("open");
    }
}


function openDish(name) {
    window.location.href = "dish.html?name=" + name;
}


function goBack() {
    window.history.back();
}

document.addEventListener("DOMContentLoaded", () => {

    let slides = document.querySelectorAll(".slide");
    let index = 0;

    if (!slides.length) return;

    function showNextSlide() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    setInterval(showNextSlide, 3000);
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
