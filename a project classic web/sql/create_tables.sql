-- Create database
CREATE DATABASE IF NOT EXISTS vintage_moto_db;
USE vintage_moto_db;

-- Table: motorcycle_categories
CREATE TABLE IF NOT EXISTS motorcycle_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    icon_class VARCHAR(50),
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: motorcycles
CREATE TABLE IF NOT EXISTS motorcycles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT,
    model_name VARCHAR(100) NOT NULL,
    manufacturer VARCHAR(100) NOT NULL,
    year INT,
    engine_size INT,
    power_hp INT,
    weight_kg DECIMAL(5,2),
    description TEXT,
    history TEXT,
    featured BOOLEAN DEFAULT FALSE,
    status ENUM('active', 'archived') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES motorcycle_categories(id)
);

-- Table: motorcycle_images
CREATE TABLE IF NOT EXISTS motorcycle_images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    motorcycle_id INT,
    image_url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500),
    caption VARCHAR(255),
    display_order INT DEFAULT 0,
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (motorcycle_id) REFERENCES motorcycles(id) ON DELETE CASCADE
);

-- Table: gallery_items
CREATE TABLE IF NOT EXISTS gallery_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    image_url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500),
    motorcycle_id INT,
    category VARCHAR(100),
    view_count INT DEFAULT 0,
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (motorcycle_id) REFERENCES motorcycles(id)
);

-- Table: resources
CREATE TABLE IF NOT EXISTS resources (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    description TEXT,
    content TEXT,
    icon_class VARCHAR(50),
    resource_type ENUM('guide', 'article', 'tutorial', 'manual') DEFAULT 'guide',
    file_url VARCHAR(500),
    download_count INT DEFAULT 0,
    author_id INT DEFAULT 1,
    status ENUM('draft', 'published', 'archived') DEFAULT 'published',
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: resource_items
CREATE TABLE IF NOT EXISTS resource_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    resource_id INT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    icon_class VARCHAR(50),
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE
);

-- Table: gear_items
CREATE TABLE IF NOT EXISTS gear_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    category VARCHAR(100),
    description TEXT,
    price_range VARCHAR(50),
    image_url VARCHAR(500),
    rating DECIMAL(3,2),
    review_text TEXT,
    reviewer_name VARCHAR(100),
    amazon_url VARCHAR(500),
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: events
CREATE TABLE IF NOT EXISTS events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    event_date DATE NOT NULL,
    start_time TIME,
    end_time TIME,
    location VARCHAR(500) NOT NULL,
    location_map_url VARCHAR(500),
    organizer VARCHAR(200),
    expected_attendance VARCHAR(100),
    entry_fee DECIMAL(10,2) DEFAULT 0,
    entry_type VARCHAR(50),
    status ENUM('upcoming', 'ongoing', 'completed', 'cancelled') DEFAULT 'upcoming',
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: event_highlights
CREATE TABLE IF NOT EXISTS event_highlights (
    id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    highlight_text VARCHAR(500) NOT NULL,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

-- Table: users (simple version for demo)
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    full_name VARCHAR(100),
    role ENUM('user', 'moderator', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default admin user (password: admin123)
INSERT IGNORE INTO users (username, email, password_hash, full_name, role) VALUES
('admin', 'admin@vintagemoto.com', '$2y$10$YourHashedPasswordHere', 'Admin User', 'admin');

-- Insert default categories
INSERT IGNORE INTO motorcycle_categories (name, slug, description, icon_class, display_order) VALUES
('British Classics', 'british-classics', 'Iconic motorcycles from Triumph, Norton, BSA, and other British manufacturers.', 'fas fa-flag-uk', 1),
('Japanese Legends', 'japanese-legends', 'Reliable and innovative bikes from Honda, Yamaha, Kawasaki, and Suzuki.', 'fas fa-flag-jp', 2),
('Custom Builds', 'custom-builds', 'One-of-a-kind custom motorcycles and cafe racers built by master craftsmen.', 'fas fa-tools', 3),
('Cafe Racers', 'cafe-racers', 'Lightweight, minimalist bikes built for speed and style on city streets.', 'fas fa-motorcycle', 4);