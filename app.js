// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize stat counters
    initStatCounters();
    
    // Initialize budget chart
    initBudgetChart();

    // Initialize navigation highlighting
    initNavigationHighlight();
    
    // Phone animation for the mechanism section
    initPhoneAnimation();
});

// Function to initialize scroll animations
function initScrollAnimations() {
    // Get all elements with the class 'fade-in'
    const fadeElements = document.querySelectorAll('.campaign, .step, .metric, .insight, .prize-card, .strategy-item');
    
    // Add the fade-in class to elements we want to animate
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once element is visible
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // When at least 10% of the element is visible
    });
    
    // Observe all elements with the fade-in class
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

// Function to initialize stat counters
function initStatCounters() {
    // Get all elements with class 'stat__number' that have a data-target attribute
    const statElements = document.querySelectorAll('.stat__number[data-target]');
    
    // Create an Intersection Observer for stat counters
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start the counter animation
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                animateCounter(entry.target, 0, target, duration);
                observer.unobserve(entry.target); // Stop observing once counter starts
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // When at least 50% of the counter is visible
    });
    
    // Observe all stat elements
    statElements.forEach(element => {
        observer.observe(element);
    });
}

// Function to animate a counter from start to end value
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // If the end value is large, use comma formatting
        let currentValue = Math.floor(progress * (end - start) + start);
        
        if (end >= 1000) {
            element.textContent = currentValue.toLocaleString();
        } else {
            element.textContent = currentValue;
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Function to initialize the budget chart
function initBudgetChart() {
    // Only proceed if the chart element exists
    const chartElement = document.getElementById('budgetChart');
    if (!chartElement) return;
    
    // Budget data
    const budgetData = [
        {
            campaign: "Vară #FărăLimite",
            budget: 30885,
            percentage: 38.6,
            color: '#FF6B6B' // Summer color
        },
        {
            campaign: "Back to school #FărăLimite",
            budget: 26300,
            percentage: 32.8,
            color: '#4ECDC4' // Back to school color
        },
        {
            campaign: "Crăciun #FărăLimite",
            budget: 23000,
            percentage: 28.6,
            color: '#45B7D1' // Winter color
        }
    ];
    
    // Create chart context
    const ctx = chartElement.getContext('2d');
    
    // Initialize chart
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: budgetData.map(item => item.campaign),
            datasets: [{
                data: budgetData.map(item => item.budget),
                backgroundColor: budgetData.map(item => item.color),
                borderColor: 'transparent',
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            family: 'FKGroteskNeue, Geist, Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
                            size: 14
                        },
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text'),
                        padding: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const percentage = budgetData[context.dataIndex].percentage;
                            return `${label}: €${value.toLocaleString()} (${percentage}%)`;
                        }
                    }
                }
            },
            cutout: '60%',
            animation: {
                animateScale: true,
                animateRotate: true,
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Function to initialize the phone animation
function initPhoneAnimation() {
    const uploadArea = document.querySelector('.upload-area');
    if (!uploadArea) return;
    
    // Simple animation sequence
    function animateUploadArea() {
        uploadArea.style.transition = 'all 0.5s ease-in-out';
        
        // Sequence of animations
        setTimeout(() => {
            uploadArea.style.transform = 'scale(0.95)';
            uploadArea.style.opacity = '0.7';
        }, 1000);
        
        setTimeout(() => {
            uploadArea.style.transform = 'scale(1.05)';
            uploadArea.style.opacity = '1';
        }, 1500);
        
        setTimeout(() => {
            uploadArea.style.transform = 'scale(1)';
        }, 2000);
        
        // Repeat the animation
        setTimeout(animateUploadArea, 4000);
    }
    
    // Start the animation
    animateUploadArea();
}

// Function to highlight active navigation links while scrolling
function initNavigationHighlight() {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll('section[id]');
    
    // Add an event listener for scroll
    window.addEventListener('scroll', () => {
        // Current scroll position
        let scrollY = window.pageYOffset;
        
        // Go through each section to get height, top and ID
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            // If the current scroll position is within this section
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Find the corresponding navigation link and add active class
                document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.add('active');
            } else {
                // Remove active class from other links
                document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.remove('active');
            }
        });
    });
}

// Load Chart.js from CDN
function loadChartJs() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Load Chart.js first, then initialize
loadChartJs()
    .then(() => {
        // Check if DOMContentLoaded has already fired
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initBudgetChart);
        } else {
            initBudgetChart();
        }
    })
    .catch(error => {
        console.error('Failed to load Chart.js:', error);
    });

// Apply styles to active navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav__menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the target section ID
            const targetId = this.getAttribute('href');
            
            // Smooth scroll to the target section
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

