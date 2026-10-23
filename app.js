const WHATSAPP_NUMBER = (typeof window !== 'undefined' && window.WHATSAPP_NUMBER) ? window.WHATSAPP_NUMBER : '212636059783';
const games = Array.isArray(window.GAME_CATALOG) ? window.GAME_CATALOG : [];
const supportedPlayStationPlatforms = ['PS4', 'PS5'];
const selectedVariantByProduct = {};

function isPlayStationProduct(game) {
    if (!game || typeof game !== 'object') return false;
    const platforms = Array.isArray(game.platforms) ? game.platforms : [];
    return platforms.some(platform => supportedPlayStationPlatforms.includes(platform));
}

function isPlayStationPlusProduct(game) {
    if (!game || typeof game !== 'object') return false;
    return /playstation plus/i.test(game.category || '') || /playstation plus/i.test(game.title || '') || /playstation-plus/i.test(game.id || '');
}

const safeStorage = {
    getItem(key) {
        try {
            return window.localStorage ? window.localStorage.getItem(key) : null;
        } catch (error) {
            return null;
        }
    },
    setItem(key, value) {
        try {
            if (window.localStorage) {
                window.localStorage.setItem(key, value);
            }
        } catch (error) {
            // Ignore localStorage failures in restricted or file:// contexts.
        }
    }
};

const translations = {
    en: {
        searchPlaceholder: 'Search your game...',
        noResults: 'No games found. Try another search.',
        buyNow: 'BUY NOW',
        details: 'Details',
        preorder: 'Preorder',
        inquiry: 'WhatsApp inquiry',
        review: 'Review',
        available: 'Available',
        platform: 'Platform',
        category: 'Category',
        sort: 'Sort by',
        allCategories: 'All categories',
        allPlatforms: 'All platforms',
        sortFeatured: 'Featured',
        sortPriceAsc: 'Price: Low to High',
        sortPriceDesc: 'Price: High to Low',
        viewAllGames: 'View All Games',
        popularGames: 'POPULAR GAMES',
        bestDeals: 'BEST DEALS',
        gamePacks: 'GAME PACKS',
        fastDelivery: 'Fast support',
        verifiedSupport: 'Verified assistance',
        storeGuarantee: 'Store guarantee',
        whatsappMsg: 'Hello FCHKAL STORE! I am interested in purchasing {product}, {edition}{platform}, for {price} DH. Please confirm availability and delivery details.'
    },
    fr: {
        searchPlaceholder: 'Rechercher un jeu...',
        noResults: 'Aucun jeu trouvé. Essayez une autre recherche.',
        buyNow: 'ACHETER',
        details: 'Détails',
        preorder: 'Précommande',
        inquiry: 'Demande WhatsApp',
        review: 'Vérification',
        available: 'Disponible',
        platform: 'Plateforme',
        category: 'Catégorie',
        sort: 'Trier par',
        allCategories: 'Toutes catégories',
        allPlatforms: 'Toutes plateformes',
        sortFeatured: 'En vedette',
        sortPriceAsc: 'Prix: croissant',
        sortPriceDesc: 'Prix: décroissant',
        viewAllGames: 'Voir tous les jeux',
        popularGames: 'JEUX POPULAIRES',
        bestDeals: 'MEILLEURES OFFRES',
        gamePacks: 'PAQUETS DE JEUX',
        fastDelivery: 'Support rapide',
        verifiedSupport: 'Aide vérifiée',
        storeGuarantee: 'Garantie boutique',
        whatsappMsg: 'Bonjour FCHKAL STORE ! Je souhaite acheter {product}, {edition}{platform}, pour {price} DH. Veuillez confirmer la disponibilité et les détails de livraison.'
    },
    es: {
        searchPlaceholder: 'Busca tu juego...',
        noResults: 'No se encontraron juegos. Prueba otra búsqueda.',
        buyNow: 'COMPRAR',
        details: 'Detalles',
        preorder: 'Reserva',
        inquiry: 'Consulta por WhatsApp',
        review: 'Revisión',
        available: 'Disponible',
        platform: 'Plataforma',
        category: 'Categoría',
        sort: 'Ordenar por',
        allCategories: 'Todas las categorías',
        allPlatforms: 'Todas las plataformas',
        sortFeatured: 'Destacados',
        sortPriceAsc: 'Precio: menor a mayor',
        sortPriceDesc: 'Precio: mayor a menor',
        viewAllGames: 'Ver todos los juegos',
        popularGames: 'JUEGOS POPULARES',
        bestDeals: 'MEJORES OFERTAS',
        gamePacks: 'PAQUETES',
        fastDelivery: 'Soporte rápido',
        verifiedSupport: 'Asistencia verificada',
        storeGuarantee: 'Garantía de tienda',
        whatsappMsg: 'Hola FCHKAL STORE. Estoy interesado en comprar {product}, {edition}{platform}, por {price} DH. Por favor confirme la disponibilidad y los detalles de entrega.'
    },
    ar: {
        searchPlaceholder: 'ابحث عن لعبتك...',
        noResults: 'لم يتم العثور على ألعاب. حاول بحثاً آخر.',
        buyNow: 'اشتري الآن',
        details: 'التفاصيل',
        preorder: 'الحجز المسبق',
        inquiry: 'استفسار واتساب',
        review: 'مراجعة',
        available: 'متوفر',
        platform: 'المنصة',
        category: 'الفئة',
        sort: 'ترتيب حسب',
        allCategories: 'كل الفئات',
        allPlatforms: 'كل المنصات',
        sortFeatured: 'المميز',
        sortPriceAsc: 'السعر: من الأقل إلى الأعلى',
        sortPriceDesc: 'السعر: من الأعلى إلى الأقل',
        viewAllGames: 'عرض جميع الألعاب',
        popularGames: 'الألعاب الشعبية',
        bestDeals: 'أفضل العروض',
        gamePacks: 'باقات الألعاب',
        fastDelivery: 'دعم سريع',
        verifiedSupport: 'دعم موثوق',
        storeGuarantee: 'ضمان المتجر',
        whatsappMsg: 'مرحبا FCHKAL STORE! أود شراء {product}، {edition}{platform}، بسعر {price} درهم. الرجاء تأكيد التوفر وتفاصيل التوصيل.'
    }
};

let currentLanguage = safeStorage.getItem('language') || 'en';

function getTranslation(key) {
    return (translations[currentLanguage] && translations[currentLanguage][key]) || (translations.en && translations.en[key]) || key;
}

function initializeCatalogState() {
    games.forEach(product => {
        if (product.variants && product.variants.length) {
            selectedVariantByProduct[product.id] = product.variants[0].id;
        }
    });
}

function initializeLanguage() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const html = document.documentElement;

    if (currentLanguage === 'ar') {
        html.dir = 'rtl';
        html.lang = 'ar';
    } else {
        html.dir = 'ltr';
        html.lang = currentLanguage || 'en';
    }

    langButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.lang === currentLanguage);
        button.addEventListener('click', () => switchLanguage(button.dataset.lang));
    });

    updateLanguageContent();
}

function switchLanguage(lang) {
    currentLanguage = lang;
    safeStorage.setItem('language', lang);
    const html = document.documentElement;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    html.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(button => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });

    updateLanguageContent();
    renderProducts();
    renderBestDeals();
    renderGamePacks();
}

function updateLanguageContent() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = getTranslation('searchPlaceholder');

    setText('.section-header-row h2, .popular-games h2', getTranslation('popularGames'));
    setText('.view-all-link', getTranslation('viewAllGames'), true);
    setText('.best-deals h2', getTranslation('bestDeals'));
    setText('.game-packs h2', getTranslation('gamePacks'));

    const categoryLabel = document.querySelector('#categoryFilter')?.closest('.catalog-control')?.querySelector('label');
    if (categoryLabel) categoryLabel.textContent = getTranslation('category');
    const platformLabel = document.querySelector('#platformFilter')?.closest('.catalog-control')?.querySelector('label');
    if (platformLabel) platformLabel.textContent = getTranslation('platform');
    const sortLabel = document.querySelector('#sortFilter')?.closest('.catalog-control')?.querySelector('label');
    if (sortLabel) sortLabel.textContent = getTranslation('sort');

    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter && categoryFilter.options[0]) {
        categoryFilter.options[0].text = getTranslation('allCategories');
    }

    const platformFilter = document.getElementById('platformFilter');
    if (platformFilter && platformFilter.options[0]) {
        platformFilter.options[0].text = getTranslation('allPlatforms');
    }

    const sortFilter = document.getElementById('sortFilter');
    if (sortFilter) {
        const options = sortFilter.options;
        if (options[0]) options[0].text = getTranslation('sortFeatured');
        if (options[1]) options[1].text = getTranslation('sortPriceAsc');
        if (options[2]) options[2].text = getTranslation('sortPriceDesc');
    }

    document.querySelectorAll('.product-details-btn span').forEach(button => {
        button.textContent = getTranslation('details');
    });
}

function setText(selector, text, keepIcon) {
    const el = document.querySelector(selector);
    if (!el) return;
    if (keepIcon && el.querySelector('i')) {
        el.childNodes[0].textContent = text + ' ';
    } else {
        el.textContent = text;
    }
}

function getDefaultPrice(game) {
    const firstVariant = (game.variants && game.variants.length) ? game.variants[0] : null;
    return Number(firstVariant ? firstVariant.price : game.price || 0);
}

function getPrimaryPlatform(product) {
    if (Array.isArray(product.platforms) && product.platforms.length) return product.platforms[0];
    if (Array.isArray(product.variants) && product.variants.length) return product.variants[0].platform || 'Platform required';
    return 'Platform required';
}

function getSelectedVariant(product) {
    const variants = product.variants || [];
    if (!variants.length) {
        return { id: `${product.id}-default`, platform: getPrimaryPlatform(product), label: product.edition || 'Standard', price: Number(product.price) || 0 };
    }
    const selectedId = selectedVariantByProduct[product.id];
    return variants.find(variant => variant.id === selectedId) || variants[0];
}

function renderVariantOptions(game) {
    const variants = game.variants || [{ id: `${game.id}-default`, platform: getPrimaryPlatform(game), label: game.edition || 'Standard', price: Number(game.price) || 0 }];
    return variants.map((variant) => `<option value="${variant.id}" ${selectedVariantByProduct[game.id] === variant.id ? 'selected' : ''}>${variant.platform || variant.label || 'Variant'} — ${Number(variant.price)} DH</option>`).join('');
}

function getStatusBadgeLabel(product) {
    if (product.status === 'preorder') return getTranslation('preorder');
    if (product.status === 'inquiry') return getTranslation('inquiry');
    if (product.status === 'review') return getTranslation('review');
    return getTranslation('available');
}

function getStatusClass(product) {
    if (product.status === 'preorder') return 'featured';
    if (product.status === 'inquiry' || product.status === 'review') return 'online';
    return 'best-seller';
}

function getStatusButtonText(product) {
    if (product.status === 'preorder') return getTranslation('preorder');
    if (product.status === 'inquiry' || product.status === 'review') return getTranslation('inquiry');
    return getTranslation('buyNow');
}

function loadCart() {
    try {
        return JSON.parse(safeStorage.getItem('fchkal-cart') || '[]');
    } catch (error) {
        return [];
    }
}

let cartItems = loadCart();

function saveCart() {
    safeStorage.setItem('fchkal-cart', JSON.stringify(cartItems));
}

function updateCartBadge() {
    const countEl = document.getElementById('cartCount');
    if (!countEl) return;
    const count = cartItems.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
    countEl.textContent = String(count);
}

function getCartSubtotal() {
    return cartItems.reduce((sum, item) => sum + (Number(item.price || 0) * Number(item.quantity || 0)), 0);
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');
    if (!cartItemsContainer) return;

    updateCartBadge();
    const subtotal = getCartSubtotal();
    if (subtotalEl) subtotalEl.textContent = `${subtotal} DH`;
    if (totalEl) totalEl.textContent = `${subtotal} DH`;

    if (!cartItems.length) {
        cartItemsContainer.innerHTML = '<div class="cart-empty-state">Your cart is empty. Add a title to begin your order.</div>';
        return;
    }

    cartItemsContainer.innerHTML = cartItems.map((item) => `
        <div class="cart-item" data-cart-item-id="${item.id}">
            <img src="${item.image || 'images/placeholder.svg'}" alt="${item.title}" class="cart-item-image" onerror="this.onerror=null;this.src='images/placeholder.svg';">
            <div class="cart-item-body">
                <div class="cart-item-top">
                    <strong>${item.title}</strong>
                    <button type="button" class="cart-item-remove" data-remove-item="${item.id}" aria-label="Remove item">Remove</button>
                </div>
                <p>${item.platform || item.edition || 'Standard'}</p>
                <div class="cart-item-bottom">
                    <div class="cart-qty">
                        <button type="button" data-qty-action="decrease" data-item-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button type="button" data-qty-action="increase" data-item-id="${item.id}">+</button>
                    </div>
                    <strong>${Number(item.price || 0) * Number(item.quantity || 0)} DH</strong>
                </div>
            </div>
        </div>
    `).join('');
}

function openCart() {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
}

function closeCart() {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
}

function addToCart(productId, variantId) {
    const product = games.find((item) => item.id === productId);
    if (!product) return;

    const variant = (product.variants || []).find((entry) => entry.id === variantId) || product.variants?.[0] || null;
    const price = Number(variant ? variant.price : product.price || 0);
    const existing = cartItems.find((item) => item.id === `${productId}:${variantId || 'default'}`);

    if (existing) {
        existing.quantity += 1;
    } else {
        cartItems.push({
            id: `${productId}:${variantId || 'default'}`,
            productId,
            variantId: variantId || (variant ? variant.id : 'default'),
            title: product.title,
            platform: variant ? variant.platform : product.platforms?.[0] || 'Platform',
            edition: product.edition || 'Standard',
            image: product.image || 'images/placeholder.svg',
            price,
            quantity: 1
        });
    }

    saveCart();
    renderCart();
    openCart();
}

function changeCartItemQuantity(itemId, delta) {
    const item = cartItems.find((entry) => entry.id === itemId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        cartItems = cartItems.filter((entry) => entry.id !== itemId);
    }
    saveCart();
    renderCart();
}

function sendCartToWhatsApp() {
    if (!cartItems.length) return;
    const total = getCartSubtotal();
    const lines = cartItems.map((item) => `${item.title} (${item.platform || item.edition || 'Standard'}) x${item.quantity} — ${item.price * item.quantity} DH`).join('\n');
    const message = `Hello FCHKAL STORE! I would like to order:\n${lines}\n\nTotal: ${total} DH\nPlease confirm availability and final order details.`;
    window.open(`https://wa.me/212636059783?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

function openProductDetail(productId) {
    const product = games.find((item) => item.id === productId);
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('productModalContent');
    if (!product || !modal || !modalContent) return;

    const variants = product.variants || [{ id: `${product.id}-default`, platform: product.platforms?.[0] || 'Platform', price: Number(product.price || 0) }];
    const variantButtons = variants.map((variant) => `
        <button type="button" class="variant-chip active" data-modal-variant="${variant.id}" data-modal-product="${product.id}">
            ${variant.platform || variant.label || 'Platform'} — ${variant.price} DH
        </button>
    `).join('');

    modalContent.innerHTML = `
        <div class="product-detail-visual">
            <img src="${product.image || 'images/placeholder.svg'}" alt="${product.title}" onerror="this.onerror=null;this.src='images/placeholder.svg';">
        </div>
        <div class="product-detail-copy">
            <div class="product-detail-header">
                <span class="product-badge best-seller">${product.category || 'Game'}</span>
                <h3 id="modalTitle">${product.title}</h3>
                <p>${product.edition || 'Standard edition'}</p>
            </div>
            <div class="product-detail-price">${Number(variants[0]?.price || product.price || 0)} DH</div>
            <div class="product-detail-variants">${variantButtons}</div>
            <div class="product-detail-actions">
                <button type="button" class="btn btn-primary add-modal-cart" data-modal-product="${product.id}" data-modal-variant="${variants[0]?.id || product.id}">Add to cart</button>
                <a href="https://wa.me/212636059783" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">WhatsApp inquiry</a>
            </div>
            ${product.reviewNotes ? `<p class="product-detail-note">${product.reviewNotes}</p>` : ''}
            <p class="product-detail-availability">Availability is confirmed by WhatsApp before final order completion.</p>
        </div>
    `;

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');

    modal.querySelectorAll('[data-modal-variant]').forEach((button) => {
        button.addEventListener('click', () => {
            const selectedVariantId = button.dataset.modalVariant;
            const selected = variants.find((variant) => variant.id === selectedVariantId);
            if (!selected) return;
            modalContent.querySelector('.product-detail-price').textContent = `${selected.price} DH`;
            modalContent.querySelector('.add-modal-cart').dataset.modalVariant = selectedVariantId;
            modalContent.querySelectorAll('[data-modal-variant]').forEach((item) => item.classList.toggle('active', item === button));
        });
    });

    modalContent.querySelector('.add-modal-cart')?.addEventListener('click', () => {
        const selectedVariantId = modalContent.querySelector('.add-modal-cart').dataset.modalVariant;
        addToCart(product.id, selectedVariantId);
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
    });
}

function buildWhatsAppLink(product, variant) {
    const selectedVariant = variant || getSelectedVariant(product);
    const price = Number(selectedVariant?.price ?? product.price ?? 0);
    const edition = product.edition || 'Standard';
    const platformText = selectedVariant?.platform ? `, ${selectedVariant.platform}` : '';
    const message = getTranslation('whatsappMsg')
        .replace('{product}', product.title)
        .replace('{edition}', edition)
        .replace('{platform}', platformText)
        .replace('{price}', String(price));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function createProductCard(game, index = 0) {
    const card = document.createElement('article');
    card.className = 'product-card scroll-reveal';
    card.setAttribute('data-game-id', game.id);
    card.style.animationDelay = `${index * 0.05}s`;

    const variant = getSelectedVariant(game);
    const price = Number(variant?.price ?? game.price ?? 0);
    const imgSrc = game.image && game.image.trim() ? game.image : 'images/placeholder.svg';
    const platformText = variant?.platform || getPrimaryPlatform(game);
    const hasVariants = (game.variants || []).length > 1;
    const badge = getStatusBadgeLabel(game);
    const metaText = game.status === 'review' || game.status === 'inquiry' ? getTranslation('review') : '';

    card.innerHTML = `
        <div class="product-image">
            <img src="${imgSrc}" alt="${game.title}" loading="lazy" onerror="this.onerror=null;this.src='images/placeholder.svg';">
            ${badge ? `<span class="product-badge ${getStatusClass(game)}">${badge}</span>` : ''}
        </div>
        <div class="product-info">
            <h3 class="product-title">${game.title}</h3>
            <div class="product-meta-row">
                <span class="product-edition">${game.edition || 'Standard'}</span>
                <span class="product-platform">${platformText}</span>
            </div>
            <div class="product-price-row">
                <span class="product-price">${price}</span>
                <span class="product-price-currency">DH</span>
            </div>
            ${metaText ? `<div class="product-status-note">${metaText}</div>` : ''}
            ${hasVariants ? `
                <label class="variant-label" for="variant-${game.id}">${getTranslation('platform')}</label>
                <select class="product-variant-select" id="variant-${game.id}" data-product-id="${game.id}">
                    ${renderVariantOptions(game)}
                </select>
            ` : ''}
            ${game.reviewNotes ? `<p class="product-notes">${game.reviewNotes}</p>` : ''}
            <div class="product-actions">
                <button type="button" class="btn btn-secondary product-details-btn" data-product-id="${game.id}">
                    <i class="fas fa-info-circle"></i>
                    <span>${getTranslation('details')}</span>
                </button>
                <button type="button" class="btn btn-secondary add-cart-btn" data-product-id="${game.id}">
                    <i class="fas fa-shopping-cart"></i>
                    <span>Cart</span>
                </button>
                <a href="${buildWhatsAppLink(game, variant)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary buy-btn" aria-label="${getTranslation('buyNow')} ${game.title}">
                    <i class="fab fa-whatsapp"></i>
                    <span>${getStatusButtonText(game)}</span>
                </a>
            </div>
        </div>
    `;

    const select = card.querySelector('.product-variant-select');
    if (select) {
        select.value = selectedVariantByProduct[game.id] || variant.id;
        select.addEventListener('change', (event) => {
            selectedVariantByProduct[game.id] = event.target.value;
            renderProducts();
        });
    }

    const detailsButton = card.querySelector('.product-details-btn');
    if (detailsButton) {
        detailsButton.addEventListener('click', () => {
            openProductDetail(game.id);
        });
    }

    const addToCartButton = card.querySelector('.add-cart-btn');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            addToCart(game.id, getSelectedVariant(game)?.id || null);
        });
    }

    return card;
}

function getVisibleProducts() {
    const query = (document.getElementById('searchInput')?.value || '').trim().toLowerCase();
    const category = document.getElementById('categoryFilter')?.value || 'all';
    const platform = document.getElementById('platformFilter')?.value || 'all';
    const sort = document.getElementById('sortFilter')?.value || 'featured';

    let filtered = games.filter((game) => {
        if (game.status === 'draft' || !isPlayStationProduct(game)) return false;

        const matchesQuery = !query || game.title.toLowerCase().includes(query) || (game.category || '').toLowerCase().includes(query) || (game.edition || '').toLowerCase().includes(query);
        const matchesCategory = category === 'all' || game.category === category;
        const matchesPlatform = platform === 'all' || (game.platforms || []).includes(platform) || (game.variants || []).some(variant => variant.platform === platform);

        return matchesQuery && matchesCategory && matchesPlatform;
    });

    if (sort === 'price-asc') filtered = filtered.sort((a, b) => getDefaultPrice(a) - getDefaultPrice(b));
    if (sort === 'price-desc') filtered = filtered.sort((a, b) => getDefaultPrice(b) - getDefaultPrice(a));
    if (sort === 'featured') filtered = filtered.sort((a, b) => Number(b.status === 'preorder') - Number(a.status === 'preorder'));

    return filtered;
}

function renderProducts() {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;
    gamesGrid.innerHTML = '';

    const visibleProducts = getVisibleProducts();

    if (!visibleProducts.length) {
        gamesGrid.innerHTML = `<div class="catalog-empty-state">${getTranslation('noResults')}</div>`;
        return;
    }

    visibleProducts.forEach((game, index) => gamesGrid.appendChild(createProductCard(game, index)));
    observeNewCards();
}

function renderBestDeals() {
    const grid = document.getElementById('bestDealsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const recommended = ['g-gta-vi-ultimate-edition', 'g-black-myth-wukong', 'g-ea-sports-fc-27', 'g-gta-v'];
    recommended.forEach((id, index) => {
        const game = games.find(item => item.id === id);
        if (game) grid.appendChild(createProductCard(game, index));
    });
    observeNewCards();
}

function renderGamePacks() {
    const grid = document.getElementById('packsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const packIds = ['g-007-first-light', 'g-ea-sports-fc-27', 'g-assassins-creed-black-flag-resynced'];
    packIds
        .map(id => games.find(item => item.id === id))
        .filter(Boolean)
        .forEach((game, index) => grid.appendChild(createPackCard(game, index)));
    observeNewCards();
}

function renderPlayStationPlusGrid() {
    const grid = document.getElementById('playstationPlusGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const plusProducts = games.filter(isPlayStationPlusProduct);
    plusProducts.forEach((game, index) => {
        const card = createPackCard(game, index);
        card.classList.add('playstation-plus-card');
        grid.appendChild(card);
    });
    observeNewCards();
}

function createPackCard(game, index = 0) {
    const card = document.createElement('article');
    card.className = 'pack-card scroll-reveal';
    card.setAttribute('data-game-id', game.id);
    card.style.animationDelay = `${index * 0.05}s`;

    const variant = getSelectedVariant(game);
    const status = getStatusBadgeLabel(game);
    const price = Number(variant?.price ?? game.price ?? 0);

    card.innerHTML = `
        <div class="pack-image">
            <img src="${game.image || 'images/placeholder.svg'}" alt="${game.title}" loading="lazy" onerror="this.onerror=null;this.src='images/placeholder.svg';">
            ${status ? `<span class="pack-badge">${status}</span>` : ''}
        </div>
        <div class="pack-info">
            <h3 class="pack-title">${game.title}</h3>
            <p class="pack-description">${game.edition || 'Official catalog item'}</p>
            <div class="pack-price">${price} DH</div>
            <ul class="pack-features">
                <li><i class="fas fa-check"></i><span>${getTranslation('fastDelivery')}</span></li>
                <li><i class="fas fa-check"></i><span>${getTranslation('verifiedSupport')}</span></li>
                <li><i class="fas fa-check"></i><span>${getTranslation('storeGuarantee')}</span></li>
            </ul>
            <a href="${buildWhatsAppLink(game, variant)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                <i class="fab fa-whatsapp"></i>
                <span>${getStatusButtonText(game)}</span>
            </a>
        </div>
    `;

    return card;
}

function populateCatalogFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const platformFilter = document.getElementById('platformFilter');
    if (!categoryFilter || !platformFilter) return;

    const supportedGames = games.filter(isPlayStationProduct);
    const categories = [...new Set(supportedGames.map(game => game.category).filter(Boolean))].sort();
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    const platforms = [...new Set(supportedGames.flatMap(game => game.platforms || []).filter(platform => supportedPlayStationPlatforms.includes(platform)))].sort();
    platforms.forEach(platform => {
        const option = document.createElement('option');
        option.value = platform;
        option.textContent = platform;
        platformFilter.appendChild(option);
    });
}

function handleSearch(e) {
    const query = (e.target.value || '').trim().toLowerCase();
    const results = games.filter(game => isPlayStationProduct(game) && (!query || game.title.toLowerCase().includes(query) || (game.category || '').toLowerCase().includes(query) || (game.edition || '').toLowerCase().includes(query)));
    displaySearchResults(results);
    renderProducts();
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;

    searchResults.classList.remove('hidden');
    if (!results.length) {
        searchResults.innerHTML = `<div class="search-no-results"><p>${getTranslation('noResults')}</p></div>`;
        return;
    }

    const list = document.createElement('div');
    list.className = 'search-results-list';
    results.forEach(game => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
            <img class="search-result-img" src="${game.image || 'images/placeholder.svg'}" alt="${game.title}">
            <div class="search-result-info">
                <div class="search-result-title">${game.title}</div>
                <div class="search-result-price">${getDefaultPrice(game)} DH</div>
            </div>
        `;

        item.addEventListener('click', () => {
            const card = document.querySelector(`[data-game-id="${game.id}"]`);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.style.boxShadow = '0 0 40px rgba(0, 170, 255, 0.5)';
                setTimeout(() => { card.style.boxShadow = ''; }, 2000);
            }
            searchResults.classList.add('hidden');
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = '';
        });
        list.appendChild(item);
    });

    searchResults.innerHTML = '';
    searchResults.appendChild(list);
}

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-dropdown-toggle)');
    const dropdown = document.querySelector('.nav-dropdown');
    const dropdownToggle = document.querySelector('.nav-dropdown-toggle');

    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('blur', () => {
            setTimeout(() => document.getElementById('searchResults')?.classList.add('hidden'), 200);
        });
    }

    document.getElementById('categoryFilter')?.addEventListener('change', renderProducts);
    document.getElementById('platformFilter')?.addEventListener('change', renderProducts);
    document.getElementById('sortFilter')?.addEventListener('change', renderProducts);

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            navToggle.classList.toggle('active', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
            document.body.classList.toggle('no-scroll', isOpen);
        });
    }

    navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
    document.querySelectorAll('.nav-dropdown-item').forEach(link => link.addEventListener('click', closeMobileMenu));

    if (dropdownToggle && dropdown) {
        dropdownToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('open');
            dropdownToggle.setAttribute('aria-expanded', String(dropdown.classList.contains('open')));
        });

        document.addEventListener('click', () => {
            dropdown.classList.remove('open');
            dropdownToggle.setAttribute('aria-expanded', 'false');
        });
    }

    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-question')?.addEventListener('click', () => item.classList.toggle('active'));
    });

    const cartButton = document.getElementById('cartButton');
    const closeCartButton = document.getElementById('closeCart');
    const cartWhatsAppButton = document.getElementById('cartWhatsApp');

    cartButton?.addEventListener('click', openCart);
    closeCartButton?.addEventListener('click', closeCart);
    cartWhatsAppButton?.addEventListener('click', sendCartToWhatsApp);

    document.addEventListener('click', (event) => {
        const removeButton = event.target.closest('[data-remove-item]');
        if (removeButton) {
            cartItems = cartItems.filter((item) => item.id !== removeButton.dataset.removeItem);
            saveCart();
            renderCart();
            return;
        }

        const qtyButton = event.target.closest('[data-qty-action]');
        if (qtyButton) {
            const itemId = qtyButton.dataset.itemId;
            const delta = qtyButton.dataset.qtyAction === 'increase' ? 1 : -1;
            changeCartItemQuantity(itemId, delta);
            return;
        }

        const closeTarget = event.target.closest('[data-close-modal]');
        if (closeTarget) {
            const modal = document.getElementById('productModal');
            if (modal) {
                modal.classList.add('hidden');
                modal.setAttribute('aria-hidden', 'true');
            }
        }
    });

    document.getElementById('cartDrawer')?.addEventListener('click', (event) => {
        if (event.target === event.currentTarget) closeCart();
    });
}

function closeMobileMenu() {
    document.getElementById('navMenu')?.classList.remove('active');
    document.getElementById('navToggle')?.classList.remove('active');
    document.getElementById('navToggle')?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
}

function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

function setupActiveNav() {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => link.classList.toggle('active', link.dataset.section === id));
            }
        });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
}

function setupScrollAnimations() {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    observeNewCards();
}

function observeNewCards() {
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => cardObserver.observe(el));
}

function createParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    function init() {
        resize();
        const count = Math.min(40, Math.floor(canvas.width / 25));
        particles = Array.from({ length: count }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 1.2 + 0.3,
            opacity: Math.random() * 0.4 + 0.1
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 229, 255, ${p.opacity})`;
            ctx.fill();
        });
        animationId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener('resize', () => {
        cancelAnimationFrame(animationId);
        init();
        draw();
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeMobileMenu();
        }
    });
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('reduced-motion');
}

const navToggleEl = document.getElementById('navToggle');
if (navToggleEl) {
    navToggleEl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navToggleEl.click();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeCatalogState();
    populateCatalogFilters();
    initializeLanguage();
    renderProducts();
    renderBestDeals();
    renderGamePacks();
    renderPlayStationPlusGrid();
    renderPlayStationPlusGrid();
    renderCart();
    setupEventListeners();
    setupScrollAnimations();
    setupNavbarScroll();
    setupActiveNav();
    createParticles();
});
