document.addEventListener('DOMContentLoaded', function() {
    // === SCROLL REVEAL ===
    const elements = document.querySelectorAll('.store-card, .collection-card, .why-card, .gallery-item, .social-item');
    
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

    // === CONFIRMATION APPEL ===
    document.querySelectorAll('.store-phone').forEach(link => {
        link.addEventListener('click', function(e) {
            if (!confirm(`📞 Appeler ${this.textContent.trim()} ?`)) {
                e.preventDefault();
            }
        });
    });

    // === COPIE DU NUMÉRO (clic droit) ===
    document.querySelectorAll('.store-phone').forEach(link => {
        link.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            const phone = this.textContent.trim().replace(/\s/g, '');
            navigator.clipboard.writeText(phone).then(() => {
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copié !';
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                }, 1500);
            }).catch(() => {
                alert('📋 Copier manuellement : ' + phone);
            });
        });
    });

    console.log('✨ Mazen Accessoires — Site chargé avec succès !');
});
