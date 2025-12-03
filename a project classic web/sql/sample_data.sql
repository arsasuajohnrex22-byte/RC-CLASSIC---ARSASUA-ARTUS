USE vintage_moto_db;

-- Insert sample motorcycle
INSERT IGNORE INTO motorcycles (category_id, model_name, manufacturer, year, engine_size, power_hp, weight_kg, description, history, featured, status) VALUES
(4, 'Yamaha XS500 Custom', 'Yamaha', 1978, 498, 48, 185, 'This beautifully customized Yamaha 500 features a classic cafe racer design with modern touches.', 'Yamaha XS500 was produced from 1976-1981. This custom build features a cafe racer transformation.', true, 'active'),
(1, 'Triumph Bonneville T120', 'Triumph', 1968, 650, 46, 195, 'Iconic British motorcycle restored to original specifications.', 'First introduced in 1959, the Bonneville became one of the most famous British motorcycles.', true, 'active'),
(2, 'Honda CB750', 'Honda', 1969, 736, 67, 218, 'The original Japanese superbike that changed motorcycling forever.', 'The CB750 introduced the inline-four engine configuration to the mass market.', true, 'active');

-- Insert sample gallery items
INSERT IGNORE INTO gallery_items (title, description, image_url, category, featured) VALUES
('Classic Cafe Racer', '1968 Triumph Bonneville - Restored to perfection', 'https://pipeburn.com/wp-content/uploads/2017/12/05_12_2017_Kerkus_Triumph_Cafe_Racer_custom_pipeburn_BIG_01.jpg', 'Cafe Racers', true),
('Vintage Scrambler', '1972 Norton Commando - Off-road ready', 'https://silodrome.com/wp-content/uploads/2015/10/Norton-Commando-Motorcycle-10-1600x1002.jpg', 'Scramblers', true),
('British Classic', '1965 BSA Gold Star - Museum quality restoration', 'https://www.indiacarnews.com/wp-content/uploads/2021/12/BSA-Gold-Star-Launch.jpg', 'British Classics', true),
('Custom Build', 'Hand-built cafe racer with modern performance', 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Custom Builds', false);

-- Insert sample resources
INSERT IGNORE INTO resources (title, slug, description, icon_class, resource_type, status, published_at) VALUES
('Buyer\'s Guide', 'buyers-guide', 'Our comprehensive buyer\'s guide provides everything you need to know before purchasing a vintage motorcycle.', 'fas fa-book', 'guide', 'published', NOW()),
('Restoration Tips', 'restoration-tips', 'Learn from our expert restorers with step-by-step guides, techniques, and insider tips for bringing vintage motorcycles back to their former glory.', 'fas fa-tools', 'tutorial', 'published', NOW()),
('Parts Directory', 'parts-directory', 'Find exactly what you need with our comprehensive directory of parts suppliers, manufacturers, and custom fabricators for vintage motorcycles.', 'fas fa-cogs', 'guide', 'published', NOW()),
('Event Calendar', 'event-calendar', 'Never miss a vintage motorcycle event again with our comprehensive calendar of shows, rallies, races, and club meetings worldwide.', 'fas fa-calendar-alt', 'guide', 'published', NOW());

-- Insert resource items for Buyer's Guide
INSERT IGNORE INTO resource_items (resource_id, title, description, display_order) VALUES
(1, 'Price guides for all major models', 'Comprehensive pricing information for popular vintage models', 1),
(1, 'Inspection checklist with 50+ points', 'Detailed checklist for evaluating motorcycle condition', 2),
(1, 'Common issues to watch for', 'Known problems with specific models and years', 3),
(1, 'Restoration cost estimates', 'Budget planning for different restoration levels', 4);

-- Insert sample gear
INSERT IGNORE INTO gear_items (name, category, description, price_range, image_url, rating, review_text, reviewer_name, featured) VALUES
('Vintage Leather Jacket', 'Apparel', 'Our top-rated vintage-style leather jacket combines classic aesthetics with modern safety features.', 'Editor\'s Choice', 'https://www.mr-styles.com/wp-content/uploads/2019/12/Vintage-Motorcycle-Harley-Davidson-Jacket.jpg', 5.0, 'Exceptional quality leather with CE-approved armor. A perfect blend of vintage style and modern safety.', 'John Doe', true),
('Retro Motorcycle Helmet', 'Helmets', 'This vintage-style helmet offers DOT and ECE safety certifications while maintaining authentic retro design elements.', 'Top Pick', 'https://i.ebayimg.com/images/g/7dMAAOSwX7dgAfLY/s-l1600.png', 4.5, 'Excellent ventilation and comfort. The classic look doesn\'t compromise on modern safety standards.', 'Jane Smith', true),
('Leather Riding Gloves', 'Gloves', 'Handcrafted leather gloves with reinforced palms and knuckle protection for the classic rider.', 'Best Value', 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/merchandise/2022/july-replenishment/98113-23vw/98113-23VW_F.jpg', 4.8, 'Superior grip and durability. These gloves break in beautifully and offer excellent protection.', 'Mike Johnson', true);

-- Insert sample events
INSERT IGNORE INTO events (title, description, event_date, start_time, end_time, location, organizer, expected_attendance, entry_fee, entry_type, status, featured) VALUES
('Vintage Motorcycle Show', 'Annual showcase of the finest vintage motorcycles from around the world.', '2025-06-15', '09:00:00', '18:00:00', 'World Trade Center, Metro Manila', 'VintageMoto Club', '500+ Enthusiasts', 0.00, 'Free Admission', 'upcoming', true),
('Cafe Racer Rally', 'Gathering of cafe racer enthusiasts from across the Philippines.', '2025-07-22', '08:00:00', '17:00:00', 'Circuit Makati, Metro Manila', 'Cafe Racer PH', '300+ Riders', 500.00, 'PHP 500 Registration', 'upcoming', true),
('British Classics Tour', 'Scenic tour through the beautiful Tagaytay countryside exclusively for British vintage motorcycles.', '2025-08-10', '07:00:00', '16:00:00', 'Tagaytay Highlands, Cavite', 'British Bike Club', '150+ Motorcycles', 1000.00, 'PHP 1,000 (includes lunch)', 'upcoming', true);

-- Insert event highlights for Vintage Motorcycle Show
INSERT IGNORE INTO event_highlights (event_id, highlight_text, display_order) VALUES
(1, 'Live restoration demonstrations', 1),
(1, 'Expert panel discussions', 2),
(1, 'Vintage parts marketplace', 3),
(1, 'Ride-in show competition', 4),
(1, 'Photography contest', 5);