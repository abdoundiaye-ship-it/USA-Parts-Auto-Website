const products = [
    { sku: 'GP-5W40-1L', name: 'GP PETROGEN FULL SYNTHETIC 5W40 SP MOTOR OIL', price: 9000 },
    { sku: 'CE-5W40-1L', name: 'CASTROL EDGE 5W40 EURO MOTOR OIL', price: 9500 },
    { sku: 'MB1-5W40-1L', name: 'MOBIL 1 FS EURO 5W40 MOTOR OIL', price: 10000 },
    { sku: 'MC-LVTF-1L', name: 'MOTORCRAFT MERCON LV TRANSMISSION FLUID', price: 8000 },
    { sku: 'PS--ATFTF-1L', name: 'PRIME SERIES ATF DEXRON-3 TRANSMISSION FLUID', price: 7500 },
    { sku: 'GP-15W40-220L', name: 'GP DEOGEN STANDARD 15W40 CI4', price: 200000 }
];

const translations = {
    en: {
        navHome: 'Home',
        navAbout: 'About',
        navWhyUs: 'Why Us',
        navProducts: 'Products',
        navQuote: 'Quote',
        navOrder: 'Order',
        navContact: 'Contact',
        heroTitle: 'Premium Engine Oils and Genuine U.S. Auto Parts',
        heroText: 'Fast import sourcing for professional workshops, auto retailers, and vehicle owners who need quality oils, fluids, and spare parts.',
        heroExplore: 'Explore Products',
        heroQuote: 'Get a Quote',
        heroOrder: 'Place Order',
        aboutTitle: 'About Us',
        aboutText: 'We specialize in providing high-quality vehicle engine oils, automotive supplies, and spare parts directly imported from the United States. Our commitment to excellence ensures that you get the best products for your automotive needs.',
        whyTitle: 'Why Choose USA Cars Oil & Parts?',
        whyText: 'Benefit from trusted brands, fast delivery, and expert support tailored for professional workshops, retailers, and vehicle owners.',
        feature1Title: 'Genuine U.S. Imports',
        feature1Text: 'We source authentic engine oils and spare parts directly from trusted U.S. manufacturers for reliability and performance.',
        feature2Title: 'Fast Delivery',
        feature2Text: 'Efficient logistics and local stock mean you get the parts you need faster, with minimal disruption to your business.',
        feature3Title: 'Expert Support',
        feature3Text: 'Our team helps you choose the right fluid or spare part for your vehicle, saving you time and ensuring the right fit.',
        flyerTitle: 'Our Flyer',
        productsTitle: 'Our Products',
        productsLead: 'Browse our premium selection of engine oils and transmission fluids designed for modern vehicles and demanding conditions.',
        quoteTitle: 'Request a Quote',
        quoteLead: 'Get a personalized quote for the products you need.',
        quoteName: 'Name',
        quotePhoneEmail: 'Phone or Email',
        quoteProducts: 'Products Needed',
        quoteVehicle: 'Vehicle Type (Optional)',
        quoteMessage: 'Message',
        quoteButton: 'Request a Quote',
        testimonialsTitle: 'What Our Customers Say',
        testimonialsLead: 'Trusted by workshops and delivery services for dependable imports and fast support.',
        testimonial1Text: 'The team helped us source the exact motor oil brands our fleet needs, and shipping was fast. The products arrived ready to use.',
        testimonial1Author: 'Ahmed, Auto Repair Shop',
        testimonial2Text: 'Great selection and helpful advice on which oils fit our vehicles. We always come back for import-quality parts.',
        testimonial2Author: 'Sara, Fleet Manager',
        orderTitle: 'Place an Order',
        orderLead: 'Select products and place your order for fast delivery.',
        orderCart: 'Your Cart',
        orderName: 'Name',
        orderPhone: 'Phone',
        orderEmail: 'Email',
        orderAddress: 'Delivery Address',
        orderNotes: 'Additional Notes',
        orderManualDetails: 'Product details (optional)',
        orderSelect: 'Select Products',
        addProduct: 'Add Product',
        cartSummary: 'Total',
        contactTitle: 'Contact Us',
        contactLead: 'Send us your request and we’ll respond with a personalized quote and delivery plan. Visit us at Golf Sud, près de la Cité Aliou SOW, à côté de la Brioche Dorée.',
        contactName: 'Name',
        contactEmail: 'Email',
        contactMessage: 'Message',
        contactButton: 'Send Message',
        footerText: '© 2026 USA Cars Oil & Parts. All rights reserved.',
        footerMeta: 'Contacts: +221 77 217 99 40 / 77 218 00 01 / 77 218 00 32 / 77 217 99 40'
    },
    fr: {
        navHome: 'Accueil',
        navAbout: 'À propos',
        navWhyUs: 'Pourquoi nous',
        navProducts: 'Produits',
        navQuote: 'Devis',
        navOrder: 'Commande',
        navContact: 'Contact',
        heroTitle: 'Huiles moteur haut de gamme et pièces auto américaines',
        heroText: 'Approvisionnement rapide pour ateliers professionnels, détaillants auto et propriétaires de véhicules qui recherchent des huiles, fluides et pièces détachées de qualité.',
        heroExplore: 'Découvrir les produits',
        heroQuote: 'Demander un devis',
        heroOrder: 'Passer une commande',
        aboutTitle: 'À propos de nous',
        aboutText: 'Nous sommes spécialisés dans la fourniture d’huiles moteur, de fournitures automobiles et de pièces détachées importées directement des États-Unis. Notre engagement envers l’excellence garantit que vous obtenez les meilleurs produits pour vos besoins automobiles.',
        whyTitle: 'Pourquoi choisir USA Cars Oil & Parts ?',
        whyText: 'Profitez de marques de confiance, d’une livraison rapide et d’un support expert adapté aux ateliers professionnels, aux détaillants et aux propriétaires de véhicules.',
        feature1Title: 'Imports américains authentiques',
        feature1Text: 'Nous sélectionnons des huiles moteur et des pièces détachées authentiques auprès de fabricants américains de confiance pour garantir fiabilité et performance.',
        feature2Title: 'Livraison rapide',
        feature2Text: 'Une logistique efficace et des stocks locaux signifient que vous obtenez les pièces dont vous avez besoin plus rapidement, avec un minimum de perturbations.',
        feature3Title: 'Support expert',
        feature3Text: 'Notre équipe vous aide à choisir le bon fluide ou la bonne pièce pour votre véhicule, vous faisant gagner du temps et assurant un ajustement parfait.',
        flyerTitle: 'Notre flyer',
        productsTitle: 'Nos produits',
        productsLead: 'Découvrez notre sélection haut de gamme d’huiles moteur et de liquides de transmission conçue pour les véhicules modernes et les conditions exigeantes.',
        quoteTitle: 'Demander un devis',
        quoteLead: 'Obtenez un devis personnalisé pour les produits dont vous avez besoin.',
        quoteName: 'Nom',
        quotePhoneEmail: 'Téléphone ou Email',
        quoteProducts: 'Produits nécessaires',
        quoteVehicle: 'Type de véhicule (Optionnel)',
        quoteMessage: 'Message',
        quoteButton: 'Demander un devis',
        testimonialsTitle: 'Ce que disent nos clients',
        testimonialsLead: 'Approuvé par les ateliers et les services de livraison pour des importations fiables et un support rapide.',
        testimonial1Text: 'L’équipe nous a aidés à trouver les marques d’huile moteur exactes dont notre flotte a besoin, et la livraison a été rapide. Les produits sont arrivés prêts à l’emploi.',
        testimonial1Author: 'Ahmed, Atelier auto',
        testimonial2Text: 'Grande sélection et conseils utiles pour choisir les huiles adaptées à nos véhicules. Nous revenons toujours pour des pièces importées de qualité.',
        testimonial2Author: 'Sara, Responsable de flotte',
        orderTitle: 'Passer une commande',
        orderLead: 'Sélectionnez des produits et passez votre commande pour une livraison rapide.',
        orderCart: 'Votre panier',
        orderName: 'Nom',
        orderPhone: 'Téléphone',
        orderEmail: 'Email',
        orderAddress: 'Adresse de livraison',
        orderNotes: 'Notes supplémentaires',
        orderManualDetails: 'Détails du produit (optionnel)',
        orderSelect: 'Sélectionner des produits',
        addProduct: 'Ajouter un produit',
        cartSummary: 'Total',
        contactTitle: 'Contactez-nous',
        contactLead: 'Envoyez-nous votre demande et nous vous répondrons avec un devis personnalisé et un plan de livraison. Visitez-nous à Golf Sud, près de la Cité Aliou SOW, à côté de la Brioche Dorée.',
        contactName: 'Nom',
        contactEmail: 'Email',
        contactMessage: 'Message',
        contactButton: 'Envoyer',
        footerText: '© 2026 USA Cars Oil & Parts. Tous droits réservés.',
        footerMeta: 'Contacts : +221 77 217 99 40 / 77 218 00 01 / 77 218 00 32 / 77 217 99 40'
    }
};

let cart = [];

function findProductBySku(sku) {
    return products.find(product => product.sku === sku);
}

function renderProductOptions() {
    const select = document.getElementById('order-product-select');
    if (!select) return;
    select.innerHTML = '<option value="">-- Select a product --</option>';
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.sku;
        option.textContent = `${product.name} - ${product.price.toLocaleString()} CFA`;
        select.appendChild(option);
    });
}

function addToCart(product, quantity = 1) {
    const existing = cart.find(item => item.sku === product.sku);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    updateCartDisplay();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function getCartTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (!cartItems || !cartTotal) return;

    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>No products in cart yet.</p>';
        cartTotal.textContent = '0 CFA';
        return;
    }

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <span>${item.name} x ${item.quantity} — ${(item.price * item.quantity).toLocaleString()} CFA</span>
            <button type="button" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(itemDiv);
    });

    cartTotal.textContent = `${getCartTotal().toLocaleString()} CFA`;
}

function translatePage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem('siteLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('siteLang') || 'en';
    translatePage(savedLang);
    renderProductOptions();

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => translatePage(btn.dataset.lang));
    });

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const currentLang = document.documentElement.lang || 'en';
        const message = currentLang === 'fr'
            ? 'Merci pour votre message ! Nous vous répondrons bientôt.'
            : 'Thank you for your message! We will get back to you soon.';
        alert(message);
    });

    document.getElementById('quote-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const currentLang = document.documentElement.lang || 'en';
        const productsNeeded = this.querySelector('input[data-i18n-placeholder="quoteProducts"]').value.trim();
        const message = currentLang === 'fr'
            ? `Demande de devis reçue pour : ${productsNeeded}. Nous vous contacterons bientôt.`
            : `Quote request received for: ${productsNeeded}. We will contact you soon.`;
        alert(message);
    });

    document.getElementById('order-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const currentLang = document.documentElement.lang || 'en';
        const manualDetails = this.querySelector('textarea').value.trim();
        const orderItems = cart.length > 0
            ? cart.map(item => `${item.name} x${item.quantity}`).join(', ')
            : 'No items selected';
        const message = currentLang === 'fr'
            ? `Commande reçue pour : ${orderItems}. ${manualDetails ? 'Détails : ' + manualDetails : ''} Nous vous contacterons pour confirmer les détails.`
            : `Order received for: ${orderItems}. ${manualDetails ? 'Details: ' + manualDetails : ''} We will contact you to confirm details.`;
        alert(message);
    });

    document.getElementById('add-product-btn').addEventListener('click', function() {
        const productSku = document.getElementById('order-product-select').value;
        const quantity = parseInt(document.getElementById('order-product-qty').value, 10) || 1;
        const product = findProductBySku(productSku);
        if (!product) {
            alert('Please select a product to add.');
            return;
        }
        addToCart(product, quantity);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
