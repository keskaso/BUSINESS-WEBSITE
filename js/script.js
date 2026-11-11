// Product information used by the Home and Products pages.
// These are sample products and prices that can be edited for the real shop.
const products = [
    {
        name: "Classic Notebook",
        category: "Stationery",
        price: "₹120",
        description: "A simple notebook for notes, study and daily planning.",
        image: "images/notebook.svg"
    },
    {
        name: "Reusable Water Bottle",
        category: "Daily Use",
        price: "₹250",
        description: "A reusable bottle for carrying water throughout the day.",
        image: "images/bottle.svg"
    },
    {
        name: "Desk Organiser",
        category: "Home",
        price: "₹320",
        description: "Keeps pens and small desk items organised.",
        image: "images/organiser.svg"
    },
    {
        name: "Ceramic Mug",
        category: "Home",
        price: "₹180",
        description: "A practical mug for tea, coffee and other drinks.",
        image: "images/mug.svg"
    },
    {
        name: "Ball Pen Set",
        category: "Stationery",
        price: "₹90",
        description: "A set of everyday writing pens for school or office.",
        image: "images/pens.svg"
    },
    {
        name: "Canvas Tote Bag",
        category: "Daily Use",
        price: "₹220",
        description: "A reusable carry bag for everyday shopping.",
        image: "images/tote.svg"
    }
];

// Create a product card and return it to the calling function.
function createProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;

    const info = document.createElement("div");
    info.className = "product-info";

    const category = document.createElement("p");
    category.className = "product-category";
    category.textContent = product.category;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description;

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = product.price;

    info.appendChild(category);
    info.appendChild(name);
    info.appendChild(description);
    info.appendChild(price);
    card.appendChild(image);
    card.appendChild(info);

    return card;
}

// Display the first three products on the Home page.
function displayFeaturedProducts() {
    const featuredArea = document.getElementById("featuredProducts");

    if (featuredArea) {
        featuredArea.textContent = "";
        for (let i = 0; i < 3; i++) {
            featuredArea.appendChild(createProductCard(products[i]));
        }
    }
}

// Display products on the Products page.
function displayProducts(productArray) {
    const productGrid = document.getElementById("productGrid");
    const productCount = document.getElementById("productCount");
    const noProducts = document.getElementById("noProducts");

    if (!productGrid) {
        return;
    }

    productGrid.textContent = "";
    productCount.textContent = productArray.length + " product(s) found";
    noProducts.hidden = productArray.length !== 0;

    productArray.forEach(function(product) {
        productGrid.appendChild(createProductCard(product));
    });
}

// Search by product name and filter by category.
function filterProducts() {
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");

    if (!searchInput || !categoryFilter) {
        return;
    }

    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    const filteredProducts = products.filter(function(product) {
        const matchesName = product.name.toLowerCase().includes(searchText);
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        return matchesName && matchesCategory;
    });

    displayProducts(filteredProducts);
}

// Sample customer reviews. Replace these with genuine customer reviews.
const reviews = [
    {
        name: "Sample Customer 1",
        feedback: "The store has useful products and the shopping experience was simple."
    },
    {
        name: "Sample Customer 2",
        feedback: "I found what I needed easily. The product details were clear."
    },
    {
        name: "Sample Customer 3",
        feedback: "A convenient place to shop for everyday items."
    }
];

// Display all customer reviews without star ratings.
function displayReviews() {
    const reviewList = document.getElementById("reviewList");

    if (!reviewList) {
        return;
    }

    reviewList.textContent = "";

    reviews.forEach(function(review) {
        const card = document.createElement("article");
        card.className = "review-card";

        const feedback = document.createElement("p");
        feedback.textContent = "“" + review.feedback + "”";

        const name = document.createElement("h3");
        name.textContent = review.name;

        card.appendChild(feedback);
        card.appendChild(name);
        reviewList.appendChild(card);
    });
}

// Add a new review to the page when the feedback form is submitted.
function setupFeedbackForm() {
    const feedbackForm = document.getElementById("feedbackForm");

    if (!feedbackForm) {
        return;
    }

    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("customerName");
        const feedbackInput = document.getElementById("customerFeedback");
        const feedbackMessage = document.getElementById("feedbackMessage");

        const customerName = nameInput.value.trim();
        const customerFeedback = feedbackInput.value.trim();

        if (customerName === "" || customerFeedback === "") {
            feedbackMessage.textContent = "Please fill in both fields.";
            return;
        }

        reviews.push({
            name: customerName,
            feedback: customerFeedback
        });

        displayReviews();
        feedbackForm.reset();
        feedbackMessage.textContent = "Thank you! Your feedback has been added to this page.";
    });
}

// Demonstration contact form. It validates input but does not send a message.
function setupContactForm() {
    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const contactMessage = document.getElementById("contactMessage");
        contactMessage.textContent = "Thank you for your enquiry. This demo form does not send or store messages.";
        contactForm.reset();
    });
}

// Run the functions needed by the current page.
document.addEventListener("DOMContentLoaded", function() {
    displayFeaturedProducts();
    displayProducts(products);
    displayReviews();
    setupFeedbackForm();
    setupContactForm();

    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");

    if (searchInput) {
        searchInput.addEventListener("input", filterProducts);
    }

    if (categoryFilter) {
        categoryFilter.addEventListener("change", filterProducts);
    }
});
