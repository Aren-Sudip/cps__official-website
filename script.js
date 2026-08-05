// ---------- Sidebar toggle (tablet & mobile only — desktop keeps it always open) ----------
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const sidebarToggles = document.querySelectorAll('.js-sidebar-toggle');
const sidebarClosers = document.querySelectorAll('.js-sidebar-close');

function openSidebar() {
  sidebar.classList.add('sidebar--open');
  sidebarOverlay.classList.add('sidebar-overlay--visible');
}

function closeSidebar() {
  sidebar.classList.remove('sidebar--open');
  sidebarOverlay.classList.remove('sidebar-overlay--visible');
}

sidebarToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    if (sidebar.classList.contains('sidebar--open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });
});

sidebarClosers.forEach((closer) => {
  closer.addEventListener('click', closeSidebar);
});

// close sidebar automatically if the viewport grows back into desktop size
window.addEventListener('resize', () => {
  if (window.innerWidth > 1068) {
    closeSidebar();
  }
});

// ---------- Brands section: show all / hide ----------
const brandsGrid = document.querySelector('.brands__grid');
const brandsToggle = document.querySelector('.js-brands-toggle');
const brandsToggleIcon = document.querySelector('.brands__toggle-icon');
const brandsToggleLabel = document.querySelector('.brands__toggle-label');

brandsToggle.addEventListener('click', () => {
  brandsGrid.classList.toggle('brands__grid--expanded');
  brandsToggleIcon.classList.toggle('brands__toggle-icon--expanded');

  if (brandsGrid.classList.contains('brands__grid--expanded')) {
    brandsToggleLabel.innerHTML = 'Hide';
  } else {
    brandsToggleLabel.innerHTML = 'Show all';
  }
});

// ---------- Brands carousel (mobile only, hidden elsewhere via CSS) ----------
   const brandsSwiper = new Swiper('.brands__carousel', {
      loop: true,
  slidesPerView: 1.15,
  spaceBetween:16,
  centeredSlides: false,
  pagination: {
    el: '.brands__pagination',
    clickable: true,
  },
});

const swiperRepair = new Swiper ('.swiper.repair',{
  loop: true,
  slidesPerView: 1.2,
  spaceBetween:16,
  centeredSlides: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
