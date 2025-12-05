-- 创建数据库
CREATE DATABASE IF NOT EXISTS vintage_motodb;
USE vintage_motodb;

-- 设置字符集
ALTER DATABASE vintage_motodb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 1. 用户表
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    avatar_url VARCHAR(255),
    user_role ENUM('user', 'editor', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    is_active BOOLEAN DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. 摩托车品牌表
CREATE TABLE IF NOT EXISTS brands (
    brand_id INT AUTO_INCREMENT PRIMARY KEY,
    brand_name VARCHAR(50) UNIQUE NOT NULL,
    country VARCHAR(50),
    founded_year INT,
    description TEXT,
    logo_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. 摩托车型号表
CREATE TABLE IF NOT EXISTS motorcycle_models (
    model_id INT AUTO_INCREMENT PRIMARY KEY,
    brand_id INT NOT NULL,
    model_name VARCHAR(100) NOT NULL,
    year_start INT,
    year_end INT,
    category ENUM('cafe_racer', 'cruiser', 'sport', 'tourer', 'standard', 'adventure', 'scrambler') NOT NULL,
    engine_type VARCHAR(50),
    engine_cc INT,
    power_hp INT,
    torque_nm DECIMAL(6,2),
    weight_kg DECIMAL(6,2),
    top_speed_kmh INT,
    description TEXT,
    featured_image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (brand_id) REFERENCES brands(brand_id) ON DELETE CASCADE,
    UNIQUE KEY unique_model (brand_id, model_name, year_start)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. 评论表
CREATE TABLE IF NOT EXISTS reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    model_id INT NOT NULL,
    user_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    excerpt VARCHAR(300),
    rating_overall DECIMAL(2,1) CHECK (rating_overall >= 1 AND rating_overall <= 5),
    rating_performance DECIMAL(2,1),
    rating_reliability DECIMAL(2,1),
    rating_style DECIMAL(2,1),
    rating_value DECIMAL(2,1),
    pros TEXT,
    cons TEXT,
    is_featured BOOLEAN DEFAULT FALSE,
    view_count INT DEFAULT 0,
    like_count INT DEFAULT 0,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    published_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (model_id) REFERENCES motorcycle_models(model_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 5. 评论标签表
CREATE TABLE IF NOT EXISTS review_tags (
    tag_id INT AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(50) UNIQUE NOT NULL,
    tag_type ENUM('style', 'feature', 'use_case') DEFAULT 'feature',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. 评论-标签关联表
CREATE TABLE IF NOT EXISTS review_tag_relations (
    review_id INT NOT NULL,
    tag_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (review_id, tag_id),
    FOREIGN KEY (review_id) REFERENCES reviews(review_id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES review_tags(tag_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 7. 评论图片表
CREATE TABLE IF NOT EXISTS review_images (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    review_id INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    caption VARCHAR(200),
    is_primary BOOLEAN DEFAULT FALSE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (review_id) REFERENCES reviews(review_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 8. 评论点赞表
CREATE TABLE IF NOT EXISTS review_likes (
    like_id INT AUTO_INCREMENT PRIMARY KEY,
    review_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_like (review_id, user_id),
    FOREIGN KEY (review_id) REFERENCES reviews(review_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 9. 评论评论表
CREATE TABLE IF NOT EXISTS review_comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    review_id INT NOT NULL,
    user_id INT NOT NULL,
    parent_comment_id INT NULL,
    comment_text TEXT NOT NULL,
    is_approved BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (review_id) REFERENCES reviews(review_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (parent_comment_id) REFERENCES review_comments(comment_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 10. 事件表
CREATE TABLE IF NOT EXISTS events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    event_title VARCHAR(200) NOT NULL,
    event_description TEXT,
    event_date DATE NOT NULL,
    start_time TIME,
    end_time TIME,
    location VARCHAR(200),
    venue_name VARCHAR(100),
    address TEXT,
    city VARCHAR(50),
    country VARCHAR(50),
    organizer_name VARCHAR(100),
    organizer_contact VARCHAR(100),
    entry_fee DECIMAL(10,2),
    entry_type ENUM('free', 'paid', 'registration') DEFAULT 'free',
    expected_attendance INT,
    featured_image VARCHAR(255),
    registration_url VARCHAR(255),
    status ENUM('upcoming', 'ongoing', 'completed', 'cancelled') DEFAULT 'upcoming',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 11. 资源表
CREATE TABLE IF NOT EXISTS resources (
    resource_id INT AUTO_INCREMENT PRIMARY KEY,
    resource_type ENUM('guide', 'tutorial', 'directory', 'article') NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    content TEXT,
    author_id INT,
    icon_class VARCHAR(50),
    featured_image VARCHAR(255),
    file_url VARCHAR(255),
    external_url VARCHAR(255),
    view_count INT DEFAULT 0,
    download_count INT DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    published_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 12. 装备表
CREATE TABLE IF NOT EXISTS gear (
    gear_id INT AUTO_INCREMENT PRIMARY KEY,
    gear_type ENUM('helmet', 'jacket', 'gloves', 'boots', 'accessory', 'other') NOT NULL,
    brand_name VARCHAR(100),
    product_name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2),
    currency VARCHAR(3) DEFAULT 'PHP',
    rating DECIMAL(2,1),
    review_text TEXT,
    image_url VARCHAR(255),
    purchase_url VARCHAR(255),
    is_featured BOOLEAN DEFAULT FALSE,
    status ENUM('available', 'discontinued') DEFAULT 'available',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 13. 访问统计表
CREATE TABLE IF NOT EXISTS site_analytics (
    analytic_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(100),
    user_id INT NULL,
    page_url VARCHAR(500),
    referrer_url VARCHAR(500),
    ip_address VARCHAR(45),
    user_agent TEXT,
    device_type VARCHAR(50),
    browser VARCHAR(50),
    os VARCHAR(50),
    country VARCHAR(50),
    city VARCHAR(50),
    visit_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 14. 搜索记录表
CREATE TABLE IF NOT EXISTS search_history (
    search_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NULL,
    search_query VARCHAR(200),
    filters TEXT,
    results_count INT,
    search_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 插入品牌数据
INSERT INTO brands (brand_name, country, founded_year, description) VALUES
('Harley-Davidson', 'USA', 1903, 'American motorcycle manufacturer founded in Milwaukee, Wisconsin'),
('Triumph', 'UK', 1902, 'British motorcycle manufacturing company'),
('Norton', 'UK', 1898, 'British motorcycle marque'),
('BMW', 'Germany', 1916, 'German motorcycle and automobile manufacturer'),
('Indian', 'USA', 1901, 'American motorcycle brand originally founded in Springfield, Massachusetts'),
('Ducati', 'Italy', 1926, 'Italian motorcycle manufacturer'),
('Honda', 'Japan', 1948, 'Japanese public multinational conglomerate manufacturer'),
('Yamaha', 'Japan', 1955, 'Japanese manufacturer of motorcycles'),
('BSA', 'UK', 1919, 'British motorcycle, bicycle, and firearm brand'),
('Kawasaki', 'Japan', 1962, 'Japanese multinational corporation manufacturer'),
('Suzuki', 'Japan', 1909, 'Japanese multinational corporation manufacturer');

-- 插入标签数据
INSERT INTO review_tags (tag_name, tag_type) VALUES
-- 风格标签
('cafe_racer', 'style'),
('bobber', 'style'),
('chopper', 'style'),
('scrambler', 'style'),
('brat_style', 'style'),
('tracker', 'style'),
-- 特性标签
('air_cooled', 'feature'),
('liquid_cooled', 'feature'),
('v_twin', 'feature'),
('parallel_twin', 'feature'),
('inline_four', 'feature'),
('single_cylinder', 'feature'),
('kick_start', 'feature'),
('electric_start', 'feature'),
('carburetor', 'feature'),
('fuel_injection', 'feature'),
('disc_brake', 'feature'),
('drum_brake', 'feature'),
-- 用途标签
('daily_commuter', 'use_case'),
('weekend_warrior', 'use_case'),
('long_distance', 'use_case'),
('custom_project', 'use_case'),
('collector_item', 'use_case'),
('beginner_friendly', 'use_case'),
('restoration_project', 'use_case');

-- 插入管理员用户
INSERT INTO users (username, email, password_hash, full_name, user_role) VALUES
('admin', 'admin@vintagemoto.com', SHA2('admin123', 256), 'Administrator', 'admin'),
('editor', 'editor@vintagemoto.com', SHA2('editor123', 256), 'Content Editor', 'editor');

-- 插入样本摩托车型号
INSERT INTO motorcycle_models (brand_id, model_name, year_start, year_end, category, engine_cc, engine_type) VALUES
-- Harley-Davidson
(1, 'Sportster Iron 883', 2018, 2021, 'cruiser', 883, 'V-twin'),
(1, 'Knucklehead', 1936, 1947, 'cruiser', 1000, 'OHV V-twin'),
-- Triumph
(2, 'Bonneville T120', 2016, NULL, 'standard', 1200, 'Parallel Twin'),
(2, 'Bonneville T100', 2001, NULL, 'standard', 865, 'Parallel Twin'),
-- Norton
(3, 'Commando 850', 1973, 1977, 'cafe_racer', 828, 'Parallel Twin'),
-- BMW
(4, 'R80 G/S', 1980, 1987, 'adventure', 798, 'Boxer Twin'),
-- Indian
(5, 'Scout Bobber', 2018, NULL, 'cruiser', 1133, 'V-twin'),
-- Ducati
(6, 'Monster 900', 1993, 1998, 'standard', 904, 'L-twin'),
-- Honda
(7, 'CB750 Four', 1969, 1978, 'standard', 736, 'Inline-four'),
(7, 'Gold Wing GL1000', 1975, 1979, 'tourer', 999, 'Flat-four'),
-- Yamaha
(8, 'XS650', 1970, 1983, 'cafe_racer', 653, 'Parallel Twin'),
(8, 'SR500', 1978, 1999, 'cafe_racer', 499, 'Single Cylinder'),
-- Kawasaki
(10, 'Z1 900', 1973, 1975, 'sport', 903, 'Inline-four'),
-- Suzuki
(11, 'GSX-R750', 1985, NULL, 'sport', 750, 'Inline-four');

-- 插入样本评论
INSERT INTO reviews (model_id, user_id, title, content, excerpt, rating_overall, rating_performance, rating_reliability, rating_style, rating_value, pros, cons, status, published_date) VALUES
(1, 1, 'Perfect Entry-Level Harley', 'The Sportster 883 is the perfect introduction to the Harley-Davidson world. While it may not have the power of larger models, it offers that classic Harley feel and sound at an accessible price point.', 'Great beginner Harley with classic styling', 4.2, 3.8, 4.5, 4.8, 4.1, 'Classic Harley styling\nGood value for money\nEasy to customize\nReliable engine', 'Could use more power\n5-speed transmission only\nHeavy for its size', 'published', '2024-03-15'),
(3, 1, 'Modern Classic Done Right', 'Triumph has perfectly captured the essence of the original Bonneville while adding modern reliability and features. The T120 is smooth, comfortable, and full of character.', 'Perfect blend of classic style and modern performance', 4.7, 4.5, 4.8, 4.9, 4.5, 'Beautiful classic styling\nSmooth parallel twin engine\nModern features hidden well\nExcellent build quality', 'Heavier than it looks\nPrice premium over competitors\nLimited aftermarket for modern parts', 'published', '2024-02-28'),
(9, 1, 'The Motorcycle That Changed Everything', 'The Honda CB750 Four revolutionized motorcycling when it was introduced. Today, it remains a benchmark for classic Japanese motorcycles.', 'Historic motorcycle that changed the industry', 4.8, 4.7, 4.9, 4.6, 4.5, 'Historical significance\nReliable inline-four engine\nEasy to maintain\nGood parts availability', 'Can be expensive for good examples\nHeavy by modern standards\nBrakes feel dated', 'published', '2024-01-10');