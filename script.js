/**
 * PESONA WISATA KECAMATAN MANGKUTANA - SCRIPT INTERAKTIF
 * Menyediakan interaksi Carousel Hero, Filter Kartu Wisata, Modal Detail, 
 * Trip Planner, Sistem Favorit (LocalStorage), dan Dark Mode.
 */

// Data Destinasi Wisata Kecamatan Mangkutana
const destinationsData = [
  {
    id: 'watu-maeta',
    title: 'Permandian Watu Maeta',
    recommendationRank: 1,
    category: 'sungai',
    categoryLabel: 'Pemandian Alam',
    location: 'Desa Margolembo, Kec. Mangkutana',
    rating: 4.9,
    reviews: 248,
    price: 'Rp 5.000 / orang',
    hours: '07.00 - 18.00 WITA',
    image: 'watu_maeta_utama.jpg',
    shortDesc: 'Rekomendasi #1 di Mangkutana! Pemandian air sungai alami berair kristal dingin dengan dua batu hitam besar legendaris suku Pamona (Watu = batu, Maeta = hitam).',
    fullDesc: 'Permandian Watu Maeta adalah destinasi wisata alam nomor 1 paling terkenal di Kecamatan Mangkutana, Kabupaten Luwu Timur. Berada di Desa Margolembo, destinasi ini menyajikan aliran sungai pegunungan yang sangat jernih dan segar alami. Keunikan utamanya adalah sepasang batu hitam raksasa yang membelah aliran air, memberi nama Watu Maeta (dari bahasa Pamona: Watu berarti batu, dan Maeta berarti hitam). Sangat cocok untuk berenang keluarga, berfoto, dan bersantai di bawah naungan pohon rindang.',
    kearifanTitle: 'Filosofi Batu Hitam Pamona & Kesucian Sumber Air',
    kearifanDesc: 'Berasal dari bahasa Pamona (Watu = batu, Maeta = hitam). Menurut tetua adat, formasi sepasang batu hitam raksasa di tengah sungai melambangkan keteguhan dan perlindungan spiritual atas kejernihan mata air pegunungan yang memberi berkah kehidupan bagi warga desa.',
    kearifanTradisi: 'Pantangan adat merusak formasi batu dan kewajiban menjaga hulu sungai tetap murni tanpa polusi.',
    facilities: ['Gazebo Santai', 'Sewa Ban Pelampung', 'Kamar Ganti / Toilet', 'Warung Kuliner Lokal', 'Area Parkir Luas', 'Spot Foto Alami'],
    tips: 'Datang pagi hari sebelum pukul 10.00 untuk menikmati air yang paling jernih dan suasana hening yang menenangkan.',
    mapsUrl: 'https://maps.google.com/?q=Watu+Maeta+Mangkutana+Luwu+Timur'
  },
  {
    id: 'sungai-lengkong',
    title: 'Wisata Alam Sungai Lengkong',
    recommendationRank: 2,
    category: 'sungai',
    categoryLabel: 'Pemandian Asri',
    location: 'Sungai Lengkong, Kec. Mangkutana',
    rating: 4.8,
    reviews: 195,
    price: 'Rp 5.000 / orang',
    hours: '07.30 - 17.30 WITA',
    image: 'sungai_lengkong_utama.jpg',
    shortDesc: 'Rekomendasi #2! Wisata pemandian sungai alami dengan air jernih dingin nan menyegarkan, dinaungi pepohonan asri dan formasi bebatuan kali eksotis.',
    fullDesc: 'Wisata Alam Sungai Lengkong merupakan salah satu pemandian alam terfavorit di Kecamatan Mangkutana yang sangat asri. Airnya bersumber langsung dari pegunungan tropis yang dingin, jernih berkilau, dan menyegarkan tubuh. Dihiasi hamparan bebatuan kali alami dan rimbunnya pepohonan hijau teduh di sepanjang sempadan sungai, tempat ini sangat digemari warga dan wisatawan untuk berenang, bermain air, dan piknik keluarga santai.',
    kearifanTitle: 'Harmoni Air Lengkong & Tradisi Konservasi Bebatuan Sungai',
    kearifanDesc: 'Bagi masyarakat Mangkutana, aliran Sungai Lengkong dipandang sebagai anugerah kesuburan alam. Tetua desa mewariskan etika luhur menjaga kelestarian pepohonan sempadan sungai dan susunan batu kali alami guna mencegah banjir bandang serta menjaga kejernihan air tetap murni.',
    kearifanTradisi: 'Budaya gotong royong membersihkan alur sungai dan pantangan membuang sampah/limbah ke dalam aliran air.',
    facilities: ['Gazebo & Pondok Santai', 'Kolam Mandi Alami Berbatu', 'Sewa Ban & Pelampung', 'Kamar Bilas / Toilet', 'Spot Piknik Teduh', 'Area Parkir'],
    tips: 'Bawa bekal makanan dan nikmati santap siang bersama keluarga di pondok tepi sungai yang sejuk berangin sepoi-sepoi.',
    mapsUrl: 'https://maps.google.com/?q=Sungai+Lengkong+Mangkutana+Luwu+Timur'
  },
  {
    id: 'pemandian-uelanti',
    title: 'Permandian Alam Uelanti',
    recommendationRank: 3,
    category: 'sungai',
    categoryLabel: 'Pemandian Keluarga',
    location: 'Desa Kasintuwu, Kec. Mangkutana',
    rating: 4.8,
    reviews: 162,
    price: 'Rp 5.000 / orang',
    hours: '08.00 - 17.30 WITA',
    image: 'pemandian_uelanti_utama.jpg',
    shortDesc: 'Rekomendasi #3! Objek wisata permandian air sungai jernih nan teduh dengan kolam alami yang ramah anak, gazebo keluarga, dan akses mudah.',
    fullDesc: 'Permandian Alam Uelanti terletak di Desa Kasintuwu, Kecamatan Mangkutana. Lokasi ini menjadi destinasi favorit masyarakat Luwu Timur untuk rekreasi akhir pekan bersama keluarga. Karakteristik aliran airnya memiliki kedalaman yang bervariasi, mulai dari area dangkal berpasir yang aman untuk anak-anak bermain air hingga ceruk tenang untuk berenang dewasa. Dikelilingi rimbun pepohonan tropis yang membuat udara senantiasa sejuk.',
    kearifanTitle: 'Nilai Kasintuwu (Persatuan) & Tradisi Santap Kapurung Bersama',
    kearifanDesc: 'Berakar dari nama desa Kasintuwu yang bermakna "bersatu dan saling mengasihi". Tempat ini menjadi ruang temu harmoni multietnis (Pamona, Luwu, Jawa, Toraja). Sejak dulu, keluarga berkumpul di tepi air untuk tradisi makan Kapurung (olahan sagu khas Luwu) bersama sebagai ungkapan syukur persaudaraan.',
    kearifanTradisi: 'Semangat kekeluargaan lintas suku dan tradisi makan bersama di pondok tepi sungai.',
    facilities: ['Pondok & Gazebo Keluarga', 'Penyewaan Ban & Pelampung', 'Toilet & Bilas Air Tawar', 'Kantin Makanan Ringan', 'Parkir Motor & Mobil'],
    tips: 'Bawa bekal makanan khas lokal seperti Kapurung atau pisang goreng untuk disantap hangat setelah berenang.',
    mapsUrl: 'https://maps.google.com/?q=Permandian+Uelanti+Kasintuwu+Mangkutana'
  },
];

// Inisialisasi Saat Dokumen Siap
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroCarousel();
  renderFeaturedCards(destinationsData);
  initCardFilters();
  initModalDetails();
  initTripPlanner();
  initThemeToggle();
  initFavoritesSystem();
  initScrollSpy();
});

/* ==========================================================================
   1. NAVBAR & SCROLL BEHAVIOR
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('mainNav');

  // Sticky shadow effect on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const expanded = navMenu.classList.contains('active');
      toggleBtn.setAttribute('aria-expanded', expanded);
    });

    // Close mobile nav on link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

/* ==========================================================================
   2. HERO CAROUSEL / SLIDER (Panah < dan > Sesuai Storyboard)
   ========================================================================== */
function initHeroCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const indicatorsContainer = document.getElementById('carouselIndicators');

  if (!slides.length) return;

  let currentSlide = 0;
  let autoplayTimer = null;
  const slideCount = slides.length;

  // Generate indicator dots
  if (indicatorsContainer) {
    indicatorsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `indicator-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Slide ${idx + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(idx);
        resetAutoplay();
      });
      indicatorsContainer.appendChild(dot);
    });
  }

  function updateSlideClasses() {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentSlide);
    });

    const dots = document.querySelectorAll('.indicator-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlideClasses();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlideClasses();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlideClasses();
  }

  function startAutoplay() {
    autoplayTimer = setInterval(nextSlide, 5500);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  // Event Listeners Panah < dan > (Storyboard Controls)
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoplay();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
      resetAutoplay();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
      resetAutoplay();
    }
  });

  // Pause on hover
  const carouselWrapper = document.querySelector('.hero-carousel-wrapper');
  if (carouselWrapper) {
    carouselWrapper.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
    carouselWrapper.addEventListener('mouseleave', startAutoplay);

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carouselWrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselWrapper.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      if (touchEndX < touchStartX - 50) {
        nextSlide();
        resetAutoplay();
      }
      if (touchEndX > touchStartX + 50) {
        prevSlide();
        resetAutoplay();
      }
    }
  }

  startAutoplay();
}

/* ==========================================================================
   3. FOUR FEATURED CARDS RENDERING (Sesuai Storyboard 4 Kartu)
   ========================================================================== */
function renderFeaturedCards(items) {
  const container = document.getElementById('featuredCardsGrid');
  if (!container) return;

  container.innerHTML = '';

  // Ambil data untuk ditampilkan (termasuk 4 slot utama)
  items.forEach((item, index) => {
    const isLiked = isItemFavorited(item.id);
    const card = document.createElement('div');
    card.className = 'tour-card';
    card.setAttribute('data-id', item.id);
    card.setAttribute('data-category', item.category);

    card.innerHTML = `
      <div class="card-image-box">
        <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy">
        <span class="card-badge-category">${item.recommendationRank ? `🏆 #${item.recommendationRank} ` : ''}${item.categoryLabel}</span>
        <button class="card-favorite-btn ${isLiked ? 'liked' : ''}" aria-label="Favoritkan ${item.title}" data-id="${item.id}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isLiked ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${item.location.split(',')[0]}
          </span>
          <span class="card-rating">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            ${item.rating}
          </span>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <div class="card-kearifan-snippet" title="${item.kearifanTitle}">
          <span>🌿 ${item.kearifanTitle}</span>
        </div>
        <p class="card-description">${item.shortDesc}</p>
        <div class="card-footer">
          <div class="card-price-info">
            <span class="card-price-label">Tiket / Biaya</span>
            <span class="card-price-val">${item.price}</span>
          </div>
          <button class="btn-card-detail" data-id="${item.id}">
            Detail
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Hubungkan event listener favorite & detail
  attachCardEvents();
}

/* ==========================================================================
   4. FILTER DESTINASI
   ========================================================================== */
function initCardFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      if (filterValue === 'semua') {
        renderFeaturedCards(destinationsData);
      } else {
        const filtered = destinationsData.filter(item => item.category === filterValue);
        renderFeaturedCards(filtered);
      }
    });
  });
}

/* ==========================================================================
   5. MODAL POPUP DETAIL DESTINASI
   ========================================================================== */
function initModalDetails() {
  const modalBackdrop = document.getElementById('destinationModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (!modalBackdrop) return;

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

function openDestinationModal(destinationId) {
  const modalBackdrop = document.getElementById('destinationModal');
  const item = destinationsData.find(d => d.id === destinationId);
  if (!modalBackdrop || !item) return;

  // Populate data
  document.getElementById('modalImage').src = item.image;
  document.getElementById('modalImage').alt = item.title;
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalCategory').textContent = item.categoryLabel;
  document.getElementById('modalLocation').textContent = item.location;
  document.getElementById('modalRating').textContent = `${item.rating} (${item.reviews} Ulasan)`;
  document.getElementById('modalPrice').textContent = item.price;
  document.getElementById('modalHours').textContent = item.hours;
  document.getElementById('modalDescription').textContent = item.fullDesc;
  document.getElementById('modalTips').textContent = item.tips;

  // Kearifan Lokal Spesifik Destinasi
  const kearifanTitleEl = document.getElementById('modalKearifanTitle');
  const kearifanDescEl = document.getElementById('modalKearifanDesc');
  const kearifanTradisiEl = document.getElementById('modalKearifanTradisi');
  if (kearifanTitleEl) kearifanTitleEl.textContent = item.kearifanTitle;
  if (kearifanDescEl) kearifanDescEl.textContent = item.kearifanDesc;
  if (kearifanTradisiEl) kearifanTradisiEl.textContent = item.kearifanTradisi;

  // Facilities list
  const facilitiesContainer = document.getElementById('modalFacilities');
  facilitiesContainer.innerHTML = '';
  item.facilities.forEach(fac => {
    const chip = document.createElement('span');
    chip.className = 'facility-chip';
    chip.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="3">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      ${fac}
    `;
    facilitiesContainer.appendChild(chip);
  });

  // Action links
  const gmapsBtn = document.getElementById('modalGmapsLink');
  if (gmapsBtn) {
    gmapsBtn.href = item.mapsUrl;
  }

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function attachCardEvents() {
  // Detail buttons
  document.querySelectorAll('.btn-card-detail').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openDestinationModal(id);
    });
  });

  // Card click opens detail as well
  document.querySelectorAll('.tour-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.card-favorite-btn') && !e.target.closest('.btn-card-detail')) {
        const id = card.getAttribute('data-id');
        openDestinationModal(id);
      }
    });
  });

  // Favorite button
  document.querySelectorAll('.card-favorite-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      toggleFavorite(id, btn);
    });
  });
}

/* ==========================================================================
   6. SISTEM FAVORIT / BOOKMARK (LocalStorage)
   ========================================================================== */
function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem('mangkutana_favorites')) || [];
  } catch (e) {
    return [];
  }
}

function isItemFavorited(id) {
  const favs = getFavorites();
  return favs.includes(id);
}

function toggleFavorite(id, btnElement) {
  let favs = getFavorites();
  const index = favs.indexOf(id);
  const isNowLiked = index === -1;

  if (isNowLiked) {
    favs.push(id);
    showToast('Ditambahkan ke daftar destinasi impian Anda! ❤️');
  } else {
    favs.splice(index, 1);
    showToast('Dihapus dari daftar favorit.');
  }

  localStorage.setItem('mangkutana_favorites', JSON.stringify(favs));

  if (btnElement) {
    btnElement.classList.toggle('liked', isNowLiked);
    const svgPath = btnElement.querySelector('svg path');
    if (svgPath) {
      svgPath.setAttribute('fill', isNowLiked ? '#ef4444' : 'none');
    }
  }
}

function initFavoritesSystem() {
  // Sudah terintegrasi saat kartu di-render
}

/* ==========================================================================
   7. INTERACTIVE TRIP PLANNER (Rencana Liburan ke Mangkutana)
   ========================================================================== */
function initTripPlanner() {
  const form = document.getElementById('tripPlannerForm');
  const resultBox = document.getElementById('plannerResult');

  if (!form || !resultBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const duration = document.getElementById('planDuration').value;
    const style = document.getElementById('planStyle').value;
    const people = parseInt(document.getElementById('planPeople').value) || 2;

    let itineraryHTML = '';
    let estCost = 0;

    if (duration === 'half-day') {
      estCost = 15000 * people;
      itineraryHTML = `
        <h4 style="color: var(--primary-forest); margin-bottom: 0.75rem; font-weight:800;">
          💡 Rekomendasi Rute Kilat (Setengah Hari - ${people} Orang)
        </h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem;">
          <li style="display:flex; gap:10px;">
            <strong style="color: var(--accent-teal);">09:00 - 11:30:</strong> Berenang dan relaksasi di air jernih <strong>Permandian Watu Maeta</strong> (batu hitam legendaris Pamona).
          </li>
          <li style="display:flex; gap:10px;">
            <strong style="color: var(--accent-teal);">12:00 - 14:30:</strong> Piknik santai tepi sungai dan bermain air di <strong>Wisata Alam Sungai Lengkong</strong>.
          </li>
        </ul>
      `;
    } else if (duration === 'full-day') {
      estCost = 25000 * people;
      itineraryHTML = `
        <h4 style="color: var(--primary-forest); margin-bottom: 0.75rem; font-weight:800;">
          💡 Rekomendasi 1 Hari Petualangan Lengkap (${people} Orang)
        </h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem;">
          <li style="display:flex; gap:10px;">
            <strong style="color: var(--accent-teal);">08:30 - 11:00:</strong> Eksplorasi batu hitam legendaris dan berenang di <strong>Permandian Watu Maeta</strong>.
          </li>
          <li style="display:flex; gap:10px;">
            <strong style="color: var(--accent-teal);">11:30 - 14:00:</strong> Piknik dan bermain air di bebatuan kali eksotis <strong>Wisata Alam Sungai Lengkong</strong>.
          </li>
          <li style="display:flex; gap:10px;">
            <strong style="color: var(--accent-teal);">14:30 - 17:00:</strong> Bersantai di kolam keluarga <strong>Permandian Alam Uelanti</strong>, Desa Kasintuwu.
          </li>
        </ul>
      `;
    } else { // 2 Hari 1 Malam
      estCost = 50000 * people;
      itineraryHTML = `
        <h4 style="color: var(--primary-forest); margin-bottom: 0.75rem; font-weight:800;">
          💡 Rekomendasi Weekend Escape (2 Hari 1 Malam - ${people} Orang)
        </h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem;">
          <li style="display:flex; gap:10px;">
            <strong style="color: var(--accent-teal);">Hari 1:</strong> Mulai dengan mandi air jernih di <strong>Permandian Watu Maeta</strong>, lanjut piknik sore hari di <strong>Sungai Lengkong</strong>.
          </li>
          <li style="display:flex; gap:10px;">
            <strong style="color: var(--accent-teal);">Hari 2:</strong> Pagi hari berenang santai di <strong>Permandian Alam Uelanti</strong> bersama keluarga, nikmati suasana alam khas Kasintuwu.
          </li>
        </ul>
      `;
    }

    resultBox.innerHTML = `
      ${itineraryHTML}
      <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px dashed var(--border-color); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
        <div>
          <span style="font-size:0.85rem; color:var(--text-muted); display:block;">Perkiraan Tiket & Konsumsi Lokal:</span>
          <span style="font-size:1.3rem; font-weight:800; color:var(--primary-emerald);">Rp ${estCost.toLocaleString('id-ID')}</span>
        </div>
        <button type="button" class="btn-primary" style="padding:0.6rem 1.2rem; font-size:0.9rem;" onclick="showToast('Rencana perjalanan siap dicetak / disimpan!')">
          Simpan Rencana
        </button>
      </div>
    `;

    resultBox.classList.add('show');
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

/* ==========================================================================
   8. DARK & LIGHT THEME TOGGLE
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  toggleBtn.addEventListener('click', () => {
    const active = document.documentElement.getAttribute('data-theme');
    const newTheme = active === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (!icon) return;

  if (theme === 'dark') {
    icon.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    icon.setAttribute('title', 'Ganti ke Mode Terang');
  } else {
    icon.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    icon.setAttribute('title', 'Ganti ke Mode Gelap');
  }
}

/* ==========================================================================
   9. SCROLLSPY (Highlighting Menu Navigasi Sesuai Posisi Layar)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link.wireframe-style');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === currentId);
    });
  });
}

/* ==========================================================================
   10. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: rgba(15, 23, 42, 0.92);
      color: #ffffff;
      padding: 12px 24px;
      border-radius: 9999px;
      font-size: 0.9rem;
      font-weight: 600;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.2);
      z-index: 3000;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
      opacity: 0;
      pointer-events: none;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(100px)';
  }, 3200);
}


/* ==========================================================================
   11. LOGIKA INTERAKTIF HALAMAN MENU INFORMASI (SUB-MENU 4 TAB)
   Sesuai Storyboard: [Informasi Wisata] [Kearifan Lokal] [Galeri Multimedia] [Peta Lokasi]
   ========================================================================== */

function switchInfoTab(tabKey) {
  // Matikan semua tombol tab
  const tabs = ['wisata', 'kearifan', 'galeri', 'peta'];
  tabs.forEach(key => {
    const btn = document.getElementById(`tabBtn-${key}`);
    const pane = document.getElementById(`pane-${key}`);
    if (btn) {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
    if (pane) {
      pane.classList.remove('active');
    }
  });

  // Aktifkan tab yang dipilih
  const activeBtn = document.getElementById(`tabBtn-${tabKey}`);
  const activePane = document.getElementById(`pane-${tabKey}`);

  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.setAttribute('aria-selected', 'true');
  }

  if (activePane) {
    activePane.classList.add('active');
  }

  // Gulir halus jika diakses dari luar
  const infoSection = document.getElementById('info-content');
  if (infoSection && window.scrollY < 300) {
    infoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ==========================================================================
   12. SIMULASI AUDIO ALAM INTERAKTIF (Web Audio API - Gemericik Air & Alam)
   Tidak memerlukan unduhan file mp3 eksternal, jalan 100% instan di browser
   ========================================================================== */
let audioCtx = null;
let natureSoundPlaying = false;
let noiseNode = null;
let birdInterval = null;

function toggleNatureSound() {
  const icon = document.getElementById('audioPlayIcon');
  const visualizer = document.getElementById('soundWavesVisualizer');

  if (!natureSoundPlaying) {
    // Mulai Audio
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      // 1. Sintesis Suara Gemericik Aliran Sungai (Pink Noise + Lowpass Filter)
      const bufferSize = audioCtx.sampleRate * 2;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.06;
        b6 = white * 0.115926;
      }

      noiseNode = audioCtx.createBufferSource();
      noiseNode.buffer = noiseBuffer;
      noiseNode.loop = true;

      // Filter agar berkarakter suara air jernih lembut
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 650;

      const gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.35, audioCtx.currentTime);

      noiseNode.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      noiseNode.start();

      natureSoundPlaying = true;
      if (icon) icon.textContent = '⏸';
      if (visualizer) visualizer.classList.add('playing');
      showToast('🔊 Memutar alunan suara gemericik sungai & alam Mangkutana...');
    } catch (err) {
      console.warn('Audio Context error:', err);
      showToast('Audio didukung langsung saat halaman aktif.');
    }
  } else {
    // Matikan Audio
    if (noiseNode) {
      try {
        noiseNode.stop();
        noiseNode.disconnect();
      } catch (e) {}
    }
    natureSoundPlaying = false;
    if (icon) icon.textContent = '▶';
    if (visualizer) visualizer.classList.remove('playing');
    showToast('Suara alam dijeda.');
  }
}

/* ==========================================================================
   13. LIGHTBOX FOTO GALERI
   ========================================================================== */
function openLightbox(src, title, desc) {
  const modal = document.getElementById('galleryLightboxModal');
  const img = document.getElementById('lightboxImg');
  const t = document.getElementById('lightboxTitle');
  const d = document.getElementById('lightboxDesc');

  if (modal && img && t && d) {
    img.src = src;
    img.alt = title;
    t.textContent = title;
    d.textContent = desc;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('galleryLightboxModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Close lightbox on backdrop click
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('galleryLightboxModal');
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }
});

/* ==========================================================================
   14. FILTER INTERAKTIF KEARIFAN LOKAL PER DESTINASI (HALAMAN INFORMASI)
   Memungkinkan wisatawan melihat kearifan lokal khusus untuk SETIAP destinasi
   ========================================================================== */
function filterKearifanDisplay(destId, btnElement) {
  // Update class tombol selector
  const buttons = document.querySelectorAll('.kearifan-selector-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }

  // Saring atau tampilkan kartu kearifan
  const cards = document.querySelectorAll('.kearifan-detail-card');
  cards.forEach(card => {
    const cardDest = card.getAttribute('data-dest');
    if (destId === 'all') {
      card.style.display = 'block';
      card.classList.remove('highlight');
      // Berikan efek fade in
      card.style.animation = 'tabFadeIn 0.35s ease';
    } else if (cardDest === destId) {
      card.style.display = 'block';
      card.classList.add('highlight');
      card.style.animation = 'tabFadeIn 0.35s ease';
    } else {
      card.style.display = 'none';
    }
  });

  const targetDest = destinationsData.find(d => d.id === destId);
  if (targetDest) {
    showToast(`Menampilkan kearifan lokal: ${targetDest.title}`);
  }
}

/* ==========================================================================
   15. DATA & LOGIKA GALERI MULTIMEDIA INTERAKTIF PER DESTINASI
   Menampilkan semua foto objek wisata ketika destinasi dipilih
   ========================================================================== */
const galleryData = [
  // 1. Watu Maeta (14 Foto Asli Objek Wisata di Root)
  {
    destId: 'watu-maeta',
    destTitle: 'Permandian Watu Maeta',
    spotTitle: 'Kejernihan Air Sungai & Bebatuan Alami',
    image: 'watu_maeta_01.jpg',
    description: 'Pemandangan aliran air pegunungan yang sangat jernih dan bening menembus dasar bebatuan kali di Watu Maeta.'
  },
  {
    destId: 'watu-maeta',
    destTitle: 'Permandian Watu Maeta',
    spotTitle: 'Jeram Arus Sungai Membelah Batu Hitam (Watu Maeta)',
    image: 'watu_maeta_02.jpg',
    description: 'Ikon utama Watu Maeta: formasi batuan hitam andesit alami yang membelah aliran deras air sungai pegunungan.'
  },
  {
    destId: 'watu-maeta',
    destTitle: 'Permandian Watu Maeta',
    spotTitle: 'Kolam Alami Air Kristal di Sela Tebing Batu',
    image: 'watu_maeta_03.jpg',
    description: 'Aliran sungai berwarna toska alami diapit dinding batuan andesit yang asri dan berudara sejuk.'
  },
  {
    destId: 'watu-maeta',
    destTitle: 'Permandian Watu Maeta',
    spotTitle: 'Panorama Aliran Jeram & Hutan Rimba Mangkutana',
    image: 'watu_maeta_04.jpg',
    description: 'Aliran air sungai berbuih putih yang mengalir segar di bawah naungan kanopi hutan tropis Desa Margolembo.'
  },
  {
    destId: 'watu-maeta',
    destTitle: 'Permandian Watu Maeta',
    spotTitle: 'Kedung Alami Watu Maeta untuk Berenang',
    image: 'watu_maeta_05.jpg',
    description: 'Ceruk kolam sungai yang jernih dan segar, tempat favorit pengunjung dan pemuda desa berenang.'
  },
  {
    destId: 'watu-maeta',
    destTitle: 'Permandian Watu Maeta',
    spotTitle: 'Spot Santai di Atas Tebing Batu Alam',
    image: 'watu_maeta_06.jpg',
    description: 'Wisatawan menikmati kesegaran hawa pegunungan dan panorama sungai dari atas batuan tebing alami.'
  },
  {
    destId: 'watu-maeta',
    destTitle: 'Permandian Watu Maeta',
    spotTitle: 'Keseruan Menikmati Suasana Sungai Watu Maeta',
    image: 'watu_maeta_07.jpg',
    description: 'Pengunjung bersantai di tepian formasi batu sambil mengagumi kemurnian sumber air alami Mangkutana.'
  },
  {
    destId: 'watu-maeta',
    destTitle: 'Permandian Watu Maeta',
    spotTitle: 'Pemandangan Alami Batuan Sungai & Tebing Tropis',
    image: 'watu_maeta_08.jpg',
    description: 'Bentang alam batuan sungai pegunungan Desa Margolembo yang masih sangat alami, tenang, dan terlindungi.'
  },
  {
    destId: 'watu-maeta',
    destTitle: 'Permandian Watu Maeta',
    spotTitle: 'Deretan Gazebo & Warung Kuliner Lokal',
    image: 'watu_maeta_09.jpg',
    description: 'Fasilitas pondok santai keluarga dan warung kuliner tradisional lokal di tepi kawasan wisata Watu Maeta.'
  },
  {
    destId: 'watu-maeta',
    destTitle: 'Permandian Watu Maeta',
    spotTitle: 'Pondok Istirahat Rindang di Bawah Pohon',
    image: 'watu_maeta_10.jpg',
    description: 'Gazebo teduh beralaskan alam untuk berkumpul santai dan menikmati bekal bersama keluarga tercinta.'
  },
  {
    destId: 'watu-maeta',
    destTitle: 'Permandian Watu Maeta',
    spotTitle: 'Pendopo & Fasilitas Utama Wisata',
    image: 'watu_maeta_11.jpg',
    description: 'Fasilitas pendopo terbuka luas dengan taman bunga asri dan pepohonan hijau penyejuk suasana.'
  },
  {
    destId: 'watu-maeta',
    destTitle: 'Permandian Watu Maeta',
    spotTitle: 'Area Rindang Pepohonan Hijau Tepi Sungai',
    image: 'watu_maeta_12.jpg',
    description: 'Pepohonan hutan tropis yang menjulang tinggi memberikan keteduhan alami dan udara segar bebas polusi.'
  },
  {
    destId: 'watu-maeta',
    destTitle: 'Permandian Watu Maeta',
    spotTitle: 'Lansekap Alam Terbuka Watu Maeta',
    image: 'watu_maeta_13.jpg',
    description: 'Halaman rumput terbuka dengan deretan pohon peneduh yang nyaman untuk bersantai dan piknik.'
  },
  {
    destId: 'watu-maeta',
    destTitle: 'Permandian Watu Maeta',
    spotTitle: 'Pohon Pelindung Raksasa & Akses Masuk Wisata',
    image: 'watu_maeta_14.jpg',
    description: 'Pohon peneduh raksasa di area halaman dan parkir kendaraan wisata permandian Watu Maeta.'
  },

  // 2. Wisata Alam Sungai Lengkong (12 Foto Asli Objek Wisata di Root)
  {
    destId: 'sungai-lengkong',
    destTitle: 'Wisata Alam Sungai Lengkong',
    spotTitle: 'Kedung Alami Berair Hijau Toska Jernih',
    image: 'lengkong_01.jpg',
    description: 'Kolam alami Sungai Lengkong berair hijau toska jernih nan tenang dinaungi pepohonan tropis yang menyejukkan.'
  },
  {
    destId: 'sungai-lengkong',
    destTitle: 'Wisata Alam Sungai Lengkong',
    spotTitle: 'Panorama Aliran Sungai & Rekreasi Pengunjung',
    image: 'lengkong_02.jpg',
    description: 'Bentang alam sempadan Sungai Lengkong yang berpasir dan berbatu kerikil halus, sangat disukai keluarga dan anak-anak.'
  },
  {
    destId: 'sungai-lengkong',
    destTitle: 'Wisata Alam Sungai Lengkong',
    spotTitle: 'Keseruan Bermain Air di Sungai Berbatu Alami',
    image: 'lengkong_03.jpg',
    description: 'Anak-anak dan keluarga mandi ceria di air dangkal yang sejuk di bawah kanopi pepohonan sempadan sungai.'
  },
  {
    destId: 'sungai-lengkong',
    destTitle: 'Wisata Alam Sungai Lengkong',
    spotTitle: 'Spot Lubuk Alami Teduh nan Segar',
    image: 'lengkong_04.jpg',
    description: 'Keasrian ceruk aliran sungai berair bening kehijauan di bawah bayang-bayang pohon palem dan vegetasi hutan tropis.'
  },
  {
    destId: 'sungai-lengkong',
    destTitle: 'Wisata Alam Sungai Lengkong',
    spotTitle: 'Aktivitas Berenang & Bermain Ban Pelampung',
    image: 'lengkong_05.jpg',
    description: 'Sensasi santai mengapung di atas ban pelampung di aliran air jernih Sungai Lengkong yang menyegarkan tubuh.'
  },
  {
    destId: 'sungai-lengkong',
    destTitle: 'Wisata Alam Sungai Lengkong',
    spotTitle: 'Momen Ceria Wisatawan Menyusuri Aliran Sungai',
    image: 'lengkong_06.jpg',
    description: 'Wisatawan bersantai menikmati kebersamaan di tengah sejuknya air pegunungan alami Mangkutana.'
  },
  {
    destId: 'sungai-lengkong',
    destTitle: 'Wisata Alam Sungai Lengkong',
    spotTitle: 'Deretan Gazebo Bambu di Sepanjang Tepi Sungai',
    image: 'lengkong_07.jpg',
    description: 'Pondok-pondok peneduh beratap rumbia yang berjejer rapi di tepian sempadan sungai untuk beristirahat.'
  },
  {
    destId: 'sungai-lengkong',
    destTitle: 'Wisata Alam Sungai Lengkong',
    spotTitle: 'Pondok Santai Keluarga untuk Piknik Santap Siang',
    image: 'lengkong_08.jpg',
    description: 'Fasilitas gazebo kayu teduh untuk menyantap bekal piknik bersama keluarga sembari menikmati panorama alam.'
  },
  {
    destId: 'sungai-lengkong',
    destTitle: 'Wisata Alam Sungai Lengkong',
    spotTitle: 'Jalur Gazebo Teduh & Sempadan Pasir Sungai',
    image: 'lengkong_09.jpg',
    description: 'Kawasan tepian sungai yang bersih dan tertata asri di bawah rindangnya pohon kelapa sawit dan hutan.'
  },
  {
    destId: 'sungai-lengkong',
    destTitle: 'Wisata Alam Sungai Lengkong',
    spotTitle: 'Area Santai & Parkir Kendaraan Pengunjung',
    image: 'lengkong_10.jpg',
    description: 'Akses kendaraan roda dua maupun roda empat yang mudah langsung ke tepian gazebo objek wisata.'
  },
  {
    destId: 'sungai-lengkong',
    destTitle: 'Wisata Alam Sungai Lengkong',
    spotTitle: 'Suasana Alam Asri Wisata Lengkong',
    image: 'lengkong_11.jpg',
    description: 'Pemandangan lanskap wisata alam Sungai Lengkong yang alami dengan pepohonan palem yang menjulang tinggi.'
  },
  {
    destId: 'sungai-lengkong',
    destTitle: 'Wisata Alam Sungai Lengkong',
    spotTitle: 'Air Sungai Berkilau Menembus Bebatuan Kali',
    image: 'lengkong_12.jpg',
    description: 'Kejernihan air sungai alami pegunungan yang sangat murni dengan dasar batu kali aneka warna.'
  },

  // 3. Permandian Alam Uelanti (9 Foto Asli Objek Wisata di Root)
  {
    destId: 'pemandian-uelanti',
    destTitle: 'Permandian Alam Uelanti',
    spotTitle: 'Gazebo Teduh di Sisi Aliran Sungai Jernih Uelanti',
    image: 'uelanti_01.jpg',
    description: 'Panorama pondok gazebo kayu di tepian aliran sungai alami yang jernih dinaungi rimbun pepohonan tropis di Desa Kasintuwu.'
  },
  {
    destId: 'pemandian-uelanti',
    destTitle: 'Permandian Alam Uelanti',
    spotTitle: 'Deretan Pondok Santai Beratap Rumbia Tepi Air',
    image: 'uelanti_02.jpg',
    description: 'Fasilitas pondok peneduh panggung bercat biru yang tertata rapi di tepian aliran air sungai dangkal berbatu.'
  },
  {
    destId: 'pemandian-uelanti',
    destTitle: 'Permandian Alam Uelanti',
    spotTitle: 'Rindangnya Rumpun Bambu & Gazebo Santai Keluarga',
    image: 'uelanti_03.jpg',
    description: 'Jalur setapak alami yang sejuk dinaungi rumpun bambu lebat dan deretan pondok peneduh di tepi sempadan air.'
  },
  {
    destId: 'pemandian-uelanti',
    destTitle: 'Permandian Alam Uelanti',
    spotTitle: 'Pondok Peneduh Seng & Suasana Hutan Kasintuwu',
    image: 'uelanti_04.jpg',
    description: 'Suasana asri di pinggir sungai dengan pondok peneduh untuk beristirahat dan meletakkan barang bawaan wisatawan.'
  },
  {
    destId: 'pemandian-uelanti',
    destTitle: 'Permandian Alam Uelanti',
    spotTitle: 'Pondok Persewaan Ban Pelampung Renang Keluarga',
    image: 'uelanti_05.jpg',
    description: 'Fasilitas penyewaan ban pelampung hitam untuk anak-anak dan keluarga mandi santai di kolam aliran Uelanti.'
  },
  {
    destId: 'pemandian-uelanti',
    destTitle: 'Permandian Alam Uelanti',
    spotTitle: 'Akses Jalan Berkerikil Asri Menuju Kawasan Wisata',
    image: 'uelanti_06.jpg',
    description: 'Jalan akses yang tertata rapi diapit pohon palem dan pepohonan hijau rindang menuju area permandian sungai.'
  },
  {
    destId: 'pemandian-uelanti',
    destTitle: 'Permandian Alam Uelanti',
    spotTitle: 'Kios Kuliner & Warung Makanan Ringan Warga Lokal',
    image: 'uelanti_07.jpg',
    description: 'Warung panggung kayu milik warga desa yang menyajikan aneka camilan, gorengan hangat, dan minuman segar.'
  },
  {
    destId: 'pemandian-uelanti',
    destTitle: 'Permandian Alam Uelanti',
    spotTitle: 'Pelataran Terbuka & Area Parkir Pengunjung',
    image: 'uelanti_08.jpg',
    description: 'Halaman terbuka kawasan wisata Uelanti dengan latar perbukitan hijau dan langit biru Mangkutana.'
  },
  {
    destId: 'pemandian-uelanti',
    destTitle: 'Permandian Alam Uelanti',
    spotTitle: 'Lanskap Gazebo di Bawah Pohon Kelapa Sawit yang Sejuk',
    image: 'uelanti_09.jpg',
    description: 'Pemandangan deretan pondok peristirahatan di bawah naungan pohon kelapa sawit yang asri dan berangin sepoi-sepoi.'
  }
];

function renderGallery(filterDestId = 'all') {
  const container = document.getElementById('galleryGridContainer');
  if (!container) return;

  container.innerHTML = '';

  const itemsToDisplay = filterDestId === 'all'
    ? galleryData
    : galleryData.filter(item => item.destId === filterDestId);

  itemsToDisplay.forEach(item => {
    const el = document.createElement('div');
    el.className = 'gallery-item';
    el.setAttribute('data-dest', item.destId);
    el.onclick = () => openLightboxWithDetail(item.image, item.spotTitle, item.description, item.destId, item.destTitle);

    el.innerHTML = `
      <span class="gallery-badge-dest">${item.destTitle}</span>
      <img src="${item.image}" alt="${item.spotTitle}" loading="lazy">
      <div class="gallery-overlay-hover">
        <span class="gallery-caption-title">${item.spotTitle}</span>
        <span class="gallery-caption-sub">${item.destTitle}</span>
      </div>
    `;

    container.appendChild(el);
  });
}

function filterGallery(destId, btnElement) {
  // Update tombol aktif
  const buttons = document.querySelectorAll('.gallery-filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }

  // Render foto objek wisata yang sesuai
  renderGallery(destId);

  const target = destinationsData.find(d => d.id === destId);
  if (target) {
    showToast(`Menampilkan semua objek foto: ${target.title}`);
  } else {
    showToast('Menampilkan semua koleksi objek wisata Mangkutana (30 Foto)');
  }
}

function openLightboxWithDetail(src, title, desc, destId, destTitle) {
  const modal = document.getElementById('galleryLightboxModal');
  const img = document.getElementById('lightboxImg');
  const t = document.getElementById('lightboxTitle');
  const d = document.getElementById('lightboxDesc');
  const btnDetail = document.getElementById('lightboxDestBtn');

  if (modal && img && t && d) {
    img.src = src;
    img.alt = title;
    t.innerHTML = `<span style="font-size:0.8rem; text-transform:uppercase; color:var(--primary-emerald); display:block; font-weight:700;">📍 ${destTitle}</span> ${title}`;
    d.textContent = desc;

    if (btnDetail && destId) {
      btnDetail.style.display = 'inline-flex';
      btnDetail.onclick = () => {
        closeLightbox();
        openDestinationModal(destId);
      };
    } else if (btnDetail) {
      btnDetail.style.display = 'none';
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

// Inisialisasi saat load
document.addEventListener('DOMContentLoaded', () => {
  renderGallery('all');
});

/* ==========================================================================
   16. LOGIKA KUIS INTERAKTIF WISATA MANGKUTANA (10 SOAL + SISTEM SKOR)
   Sesuai Storyboard: Tombol [kuis] di Tengah, 10 Soal & Skor Jika Benar
   ========================================================================== */

const quizQuestions = [
  {
    question: "Apa arti dari nama objek wisata 'Watu Maeta' yang berasal dari bahasa suku Pamona?",
    options: [
      "Air Mengalir Dingin",
      "Batu Hitam",
      "Sungai Kristal",
      "Hutan Keramat"
    ],
    correct: 1, // B
    explanation: "Benar! Dalam bahasa Pamona, 'Watu' berarti batu dan 'Maeta' berarti hitam, merujuk pada formasi batu hitam besar legendaris di tengah aliran sungai."
  },
  {
    question: "Di desa manakah lokasi objek wisata Permandian Watu Maeta berada di Kecamatan Mangkutana?",
    options: [
      "Desa Kasintuwu",
      "Desa Margolembo",
      "Desa Wonorejo",
      "Desa Teromu"
    ],
    correct: 1, // B
    explanation: "Tepat sekali! Permandian Watu Maeta berlokasi di wilayah Desa Margolembo, Kecamatan Mangkutana, Kabupaten Luwu Timur."
  },
  {
    question: "Objek wisata Sungai Lengkong di Mangkutana sangat diminati wisatawan karena keunggulan alaminya berupa...",
    options: [
      "Aliran air jernih dan segar dengan formasi bebatuan kali eksotis untuk rekreasi air",
      "Kolam buatan dengan wahana ombak buatan dan seluncuran raksasa",
      "Wisata menyelam terumbu karang bawah laut",
      "Kawasan rawa gambut dengan satwa buas"
    ],
    correct: 0, // A
    explanation: "Hebat! Sungai Lengkong menawarkan keasrian arus air alami yang sangat jernih dan segar dari pegunungan dengan bebatuan eksotis yang nyaman untuk mandi dan rekreasi keluarga."
  },
  {
    question: "Permandian alam berair jernih, sejuk, dan teduh yang sangat ramah bagi anak-anak dan keluarga di Desa Kasintuwu adalah...",
    options: [
      "Permandian Alam Uelanti",
      "Danau Matano",
      "Pantai Ujung Suso",
      "Danau Mahalona"
    ],
    correct: 0, // A
    explanation: "Tepat! Permandian Alam Uelanti di Desa Kasintuwu memiliki kedalaman air yang aman, teduh di bawah rimbun pepohonan, serta sangat cocok untuk wisata keluarga."
  },
  {
    question: "Apa makna falsafah dari kata 'Kasintuwu' yang berasal dari bahasa suku Pamona di Mangkutana?",
    options: [
      "Bersatu, Saling Mengasihi, dan Hidup Rukun",
      "Bekerja Keras Mencari Harta",
      "Menaklukkan Alam Pegunungan",
      "Sungai yang Mengalir Deras"
    ],
    correct: 0, // A
    explanation: "Benar! 'Kasintuwu' dalam bahasa Pamona bermakna bersatu dan saling mengasihi, menjadi pedoman kerukunan hidup antarwarga dan suku di Mangkutana."
  },
  {
    question: "Kuliner tradisional khas Tana Luwu berbahan dasar sagu dengan siraman kuah ikan berbumbu asam segar yang nikmat disantap setelah berwisata air adalah...",
    options: [
      "Coto Makassar",
      "Kapurung",
      "Soto Banjar",
      "Rawon Daging"
    ],
    correct: 1, // B
    explanation: "Tepat sekali! Kapurung adalah kuliner legendaris Luwu berbahan bulatan sagu kenyal dipadu sayur bayam/pakis, jantung pisang, dan kuah ikan segar bercita rasa asam patikala yang menyegarkan."
  },
  {
    question: "Selain keindahan permandian alaminya, Kecamatan Mangkutana dikenal sebagai sentra perkebunan rakyat penghasil komoditas utama berupa...",
    options: [
      "Lada (Merica) dan Kakao",
      "Kurma dan Gandum",
      "Apel Merah dan Stroberi",
      "Tembakau Cerutu dan Tebu"
    ],
    correct: 0, // A
    explanation: "Hebat! Mangkutana merupakan salah satu sentra penghasil lada (merica) dan kakao (cokelat) unggulan di Kabupaten Luwu Timur berkat tanahnya yang subur."
  },
  {
    question: "Kearifan lokal dan etika penting apa yang wajib dijaga wisatawan saat mengunjungi wisata alam sungai di Mangkutana?",
    options: [
      "Menjaga kebersihan hulu air dengan membawa pulang kembali sampah",
      "Mencuci kendaraan bermotor langsung di tengah badan sungai",
      "Mengambil dan memindahkan bebatuan sungai dalam jumlah besar",
      "Membuang kemasan plastik ke dalam aliran air"
    ],
    correct: 0, // A
    explanation: "Sangat benar! Menjaga kebersihan dan kelestarian hulu sungai dengan tidak membuang sampah sembarangan adalah wujud penghormatan terhadap alam dan masyarakat lokal Mangkutana."
  },
  {
    question: "Kabupaten Luwu Timur tempat bernaungnya Kecamatan Mangkutana dikenal luas dengan julukan bersejarah kebanggaannya, yaitu...",
    options: [
      "Bumi Batara Guru",
      "Bumi Sriwijaya",
      "Kota Seribu Sungai",
      "Kota Hujan"
    ],
    correct: 0, // A
    explanation: "Sempurna! Luwu Timur dijuluki 'Bumi Batara Guru', merujuk pada keagungan peradaban Kedatuan Luwu dan karya sastra epik terpanjang dunia, I La Galigo."
  },
  {
    question: "Masyarakat di Kecamatan Mangkutana dikenal memiliki harmoni sosial multikultur yang rukun, yang terdiri atas perpaduan suku...",
    options: [
      "Pamona, Luwu, Jawa, dan Toraja",
      "Aborigin, Maori, dan Pasifik",
      "Maya, Aztek, dan Inka",
      "Eskimo dan Apache"
    ],
    correct: 0, // A
    explanation: "Benar sekali! Mangkutana adalah miniatur toleransi dan kerukunan multikultur, di mana masyarakat suku Pamona, Luwu, Jawa (transmigran), dan Toraja hidup rukun berdampingan."
  }
];

let currentQuizIndex = 0;
let userScore = 0;
let hasAnsweredCurrent = false;

function startQuiz() {
  const introBox = document.getElementById('quizIntroBox');
  const activeInterface = document.getElementById('quizActiveInterface');
  const resultView = document.getElementById('quizResultView');

  if (introBox) introBox.style.display = 'none';
  if (resultView) resultView.style.display = 'none';
  if (activeInterface) activeInterface.style.display = 'block';

  currentQuizIndex = 0;
  userScore = 0;
  hasAnsweredCurrent = false;

  updateQuizScoreBadge();
  loadQuizQuestion(currentQuizIndex);

  // Scroll ke kuis
  const quizSection = document.getElementById('kuis-section');
  if (quizSection) {
    quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  showToast('Kuis dimulai! Jawab 10 pertanyaan seputar wisata Mangkutana.');
}

function loadQuizQuestion(index) {
  if (index >= quizQuestions.length) {
    showQuizResult();
    return;
  }

  hasAnsweredCurrent = false;
  const qData = quizQuestions[index];

  // Update Progress
  const progressText = document.getElementById('quizProgressText');
  const progressFill = document.getElementById('quizProgressFill');
  const questionNum = document.getElementById('quizQuestionNum');
  const questionTitle = document.getElementById('quizQuestionTitle');
  const optionsList = document.getElementById('quizOptionsList');
  const feedbackBox = document.getElementById('quizFeedbackBox');
  const btnNext = document.getElementById('btnNextQuestion');

  if (progressText) progressText.textContent = `Pertanyaan ${index + 1} dari ${quizQuestions.length}`;
  if (progressFill) progressFill.style.width = `${((index + 1) / quizQuestions.length) * 100}%`;
  if (questionNum) questionNum.textContent = `SOAL NO. ${index + 1} DARI 10`;
  if (questionTitle) questionTitle.textContent = qData.question;

  if (feedbackBox) {
    feedbackBox.className = 'quiz-feedback-box';
    feedbackBox.style.display = 'none';
    feedbackBox.innerHTML = '';
  }

  if (btnNext) {
    btnNext.style.display = 'none';
  }

  // Render Pilihan
  if (optionsList) {
    optionsList.innerHTML = '';
    const keys = ['A', 'B', 'C', 'D'];

    qData.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt-btn';
      btn.setAttribute('type', 'button');
      btn.innerHTML = `
        <span class="quiz-opt-key">${keys[optIdx]}</span>
        <span>${optText}</span>
      `;
      btn.onclick = () => selectQuizOption(optIdx);
      optionsList.appendChild(btn);
    });
  }
}

function selectQuizOption(selectedIdx) {
  if (hasAnsweredCurrent) return;
  hasAnsweredCurrent = true;

  const qData = quizQuestions[currentQuizIndex];
  const isCorrect = selectedIdx === qData.correct;
  const optionsButtons = document.querySelectorAll('.quiz-opt-btn');
  const feedbackBox = document.getElementById('quizFeedbackBox');
  const btnNext = document.getElementById('btnNextQuestion');

  // Nonaktifkan semua pilihan & tandai benar/salah
  optionsButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === qData.correct) {
      btn.classList.add('correct');
    }
    if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  // Hitung Skor
  if (isCorrect) {
    userScore += 10;
    updateQuizScoreBadge();
    showToast('🎉 Jawaban Benar! (+10 Poin)');
  } else {
    showToast('❌ Jawaban Belum Tepat');
  }

  // Tampilkan Pembahasan
  if (feedbackBox) {
    feedbackBox.style.display = 'block';
    feedbackBox.className = `quiz-feedback-box show ${isCorrect ? 'correct' : 'wrong'}`;
    feedbackBox.innerHTML = `
      <strong>${isCorrect ? '✅ Tepat Sekali!' : 'ℹ️ Pembahasan:'}</strong> ${qData.explanation}
    `;
  }

  // Tampilkan Tombol Lanjut
  if (btnNext) {
    btnNext.style.display = 'inline-flex';
    btnNext.textContent = currentQuizIndex === quizQuestions.length - 1 ? 'Lihat Hasil Kuis 🏆' : 'Pertanyaan Berikutnya ➔';
  }
}

function nextQuizQuestion() {
  currentQuizIndex++;
  loadQuizQuestion(currentQuizIndex);
}

function updateQuizScoreBadge() {
  const badge = document.getElementById('quizScoreBadge');
  if (badge) {
    badge.innerHTML = `⭐ Skor: ${userScore} / 100`;
  }
}

function showQuizResult() {
  const activeInterface = document.getElementById('quizActiveInterface');
  const resultView = document.getElementById('quizResultView');

  if (activeInterface) activeInterface.style.display = 'none';
  if (resultView) resultView.style.display = 'block';

  const scoreNum = document.getElementById('resultScoreNumber');
  const predTitle = document.getElementById('resultPredicateTitle');
  const predDesc = document.getElementById('resultPredicateDesc');

  if (scoreNum) scoreNum.textContent = userScore;

  let title = '';
  let desc = '';

  if (userScore >= 90) {
    title = '🏆 Duta Wisata Sejati Mangkutana!';
    desc = 'Luar biasa! Pengetahuan Anda tentang seluruh objek wisata, budaya Pamona, dan kearifan lokal Kecamatan Mangkutana sangat mendalam dan sempurna.';
  } else if (userScore >= 70) {
    title = '🌟 Petualang Unggul Mangkutana!';
    desc = 'Hebat! Anda sangat menguasai daya tarik dan pesona pariwisata di Kecamatan Mangkutana. Tinggal sedikit lagi untuk mencapai skor sempurna.';
  } else if (userScore >= 50) {
    title = '🌿 Sahabat Wisata Mangkutana';
    desc = 'Bagus! Anda sudah cukup mengenal destinasi populer seperti Watu Maeta, Sungai Lengkong, dan Uelanti. Yuk eksplorasi lebih banyak lagi keindahan alamnya!';
  } else {
    title = '🎒 Penjelajah Pemula';
    desc = 'Jangan berkecil hati! Anda bisa membaca kembali halaman Informasi & Kearifan Lokal kami untuk memperluas pengetahuan tentang Mangkutana.';
  }

  if (predTitle) predTitle.textContent = title;
  if (predDesc) predDesc.textContent = desc;

  showToast(`Kuis Selesai! Skor Akhir Anda: ${userScore} Poin.`);
}

function restartQuiz() {
  const introBox = document.getElementById('quizIntroBox');
  const activeInterface = document.getElementById('quizActiveInterface');
  const resultView = document.getElementById('quizResultView');

  if (resultView) resultView.style.display = 'none';
  if (activeInterface) activeInterface.style.display = 'none';
  if (introBox) introBox.style.display = 'block';

  currentQuizIndex = 0;
  userScore = 0;
  hasAnsweredCurrent = false;
  updateQuizScoreBadge();
}
