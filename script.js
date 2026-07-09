// ============================================================
// MAZEN ACCESSOIRES — SCRIPT
// ============================================================

// === SCROLL REVEAL (Apparition au défilement) ===
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.store-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(el);
    });
});

// === CLIC SUR LE NUMÉRO DE TÉLÉPHONE (confirmation) ===
document.querySelectorAll('.store-phone').forEach(link => {
    link.addEventListener('click', function(e) {
        const phone = this.textContent.trim();
        if (!confirm(`📞 Appeler ${phone} ?`)) {
            e.preventDefault();
        }
    });
});

// === ANIMATION DES ICÔNES AU SURVOL ===
document.querySelectorAll('.store-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.store-icon');
        if (icon) {
            icon.style.transform = 'scale(1.15) rotate(-5deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    });
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.store-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// === COPIE DU NUMÉRO (clic droit) ===
document.querySelectorAll('.store-phone').forEach(link => {
    link.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        const phone = this.textContent.trim().replace(/\s/g, '');
        navigator.clipboard.writeText(phone).then(() => {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Copié !';
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 1500);
        }).catch(() => {
            alert('📋 Copier manuellement : ' + phone);
        });
    });
});

console.log('✨ Mazen Accessoires — Site chargé avec succès !');
