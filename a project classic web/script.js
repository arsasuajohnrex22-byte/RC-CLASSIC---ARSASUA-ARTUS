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
        url: 'https://i1.wp.com/www.bike-urious.com/wp-content/uploads/Norton-750-Commando-Combat-Front-Right.jpg?fit=1200%2C798&ssl=1',
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
        url: 'https://i.pinimg.com/736x/57/28/cb/5728cb729714afe02fd7d5b1307c0dd7--fire-legs.jpg',
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
        description: 'Classic motorcycle jacket with aesthetic features',
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

    //dagdag
    {
        image: 'https://down-ph.img.susercontent.com/file/sg-11134201-7rd5w-lx0qsn69v07e06',
        title: 'Leather Saddle Bag',
        price: 'P 1,497',
        description: 'Vintage-style saddle bag with modern safety features',
        rating: '★★★★☆'
    },
    {
        image: 'https://down-ph.img.susercontent.com/file/sg-11134201-7rd5w-lx0qsn69v07e06',
        title: 'Leather Saddle Bag',
        price: 'P 1,497',
        description: 'Vintage-style saddle bag with modern safety features',
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

// Events Data
const events = [
    {
        date: 'June 15, 2025',
        title: 'Vintage Motorcycle Show',
        location: 'London, UK',
        description: 'Annual showcase of the finest vintage motorcycles from around the world.'
    },
    {
        date: 'July 22, 2025',
        title: 'Cafe Racer Rally',
        location: 'Birmingham, UK',
        description: 'Rideouts, custom bike competitions, and live music.'
    },
    {
        date: 'August 10, 2025',
        title: 'British Classics Tour',
        location: 'Cotswolds, UK',
        description: 'A countryside tour exclusively for British vintage motorcycles.'
    },
    {
        date: 'September 5, 2025',
        title: 'Vintage Racing Weekend',
        location: 'Donington Park, UK',
        description: 'Historic racing event featuring classic bikes from the 60s–80s.'
    }
];

/* -------------------------
   State
   ------------------------- */
let currentImageIndex = 0;

/* -------------------------
   DOM INIT
   ------------------------- */
document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    initializeGear();
    initializeEvents();
    initializeTabs();
    initializeNav();
    setupButtons();

    // Lightbox
    document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
    document.getElementById('lightbox-prev')?.addEventListener('click', () => navigateLightbox(-1));
    document.getElementById('lightbox-next')?.addEventListener('click', () => navigateLightbox(1));
    document.getElementById('lightbox')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeLightbox(); });

    // Hide loading 3D model indicator
    setTimeout(() => { 
        const loader = document.getElementById('loading-indicator');
        if (loader) loader.style.display = 'none';
    }, 2500);
});

/* -------------------------
   Gallery
   ------------------------- */
function initializeGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    galleryImages.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-index', index);

        item.innerHTML = `
            <img src="${img.url}" alt="${img.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${img.title}</h3>
                <p>${img.description}</p>
            </div>
        `;

        item.addEventListener('click', () => openLightbox(index));
        grid.appendChild(item);
    });
}

/* -------------------------
   GEAR (Add to Cart removed)
   ------------------------- */
function initializeGear() {
    const grid = document.getElementById('gear-grid');
    if (!grid) return;

    gearItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'gear-card';

        card.innerHTML = `
            <div class="gear-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="gear-content">
                <h3>${item.title}</h3>
                <div class="gear-price">${item.price}</div>
                <div class="gear-rating">${item.rating}</div>
                <p class="gear-description">${item.description}</p>
            </div>
        `;

        grid.appendChild(card);
    });
}

/* -------------------------
   Events – Horizontal Carousel
   ------------------------- */
function initializeEvents() {
    const track = document.getElementById('events-track');
    const carousel = document.getElementById('events-carousel');
    if (!track || !carousel) return;

    events.forEach((ev, index) => {
        const card = document.createElement('div');
        card.className = 'event-card not-in-view';
        card.setAttribute('data-index', index);

        card.innerHTML = `
            <div class="event-date">${ev.date}</div>
            <h3>${ev.title}</h3>
            <p><strong>Location:</strong> ${ev.location}</p>
            <p>${ev.description}</p>
            <button class="btn">Register Now</button>
        `;

        track.appendChild(card);
    });

    const cards = [...track.querySelectorAll('.event-card')];

    function updateVisibility() {
        const rect = carousel.getBoundingClientRect();
        const center = rect.left + rect.width / 2;

        cards.forEach(card => {
            const r = card.getBoundingClientRect();
            const cardCenter = r.left + r.width / 2;
            const dist = Math.abs(cardCenter - center);
            const threshold = Math.max(120, rect.width * 0.18);

            if (dist < threshold) {
                card.classList.add('in-view');
                card.classList.remove('not-in-view');
            } else {
                card.classList.add('not-in-view');
                card.classList.remove('in-view');
            }
        });
    }

    let ticking = false;
    function requestUpdate() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateVisibility();
                ticking = false;
            });
            ticking = true;
        }
    }

    carousel.addEventListener('scroll', requestUpdate);
    window.addEventListener('resize', requestUpdate);

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    carousel.addEventListener('pointerdown', e => {
        isDown = true;
        carousel.classList.add('dragging');
        startX = e.clientX;
        scrollStart = carousel.scrollLeft;
        carousel.setPointerCapture(e.pointerId);
    });

    carousel.addEventListener('pointermove', e => {
        if (!isDown) return;
        e.preventDefault();
        carousel.scrollLeft = scrollStart - (e.clientX - startX);
        requestUpdate();
    });

    function stopDrag(e) {
        if (!isDown) return;
        isDown = false;
        carousel.classList.remove('dragging');
        try { carousel.releasePointerCapture(e.pointerId); } catch {}
        requestUpdate();
    }

    carousel.addEventListener('pointerup', stopDrag);
    carousel.addEventListener('pointerleave', stopDrag);
    carousel.addEventListener('pointercancel', stopDrag);

    carousel.addEventListener('wheel', e => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            carousel.scrollLeft += e.deltaY;
            requestUpdate();
        }
    }, { passive: false });

    setTimeout(requestUpdate, 80);
}

/* -------------------------
   Tabs
   ------------------------- */
function initializeTabs() {
    const headers = document.querySelectorAll('.tab-header');
    const contents = document.querySelectorAll('.tab-content');
    headers.forEach(h => {
        h.addEventListener('click', function() {
            const id = this.getAttribute('data-tab');
            headers.forEach(x => x.classList.remove('active'));
            contents.forEach(x => x.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(`${id}-tab`)?.classList.add('active');
        });
    });
}

/* -------------------------
   NAV
   ------------------------- */
function initializeNav() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            navigateToSection(section);
        });
    });
}

function navigateToSection(sec) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    if (sec === 'home') {
        const home = document.getElementById('home-section');
        home?.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const el = document.getElementById(`${sec}-section`);
        el?.classList.add('active');
        el?.scrollIntoView({ behavior: 'smooth' });
    }
}

/* -------------------------
   Buttons
   ------------------------- */
function setupButtons() {
    document.getElementById('read-review-btn')?.addEventListener('click', e => {
        e.preventDefault();
        navigateToSection('reviews');
        showNotification('Loading full review...');
    });

    document.getElementById('view-gallery-btn')?.addEventListener('click', e => {
        e.preventDefault();
        navigateToSection('gallery');
        showNotification('Opening image gallery...');
    });

    document.getElementById('view-models-btn')?.addEventListener('click', e => {
        e.preventDefault();
        navigateToSection('models');
        showNotification('Viewing 3D models...');
    });
}

/* -------------------------
   Lightbox
   ------------------------- */
function openLightbox(index) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    if (!lb || !img) return;

    currentImageIndex = index;
    img.src = galleryImages[index].url;
    caption.textContent = `${galleryImages[index].title} - ${galleryImages[index].description}`;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox')?.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function navigateLightbox(dir) {
    currentImageIndex += dir;
    if (currentImageIndex < 0) currentImageIndex = galleryImages.length - 1;
    if (currentImageIndex >= galleryImages.length) currentImageIndex = 0;

    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-caption');
    img.src = galleryImages[currentImageIndex].url;
    cap.textContent = `${galleryImages[currentImageIndex].title} - ${galleryImages[currentImageIndex].description}`;
}

/* -------------------------
   Notification
   ------------------------- */
function showNotification(msg) {
    const notif = document.getElementById('notification');
    if (!notif) return;
    notif.textContent = msg;
    notif.classList.add('show');
    setTimeout(() => notif.classList.remove('show'), 3000);
}
