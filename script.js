// Smooth scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Firewall Demo
function testFirewall(type) {
    const source = document.getElementById('packet-source');
    const firewall = document.getElementById('firewall-status');
    const dest = document.getElementById('packet-dest');
    const output = document.getElementById('output');
    
    // Reset
    source.innerHTML = '';
    dest.innerHTML = '';
    firewall.textContent = 'Checking...';
    firewall.style.background = '#f59e0b';
    
    let packetText, result, color, message;
    
    switch(type) {
        case 'http':
            packetText = '🌐 HTTP Request\nPort: 80';
            result = 'ALLOWED';
            color = '#10b981';
            message = `✅ HTTP traffic ALLOWED
📝 Port 80 is permitted for web traffic
🔒 Secure connection established`;
            break;
            
        case 'ssh':
            packetText = '🔐 SSH Connection\nPort: 22';
            result = 'BLOCKED';
            color = '#ef4444';
            message = `❌ SSH traffic BLOCKED
📝 Port 22 is restricted from external networks
🛡️ Security policy enforced`;
            break;
            
        case 'malicious':
            packetText = '⚡ Malicious Traffic\nPort: 9999';
            result = 'BLOCKED';
            color = '#dc2626';
            message = `🚫 MALICIOUS traffic BLOCKED
📝 Unknown port detected and blocked
⚠️ Potential threat prevented`;
            break;
    }
    
    // Animate
    source.innerHTML = packetText;
    source.style.background = '#dbeafe';
    source.style.border = '2px solid #2563eb';
    
    setTimeout(() => {
        firewall.textContent = result;
        firewall.style.background = color;
        
        if (type === 'http') {
            dest.innerHTML = packetText + '\n✅ Delivered';
            dest.style.background = '#d1fae5';
            dest.style.border = '2px solid #10b981';
        } else {
            dest.innerHTML = '🚫 Blocked';
            dest.style.background = '#fecaca';
            dest.style.border = '2px solid #ef4444';
        }
        
        output.textContent = message;
    }, 1000);
}

// Add some interactivity to features
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature-card');
    
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Console welcome message
    console.log(`🔥 Firewall Security Demo Loaded
Available commands:
- testFirewall('http') - Test web traffic
- testFirewall('ssh') - Test SSH traffic  
- testFirewall('malicious') - Test blocked traffic
    `);
});