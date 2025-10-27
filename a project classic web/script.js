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
                image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                title: 'Vintage Leather Jacket',
                price: '$299',
                description: 'Classic motorcycle jacket with armor protection',
                rating: '★★★★★'
            },
            {
                image: 'https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                title: 'Retro Motorcycle Helmet',
                price: '$189',
                description: 'Vintage-style helmet with modern safety features',
                rating: '★★★★☆'
            },
            {
                image: 'https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                title: 'Leather Riding Gloves',
                price: '$79',
                description: 'Durable gloves with reinforced palms',
                rating: '★★★★★'
            },
            {
                image: 'https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                title: 'Classic Motorcycle Boots',
                price: '$149',
                description: 'Vintage-style boots with ankle protection',
                rating: '★★★★☆'
            }
        ];

        // Events Data
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

        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize Gallery
            initializeGallery();
            
            // Initialize Gear
            initializeGear();
            
            // Initialize Events
            initializeEvents();
            
            // Tab functionality
            const tabHeaders = document.querySelectorAll('.tab-header');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabHeaders.forEach(header => {
                header.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');
                    
                    tabHeaders.forEach(h => h.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));
                    
                    this.classList.add('active');
                    document.getElementById(`${tabId}-tab`).classList.add('active');
                });
            });
            
            // Navigation links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const section = this.getAttribute('data-section');
                    
                    // Update active nav link
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    
                    navigateToSection(section);
                });
            });
            
            // Button functionality
            document.getElementById('read-review-btn').addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('Loading full review...');
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                document.querySelector('[data-section="reviews"]').classList.add('active');
                
                navigateToSection('reviews');
            });
            
            document.getElementById('view-gallery-btn').addEventListener('click', function(e) {
                e.preventDefault();
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                document.querySelector('[data-section="gallery"]').classList.add('active');
                
                navigateToSection('gallery');
                showNotification('Opening image gallery...');
            });
            
            document.getElementById('view-models-btn').addEventListener('click', function(e) {
                e.preventDefault();
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                document.querySelector('[data-section="models"]').classList.add('active');
                
                navigateToSection('models');
                showNotification('Viewing 3D models');
            });
            
            // Reset view button
            document.getElementById('reset-view-btn').addEventListener('click', function() {
                const iframe = document.getElementById('sketchfab-iframe');
                iframe.src = iframe.src;
                showNotification('View reset to default');
            });
            
            // Hide loading indicator after model loads
            setTimeout(() => {
                document.getElementById('loading-indicator').style.display = 'none';
            }, 3000);
        });

        // Gallery Functions
        function initializeGallery() {
            const galleryGrid = document.getElementById('gallery-grid');
            
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

        // Gear Functions
        function initializeGear() {
            const gearGrid = document.getElementById('gear-grid');
            
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
                        <button class="btn">Add to Cart</button>
                    </div>
                `;
                
                gearGrid.appendChild(gearCard);
            });
        }

        // Events Functions
        function initializeEvents() {
            const eventsTimeline = document.getElementById('events-timeline');
            
            events.forEach((event, index) => {
                const eventItem = document.createElement('div');
                eventItem.className = 'event-item';
                
                eventItem.innerHTML = `
                    <div class="event-content">
                        <div class="event-date">${event.date}</div>
                        <h3>${event.title}</h3>
                        <p><strong>Location:</strong> ${event.location}</p>
                        <p>${event.description}</p>
                        <button class="btn">Register Now</button>
                    </div>
                `;
                
                eventsTimeline.appendChild(eventItem);
            });
        }

        function openLightbox(index) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
            
            lightboxImg.src = galleryImages[index].url;
            lightboxCaption.textContent = `${galleryImages[index].title} - ${galleryImages[index].description}`;
            lightbox.classList.add('active');
            
            currentImageIndex = index;
            updateLightboxNavigation();
            
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function navigateLightbox(direction) {
            currentImageIndex += direction;
            
            if (currentImageIndex < 0) {
                currentImageIndex = galleryImages.length - 1;
            } else if (currentImageIndex >= galleryImages.length) {
                currentImageIndex = 0;
            }
            
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
            
            lightboxImg.src = galleryImages[currentImageIndex].url;
            lightboxCaption.textContent = `${galleryImages[currentImageIndex].title} - ${galleryImages[currentImageIndex].description}`;
            
            updateLightboxNavigation();
        }

        function updateLightboxNavigation() {
            // Additional navigation updates can be added here if needed
        }

        // Lightbox event listeners
        document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
        document.getElementById('lightbox-prev').addEventListener('click', () => navigateLightbox(-1));
        document.getElementById('lightbox-next').addEventListener('click', () => navigateLightbox(1));

        // Close lightbox when clicking outside the image
        document.getElementById('lightbox').addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });

        // Keyboard navigation for lightbox
        document.addEventListener('keydown', function(e) {
            const lightbox = document.getElementById('lightbox');
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowLeft') {
                    navigateLightbox(-1);
                } else if (e.key === 'ArrowRight') {
                    navigateLightbox(1);
                }
            }
        });

        let currentImageIndex = 0;

        function navigateToSection(section) {
            document.querySelectorAll('.section').forEach(sec => {
                sec.classList.remove('active');
            });
            
            if (section === 'home') {
                document.getElementById('home-section').classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const sectionElement = document.getElementById(`${section}-section`);
                if (sectionElement) {
                    sectionElement.classList.add('active');
                    sectionElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
        
        function showNotification(message) {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }