/* -------------------------
   Data arrays (gallery, gear, events)
   ------------------------- */

// Gallery Data
const galleryImages = [
    {
        url: 'https://bringatrailer.com/wp-content/uploads/2024/06/1969_triumph_bonneville-t120r_Triumph-BaTT120R-Ora-7-52067-scaled.jpg?fit=940%2C627=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Classic Cafe Racer',
        description: '1968 Triumph Bonneville - Restored to perfection'
    },
    {
        url: 'https://images.unsplash.com/photo-1571068316343-4b40e7d6c7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Vintage Scrambler',
        description: '1972 Norton Commando - Off-road ready'
    },
    {
        url:  'https://wesellclassicbikes.co.uk/cdn/shop/products/545154.jpg?v=1661042966=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'British Classic',
        description: '1965 BSA Gold Star - Museum quality restoration'
    },
    {
        url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Custom Build',
        description: 'Hand-built cafe racer with modern performance'
    },
    {
        url: 'https://hagerty-media-prod.imgix.net/2020/06/1969-Honda-CB750-Sandcast-2.jpg?auto=format%2Ccompress&ixlib=php-3.3.0=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Racing Heritage',
        description: '1969 Honda CB750 - The original superbike'
    },
    {
        url: 'https://www.cuoredesmo.com/wp-content/uploads/2020/04/Ducati_scrambler_450-4.jpg=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Desert Sled',
        description: '1975 Ducati Scrambler - Ready for adventure'
    }
];

// Gear Data
const gearItems = [
    {
        image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7rase-marv48w4bxma7f',
        title: 'Leather Jacket',
        price: 'P 919',
        description: 'Classic motorcycle jacket with armor protection',
        rating: '★★★★★'
    },
    {
        image: 'https://img.lazcdn.com/g/p/dd17a95f644d45f6bf3aa10d1bc79203.jpg_960x960q80.jpg_.webp',
        title: 'Retro Motorcycle Helmet',
        price: 'P 2,055',
        description: 'Vintage-style helmet with modern safety features',
        rating: '★★★★☆'
    },
    {
        image: 'https://i.ebayimg.com/images/g/vZwAAOSwaZdmAXti/s-l400.jpg',
        title: 'Leather Riding Gloves',
        price: 'P 373',
        description: 'Durable gloves with reinforced palms',
        rating: '★★★★★'
    },
    {
        image: 'https://img.lazcdn.com/g/p/66e977123ed5cd9ebc610281d077eb91.jpg_960x960q80.jpg_.webp',
        title: 'Classic Motorcycle Boots',
        price: 'P 413',
        description: 'Vintage-style boots with ankle protection',
        rating: '★★★★☆'
    },
    {
        image: 'https://down-ph.img.susercontent.com/file/sg-11134201-7rd5w-lx0qsn69v07e06',
        title: 'Leather Saddle Bag',
        price: 'P 1,497',
        description: 'Vintage-style saddle bag with modern safety features',
        rating: '★★★★☆'
    },
];

// Events Data (sample)
const events = [
    {
        date: 'June 15, 2025',
        title: 'Vintage Motorcycle Show',
        location: 'London, UK',
        description: 'Annual showcase of the finest vintage motorcycles from around the world. Featuring rare models, custom builds, and restoration competitions.'
    },
    {
        date: 'July 22, 2025',
        title: 'Cafe Racer Rally',
        location: 'Birmingham, UK',
        description: 'Gathering of cafe racer enthusiasts. Rideouts, custom bike competitions, and live music.'
    },
    {
        date: 'August 10, 2025',
        title: 'British Classics Tour',
        location: 'Cotswolds, UK',
        description: 'Scenic tour through the beautiful Cotswolds countryside exclusively for British vintage motorcycles.'
    },
    {
        date: 'September 5, 2025',
        title: 'Vintage Racing Weekend',
        location: 'Donington Park, UK',
        description: 'Historic motorcycle racing event featuring classic racing bikes from the 60s, 70s, and 80s.'
    }
];

/* -------------------------
   App State
   ------------------------- */
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentImageIndex = 0;

/* -------------------------
   DOMContentLoaded initialization
   ------------------------- */
document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    initializeGear();
    initializeEvents(); // horizontal drag-to-slide carousel
    initializeCart();

    // Tabs
    const tabHeaders = document.querySelectorAll('.tab-header');
    const tabContents = document.querySelectorAll('.tab-content');
    tabHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            tabHeaders.forEach(h => h.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const el = document.getElementById(`${tabId}-tab`);
            if (el) el.classList.add('active');
        });
    });

    // Nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            navigateToSection(section);
        });
    });

    // Buttons
    document.getElementById('read-review-btn')?.addEventListener('click', function(e) {
        e.preventDefault();
        showNotification('Loading full review...');
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelector('[data-section="reviews"]')?.classList.add('active');
        navigateToSection('reviews');
    });

    document.getElementById('view-gallery-btn')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelector('[data-section="gallery"]')?.classList.add('active');
        navigateToSection('gallery');
        showNotification('Opening image gallery...');
    });

    document.getElementById('view-models-btn')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelector('[data-section="models"]')?.classList.add('active');
        navigateToSection('models');
        showNotification('Viewing 3D models');
    });

    // Lightbox and other defensive listeners
    document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
    document.getElementById('lightbox-prev')?.addEventListener('click', () => navigateLightbox(-1));
    document.getElementById('lightbox-next')?.addEventListener('click', () => navigateLightbox(1));
    document.getElementById('lightbox')?.addEventListener('click', function(e) { if (e.target === this) closeLightbox(); });

    // Hide loading indicator
    setTimeout(() => { document.getElementById('loading-indicator')?.style && (document.getElementById('loading-indicator').style.display = 'none'); }, 2500);
});


/* -------------------------
   Gallery Functions
   ------------------------- */
function initializeGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-index', index);

        galleryItem.innerHTML = `
            <img src="${image.url}" alt="${image.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        `;

        galleryItem.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(galleryItem);
    });
}

/* -------------------------
   Gear Functions
   ------------------------- */
function initializeGear() {
    const gearGrid = document.getElementById('gear-grid');
    if (!gearGrid) return;

    gearItems.forEach((item, index) => {
        const gearCard = document.createElement('div');
        gearCard.className = 'gear-card';

        gearCard.innerHTML = `
            <div class="gear-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="gear-content">
                <h3>${item.title}</h3>
                <div class="gear-price">${item.price}</div>
                <div class="gear-rating">${item.rating}</div>
                <p class="gear-description">${item.description}</p>
                <button class="btn add-to-cart-btn" data-item='${JSON.stringify(item).replace(/'/g, "&#39;")}'>Add to Cart</button>
            </div>
        `;

        gearGrid.appendChild(gearCard);
    });

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const itemData = JSON.parse(this.getAttribute('data-item').replace(/&#39;/g, "'"));
            addToCart(itemData);
        });
    });
}

/* -------------------------
   Events: HORIZONTAL Drag-to-Slide Carousel (Option C)
   ------------------------- */
function initializeEvents() {
    const track = document.getElementById('events-track');
    const carousel = document.getElementById('events-carousel');
    if (!track || !carousel) return;

    // Build cards
    events.forEach((ev, idx) => {
        const card = document.createElement('div');
        card.className = 'event-card not-in-view';
        card.setAttribute('data-index', idx);

        card.innerHTML = `
            <div class="event-date">${ev.date}</div>
            <h3>${ev.title}</h3>
            <p><strong>Location:</strong> ${ev.location}</p>
            <p>${ev.description}</p>
            <button class="btn">Register Now</button>
        `;
        track.appendChild(card);
    });

    const cards = Array.from(track.querySelectorAll('.event-card'));

    // Visibility detection centre-of-carousel -> apply focus class (no snapping)
    function updateCardVisibility() {
        const cRect = carousel.getBoundingClientRect();
        const centerX = cRect.left + cRect.width / 2;

        cards.forEach(card => {
            const r = card.getBoundingClientRect();
            const cardCenter = r.left + r.width / 2;
            const dist = Math.abs(cardCenter - centerX);

            // threshold tuned for desktop & mobile widths
            const threshold = Math.max(120, cRect.width * 0.18);
            if (dist < threshold) {
                card.classList.add('in-view');
                card.classList.remove('not-in-view');
            } else {
                card.classList.add('not-in-view');
                card.classList.remove('in-view');
            }
        });
    }

    // Call on resize and scroll
    let rafScheduled = false;
    function scheduleVisibilityUpdate() {
        if (rafScheduled) return;
        rafScheduled = true;
        requestAnimationFrame(() => {
            updateCardVisibility();
            rafScheduled = false;
        });
    }

    carousel.addEventListener('scroll', scheduleVisibilityUpdate);
    window.addEventListener('resize', scheduleVisibilityUpdate);

    // Pointer drag mechanics (horizontal)
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    carousel.addEventListener('pointerdown', (e) => {
        isDown = true;
        carousel.classList.add('dragging');
        startX = e.clientX;
        scrollStart = carousel.scrollLeft;
        carousel.setPointerCapture(e.pointerId);
    });

    carousel.addEventListener('pointermove', (e) => {
        if (!isDown) return;
        e.preventDefault(); // keep it smooth
        const dx = e.clientX - startX;
        // invert dx to match natural drag (drag left => scroll right)
        carousel.scrollLeft = scrollStart - dx;
        scheduleVisibilityUpdate();
    });

    function finishDrag(e) {
        if (!isDown) return;
        isDown = false;
        carousel.classList.remove('dragging');
        try { carousel.releasePointerCapture(e?.pointerId); } catch (err) {}
        // no aggressive snapping; just update visibility
        scheduleVisibilityUpdate();
    }

    carousel.addEventListener('pointerup', finishDrag);
    carousel.addEventListener('pointercancel', finishDrag);
    carousel.addEventListener('pointerleave', finishDrag);

    // Make vertical wheel scroll move horizontally when hovering the carousel
    carousel.addEventListener('wheel', function(e) {
        // If user tries to vertically scroll inside carousel, move horizontally instead
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            carousel.scrollLeft += e.deltaY;
            scheduleVisibilityUpdate();
        }
    }, { passive: false });

    // initial visibility mark
    setTimeout(() => scheduleVisibilityUpdate(), 80);
}

/* -------------------------
   Cart functions
   ------------------------- */
function initializeCart() {
    updateCartCount();
}

function addToCart(item) {
    const existingItem = cart.find(c => c.title === item.title);
    if (existingItem) existingItem.quantity += 1;
    else cart.push({ ...item, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${item.title} added to cart!`);
}

function updateCartCount() {
    const cartCount = cart.reduce((t, i) => t + (i.quantity || 0), 0);
    let el = document.querySelector('.cart-count');
    if (!el) {
        el = document.createElement('span');
        el.className = 'cart-count';
        document.querySelector('.logo')?.appendChild(el);
    }
    el.textContent = cartCount > 0 ? ` (${cartCount})` : '';
}

/* -------------------------
   Lightbox functions
   ------------------------- */
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = galleryImages[index].url;
    lightboxCaption.textContent = `${galleryImages[index].title} - ${galleryImages[index].description}`;
    lightbox.classList.add('active');
    currentImageIndex = index;
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function navigateLightbox(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = galleryImages.length - 1;
    if (currentImageIndex >= galleryImages.length) currentImageIndex = 0;
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    if (!lightboxImg) return;
    lightboxImg.src = galleryImages[currentImageIndex].url;
    if (lightboxCaption) lightboxCaption.textContent = `${galleryImages[currentImageIndex].title} - ${galleryImages[currentImageIndex].description}`;
}

/* -------------------------
   Navigation & helpers
   ------------------------- */
function navigateToSection(section) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    if (section === 'home') {
        const home = document.getElementById('home-section');
        if (home) { home.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    } else {
        const secEl = document.getElementById(`${section}-section`);
        if (secEl) {
            secEl.classList.add('active');
            secEl.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    if (!notification) return;
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 3000);
}
