<?php
// services.php - Web Design Services Page
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Design Services | Charuka Rathnayaka</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: #f8fafc;
            color: #1e293b;
            line-height: 1.6;
        }

        body.dark {
            background: #0f172a;
            color: #f1f5f9;
        }

        /* Navigation */
        .navbar {
            background: white;
            border-bottom: 1px solid #e2e8f0;
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        body.dark .navbar {
            background: #1e293b;
            border-color: #334155;
        }
        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo {
            font-size: 1.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-decoration: none;
        }
        .nav-links a {
            text-decoration: none;
            color: #64748b;
            margin-left: 2rem;
            transition: color 0.3s;
        }
        body.dark .nav-links a {
            color: #94a3b8;
        }
        .nav-links a:hover {
            color: #3b82f6;
        }
        .theme-toggle {
            background: #f1f5f9;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            cursor: pointer;
            margin-left: 1rem;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            padding: 4rem 2rem;
            text-align: center;
            color: white;
        }
        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        .hero p {
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
        }

        /* Packages */
        .packages {
            max-width: 1200px;
            margin: 4rem auto;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        .package-card {
            background: white;
            border-radius: 1rem;
            padding: 2rem;
            border: 1px solid #e2e8f0;
            transition: all 0.3s;
            position: relative;
        }
        body.dark .package-card {
            background: #1e293b;
            border-color: #334155;
        }
        .package-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 30px -10px rgba(0,0,0,0.15);
        }
        .package-card.featured {
            border: 2px solid #3b82f6;
            transform: scale(1.02);
        }
        .popular-badge {
            position: absolute;
            top: -12px;
            right: 20px;
            background: #3b82f6;
            color: white;
            padding: 0.25rem 1rem;
            border-radius: 2rem;
            font-size: 0.7rem;
            font-weight: 600;
        }
        .package-name {
            font-size: 1.5rem;
            font-weight: 800;
            margin-bottom: 0.5rem;
        }
        .package-price {
            font-size: 2rem;
            font-weight: 800;
            color: #3b82f6;
            margin-bottom: 1rem;
        }
        .package-price small {
            font-size: 0.8rem;
            font-weight: normal;
            color: #64748b;
        }
        .package-features {
            list-style: none;
            margin: 1.5rem 0;
        }
        .package-features li {
            padding: 0.5rem 0;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .package-features i {
            color: #10b981;
            width: 20px;
        }
        .btn-order {
            width: 100%;
            padding: 0.8rem;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: white;
            border: none;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }
        .btn-order:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(59,130,246,0.3);
        }

        /* Process Section */
        .process {
            max-width: 1200px;
            margin: 4rem auto;
            padding: 0 2rem;
        }
        .section-title {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 3rem;
        }
        .process-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }
        .process-step {
            text-align: center;
        }
        .step-number {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            font-size: 1.5rem;
            font-weight: 800;
            color: white;
        }
        .step-title {
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        /* Portfolio Section */
        .portfolio {
            background: white;
            padding: 4rem 2rem;
        }
        body.dark .portfolio {
            background: #1e293b;
        }
        .portfolio-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        .portfolio-item {
            background: #f8fafc;
            border-radius: 1rem;
            overflow: hidden;
            transition: all 0.3s;
        }
        body.dark .portfolio-item {
            background: #0f172a;
        }
        .portfolio-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
        }
        .portfolio-image {
            height: 200px;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .portfolio-image i {
            font-size: 3rem;
            color: white;
        }
        .portfolio-info {
            padding: 1.5rem;
        }

        /* CTA Section */
        .cta {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            padding: 4rem 2rem;
            text-align: center;
            color: white;
        }
        .cta h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        .cta-btn {
            display: inline-block;
            background: white;
            color: #3b82f6;
            padding: 0.8rem 2rem;
            border-radius: 2rem;
            text-decoration: none;
            font-weight: 600;
            margin-top: 1rem;
            transition: all 0.3s;
        }
        .cta-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        /* Footer */
        .footer {
            text-align: center;
            padding: 2rem;
            background: #0f172a;
            color: #94a3b8;
        }

        @media (max-width: 768px) {
            .nav-container {
                flex-direction: column;
                gap: 1rem;
            }
            .hero h1 {
                font-size: 1.8rem;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.php" class="logo">CR Web Design</a>
            <div class="nav-links">
                <a href="#packages">Packages</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
                <button class="theme-toggle" id="themeToggle"><i class="fas fa-moon"></i></button>
            </div>
        </div>
    </nav>

    <section class="hero">
        <h1>Professional Web Design Services</h1>
        <p>Get a stunning, responsive website that grows your business. Starting from just Rs. 15,000</p>
    </section>

    <div class="packages" id="packages">
        <div class="package-card">
            <div class="package-name">Basic</div>
            <div class="package-price">Rs. 15,000 <small>/ one-time</small></div>
            <ul class="package-features">
                <li><i class="fas fa-check"></i> 3-5 Page Website</li>
                <li><i class="fas fa-check"></i> Mobile Responsive</li>
                <li><i class="fas fa-check"></i> Contact Form</li>
                <li><i class="fas fa-check"></i> Social Media Links</li>
                <li><i class="fas fa-check"></i> 1 Month Support</li>
                <li><i class="fas fa-check"></i> Basic SEO Setup</li>
            </ul>
            <button class="btn-order" onclick="orderPackage('Basic')">Order Now</button>
        </div>

        <div class="package-card featured">
            <div class="popular-badge">🔥 Most Popular</div>
            <div class="package-name">Standard</div>
            <div class="package-price">Rs. 35,000 <small>/ one-time</small></div>
            <ul class="package-features">
                <li><i class="fas fa-check"></i> 5-10 Page Website</li>
                <li><i class="fas fa-check"></i> Mobile Responsive</li>
                <li><i class="fas fa-check"></i> Advanced Contact Form</li>
                <li><i class="fas fa-check"></i> WhatsApp Integration</li>
                <li><i class="fas fa-check"></i> Google Maps</li>
                <li><i class="fas fa-check"></i> Image Gallery</li>
                <li><i class="fas fa-check"></i> 3 Months Support</li>
                <li><i class="fas fa-check"></i> Complete SEO</li>
            </ul>
            <button class="btn-order" onclick="orderPackage('Standard')">Order Now</button>
        </div>

        <div class="package-card">
            <div class="package-name">Premium</div>
            <div class="package-price">Rs. 75,000 <small>/ one-time</small></div>
            <ul class="package-features">
                <li><i class="fas fa-check"></i> 10-15 Page Website</li>
                <li><i class="fas fa-check"></i> Mobile Responsive</li>
                <li><i class="fas fa-check"></i> E-commerce Ready</li>
                <li><i class="fas fa-check"></i> Payment Gateway</li>
                <li><i class="fas fa-check"></i> Admin Dashboard</li>
                <li><i class="fas fa-check"></i> WhatsApp API</li>
                <li><i class="fas fa-check"></i> 6 Months Support</li>
                <li><i class="fas fa-check"></i> SSL Certificate</li>
                <li><i class="fas fa-check"></i> Email Setup</li>
            </ul>
            <button class="btn-order" onclick="orderPackage('Premium')">Order Now</button>
        </div>
    </div>

    <div class="process">
        <h2 class="section-title">How It Works</h2>
        <div class="process-grid">
            <div class="process-step">
                <div class="step-number">1</div>
                <div class="step-title">Discovery Call</div>
                <p>We discuss your requirements, goals, and vision for the website.</p>
            </div>
            <div class="process-step">
                <div class="step-number">2</div>
                <div class="step-title">Design & Development</div>
                <p>I create your website with modern design and clean code.</p>
            </div>
            <div class="process-step">
                <div class="step-number">3</div>
                <div class="step-title">Review & Feedback</div>
                <p>You review the website and request any changes.</p>
            </div>
            <div class="process-step">
                <div class="step-number">4</div>
                <div class="step-title">Launch & Support</div>
                <p>Website goes live, and I provide ongoing support.</p>
            </div>
        </div>
    </div>

    <div class="portfolio" id="portfolio">
        <h2 class="section-title">Recent Projects</h2>
        <div class="portfolio-grid">
            <div class="portfolio-item">
                <div class="portfolio-image"><i class="fas fa-store"></i></div>
                <div class="portfolio-info">
                    <h3>Mahawilacchiya E-Shop</h3>
                    <p>Complete e-commerce platform with WhatsApp integration</p>
                </div>
            </div>
            <div class="portfolio-item">
                <div class="portfolio-image"><i class="fas fa-truck"></i></div>
                <div class="portfolio-info">
                    <h3>Local Delivery Service</h3>
                    <p>Order management system for a local delivery service</p>
                </div>
            </div>
            <div class="portfolio-item">
                <div class="portfolio-image"><i class="fas fa-clinic"></i></div>
                <div class="portfolio-info">
                    <h3>Clinic Management System</h3>
                    <p>Appointment booking and patient management system</p>
                </div>
            </div>
        </div>
    </div>

    <div class="cta" id="contact">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's discuss your website needs and create something amazing together.</p>
        <a href="https://wa.me/94712345678" class="cta-btn"><i class="fab fa-whatsapp"></i> Contact on WhatsApp</a>
    </div>

    <footer class="footer">
        <p>&copy; 2025 CR Web Design. All rights reserved.</p>
    </footer>

    <script>
        function orderPackage(packageName) {
            window.location.href = `https://wa.me/94712345678?text=Hi! I'm interested in the ${packageName} package. Can you tell me more?`;
        }

        const themeToggle = document.getElementById('themeToggle');
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        themeToggle.addEventListener('click', () => {
            if (document.body.classList.contains('dark')) {
                document.body.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                document.body.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        });
    </script>
</body>
</html>
