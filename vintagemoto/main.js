// main.js - All JavaScript functionality

// =============================================
// NEW: DATABASE CONFIGURATION
// =============================================
const API_BASE_URL = '/vintage-moto/api/';

// Database connection status
let isDatabaseConnected = false;

// =============================================
// UPDATED: MOTORCYCLE REVIEWS SEARCH API
// =============================================
class MotorcycleReviewsSearch {
    constructor() {
        this.currentPage = 1;
        this.itemsPerPage = 6;
        this.allReviews = [];
        this.filteredReviews = [];
        this.isLoading = false;
        
        this.init();
    }
    
    async init() {
        // Try to load from database first, fallback to sample data
        await this.loadReviewsData();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Display initial results
        this.displayResults();
    }
    
    async loadReviewsData() {
        this.showLoading(true);
        
        try {
            console.log('📡 Attempting to fetch reviews from database...');
            
            const response = await fetch(`${API_BASE_URL}get_reviews.php`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const dbReviews = await response.json();
            
            if (dbReviews.error) {
                throw new Error(dbReviews.error);
            }
            
            // Transform database format to match our expected format
            this.allReviews = dbReviews.map(review => ({
                id: review.id || 0,
                name: review.name || `${review.brand} ${review.modelName}`,
                brand: review.brand || 'Unknown',
                year: parseInt(review.year) || 1970,
                rating: parseFloat(review.rating) || 4.0,
                excerpt: review.excerpt || (review.content ? review.content.substring(0, 150) + '...' : 'No description available'),
                fullReview: review.fullReview || review.content || 'No full review available',
                reviewDate: review.reviewDate || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                tags: review.tags || [],
                specs: {
                    engine: review.engine || 'Unknown',
                    power: review.power || 'Unknown',
                    torque: review.torque || 'Unknown',
                    transmission: '5-speed manual',
                    weight: review.weight || 'Unknown',
                    topSpeed: review.topSpeed || 'Unknown'
                }
            }));
            
            console.log(`✅ Successfully loaded ${this.allReviews.length} reviews from database`);
            isDatabaseConnected = true;
            
        } catch (error) {
            console.warn('⚠️ Database not available, using sample data:', error.message);
            // Fallback to sample data
            this.allReviews = this.getSampleReviewsData();
            isDatabaseConnected = false;
        }
        
        this.filteredReviews = [...this.allReviews];
        this.updateSearchStats();
        this.showLoading(false);
    }
    
    getSampleReviewsData() {
        return [
            {
                id: 1,
                name: "Sportster Iron 883",
                brand: "Harley-Davidson",
                year: 2018,
                rating: 4.2,
                excerpt: "A modern classic with the signature Harley rumble. Great for city riding but could use a 6th gear for highway cruising.",
                fullReview: "The Harley-Davidson Sportster Iron 883 represents the perfect entry point into the Harley world while maintaining that classic cruiser aesthetic. The 883cc Evolution engine delivers that signature V-twin rumble that Harley is famous for. While it's perfect for city commuting and weekend rides, some riders might find it lacking on long highway stretches due to the 5-speed transmission. The custom blacked-out styling gives it a mean look that stands out in any crowd.",
                reviewDate: "March 15, 2025",
                tags: ["Cruiser", "Air-cooled", "Beginner-friendly", "Customizable", "V-twin"],
                specs: {
                    engine: "883cc V-Twin",
                    power: "50 HP @ 6,000 RPM",
                    torque: "69 Nm @ 3,500 RPM",
                    transmission: "5-speed manual",
                    weight: "256 kg",
                    topSpeed: "180 km/h"
                }
            },
            {
                id: 2,
                name: "Bonnie T120",
                brand: "Triumph",
                year: 2017,
                rating: 4.7,
                excerpt: "Perfect blend of classic styling and modern performance. The parallel twin engine is smooth and torquey.",
                fullReview: "The Triumph Bonneville T120 is a masterpiece of modern engineering wrapped in timeless British styling. The 1200cc parallel-twin engine delivers smooth, linear power that's perfect for both city streets and country roads. The attention to detail is exceptional, from the classic tank badges to the modern LED lighting. With features like traction control, ride-by-wire throttle, and ABS, it offers modern safety without compromising the vintage look.",
                reviewDate: "February 28, 2025",
                tags: ["Classic", "British", "Liquid-cooled", "Retro", "Parallel-twin"],
                specs: {
                    engine: "1200cc Parallel Twin",
                    power: "79 HP @ 6,550 RPM",
                    torque: "105 Nm @ 3,100 RPM",
                    transmission: "6-speed manual",
                    weight: "224 kg",
                    topSpeed: "200 km/h"
                }
            },
            {
                id: 3,
                name: "R80 G/S",
                brand: "BMW",
                year: 1981,
                rating: 4.5,
                excerpt: "The original adventure bike. Legendary reliability and off-road capability. A true icon.",
                fullReview: "The BMW R80 G/S is the motorcycle that started the adventure bike revolution. Its horizontally-opposed 'boxer' twin engine provides excellent stability and a low center of gravity. The single-sided swingarm (Monolever) was revolutionary for its time and remains a distinctive feature. While not as powerful as modern adventure bikes, the R80 G/S offers unparalleled character and reliability that has made it a cult classic among collectors and adventurers alike.",
                reviewDate: "January 10, 2025",
                tags: ["Adventure", "Boxer Engine", "Enduro", "German", "Collector"],
                specs: {
                    engine: "798cc Boxer Twin",
                    power: "50 HP @ 6,500 RPM",
                    torque: "59 Nm @ 5,500 RPM",
                    transmission: "5-speed manual",
                    weight: "186 kg",
                    topSpeed: "170 km/h"
                }
            },
            {
                id: 4,
                name: "Commando 850",
                brand: "Norton",
                year: 1973,
                rating: 4.3,
                excerpt: "British engineering at its finest. The isolastic frame really works to reduce vibration.",
                fullReview: "The Norton Commando 850 represents the pinnacle of British motorcycle engineering. Its revolutionary 'Isolastic' frame system effectively isolates the engine and transmission from the main frame, dramatically reducing vibration transmitted to the rider. The 828cc parallel-twin engine delivers smooth power with that distinctive British character. While maintenance requires more attention than modern bikes, the riding experience is truly unique and rewarding for the vintage motorcycle enthusiast.",
                reviewDate: "December 5, 2024",
                tags: ["Classic", "British", "Cafe Racer", "Collector", "Parallel-twin"],
                specs: {
                    engine: "828cc Parallel Twin",
                    power: "60 HP @ 6,200 RPM",
                    torque: "71 Nm @ 5,000 RPM",
                    transmission: "4-speed manual",
                    weight: "205 kg",
                    topSpeed: "185 km/h"
                }
            },
            {
                id: 5,
                name: "Scout Bobber",
                brand: "Indian",
                year: 2020,
                rating: 4.6,
                excerpt: "Aggressive styling with surprising performance. The liquid-cooled V-twin delivers smooth power.",
                fullReview: "The Indian Scout Bobber combines aggressive, minimalist styling with modern performance technology. The 1133cc liquid-cooled V-twin engine delivers impressive power throughout the rev range, making it surprisingly quick for a cruiser. The slammed stance, blacked-out components, and solo seat create a menacing presence on the road. Despite its aggressive looks, it remains comfortable for longer rides thanks to well-engineered ergonomics and suspension.",
                reviewDate: "November 20, 2024",
                tags: ["Bobber", "Cruiser", "Modern Classic", "American", "V-twin"],
                specs: {
                    engine: "1133cc V-Twin",
                    power: "100 HP @ 8,000 RPM",
                    torque: "97 Nm @ 5,600 RPM",
                    transmission: "6-speed manual",
                    weight: "251 kg",
                    topSpeed: "210 km/h"
                }
            },
            {
                id: 6,
                name: "Monster 900",
                brand: "Ducati",
                year: 1993,
                rating: 4.4,
                excerpt: "The original naked bike. Raw, visceral, and full of character. Not for the faint of heart.",
                fullReview: "The original Ducati Monster 900 created the naked bike category and remains a benchmark for character and style. The 904cc L-twin engine delivers that distinctive Ducati sound and feel - raw, visceral, and full of personality. The trellis frame, now a Ducati signature, was revolutionary in its simplicity and effectiveness. While it lacks the refinement of modern Monsters, the original 900 offers a purity of riding experience that many enthusiasts prefer.",
                reviewDate: "October 15, 2024",
                tags: ["Naked", "Italian", "L-twin", "Sport", "Iconic"],
                specs: {
                    engine: "904cc L-Twin",
                    power: "73 HP @ 7,000 RPM",
                    torque: "75 Nm @ 6,000 RPM",
                    transmission: "5-speed manual",
                    weight: "198 kg",
                    topSpeed: "210 km/h"
                }
            },
            {
                id: 7,
                name: "CB750 Four",
                brand: "Honda",
                year: 1969,
                rating: 4.8,
                excerpt: "The motorcycle that changed everything. Reliable, fast, and affordable. A true milestone.",
                fullReview: "The Honda CB750 Four is arguably the most important motorcycle ever made. It introduced the world to the modern superbike with its reliable 736cc inline-four engine, front disc brake, and electric start - features that were extraordinary in 1969. Dubbed the 'Universal Japanese Motorcycle,' it set the standard for performance, reliability, and value that competitors struggled to match for years. Today, it remains a highly sought-after collector's item and a testament to Honda's engineering prowess.",
                reviewDate: "September 8, 2024",
                tags: ["UJM", "Japanese", "Inline-four", "Historic", "Collector"],
                specs: {
                    engine: "736cc Inline-Four",
                    power: "67 HP @ 8,500 RPM",
                    torque: "59 Nm @ 7,000 RPM",
                    transmission: "5-speed manual",
                    weight: "218 kg",
                    topSpeed: "200 km/h"
                }
            },
            {
                id: 8,
                name: "XS650",
                brand: "Yamaha",
                year: 1970,
                rating: 4.1,
                excerpt: "Excellent platform for customization. Simple, reliable, and sounds great with the right pipes.",
                fullReview: "The Yamaha XS650 is beloved by custom builders for its simplicity, reliability, and classic parallel-twin engine that bears more than a passing resemblance to the Triumph twins it competed with. The 653cc SOHC engine is remarkably durable and easy to work on, making it perfect for cafe racer, bobber, or scrambler conversions. While not the most powerful bike of its era, its character and customization potential have earned it a dedicated following that continues to this day.",
                reviewDate: "August 22, 2024",
                tags: ["Custom", "Japanese", "Parallel-twin", "Chopper", "Cafe Racer"],
                specs: {
                    engine: "653cc Parallel Twin",
                    power: "50 HP @ 7,000 RPM",
                    torque: "52 Nm @ 6,000 RPM",
                    transmission: "5-speed manual",
                    weight: "198 kg",
                    topSpeed: "175 km/h"
                }
            },
            {
                id: 9,
                name: "Knucklehead",
                brand: "Harley-Davidson",
                year: 1947,
                rating: 4.9,
                excerpt: "The engine that defined Harley's sound. Pure mechanical art. Highly collectible.",
                fullReview: "The Harley-Davidson Knucklehead (officially the EL) is one of the most iconic motorcycles ever built, featuring the revolutionary overhead-valve V-twin engine that would define Harley's sound and character for decades. The distinctive rocker box covers resemble clenched fists, hence the 'Knucklehead' nickname. Riding one is a pure mechanical experience - the engine vibration, the sound, and the feel are unlike anything modern. Today, original Knuckleheads command astronomical prices and are considered the holy grail of Harley collections.",
                reviewDate: "July 30, 2024",
                tags: ["Antique", "Panhead", "Collector", "American", "Vintage"],
                specs: {
                    engine: "1000cc OHV V-Twin",
                    power: "40 HP @ 4,800 RPM",
                    torque: "71 Nm @ 3,200 RPM",
                    transmission: "4-speed manual",
                    weight: "245 kg",
                    topSpeed: "145 km/h"
                }
            },
            {
                id: 10,
                name: "Gold Wing GL1000",
                brand: "Honda",
                year: 1975,
                rating: 4.3,
                excerpt: "Revolutionary touring bike. Smooth, comfortable, and surprisingly sporty for its size.",
                fullReview: "The original Honda Gold Wing GL1000 redefined the touring motorcycle category with its revolutionary liquid-cooled flat-four engine, shaft drive, and exceptional smoothness. Originally conceived as a sport bike, its engine layout and balance made it perfect for long-distance comfort. The GL1000 was over-engineered in typical Honda fashion, with reliability that became legendary. While later Wings would add more luxury features, the original remains a favorite for its purity and surprisingly nimble handling for a bike of its size.",
                reviewDate: "June 18, 2024",
                tags: ["Touring", "Flat-four", "Comfort", "Luxury", "Shaft Drive"],
                specs: {
                    engine: "999cc Flat-Four",
                    power: "80 HP @ 7,500 RPM",
                    torque: "86 Nm @ 6,500 RPM",
                    transmission: "5-speed manual",
                    weight: "265 kg",
                    topSpeed: "200 km/h"
                }
            },
            {
                id: 11,
                name: "SR500",
                brand: "Yamaha",
                year: 1978,
                rating: 4.0,
                excerpt: "Simple single-cylinder thumper with classic styling. Lightweight and fun to ride.",
                fullReview: "The Yamaha SR500 is a modern classic that harks back to simpler times. Its 499cc single-cylinder engine provides a visceral, thumping ride that's both engaging and forgiving for newer riders. The kick-start-only operation adds to the vintage charm, though it can be challenging for some. Lightweight and nimble, it's perfect for city commuting and weekend backroad exploration. The SR500 has developed a cult following and remains popular for cafe racer conversions.",
                reviewDate: "May 12, 2024",
                tags: ["Thumper", "Single-cylinder", "Cafe Racer", "Lightweight", "Kick-start"],
                specs: {
                    engine: "499cc Single Cylinder",
                    power: "30 HP @ 6,500 RPM",
                    torque: "38 Nm @ 5,500 RPM",
                    transmission: "5-speed manual",
                    weight: "154 kg",
                    topSpeed: "150 km/h"
                }
            },
            {
                id: 12,
                name: "Z1 900",
                brand: "Kawasaki",
                year: 1973,
                rating: 4.7,
                excerpt: "The original Japanese superbike. Incredibly fast for its time with stunning styling.",
                fullReview: "The Kawasaki Z1 900 (known as the Z900 in some markets) shocked the motorcycle world with its performance when introduced in 1973. Its 903cc DOHC inline-four engine produced 82 horsepower, making it the fastest production motorcycle of its time. The Z1's combination of speed, reliability, and relative affordability made it an instant classic. Its distinctive four-into-four exhaust and muscular styling still turn heads today. The Z1 established Kawasaki as a serious player in the performance motorcycle market.",
                reviewDate: "April 5, 2024",
                tags: ["Superbike", "Japanese", "Inline-four", "Performance", "Iconic"],
                specs: {
                    engine: "903cc Inline-Four",
                    power: "82 HP @ 8,500 RPM",
                    torque: "75 Nm @ 7,000 RPM",
                    transmission: "5-speed manual",
                    weight: "235 kg",
                    topSpeed: "215 km/h"
                }
            }
        ];
    }
    
    setupEventListeners() {
        // Search button
        document.getElementById('search-btn').addEventListener('click', () => this.search());
        
        // Search input enter key
        document.getElementById('motorcycle-search').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.search();
        });
        
        // Filter changes
        document.getElementById('brand-filter').addEventListener('change', () => this.search());
        document.getElementById('decade-filter').addEventListener('change', () => this.search());
        document.getElementById('rating-filter').addEventListener('change', () => this.search());
        document.getElementById('sort-by').addEventListener('change', () => this.search());
        
        // Review modal close
        document.getElementById('review-modal-close').addEventListener('click', () => this.closeReviewModal());
        
        // Close modal when clicking outside
        document.getElementById('review-modal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('review-modal')) {
                this.closeReviewModal();
            }
        });
        
        // Event delegation for review cards and pagination
        document.addEventListener('click', (e) => {
            // Review card click
            if (e.target.closest('.review-card')) {
                const card = e.target.closest('.review-card');
                const reviewId = parseInt(card.dataset.reviewId);
                this.openReviewModal(reviewId);
            }
            
            // Pagination buttons
            if (e.target.classList.contains('page-btn')) {
                const page = parseInt(e.target.dataset.page);
                if (!isNaN(page)) {
                    this.goToPage(page);
                }
            }
        });
    }
    
    search() {
        if (this.isLoading) return;
        
        this.isLoading = true;
        this.showLoading(true);
        
        const searchTerm = document.getElementById('motorcycle-search').value.toLowerCase();
        const brandFilter = document.getElementById('brand-filter').value;
        const decadeFilter = document.getElementById('decade-filter').value;
        const ratingFilter = document.getElementById('rating-filter').value;
        const sortBy = document.getElementById('sort-by').value;
        
        // Simulate search delay
        setTimeout(() => {
            this.filteredReviews = this.allReviews.filter(review => {
                // Search term filter
                const matchesSearch = !searchTerm || 
                    review.name.toLowerCase().includes(searchTerm) ||
                    review.brand.toLowerCase().includes(searchTerm) ||
                    review.excerpt.toLowerCase().includes(searchTerm) ||
                    review.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
                    review.specs.engine.toLowerCase().includes(searchTerm);
                
                // Brand filter
                const matchesBrand = !brandFilter || 
                    review.brand.toLowerCase().includes(brandFilter.toLowerCase());
                
                // Decade filter
                const matchesDecade = !decadeFilter || 
                    Math.floor(review.year / 10) * 10 === parseInt(decadeFilter);
                
                // Rating filter
                const matchesRating = !ratingFilter || 
                    Math.floor(review.rating) >= parseInt(ratingFilter);
                
                return matchesSearch && matchesBrand && matchesDecade && matchesRating;
            });
            
            // Sort results
            this.sortResults(sortBy);
            
            // Reset to first page
            this.currentPage = 1;
            
            // Display results
            this.displayResults();
            this.showLoading(false);
            this.isLoading = false;
            
            // Update search stats
            this.updateSearchStats();
        }, 500);
    }
    
    sortResults(sortBy) {
        switch(sortBy) {
            case 'rating-desc':
                this.filteredReviews.sort((a, b) => b.rating - a.rating);
                break;
            case 'year-desc':
                this.filteredReviews.sort((a, b) => b.year - a.year);
                break;
            case 'year-asc':
                this.filteredReviews.sort((a, b) => a.year - b.year);
                break;
            default: // relevance
                // Keep original order (most relevant based on search)
                break;
        }
    }
    
    displayResults() {
        const reviewsGrid = document.getElementById('reviews-grid');
        const noResults = document.getElementById('no-results');
        const pagination = document.getElementById('pagination');
        
        if (this.filteredReviews.length === 0) {
            reviewsGrid.innerHTML = '';
            noResults.style.display = 'block';
            pagination.style.display = 'none';
            return;
        }
        
        noResults.style.display = 'none';
        
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const currentItems = this.filteredReviews.slice(startIndex, endIndex);
        
        let html = '';
        
        currentItems.forEach(review => {
            const stars = '★'.repeat(Math.floor(review.rating)) + 
                         '☆'.repeat(5 - Math.floor(review.rating));
            
            html += `
                <div class="review-card" data-review-id="${review.id}">
                    <div class="review-header">
                        <div class="review-title">
                            <h3>${review.name}</h3>
                            <div class="review-brand">${review.brand}</div>
                        </div>
                        <div class="review-year">${review.year}</div>
                    </div>
                    <div class="review-body">
                        <p class="review-excerpt">${review.excerpt}</p>
                        <div class="review-rating">
                            <div class="stars">${stars}</div>
                            <div class="rating-score">${review.rating.toFixed(1)}/5.0</div>
                        </div>
                        <div class="review-tags">
                            ${review.tags.map(tag => `<span class="review-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <div class="review-footer">
                        <span>${review.specs.engine} • ${review.specs.power}</span>
                        <span class="review-read-more">Read Full Review →</span>
                    </div>
                </div>
            `;
        });
        
        reviewsGrid.innerHTML = html;
        
        // Add pagination if needed
        if (this.filteredReviews.length > this.itemsPerPage) {
            this.createPagination();
            pagination.style.display = 'flex';
        } else {
            pagination.style.display = 'none';
        }
    }
    
    createPagination() {
        const totalPages = Math.ceil(this.filteredReviews.length / this.itemsPerPage);
        const pagination = document.getElementById('pagination');
        
        let html = '';
        
        // Previous button
        html += `
            <button class="page-btn" data-page="${this.currentPage - 1}" 
                    ${this.currentPage === 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i> Previous
            </button>
        `;
        
        // Page numbers
        const maxVisiblePages = 5;
        let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            html += `
                <button class="page-btn ${i === this.currentPage ? 'active' : ''}" 
                        data-page="${i}">
                    ${i}
                </button>
            `;
        }
        
        // Next button
        html += `
            <button class="page-btn" data-page="${this.currentPage + 1}" 
                    ${this.currentPage === totalPages ? 'disabled' : ''}>
                Next <i class="fas fa-chevron-right"></i>
            </button>
        `;
        
        pagination.innerHTML = html;
    }
    
    goToPage(page) {
        this.currentPage = page;
        this.displayResults();
        window.scrollTo({
            top: document.getElementById('reviews-section').offsetTop - 100,
            behavior: 'smooth'
        });
    }
    
    showLoading(show) {
        const loading = document.getElementById('reviews-loading');
        if (loading) {
            loading.style.display = show ? 'block' : 'none';
        }
    }
    
    updateSearchStats() {
        const count = document.getElementById('results-count');
        const time = document.getElementById('search-time');
        
        if (count) {
            const source = isDatabaseConnected ? ' (Live Database)' : ' (Sample Data)';
            count.textContent = `${this.filteredReviews.length} ${this.filteredReviews.length === 1 ? 'review' : 'reviews'} found${source}`;
        }
        
        if (time) {
            const now = new Date();
            time.textContent = `Updated: ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
        }
    }
    
    openReviewModal(reviewId) {
        const review = this.allReviews.find(r => r.id === reviewId);
        if (!review) return;
        
        const modal = document.getElementById('review-modal');
        const stars = '★'.repeat(Math.floor(review.rating)) + 
                     '☆'.repeat(5 - Math.floor(review.rating));
        
        // Set modal content
        document.getElementById('review-modal-title').textContent = `${review.brand} ${review.name} (${review.year})`;
        document.getElementById('review-modal-rating').innerHTML = `
            <div class="stars">${stars}</div>
            <span>${review.rating.toFixed(1)}/5.0 Rating</span>
        `;
        document.getElementById('review-modal-date').textContent = `Review Date: ${review.reviewDate}`;
        document.getElementById('review-modal-full').innerHTML = `<p>${review.fullReview}</p>`;
        
        // Set specifications
        const specsGrid = document.getElementById('review-modal-specs');
        specsGrid.innerHTML = `
            <div class="spec-item">
                <span class="spec-label">Engine:</span>
                <span class="spec-value">${review.specs.engine}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Power:</span>
                <span class="spec-value">${review.specs.power}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Torque:</span>
                <span class="spec-value">${review.specs.torque}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Transmission:</span>
                <span class="spec-value">${review.specs.transmission}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Weight:</span>
                <span class="spec-value">${review.specs.weight}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Top Speed:</span>
                <span class="spec-value">${review.specs.topSpeed}</span>
            </div>
        `;
        
        // Show modal
        modal.classList.add('active');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Focus trap
        document.getElementById('review-modal-close').focus();
    }
    
    closeReviewModal() {
        const modal = document.getElementById('review-modal');
        modal.classList.remove('active');
        modal.setAttribute('aria-modal', 'false');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }
}

// =============================================
// YOUR EXISTING WEBSITE MANAGER (UPDATED)
// =============================================
// Global variables
let currentImageIndex = 0;
let currentCalendarMonth = new Date().getMonth();
let currentCalendarYear = new Date().getFullYear();
let scrollTimeout;
let activeModal = null;

// DOM Cache for better performance
const domCache = {
    elements: {},
    get: function(id) {
        if (!this.elements[id]) {
            this.elements[id] = document.getElementById(id);
        }
        return this.elements[id];
    }
};

// Data Constants (KEEP EXISTING DATA - NO CHANGES)
const galleryImages = [
    {
        url: 'https://bringatrailer.com/wp-content/uploads/2024/06/1969_triumph_bonneville-t120r_Triumph-BaTT120R-Ora-7-52067-scaled.jpg?fit=940%2C627',
        title: 'Classic Cafe Racer',
        description: '1968 Triumph Bonneville - Restored to perfection'
    },
    {
        url: 'https://silodrome.com/wp-content/uploads/2015/10/Norton-Commando-Motorcycle-10-1600x1002.jpg',
        title: 'Vintage Scrambler',
        description: '1972 Norton Commando - Off-road ready'
    },
    {
        url: 'https://wesellclassicbikes.co.uk/cdn/shop/products/545154.jpg?v=1661042966',
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
        image: "https://wesellclassicbikes.co.uk/cdn/shop/products/545154.jpg?v=1661042966",
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
        description: "Our comprehensive buyer's guide provides everything you need to know before purchasing a vintage motorcycle.",
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
        description: "Learn from our expert restorers with step-by-step guides, techniques, and insider tips.",
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
        description: "Find exactly what you need with our comprehensive directory of parts suppliers.",
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
        description: "Never miss a vintage motorcycle event again with our comprehensive calendar.",
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
        description: 'Our top-rated vintage-style leather jacket combines classic aesthetics with modern safety features.',
        rating: '★★★★★',
        review: 'Exceptional quality leather with CE-approved armor. A perfect blend of vintage style and modern safety.'
    },
    {
        image: 'https://i0.wp.com/retroisback.com/wp-content/uploads/2020/12/GDM-REBEL-ECOTRIC-Vintage-Motorcycle-Helmet-Retro-Retroisback.com-.1.jpg',
        title: 'Retro Motorcycle Helmet',
        price: 'Top Pick',
        description: 'This vintage-style helmet offers DOT and ECE safety certifications while maintaining authentic retro design.',
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
        description: 'Annual showcase of the finest vintage motorcycles from around the world.',
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
        description: 'Gathering of cafe racer enthusiasts from across the Philippines.',
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
        description: 'Scenic tour through the beautiful Tagaytay countryside exclusively for British vintage motorcycles.',
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
        description: 'Historic motorcycle racing event featuring classic racing bikes from the 60s, 70s, and 80s.',
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

// Main Website Manager Class
class WebsiteManager {
    constructor() {
        this.init();
    }
    
    async init() {
        this.initializeClock();
        this.initializeCalendar();
        this.initializeGallery();
        this.initializeCategories();
        this.initializeResources();
        this.initializeGear();
        await this.initializeEvents(); // UPDATED: Now async
        this.initializeTabs();
        this.initializeNavigation();
        this.initializeFooterLinks();
        this.initializeButtons();
        this.initializeLightbox();
        this.initializeResourceModal();
        this.initializeEventModal();
        this.initializeReviewPopup();
        this.initializeMobileMenu();
        this.initializeScrollToTop();
        this.initializeOptimizedImageLoading();
        this.initializeEventDelegation();
        
        // Initialize Reviews Search
        this.reviewsSearch = new MotorcycleReviewsSearch();
        
        // Hide loading indicator
        setTimeout(() => {
            const loader = domCache.get('loading-indicator');
            if (loader) loader.style.display = 'none';
        }, 2000);
        
        // Show database status
        this.showDatabaseStatus();
    }
    
    // NEW: Show database connection status
    showDatabaseStatus() {
        setTimeout(() => {
            if (isDatabaseConnected) {
                this.showNotification('✅ Connected to live database');
            } else {
                console.log('⚠️ Running on sample data - Database not connected');
            }
        }, 1500);
    }
    
    // UPDATED: Events initialization with database fallback
    async initializeEvents() {
        const eventsTimeline = domCache.get('events-timeline');
        if (!eventsTimeline) return;
        
        try {
            // Try to fetch from database
            const response = await fetch(`${API_BASE_URL}get_events.php`);
            
            if (response.ok) {
                const dbEvents = await response.json();
                
                if (!dbEvents.error && dbEvents.length > 0) {
                    console.log(`✅ Loaded ${dbEvents.length} events from database`);
                    this.displayEvents(dbEvents);
                    return;
                }
            }
        } catch (error) {
            console.warn('⚠️ Using sample events data:', error.message);
        }
        
        // Fallback to sample data
        this.displayEvents(events);
    }
    
    // NEW: Display events function
    displayEvents(eventList) {
        const eventsTimeline = domCache.get('events-timeline');
        if (!eventsTimeline) return;
        
        eventsTimeline.innerHTML = '';
        
        eventList.forEach((event, index) => {
            const eventItem = document.createElement('div');
            eventItem.className = 'event-item';
            eventItem.setAttribute('data-event', event.id || index + 1);
            
            eventItem.innerHTML = `
                <div class="event-content">
                    <div class="event-date">${event.date || 'Date not set'}</div>
                    ${event.time ? `<div class="event-time">${event.time}</div>` : ''}
                    <h3>${event.title || 'Untitled Event'}</h3>
                    <p><strong>Location:</strong> ${event.location || 'Location not specified'}</p>
                    <p>${(event.description || '').substring(0, 150)}...</p>
                    <button class="btn view-event-details-btn">View Details</button>
                </div>
            `;
            
            eventsTimeline.appendChild(eventItem);
        });
    }
    
    // Initialize Review Popup
    initializeReviewPopup() {
        const reviewBtn = domCache.get('read-review-btn');
        const closeBtn = domCache.get('review-popup-close');
        const popup = domCache.get('review-popup');
        
        if (reviewBtn) {
            reviewBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openReviewPopup();
            });
        }
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeReviewPopup());
        }
        
        // Close popup when clicking outside
        if (popup) {
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    this.closeReviewPopup();
                }
            });
        }
    }
    
    // Open Review Popup
    openReviewPopup() {
        const popup = domCache.get('review-popup');
        if (!popup) return;
        
        popup.classList.add('active');
        popup.setAttribute('aria-modal', 'true');
        popup.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        activeModal = 'review-popup';
        
        // Animate performance bars
        setTimeout(() => {
            const bars = document.querySelectorAll('.performance-fill');
            bars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }, 300);
        
        this.showNotification('Opening full review...');
        
        // Focus trap
        const firstFocusable = popup.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) firstFocusable.focus();
    }
    
    // Close Review Popup
    closeReviewPopup() {
        const popup = domCache.get('review-popup');
        if (!popup) return;
        
        popup.classList.remove('active');
        popup.setAttribute('aria-modal', 'false');
        popup.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
        activeModal = null;
        this.showNotification('Review closed');
    }
    
    // Event delegation for better performance
    initializeEventDelegation() {
        document.addEventListener('click', (e) => {
            // Navigation links
            if (e.target.matches('.nav-link')) {
                e.preventDefault();
                const section = e.target.dataset.section;
                this.navigateToSection(section);
                this.updateActiveNav(section);
            }
            
            // Resource cards
            if (e.target.closest('.resource-card')) {
                const card = e.target.closest('.resource-card');
                if (!e.target.classList.contains('btn')) {
                    const resourceId = card.dataset.resource;
                    this.openResourceModal(resourceId);
                }
            }
            
            // View details buttons
            if (e.target.classList.contains('view-details-btn')) {
                const resourceId = e.target.dataset.resource;
                this.openResourceModal(resourceId);
            }
            
            // Category cards
            if (e.target.closest('.category-card')) {
                const card = e.target.closest('.category-card');
                const categoryId = card.dataset.category;
                this.showCategoryDetails(categoryId);
            }
            
            // Gallery items
            if (e.target.closest('.gallery-item')) {
                const item = e.target.closest('.gallery-item');
                const index = parseInt(item.dataset.index);
                this.openLightbox(index);
            }
            
            // Gear cards
            if (e.target.closest('.gear-card')) {
                const card = e.target.closest('.gear-card');
                const gearIndex = parseInt(card.dataset.gear);
                const gearItem = gearItems[gearIndex];
                if (gearItem && !e.target.classList.contains('btn')) {
                    this.showGearReview(gearItem);
                }
            }
            
            // Read review buttons
            if (e.target.classList.contains('read-review-btn')) {
                const card = e.target.closest('.gear-card');
                const gearIndex = parseInt(card.dataset.gear);
                const gearItem = gearItems[gearIndex];
                if (gearItem) {
                    this.showGearReview(gearItem);
                }
            }
            
            // Event items
            if (e.target.closest('.event-content')) {
                const content = e.target.closest('.event-content');
                const eventId = parseInt(content.parentElement.dataset.event);
                const event = events.find(e => e.id === eventId);
                if (event && !e.target.classList.contains('btn')) {
                    this.showEventDetails(event);
                }
            }
            
            // View event details buttons
            if (e.target.classList.contains('view-event-details-btn')) {
                const content = e.target.closest('.event-content');
                const eventId = parseInt(content.parentElement.dataset.event);
                const event = events.find(e => e.id === eventId);
                if (event) {
                    this.showEventDetails(event);
                }
            }
            
            // Footer links
            if (e.target.matches('.footer-category-link')) {
                e.preventDefault();
                const categoryId = e.target.dataset.category;
                this.navigateToSection('categories');
                this.updateActiveNav('categories');
                setTimeout(() => this.showCategoryDetails(categoryId), 500);
            }
            
            if (e.target.matches('.footer-resource-link')) {
                e.preventDefault();
                const resourceId = e.target.dataset.resource;
                this.navigateToSection('resources');
                this.updateActiveNav('resources');
                setTimeout(() => this.openResourceModal(resourceId), 500);
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Lightbox controls
            const lightbox = domCache.get('lightbox');
            if (lightbox && lightbox.classList.contains('active')) {
                if (e.key === 'Escape') this.closeLightbox();
                if (e.key === 'ArrowLeft') this.navigateLightbox(-1);
                if (e.key === 'ArrowRight') this.navigateLightbox(1);
            }
            
            // Modal controls
            if (activeModal) {
                if (e.key === 'Escape') this.closeActiveModal();
            }
        });
    }
    
    // Close active modal
    closeActiveModal() {
        if (activeModal === 'resource-modal') {
            this.closeResourceModal();
        } else if (activeModal === 'event-modal') {
            this.closeEventModal();
        } else if (activeModal === 'review-popup') {
            this.closeReviewPopup();
        } else if (activeModal === 'review-modal') {
            this.reviewsSearch.closeReviewModal();
        }
    }
    
    // Optimized image loading with error handling
    initializeOptimizedImageLoading() {
        const observerOptions = {
            root: null,
            rootMargin: '100px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.dataset.src;
                    
                    if (!src) return;
                    
                    // Use native lazy loading
                    img.loading = 'lazy';
                    
                    const preloader = new Image();
                    preloader.src = src;
                    
                    preloader.onload = () => {
                        img.src = src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    };
                    
                    preloader.onerror = () => {
                        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23222"%3E%3C/rect%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23d4af37" font-family="Arial"%3EVintage Motorcycle%3C/text%3E%3C/svg%3E';
                        img.alt = 'Image not available';
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    };
                }
            });
        }, observerOptions);
        
        // Observe all lazy images
        document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
    }
    
    // Clock functionality
    initializeClock() {
        const updateClock = () => {
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
            
            const currentTime = domCache.get('current-time');
            const currentDate = domCache.get('current-date');
            
            if (currentTime) currentTime.textContent = timeString;
            if (currentDate) currentDate.textContent = dateString;
        };
        
        updateClock();
        setInterval(updateClock, 1000);
    }
    
    // Calendar functionality
    initializeCalendar() {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        const renderCalendar = () => {
            const calendarGrid = domCache.get('calendar-dates');
            const monthYear = domCache.get('calendar-month');
            
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
            const isCurrentMonth = today.getMonth() === currentCalendarMonth && 
                                today.getFullYear() === currentCalendarYear;
            
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
                
                // Check if any events on this day
                const eventDate = new Date(currentCalendarYear, currentCalendarMonth, day);
                const hasEvent = events.some(event => {
                    const eventDateObj = new Date(event.date);
                    return eventDateObj.getDate() === eventDate.getDate() &&
                        eventDateObj.getMonth() === eventDate.getMonth() &&
                        eventDateObj.getFullYear() === eventDate.getFullYear();
                });
                
                if (hasEvent) {
                    dateElement.classList.add('event-day');
                }
                
                calendarGrid.appendChild(dateElement);
            }
        };
        
        // Navigation buttons
        const prevMonthBtn = domCache.get('prev-month');
        const nextMonthBtn = domCache.get('next-month');
        
        if (prevMonthBtn) {
            prevMonthBtn.addEventListener('click', () => {
                currentCalendarMonth--;
                if (currentCalendarMonth < 0) {
                    currentCalendarMonth = 11;
                    currentCalendarYear--;
                }
                renderCalendar();
            });
        }
        
        if (nextMonthBtn) {
            nextMonthBtn.addEventListener('click', () => {
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
    
    // Gallery initialization
    initializeGallery() {
        const galleryGrid = domCache.get('gallery-grid');
        if (!galleryGrid) return;
        
        galleryImages.forEach((image, index) => {
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
            
            galleryGrid.appendChild(galleryItem);
        });
    }
    
    // Categories initialization
    initializeCategories() {
        const categoriesGrid = domCache.get('categories-grid');
        if (!categoriesGrid) return;
        
        categories.forEach((category, index) => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category-card';
            categoryCard.setAttribute('data-category', category.id);
            
            categoryCard.innerHTML = `
                <div class="category-image">
                    <img src="" data-src="${category.image}" alt="${category.title}" class="lazy">
                </div>
                <div class="category-content">
                    <div class="category-badge">${category.id}</div>
                    <h3>${category.title}</h3>
                    <p>${category.description}</p>
                    <div class="category-stats">
                        <div>Models: <span>${category.models}</span></div>
                        <div>Years: <span>${category.years}</span></div>
                    </div>
                </div>
            `;
            
            categoriesGrid.appendChild(categoryCard);
        });
    }
    
    // Resources initialization
    initializeResources() {
        const resourcesGrid = domCache.get('resources-grid');
        if (!resourcesGrid) return;
        
        resources.forEach((resource, index) => {
            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            resourceCard.setAttribute('data-resource', resource.id);
            
            const listItems = resource.items.map(item => `
                <li><i class="fas fa-check"></i> ${item}</li>
            `).join('');
            
            resourceCard.innerHTML = `
                <div class="resource-icon">
                    <i class="${resource.icon}"></i>
                </div>
                <h3>${resource.title}</h3>
                <p>${resource.description}</p>
                <ul class="resource-list">
                    ${listItems}
                </ul>
                <button class="btn view-details-btn" data-resource="${resource.id}">View Details</button>
            `;
            
            resourcesGrid.appendChild(resourceCard);
        });
    }
    
    // Gear initialization
    initializeGear() {
        const gearGrid = domCache.get('gear-grid');
        if (!gearGrid) return;
        
        gearItems.forEach((item, index) => {
            const gearCard = document.createElement('div');
            gearCard.className = 'gear-card';
            gearCard.setAttribute('data-gear', index);
            
            gearCard.innerHTML = `
                <div class="gear-image">
                    <img src="" data-src="${item.image}" alt="${item.title}" class="lazy">
                </div>
                <div class="gear-content">
                    <h3>${item.title}</h3>
                    <div class="gear-price">${item.price}</div>
                    <div class="gear-rating">${item.rating}</div>
                    <p class="gear-description">${item.description}</p>
                    <button class="btn read-review-btn">Read Full Review</button>
                </div>
            `;
            
            gearGrid.appendChild(gearCard);
        });
    }
    
    // Tabs initialization
    initializeTabs() {
        const tabHeaders = document.querySelectorAll('.tab-header');
        
        tabHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all
                tabHeaders.forEach(h => h.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked
                this.classList.add('active');
                const tabContent = document.getElementById(`${tabId}-tab`);
                if (tabContent) {
                    tabContent.classList.add('active');
                }
            });
        });
    }
    
    // Navigation initialization
    initializeNavigation() {
        const logo = domCache.get('home-logo');
        if (logo) {
            logo.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateToSection('home');
                this.updateActiveNav('home');
            });
        }
        
        // Add Reviews button in home section
        const viewReviewsBtn = domCache.get('view-reviews-btn');
        if (viewReviewsBtn) {
            viewReviewsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateToSection('reviews');
                this.updateActiveNav('reviews');
                this.showNotification('Browsing motorcycle reviews...');
            });
        }
    }
    
    // Mobile menu initialization
    initializeMobileMenu() {
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const nav = document.querySelector('nav ul');
        
        if (mobileBtn && nav) {
            mobileBtn.addEventListener('click', () => {
                const isExpanded = nav.classList.toggle('active');
                mobileBtn.setAttribute('aria-expanded', isExpanded.toString());
                mobileBtn.innerHTML = isExpanded 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
                
                // Prevent body scroll when menu is open
                if (isExpanded) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Close menu when clicking links
            nav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    nav.classList.remove('active');
                    mobileBtn.setAttribute('aria-expanded', 'false');
                    mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    document.body.style.overflow = 'auto';
                });
            });
        }
    }
    
    // Scroll to top initialization
    initializeScrollToTop() {
        const scrollBtn = domCache.get('scroll-top');
        if (!scrollBtn) return;
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Debounced scroll handler
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (window.scrollY > 500) {
                    scrollBtn.classList.add('show');
                } else {
                    scrollBtn.classList.remove('show');
                }
            }, 100);
        });
    }
    
    // Footer links initialization
    initializeFooterLinks() {
        // Already handled by event delegation
    }
    
    // Button initialization
    initializeButtons() {
        const viewGalleryBtn = domCache.get('view-gallery-btn');
        const viewModelsBtn = domCache.get('view-models-btn');
        const resetViewBtn = domCache.get('reset-view-btn');
        
        if (viewGalleryBtn) {
            viewGalleryBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateToSection('gallery');
                this.updateActiveNav('gallery');
                this.showNotification('Opening image gallery...');
            });
        }
        
        if (viewModelsBtn) {
            viewModelsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateToSection('models');
                this.updateActiveNav('models');
                this.showNotification('Viewing 3D models');
            });
        }
        
        if (resetViewBtn) {
            resetViewBtn.addEventListener('click', () => {
                const iframe = domCache.get('sketchfab-iframe');
                if (iframe) {
                    iframe.src = iframe.src;
                    this.showNotification('3D View reset to default');
                }
            });
        }
    }
    
    // Lightbox initialization
    initializeLightbox() {
        const lightboxClose = domCache.get('lightbox-close');
        const lightboxPrev = domCache.get('lightbox-prev');
        const lightboxNext = domCache.get('lightbox-next');
        
        if (lightboxClose) {
            lightboxClose.addEventListener('click', () => this.closeLightbox());
        }
        
        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', () => this.navigateLightbox(-1));
        }
        
        if (lightboxNext) {
            lightboxNext.addEventListener('click', () => this.navigateLightbox(1));
        }
    }
    
    // Resource modal initialization
    initializeResourceModal() {
        const modalClose = domCache.get('modal-close');
        
        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeResourceModal());
        }
    }
    
    // Event modal initialization
    initializeEventModal() {
        const modalClose = domCache.get('event-modal-close');
        
        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeEventModal());
        }
    }
    
    // Open resource modal
    openResourceModal(resourceId) {
        const resource = resources.find(r => r.id === resourceId);
        if (!resource) return;
        
        const modal = domCache.get('resource-modal');
        const modalTitle = domCache.get('modal-title');
        const modalIcon = domCache.get('modal-icon');
        const modalDescription = domCache.get('modal-description');
        const modalFeatures = domCache.get('modal-features');
        const modalAdditionalInfo = domCache.get('modal-additional-info');
        
        if (!modal || !modalTitle || !modalIcon || !modalDescription || !modalFeatures || !modalAdditionalInfo) return;
        
        // Set modal content
        modalTitle.textContent = resource.title;
        modalIcon.className = resource.icon;
        modalDescription.textContent = resource.description;
        
        // Clear existing lists
        modalFeatures.innerHTML = '';
        modalAdditionalInfo.innerHTML = '';
        
        // Add features
        resource.items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check-circle"></i> ${item}`;
            modalFeatures.appendChild(li);
        });
        
        // Add additional info
        resource.additionalInfo.forEach(info => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-info-circle"></i> ${info}`;
            modalAdditionalInfo.appendChild(li);
        });
        
        // Show modal
        modal.classList.add('active');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        activeModal = 'resource-modal';
        
        // Focus trap
        const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) firstFocusable.focus();
        
        this.showNotification(`Opening ${resource.title} details`);
    }
    
    // Close resource modal
    closeResourceModal() {
        const modal = domCache.get('resource-modal');
        if (!modal) return;
        
        modal.classList.remove('active');
        modal.setAttribute('aria-modal', 'false');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
        activeModal = null;
        this.showNotification('Resource details closed');
    }
    
    // Show gear review
    showGearReview(gearItem) {
        const modal = domCache.get('resource-modal');
        const modalTitle = domCache.get('modal-title');
        const modalIcon = domCache.get('modal-icon');
        const modalDescription = domCache.get('modal-description');
        const modalFeatures = domCache.get('modal-features');
        const modalAdditionalInfo = domCache.get('modal-additional-info');
        
        if (!modal || !modalTitle || !modalIcon || !modalDescription || !modalFeatures || !modalAdditionalInfo) return;
        
        // Set modal content for gear review
        modalTitle.textContent = `${gearItem.title} - Review`;
        modalIcon.className = "fas fa-star";
        modalDescription.textContent = gearItem.review;
        
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
            `Rating: ${gearItem.rating}`,
            `Category: ${gearItem.price}`,
            "Review Date: March 2025",
            "Reviewer: VintageMoto Gear Team",
            "Testing Period: 3 months"
        ];
        
        additionalInfo.forEach(info => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-info-circle"></i> ${info}`;
            modalAdditionalInfo.appendChild(li);
        });
        
        // Show modal
        modal.classList.add('active');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        activeModal = 'resource-modal';
        
        // Focus trap
        const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) firstFocusable.focus();
        
        this.showNotification(`Opening ${gearItem.title} review`);
    }
    
    // Show event details
    showEventDetails(event) {
        const modal = domCache.get('event-modal');
        const modalTitle = domCache.get('event-modal-title');
        const modalDate = domCache.get('event-modal-date');
        const modalTime = domCache.get('event-modal-time');
        const modalLocation = domCache.get('event-modal-location');
        const modalAttendance = domCache.get('event-modal-attendance');
        const modalEntry = domCache.get('event-modal-entry');
        const modalDescription = domCache.get('event-modal-description');
        const modalHighlights = domCache.get('event-modal-highlights');
        
        if (!modal || !modalTitle || !modalDate || !modalTime || !modalLocation || !modalAttendance || !modalEntry || !modalDescription || !modalHighlights) return;
        
        // Set modal content
        modalTitle.textContent = event.title;
        modalDate.textContent = event.date;
        modalTime.textContent = event.time;
        modalLocation.textContent = event.location;
        modalAttendance.textContent = event.attendance;
        modalEntry.textContent = event.entry;
        modalDescription.textContent = event.description;
        
        // Clear existing highlights
        modalHighlights.innerHTML = '';
        
        // Add highlights
        event.highlights.forEach(highlight => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check-circle"></i> ${highlight}`;
            modalHighlights.appendChild(li);
        });
        
        // Show modal
        modal.classList.add('active');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        activeModal = 'event-modal';
        
        // Focus trap
        const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) firstFocusable.focus();
        
        this.showNotification(`Opening ${event.title} details`);
    }
    
    // Close event modal
    closeEventModal() {
        const modal = domCache.get('event-modal');
        if (!modal) return;
        
        modal.classList.remove('active');
        modal.setAttribute('aria-modal', 'false');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
        activeModal = null;
        this.showNotification('Event details closed');
    }
    
    // Show category details
    showCategoryDetails(categoryId) {
        const category = categories.find(c => c.id === categoryId);
        if (!category) return;
        
        this.showNotification(`Loading ${category.title} category...`);
        setTimeout(() => {
            this.showNotification(`${category.title}: ${category.description}`);
        }, 100);
    }
    
    // Lightbox functions
    openLightbox(index) {
        const lightbox = domCache.get('lightbox');
        const lightboxImg = domCache.get('lightbox-img');
        const lightboxCaption = domCache.get('lightbox-caption');
        
        if (!lightbox || !lightboxImg || !lightboxCaption) return;
        
        lightboxImg.src = galleryImages[index].url;
        lightboxCaption.textContent = `${galleryImages[index].title} - ${galleryImages[index].description}`;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-modal', 'true');
        lightbox.setAttribute('aria-hidden', 'false');
        
        currentImageIndex = index;
        activeModal = 'lightbox';
        document.body.style.overflow = 'hidden';
        
        // Focus trap
        const closeBtn = domCache.get('lightbox-close');
        if (closeBtn) closeBtn.focus();
    }
    
    closeLightbox() {
        const lightbox = domCache.get('lightbox');
        if (!lightbox) return;
        
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-modal', 'false');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
        activeModal = null;
    }
    
    navigateLightbox(direction) {
        currentImageIndex += direction;
        
        if (currentImageIndex < 0) {
            currentImageIndex = galleryImages.length - 1;
        } else if (currentImageIndex >= galleryImages.length) {
            currentImageIndex = 0;
        }
        
        const lightboxImg = domCache.get('lightbox-img');
        const lightboxCaption = domCache.get('lightbox-caption');
        
        if (!lightboxImg || !lightboxCaption) return;
        
        lightboxImg.src = galleryImages[currentImageIndex].url;
        lightboxCaption.textContent = `${galleryImages[currentImageIndex].title} - ${galleryImages[currentImageIndex].description}`;
    }
    
    // Navigation functions
    navigateToSection(section) {
        document.querySelectorAll('.section').forEach(sec => {
            sec.classList.remove('active');
        });
        
        if (section === 'home') {
            const homeSection = domCache.get('home-section');
            if (homeSection) {
                homeSection.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            const sectionElement = domCache.get(`${section}-section`);
            if (sectionElement) {
                sectionElement.classList.add('active');
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        // Close mobile menu if open
        const nav = document.querySelector('nav ul');
        const mobileBtn = domCache.get('mobile-menu-btn');
        if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            if (mobileBtn) {
                mobileBtn.setAttribute('aria-expanded', 'false');
                mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    }
    
    updateActiveNav(section) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(l => l.classList.remove('active'));
        const activeLink = document.querySelector(`[data-section="${section}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    // Notification function
    showNotification(message) {
        const notification = domCache.get('notification');
        if (!notification) return;
        
        notification.textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on localhost
    if (window.location.hostname.includes('localhost')) {
        console.log('🌐 Running on localhost - Database integration enabled');
    } else {
        console.log('🌐 Running on production - Using fallback data');
    }
    
    new WebsiteManager();
});

// Database status indicator in console
console.log(`
╔══════════════════════════════════════╗
║   Vintage Motorcycles Website        ║
║   Database Integration: ACTIVE       ║
║   API Base URL: ${API_BASE_URL}       ║
╚══════════════════════════════════════╝
`);