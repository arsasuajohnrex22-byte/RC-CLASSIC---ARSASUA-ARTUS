// Data Arrays (Fallback data)
const galleryImages = [
    {
        url: 'http://bikebrewers.com/bb-content/oldstuff/2017/06/Triumph-Bonneville-Cafe-Racer.jpg',
        title: 'Classic Cafe Racer',
        description: '1968 Triumph Bonneville - Restored to perfection'
    },
    {
        url: 'https://silodrome.com/wp-content/uploads/2015/10/Norton-Commando-Motorcycle-10-1600x1002.jpg',
        title: 'Vintage Scrambler',
        description: '1972 Norton Commando - Off-road ready'
    },
    {
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjic_pw2eKwCkIcinPqlkl_Jpk8au1TPpNI6N10MPRFa5jgNQcFxyFx5AuKoBIGgkFkGIZpqM3L6UVAl_Dgu54M6nsQYHu1_AIIHLrEYVOAbOdR7W1WeLtxiBSNcoV4Bg-nG6bhTam2BULy-D-evtZaKq9iJGh2zmRlhBtSbXD3pFfKpno5dVOWsYxgfw/s1280/BSA%20Gold%20Star%20Top%209%20British%20Classic%20Motorcycles.jpg',
        title: 'British Classic',
        description: '1965 BSA Gold Star - Museum quality restoration'
    },
    {
        url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        title: 'Custom Build',
        description: 'Hand-built cafe racer with modern performance'
    },
    {
        url: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        title: 'Racing Heritage',
        description: '1969 Honda CB750 - The original superbike'
    },
    {
        url: 'https://space-cdn.smokybike.com/smokybike.com-prod/listings/273148/conversions/LINE_ALBUM_2022.9.5-_1_%E0%B9%92%E0%B9%92%E0%B9%90%E0%B9%99%E0%B9%90%E0%B9%95_12-large.jpg',
        title: 'Desert Sled',
        description: '1975 Ducati Scrambler - Ready for adventure'
    }
];

const categories = [
    {
        id: "british",
        title: "British Classics",
        description: "Iconic motorcycles from Triumph, Norton, BSA, and other British manufacturers.",
        image: "https://ogden_images.s3.amazonaws.com/www.motorcycleclassics.com/images/2022/04/28153612/1949-57-BSA-Ariel-scaled.jpg",
        models: "120+ Models",
        years: "1950-1980"
    },
    {
        id: "japanese",
        title: "Japanese Legends",
        description: "Reliable and innovative bikes from Honda, Yamaha, Kawasaki, and Suzuki.",
        image: "https://bringatrailer.com/wp-content/uploads/2023/02/1987_kawasaki_zl1000-eliminator_pxl_20230225_203600279-12501.jpg?w=940",
        models: "150+ Models",
        years: "1960-1990"
    },
    {
        id: "custom",
        title: "Custom Builds",
        description: "One-of-a-kind custom motorcycles and cafe racers built by master craftsmen.",
        image: "https://wallpaperaccess.com/full/46852.jpg",
        models: "75+ Builds",
        years: "Custom"
    },
    {
        id: "cafe",
        title: "Cafe Racers",
        description: "Lightweight, minimalist bikes built for speed and style on city streets.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        models: "90+ Models",
        years: "1960-Present"
    }
];

const resources = [
    {
        id: "buyers-guide",
        title: "Buyer's Guide",
        description: "Our comprehensive buyer's guide provides everything you need to know before purchasing a vintage motorcycle. From price guides to inspection checklists, we've got you covered.",
        icon: "fas fa-book",
        items: [
            "Price guides for all major models",
            "Inspection checklist with 50+ points",
            "Common issues to watch for",
            "Restoration cost estimates",
            "Paperwork requirements"
        ],
        additionalInfo: [
            "Updated quarterly with current market prices",
            "Includes dealer vs private sale comparisons",
            "Regional price variations included",
            "Tips for negotiating the best price",
            "Financing options for vintage bikes"
        ]
    },
    {
        id: "restoration",
        title: "Restoration Tips",
        description: "Learn from our expert restorers with step-by-step guides, techniques, and insider tips for bringing vintage motorcycles back to their former glory.",
        icon: "fas fa-tools",
        items: [
            "Step-by-step restoration guides",
            "Parts sourcing tips worldwide",
            "Paint and chrome restoration",
            "Engine rebuilding techniques",
            "Electrical system updates"
        ],
        additionalInfo: [
            "Beginner to advanced restoration levels",
            "Tool recommendations for each project",
            "Time estimates for common repairs",
            "Cost breakdowns for restoration projects",
            "Before & after galleries for inspiration"
        ]
    },
    {
        id: "parts",
        title: "Parts Directory",
        description: "Find exactly what you need with our comprehensive directory of parts suppliers, manufacturers, and custom fabricators for vintage motorcycles.",
        icon: "fas fa-cogs",
        items: [
            "Global parts suppliers database",
            "OEM parts availability tracking",
            "Aftermarket parts reviews",
            "Custom parts fabricators",
            "Online marketplaces guide"
        ],
        additionalInfo: [
            "Verified supplier ratings & reviews",
            "Parts compatibility guides",
            "Shipping times & costs comparison",
            "Genuine vs reproduction parts guide",
            "International shipping solutions"
        ]
    },
    {
        id: "calendar",
        title: "Event Calendar",
        description: "Never miss a vintage motorcycle event again with our comprehensive calendar of shows, rallies, races, and club meetings worldwide.",
        icon: "fas fa-calendar-alt",
        items: [
            "International motorcycle shows",
            "Local club meetings & rides",
            "Vintage racing events",
            "Auction dates & previews",
            "Swap meets and markets"
        ],
        additionalInfo: [
            "Year-round event coverage",
            "Ticket purchase links included",
            "Venue maps & parking info",
            "Accommodation recommendations",
            "Event photography galleries"
        ]
    }
];

const gearItems = [
    {
        image: 'https://www.mr-styles.com/wp-content/uploads/2019/12/Vintage-Motorcycle-Harley-Davidson-Jacket.jpg',
        title: 'Vintage Leather Jacket',
        price: 'Editor\'s Choice',
        description: 'Our top-rated vintage-style leather jacket combines classic aesthetics with modern safety features. Perfect for both style and protection.',
        rating: '★★★★★',
        review: 'Exceptional quality leather with CE-approved armor. A perfect blend of vintage style and modern safety.'
    },
    {
        image: 'https://i0.wp.com/retroisback.com/wp-content/uploads/2020/12/GDM-REBEL-ECOTRIC-Vintage-Motorcycle-Helmet-Retro-Retroisback.com-.1.jpg',
        title: 'Retro Motorcycle Helmet',
        price: 'Top Pick',
        description: 'This vintage-style helmet offers DOT and ECE safety certifications while maintaining authentic retro design elements.',
        rating: '★★★★☆',
        review: 'Excellent ventilation and comfort. The classic look doesn\'t compromise on modern safety standards.'
    },
    {
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/merchandise/2024/97109-25vm/97109-25VM_F.jpg',
        title: 'Leather Riding Gloves',
        price: 'Best Value',
        description: 'Handcrafted leather gloves with reinforced palms and knuckle protection for the classic rider.',
        rating: '★★★★★',
        review: 'Superior grip and durability. These gloves break in beautifully and offer excellent protection.'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0213/0060/products/81EzpSkzxzL._SL1500.jpg?v=1571269569',
        title: 'Classic Motorcycle Boots',
        price: 'Premium Selection',
        description: 'Vintage-style boots featuring modern ankle protection and oil-resistant soles for safety and style.',
        rating: '★★★★☆',
        review: 'Authentic vintage appearance with modern protective features. Comfortable for all-day riding.'
    }
];

const events = [
    {
        id: 1,
        date: 'June 15, 2025',
        time: '9:00 AM - 6:00 PM',
        title: 'Vintage Motorcycle Show',
        location: 'World Trade Center, Metro Manila',
        description: 'Annual showcase of the finest vintage motorcycles from around the world. Featuring rare models, custom builds, and restoration competitions. This year\'s theme focuses on British classics with special exhibits from private collections.',
        attendance: '500+ Enthusiasts',
        entry: 'Free Admission',
        highlights: [
            "Live restoration demonstrations",
            "Expert panel discussions",
            "Vintage parts marketplace",
            "Ride-in show competition",
            "Photography contest"
        ]
    },
    {
        id: 2,
        date: 'July 22, 2025',
        time: '8:00 AM - 5:00 PM',
        title: 'Cafe Racer Rally',
        location: 'Circuit Makati, Metro Manila',
        description: 'Gathering of cafe racer enthusiasts from across the Philippines. Rideouts through the city, custom bike competitions, live music, and vendor displays. Experience the cafe racer culture at its finest.',
        attendance: '300+ Riders',
        entry: 'PHP 500 Registration',
        highlights: [
            "Custom bike competition",
            "Group ride through Metro Manila",
            "Live bands and entertainment",
            "Vendor marketplace",
            "Skills challenge"
        ]
    },
    {
        id: 3,
        date: 'August 10, 2025',
        time: '7:00 AM - 4:00 PM',
        title: 'British Classics Tour',
        location: 'Tagaytay Highlands, Cavite',
        description: 'Scenic tour through the beautiful Tagaytay countryside exclusively for British vintage motorcycles. Enjoy cool mountain air, stunning views of Taal Volcano, and camaraderie with fellow British bike enthusiasts.',
        attendance: '150+ Motorcycles',
        entry: 'PHP 1,000 (includes lunch)',
        highlights: [
            "Scenic mountain routes",
            "Photo stops at viewpoints",
            "Group lunch included",
            "Technical assistance team",
            "Commemorative patch"
        ]
    },
    {
        id: 4,
        date: 'September 5-7, 2025',
        time: 'All Day Event',
        title: 'Vintage Racing Weekend',
        location: 'Clark International Speedway, Pampanga',
        description: 'Historic motorcycle racing event featuring classic racing bikes from the 60s, 70s, and 80s. Watch these beautifully restored machines compete on the track in various vintage racing categories.',
        attendance: '200+ Racers, 1000+ Spectators',
        entry: 'PHP 300 per day',
        highlights: [
            "Multiple racing categories",
            "Paddock access available",
            "Vendor village",
            "Food and beverage stalls",
            "Awards ceremony"
        ]
    }
];

// Global variables
let currentImageIndex = 0;
let currentCalendarMonth = new Date().getMonth();
let currentCalendarYear = new Date().getFullYear();
let firebaseDataLoaded = false;

// Check authentication status
function checkAuth() {
    const userData = localStorage.getItem('vintagemoto_user');
    if (userData) {
        const user = JSON.parse(userData);
        console.log('✅ User logged in:', user.email);
        return user;
    } else {
        console.log('ℹ️ No user logged in');
        return null;
    }
}

// Add login/logout functionality to header (next to Events tab)
function setupAuthUI() {
    const user = checkAuth();
    const navUl = document.querySelector('nav ul');
    
    if (!navUl) return;
    
    // Remove any existing auth container
    const existingAuthContainer = document.querySelector('.auth-container');
    if (existingAuthContainer) {
        existingAuthContainer.remove();
    }
    
    // Create auth list item
    const authLi = document.createElement('li');
    authLi.className = 'auth-container';
    
    if (user) {
        // User is logged in - show profile dropdown
        authLi.innerHTML = `
            <div class="user-dropdown">
                <button class="user-btn">
                    <i class="fas fa-user-circle"></i>
                    <span class="user-name">${user.displayName || user.email.split('@')[0]}</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="dropdown-menu">
                    <a href="profile.html" class="dropdown-item">
                        <i class="fas fa-user"></i> Profile
                    </a>
                    <a href="my-collection.html" class="dropdown-item">
                        <i class="fas fa-motorcycle"></i> My Collection
                    </a>
                    <a href="settings.html" class="dropdown-item">
                        <i class="fas fa-cog"></i> Settings
                    </a>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item logout-btn">
                        <i class="fas fa-sign-out-alt"></i> Logout
                    </button>
                </div>
            </div>
        `;
    } else {
        // User is not logged in - show login button
        authLi.innerHTML = `
            <a href="login.html" class="nav-link nav-auth">
                <i class="fas fa-sign-in-alt"></i> Login
            </a>
        `;
    }
    
    // Insert after the Events tab (which is the 7th list item)
    const eventsTab = navUl.querySelector('li:nth-child(7)');
    if (eventsTab) {
        eventsTab.insertAdjacentElement('afterend', authLi);
    } else {
        // If Events tab not found, append to end
        navUl.appendChild(authLi);
    }
    
    // Add logout functionality
    const logoutBtn = authLi.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (window.firebaseAuth) {
                window.firebaseAuth.signOut().then(() => {
                    localStorage.removeItem('vintagemoto_user');
                    window.location.reload();
                }).catch(error => {
                    console.error('Logout error:', error);
                    showNotification('Logout failed: ' + error.message);
                });
            }
        });
    }
    
    // Add dropdown toggle functionality
    const userBtn = authLi.querySelector('.user-btn');
    const dropdownMenu = authLi.querySelector('.dropdown-menu');
    
    if (userBtn && dropdownMenu) {
        userBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            dropdownMenu.classList.remove('show');
        });
    }
    
    // Handle navigation for auth link
    const authLink = authLi.querySelector('.nav-auth');
    if (authLink) {
        authLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'login.html';
        });
    }
}

// Check Firebase availability
function checkFirebaseAvailability() {
    return window.firebaseDB && typeof window.firebaseDB === 'object';
}

// Load data from Firebase or use fallback
async function loadDataFromFirebase(collectionName) {
    if (!checkFirebaseAvailability()) {
        console.log(`Firebase not available, using fallback data for ${collectionName}`);
        return getFallbackData(collectionName);
    }
    
    try {
        const snapshot = await window.firebaseDB.collection(collectionName).get();
        const data = [];
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() });
        });
        
        if (data.length > 0) {
            console.log(`Loaded ${data.length} items from Firebase ${collectionName}`);
            return data;
        } else {
            console.log(`Firebase ${collectionName} is empty, using fallback data`);
            return getFallbackData(collectionName);
        }
    } catch (error) {
        console.error(`Error loading ${collectionName} from Firebase:`, error);
        return getFallbackData(collectionName);
    }
}

// Get fallback data
function getFallbackData(collectionName) {
    switch(collectionName) {
        case 'categories': return categories;
        case 'gallery': return galleryImages;
        case 'resources': return resources;
        case 'gear': return gearItems;
        case 'events': return events;
        default: return [];
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', async function() {
    console.log('Document loaded - initializing components');
    
    // Check Firebase status
    if (checkFirebaseAvailability()) {
        console.log('✅ Firebase is available');
        firebaseDataLoaded = true;
    } else {
        console.log('⚠️ Firebase not available, using fallback data');
        firebaseDataLoaded = false;
    }
    
    // Setup auth UI
    setupAuthUI();
    
    // Load data and initialize sections
    await initializeAllSections();
    
    // Initialize other components
    initializeTabs();
    initializeNavigation();
    initializeFooterLinks();
    initializeButtons();
    initializeLightbox();
    initializeResourceModal();
    initializeEventModal();
    initializeMobileMenu();
    initializeScrollToTop();
    
    // Initialize lazy loading for all images
    setTimeout(() => {
        lazyLoadImages();
    }, 100);
    
    // Initialize clock and calendar
    initializeClock();
    initializeCalendar();
    
    // Hide loading indicator after model loads
    setTimeout(() => {
        const loader = document.getElementById('loading-indicator');
        if (loader) loader.style.display = 'none';
    }, 3000);
});

// Initialize all sections with data
async function initializeAllSections() {
    console.log('Loading data from Firebase...');
    
    // Load all data in parallel
    const [categoriesData, galleryData, resourcesData, gearData, eventsData] = await Promise.all([
        loadDataFromFirebase('categories'),
        loadDataFromFirebase('gallery'),
        loadDataFromFirebase('resources'),
        loadDataFromFirebase('gear'),
        loadDataFromFirebase('events')
    ]);
    
    // Initialize each section with loaded data
    initializeCategories(categoriesData);
    initializeGallery(galleryData);
    initializeResources(resourcesData);
    initializeGear(gearData);
    initializeEvents(eventsData);
    
    showNotification(firebaseDataLoaded ? 
        '✅ Data loaded from Firebase' : 
        '⚠️ Using fallback data (Firebase not configured)');
}

// Initialize Categories
function initializeCategories(categoriesData) {
    const categoriesGrid = document.getElementById('categories-grid');
    categoriesGrid.innerHTML = '';
    
    categoriesData.forEach((category, index) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.setAttribute('data-category', category.id || category.title.toLowerCase().replace(/\s+/g, '-'));
        
        categoryCard.innerHTML = `
            <div class="category-image">
                <img src="" data-src="${category.image}" alt="${category.title}" class="lazy">
            </div>
            <div class="category-content">
                <div class="category-badge">${category.id || category.title.substring(0, 3)}</div>
                <h3>${category.title}</h3>
                <p>${category.description}</p>
                <div class="category-stats">
                    <div>Models: <span>${category.models || 'Various'}</span></div>
                    <div>Years: <span>${category.years || 'Classic'}</span></div>
                </div>
            </div>
        `;
        
        categoryCard.addEventListener('click', function() {
            const categoryId = this.getAttribute('data-category');
            showCategoryDetails(categoryId, categoriesData);
        });
        
        categoriesGrid.appendChild(categoryCard);
    });
}

// Initialize Gallery
function initializeGallery(galleryData) {
    const galleryGrid = document.getElementById('gallery-grid');
    galleryGrid.innerHTML = '';
    
    galleryData.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-index', index);
        
        galleryItem.innerHTML = `
            <img src="" data-src="${image.url}" alt="${image.title}" class="lazy">
            <div class="gallery-overlay">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openLightbox(index, galleryData));
        galleryGrid.appendChild(galleryItem);
    });
}

// Initialize Resources
function initializeResources(resourcesData) {
    const resourcesGrid = document.getElementById('resources-grid');
    resourcesGrid.innerHTML = '';
    
    resourcesData.forEach((resource, index) => {
        const resourceCard = document.createElement('div');
        resourceCard.className = 'resource-card';
        resourceCard.setAttribute('data-resource', resource.id || resource.title.toLowerCase().replace(/\s+/g, '-'));
        
        const listItems = (resource.items || []).map(item => `
            <li><i class="fas fa-check"></i> ${item}</li>
        `).join('');
        
        resourceCard.innerHTML = `
            <div class="resource-icon">
                <i class="${resource.icon || 'fas fa-book'}"></i>
            </div>
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            ${listItems ? `<ul class="resource-list">${listItems}</ul>` : ''}
            <button class="btn view-details-btn" data-resource="${resource.id || resource.title.toLowerCase().replace(/\s+/g, '-')}">View Details</button>
        `;
        
        resourcesGrid.appendChild(resourceCard);
    });
}

// Initialize Gear
function initializeGear(gearData) {
    const gearGrid = document.getElementById('gear-grid');
    gearGrid.innerHTML = '';
    
    gearData.forEach((item, index) => {
        const gearCard = document.createElement('div');
        gearCard.className = 'gear-card';
        gearCard.setAttribute('data-gear', index);
        
        gearCard.innerHTML = `
            <div class="gear-image">
                <img src="" data-src="${item.image}" alt="${item.title}" class="lazy">
            </div>
            <div class="gear-content">
                <h3>${item.title}</h3>
                <div class="gear-price">${item.price || 'Check Price'}</div>
                <div class="gear-rating">${item.rating || '★★★★☆'}</div>
                <p class="gear-description">${item.description}</p>
                <button class="btn read-review-btn">Read Full Review</button>
            </div>
        `;
        
        gearGrid.appendChild(gearCard);
        
        gearCard.querySelector('.read-review-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            showGearReview(item);
        });
        
        gearCard.addEventListener('click', function(e) {
            if (!e.target.classList.contains('btn')) {
                showGearReview(item);
            }
        });
    });
}

// Initialize Events
function initializeEvents(eventsData) {
    const eventsTimeline = document.getElementById('events-timeline');
    eventsTimeline.innerHTML = '';
    
    eventsData.forEach((event, index) => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        eventItem.setAttribute('data-event', event.id || index);
        
        eventItem.innerHTML = `
            <div class="event-content">
                <div class="event-date">${event.date || 'TBD'}</div>
                <div class="event-time">${event.time || 'All Day'}</div>
                <h3>${event.title}</h3>
                <p><strong>Location:</strong> ${event.location || 'To be announced'}</p>
                <p>${(event.description || '').substring(0, 150)}...</p>
                <button class="btn view-event-details-btn">View Details</button>
            </div>
        `;
        
        eventsTimeline.appendChild(eventItem);
        
        eventItem.querySelector('.view-event-details-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            showEventDetails(event);
        });
        
        eventItem.querySelector('.event-content').addEventListener('click', function(e) {
            if (!e.target.classList.contains('btn')) {
                showEventDetails(event);
            }
        });
    });
}

// Initialize Clock
function initializeClock() {
    function updateClock() {
        const now = new Date();
        const options = { 
            timeZone: 'Asia/Manila',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        
        const timeString = now.toLocaleTimeString('en-PH', options);
        const dateString = now.toLocaleDateString('en-PH', { 
            timeZone: 'Asia/Manila',
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        const timeEl = document.getElementById('current-time');
        const dateEl = document.getElementById('current-date');
        
        if (timeEl) timeEl.textContent = timeString;
        if (dateEl) dateEl.textContent = dateString;
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

// Initialize Calendar
function initializeCalendar() {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    function renderCalendar() {
        const calendarGrid = document.getElementById('calendar-dates');
        const monthYear = document.getElementById('calendar-month');
        
        if (!calendarGrid || !monthYear) return;
        
        // Set month and year
        monthYear.textContent = `${monthNames[currentCalendarMonth]} ${currentCalendarYear}`;
        
        // Clear previous calendar
        calendarGrid.innerHTML = '';
        
        // Add day headers
        dayNames.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day weekday';
            dayElement.textContent = day;
            calendarGrid.appendChild(dayElement);
        });
        
        // Get first day of month
        const firstDay = new Date(currentCalendarYear, currentCalendarMonth, 1);
        const startingDay = firstDay.getDay();
        
        // Get days in month
        const daysInMonth = new Date(currentCalendarYear, currentCalendarMonth + 1, 0).getDate();
        
        // Get today's date
        const today = new Date();
        const isCurrentMonth = today.getMonth() === currentCalendarMonth && today.getFullYear() === currentCalendarYear;
        
        // Add blank days for starting day
        for (let i = 0; i < startingDay; i++) {
            const blankDay = document.createElement('div');
            blankDay.className = 'calendar-date';
            calendarGrid.appendChild(blankDay);
        }
        
        // Add days of month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateElement = document.createElement('div');
            dateElement.className = 'calendar-date';
            dateElement.textContent = day;
            
            // Check if today
            if (isCurrentMonth && day === today.getDate()) {
                dateElement.classList.add('today');
            }
            
            calendarGrid.appendChild(dateElement);
        }
    }
    
    // Navigation buttons
    const prevBtn = document.getElementById('prev-month');
    const nextBtn = document.getElementById('next-month');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentCalendarMonth--;
            if (currentCalendarMonth < 0) {
                currentCalendarMonth = 11;
                currentCalendarYear--;
            }
            renderCalendar();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentCalendarMonth++;
            if (currentCalendarMonth > 11) {
                currentCalendarMonth = 0;
                currentCalendarYear++;
            }
            renderCalendar();
        });
    }
    
    // Initial render
    renderCalendar();
}

// Initialize Navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const logo = document.getElementById('home-logo');
    
    // Logo click event
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToSection('home');
            updateActiveNav('home');
        });
    }
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            
            navigateToSection(section);
            updateActiveNav(section);
        });
    });
}

// Initialize Mobile Menu
function initializeMobileMenu() {
    const mobileBtn = document.createElement('button');
    mobileBtn.className = 'mobile-menu-btn';
    mobileBtn.id = 'mobile-menu-btn';
    mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    const headerContent = document.querySelector('.header-content');
    const nav = document.querySelector('nav ul');
    
    if (!headerContent || !nav) return;
    
    // Only add if not already there
    if (!document.getElementById('mobile-menu-btn')) {
        headerContent.appendChild(mobileBtn);
    }
    
    mobileBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileBtn.innerHTML = nav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Also close when clicking auth links
    document.addEventListener('click', (e) => {
        if (e.target.closest('.nav-auth') || e.target.closest('.user-btn')) {
            nav.classList.remove('active');
            mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && !e.target.closest('.mobile-menu-btn')) {
            nav.classList.remove('active');
            mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

// Initialize Scroll to Top Button
function initializeScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-top-btn';
    scrollBtn.id = 'scroll-top';
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(scrollBtn);
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
}

// Update active navigation
function updateActiveNav(section) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`[data-section="${section}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Initialize Resource Modal
function initializeResourceModal() {
    const modal = document.getElementById('resource-modal');
    const closeBtn = document.getElementById('modal-close');
    const downloadBtn = document.getElementById('modal-download-btn');
    const printBtn = document.getElementById('modal-print-btn');
    const shareBtn = document.getElementById('modal-share-btn');
    
    if (!modal) return;
    
    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', closeResourceModal);
    }
    
    // Close modal when clicking outside content
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeResourceModal();
        }
    });
    
    // Remove event listeners from buttons since we're hiding them
    if (downloadBtn) {
        downloadBtn.style.display = 'none';
    }
    
    if (printBtn) {
        printBtn.style.display = 'none';
    }
    
    if (shareBtn) {
        shareBtn.style.display = 'none';
    }
    
    // Add event listeners to View Details buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-details-btn')) {
            e.stopPropagation();
            const resourceId = e.target.getAttribute('data-resource');
            openResourceModal(resourceId);
        }
    });
    
    // Add event listeners to resource cards (click anywhere on card)
    document.querySelectorAll('.resource-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('btn')) {
                const resourceId = this.getAttribute('data-resource');
                openResourceModal(resourceId);
            }
        });
    });
}

// Open Resource Modal - UPDATED: Hides action buttons for resources too
function openResourceModal(resourceId) {
    // Find resource in loaded data
    const resources = getFallbackData('resources');
    const resource = resources.find(r => 
        (r.id === resourceId) || 
        (r.title.toLowerCase().replace(/\s+/g, '-') === resourceId)
    );
    
    if (!resource) return;
    
    const modal = document.getElementById('resource-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalIcon = document.getElementById('modal-icon');
    const modalDescription = document.getElementById('modal-description');
    const modalFeatures = document.getElementById('modal-features');
    const modalAdditionalInfo = document.getElementById('modal-additional-info');
    const modalActions = document.querySelector('.resource-modal-actions');
    
    if (!modal || !modalTitle || !modalIcon || !modalDescription || !modalFeatures || !modalAdditionalInfo) return;
    
    // Set modal content
    modalTitle.textContent = resource.title;
    modalIcon.className = resource.icon || 'fas fa-book';
    modalDescription.textContent = resource.description;
    
    // Clear existing lists
    modalFeatures.innerHTML = '';
    modalAdditionalInfo.innerHTML = '';
    
    // Add features
    (resource.items || []).forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${item}`;
        modalFeatures.appendChild(li);
    });
    
    // Add additional info
    (resource.additionalInfo || []).forEach(info => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-info-circle"></i> ${info}`;
        modalAdditionalInfo.appendChild(li);
    });
    
    // Hide the action buttons for resources (same as gear reviews)
    if (modalActions) {
        modalActions.style.display = 'none';
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Update notification
    showNotification(`Opening ${resource.title} details`);
}

// Close Resource Modal
function closeResourceModal() {
    const modal = document.getElementById('resource-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        showNotification('Resource details closed');
    }
}

// Show Gear Review - UPDATED: Hides action buttons
function showGearReview(gearItem) {
    const modal = document.getElementById('resource-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalIcon = document.getElementById('modal-icon');
    const modalDescription = document.getElementById('modal-description');
    const modalFeatures = document.getElementById('modal-features');
    const modalAdditionalInfo = document.getElementById('modal-additional-info');
    const modalActions = document.querySelector('.resource-modal-actions');
    
    if (!modal || !modalTitle || !modalIcon || !modalDescription || !modalFeatures || !modalAdditionalInfo) return;
    
    // Set modal content for gear review
    modalTitle.textContent = `${gearItem.title} - Review`;
    modalIcon.className = "fas fa-star";
    modalDescription.textContent = gearItem.review || 'No review available';
    
    // Clear existing lists
    modalFeatures.innerHTML = '';
    modalAdditionalInfo.innerHTML = '';
    
    // Add features
    const features = [
        "Expert tested and reviewed",
        "Vintage style with modern safety",
        "Durable construction",
        "Comfortable for long rides",
        "Authentic vintage aesthetic"
    ];
    
    features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
        modalFeatures.appendChild(li);
    });
    
    // Add additional info
    const additionalInfo = [
        `Rating: ${gearItem.rating || '★★★★☆'}`,
        `Category: ${gearItem.price || 'Check Price'}`,
        "Review Date: March 2025",
        "Reviewer: VintageMoto Gear Team",
        "Testing Period: 3 months"
    ];
    
    additionalInfo.forEach(info => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-info-circle"></i> ${info}`;
        modalAdditionalInfo.appendChild(li);
    });
    
    // Hide the action buttons for gear reviews
    if (modalActions) {
        modalActions.style.display = 'none';
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Update notification
    showNotification(`Opening ${gearItem.title} review`);
}

// Initialize Event Modal
function initializeEventModal() {
    const modal = document.getElementById('event-modal');
    const closeBtn = document.getElementById('event-modal-close');
    const addCalendarBtn = document.getElementById('event-add-calendar-btn');
    const directionsBtn = document.getElementById('event-directions-btn');
    const shareBtn = document.getElementById('event-share-btn');
    
    if (!modal) return;
    
    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', closeEventModal);
    }
    
    // Close modal when clicking outside content
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeEventModal();
        }
    });
    
    // Add to Calendar button
    if (addCalendarBtn) {
        addCalendarBtn.addEventListener('click', function() {
            const title = document.getElementById('event-modal-title')?.textContent || 'Event';
            showNotification(`Adding ${title} to your calendar...`);
        });
    }
    
    // Directions button
    if (directionsBtn) {
        directionsBtn.addEventListener('click', function() {
            const location = document.getElementById('event-modal-location')?.textContent || 'location';
            showNotification(`Getting directions to ${location}...`);
        });
    }
    
    // Share button
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            const title = document.getElementById('event-modal-title')?.textContent || 'Event';
            showNotification(`Sharing ${title} event...`);
        });
    }
}

// Show Event Details
function showEventDetails(event) {
    const modal = document.getElementById('event-modal');
    const modalTitle = document.getElementById('event-modal-title');
    const modalDate = document.getElementById('event-modal-date');
    const modalTime = document.getElementById('event-modal-time');
    const modalLocation = document.getElementById('event-modal-location');
    const modalAttendance = document.getElementById('event-modal-attendance');
    const modalEntry = document.getElementById('event-modal-entry');
    const modalDescription = document.getElementById('event-modal-description');
    const modalHighlights = document.getElementById('event-modal-highlights');
    
    if (!modal || !modalTitle) return;
    
    // Set modal content
    modalTitle.textContent = event.title;
    if (modalDate) modalDate.textContent = event.date || 'TBD';
    if (modalTime) modalTime.textContent = event.time || 'All Day';
    if (modalLocation) modalLocation.textContent = event.location || 'To be announced';
    if (modalAttendance) modalAttendance.textContent = event.attendance || 'Various';
    if (modalEntry) modalEntry.textContent = event.entry || 'Check website';
    if (modalDescription) modalDescription.textContent = event.description || 'No description available';
    
    // Clear existing highlights
    if (modalHighlights) {
        modalHighlights.innerHTML = '';
        
        // Add highlights
        (event.highlights || []).forEach(highlight => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check-circle"></i> ${highlight}`;
            modalHighlights.appendChild(li);
        });
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Update notification
    showNotification(`Opening ${event.title} details`);
}

// Close Event Modal
function closeEventModal() {
    const modal = document.getElementById('event-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        showNotification('Event details closed');
    }
}

// Initialize Tabs
function initializeTabs() {
    const tabHeaders = document.querySelectorAll('.tab-header');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabHeaders.forEach(h => h.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            const tabContent = document.getElementById(`${tabId}-tab`);
            if (tabContent) tabContent.classList.add('active');
        });
    });
}

// Initialize Footer Links
function initializeFooterLinks() {
    // Category links in footer
    const categoryLinks = document.querySelectorAll('.footer-category-link');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const categoryId = this.getAttribute('data-category');
            navigateToSection('categories');
            updateActiveNav('categories');
            setTimeout(() => showCategoryDetails(categoryId), 500);
        });
    });
    
    // Resource links in footer
    const resourceLinks = document.querySelectorAll('.footer-resource-link');
    resourceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const resourceId = this.getAttribute('data-resource');
            navigateToSection('resources');
            updateActiveNav('resources');
            setTimeout(() => openResourceModal(resourceId), 500);
        });
    });
}

// Initialize Buttons
function initializeButtons() {
    // Home page buttons
    const readReviewBtn = document.getElementById('read-review-btn');
    if (readReviewBtn) {
        readReviewBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Loading full review...');
            navigateToSection('categories');
            updateActiveNav('categories');
        });
    }
    
    const viewGalleryBtn = document.getElementById('view-gallery-btn');
    if (viewGalleryBtn) {
        viewGalleryBtn.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToSection('gallery');
            updateActiveNav('gallery');
            showNotification('Opening image gallery...');
        });
    }
    
    const viewModelsBtn = document.getElementById('view-models-btn');
    if (viewModelsBtn) {
        viewModelsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToSection('models');
            updateActiveNav('models');
            showNotification('Viewing 3D models');
        });
    }
    
    // Reset view button for 3D model
    const resetViewBtn = document.getElementById('reset-view-btn');
    if (resetViewBtn) {
        resetViewBtn.addEventListener('click', function() {
            const iframe = document.getElementById('sketchfab-iframe');
            if (iframe) {
                iframe.src = iframe.src;
                showNotification('3D View reset to default');
            }
        });
    }
}

// Initialize Lightbox
function initializeLightbox() {
    // Lightbox event listeners
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightbox = document.getElementById('lightbox');
    
    if (!lightboxClose || !lightboxPrev || !lightboxNext || !lightbox) return;
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                navigateLightbox(-1);
            } else if (e.key === 'ArrowRight') {
                navigateLightbox(1);
            }
        }
        
        // Also close modals with Escape
        const resourceModal = document.getElementById('resource-modal');
        const eventModal = document.getElementById('event-modal');
        
        if (resourceModal && resourceModal.classList.contains('active') && e.key === 'Escape') {
            closeResourceModal();
        }
        
        if (eventModal && eventModal.classList.contains('active') && e.key === 'Escape') {
            closeEventModal();
        }
    });
}

// Lazy Load Images
function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('img.lazy');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.onload = () => {
                        img.classList.add('loaded');
                        img.classList.remove('lazy');
                    };
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.onload = () => {
                img.classList.add('loaded');
                img.classList.remove('lazy');
            };
        });
    }
}

// Show Category Details
function showCategoryDetails(categoryId, categoriesData) {
    const categories = categoriesData || getFallbackData('categories');
    const category = categories.find(c => 
        (c.id === categoryId) || 
        (c.title.toLowerCase().replace(/\s+/g, '-') === categoryId)
    );
    
    if (!category) return;
    
    // Create modal or show detailed view
    showNotification(`Loading ${category.title} category...`);
    
    // For now, just show notification
    setTimeout(() => {
        showNotification(`${category.title}: ${category.description}`);
    }, 100);
}

// Lightbox Functions
function openLightbox(index, galleryData) {
    const galleryImages = galleryData || getFallbackData('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    if (!lightbox || !lightboxImg || !lightboxCaption) return;
    
    lightboxImg.src = galleryImages[index].url;
    lightboxCaption.textContent = `${galleryImages[index].title} - ${galleryImages[index].description}`;
    lightbox.classList.add('active');
    
    currentImageIndex = index;
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function navigateLightbox(direction) {
    const galleryImages = getFallbackData('gallery');
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    if (!lightboxImg || !lightboxCaption) return;
    
    lightboxImg.src = galleryImages[currentImageIndex].url;
    lightboxCaption.textContent = `${galleryImages[currentImageIndex].title} - ${galleryImages[currentImageIndex].description}`;
}

// Navigation Functions
function navigateToSection(section) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });
    
    if (section === 'home') {
        const homeSection = document.getElementById('home-section');
        if (homeSection) {
            homeSection.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        const sectionElement = document.getElementById(`${section}-section`);
        if (sectionElement) {
            sectionElement.classList.add('active');
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Notification Function
function showNotification(message) {
    const notification = document.getElementById('notification');
    if (notification) {
        notification.textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}